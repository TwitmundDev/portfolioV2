'use client';

import { useEffect, useRef, useState } from "react";

// Reproduit la logique de PlayerConnectEvent.java (McAntiVPN) :
// une IP déjà vue est lue dans le cache, sinon on interroge IPHub et on garde la réponse.
// Les adresses viennent des plages réservées à la documentation (RFC 5737).
type Line = { level: "INFO" | "WARN" | "API"; text: string };

const KICK_MESSAGE = "VPN's aren't allowed here";
const DAILY_LIMIT = 1000;

function ipFor(name: string, vpn: boolean) {
  let h = 0;
  for (const c of name.toLowerCase()) h = (h * 31 + c.charCodeAt(0)) % 250;
  return vpn ? `203.0.113.${h + 2}` : `198.51.100.${h + 2}`;
}

function clock() {
  return new Date().toLocaleTimeString("fr-FR", { hour12: false });
}

export default function ServerConsole() {
  const [name, setName] = useState("Steve");
  const [vpn, setVpn] = useState(true);
  const [cache, setCache] = useState<Map<string, boolean>>(new Map());
  const [requests, setRequests] = useState(0);
  const [lines, setLines] = useState<(Line & { time: string })[]>([
    { time: "", level: "INFO", text: "[mcAntiVPN] Enabling mcAntiVPN v1.0" },
    { time: "", level: "INFO", text: "Done! For help, type \"help\"" },
  ]);
  const logRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight });
  }, [lines]);

  const push = (add: Line[]) =>
    setLines((prev) => [...prev, ...add.map((l) => ({ ...l, time: clock() }))].slice(-40));

  const connect = (e: React.FormEvent) => {
    e.preventDefault();
    const player = name.trim().slice(0, 16) || "Steve";
    const ip = "/" + ipFor(player, vpn);
    const out: Line[] = [];
    let allowed: boolean;

    if (cache.has(ip)) {
      allowed = cache.get(ip)!;
      out.push({ level: "API", text: `${ip} déjà en cache, aucune requête envoyée` });
    } else {
      allowed = !vpn;
      out.push({ level: "API", text: `GET v2.api.iphub.info/ip${ip} → block: ${allowed ? 0 : 1}` });
      setRequests((r) => r + 1);
      setCache((prev) => new Map(prev).set(ip, allowed));
    }

    if (allowed) {
      out.push({ level: "INFO", text: `${player} joined the game` });
    } else {
      out.push({ level: "WARN", text: `${player} kicked: ${KICK_MESSAGE}` });
      out.push({ level: "INFO", text: `The player ${player} with the ip ${ip} tried to connect but has been blocked by the Anti-VPN` });
    }
    push(out);
  };

  const showIpList = () => {
    if (cache.size === 0) {
      push([{ level: "INFO", text: "/showiplist : aucune IP enregistrée" }]);
      return;
    }
    push([...cache].map(([ip, ok]) => ({ level: ok ? "INFO" : "WARN", text: `ip : ${ip} authorised : ${ok}` })));
  };

  return (
    <div className="console" data-ui>
      <div className="console-bar">
        <span>Serveur Paper 1.21 · McAntiVPN</span>
        <span>
          IPHub {requests} / {DAILY_LIMIT} · cache {cache.size}
        </span>
      </div>
      <ol className="console-log" ref={logRef} aria-live="polite" aria-label="Journal du serveur">
        {lines.map((l, i) => (
          <li key={i} className={`lvl-${l.level.toLowerCase()}`}>
            <samp>{l.time && <span className="t">[{l.time} {l.level}]</span>} {l.text}</samp>
          </li>
        ))}
      </ol>
      <form className="console-controls" onSubmit={connect}>
        <label>
          <span>Joueur</span>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={16} spellCheck={false} />
        </label>
        <label className="check">
          <input type="checkbox" checked={vpn} onChange={(e) => setVpn(e.target.checked)} />
          <span>Via un VPN</span>
        </label>
        <button type="submit">Connecter</button>
        <button type="button" className="ghost" onClick={showIpList}>
          /showiplist
        </button>
      </form>
    </div>
  );
}
