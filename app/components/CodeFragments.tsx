// Extraits réels du dépôt TwitmundDev/McAntiVPN
const JAVA = `@EventHandler
public static void onPlayerConnect(AsyncPlayerPreLoginEvent e) {
    String playerIp = e.getAddress().toString();

    if (isPlayerAlreadyRegistered(playerIp)){
        if (Main.getIpList().get(playerIp).equals(false)){
            notifyWhenVPNConnected(playerIp , e.getName());
            e.disallow(AsyncPlayerPreLoginEvent.Result.KICK_OTHER ,Main.getGetKickMessage());
        }
    }else {
        try {
            if(ApiRequester.requestApi(playerIp).equals("0")){
                Main.addIpOnList(String.valueOf(playerIp), true);
            } else if (ApiRequester.requestApi(playerIp).equals("1")) {
                Main.addIpOnList(String.valueOf(playerIp), false);
                notifyWhenVPNConnected(playerIp , e.getName());
                e.disallow(AsyncPlayerPreLoginEvent.Result.KICK_OTHER ,Main.getGetKickMessage());
            }
        }catch (Exception exception){
            logger.log(Level.SEVERE , "error : " + exception);
        }
    }
}`;

const YAML = `API_KEY: ""
KickMessage: "VPN's aren't allowed here"
CommandPermission: "mcAntiVPN.command"
PermissionNotify: "mcAntiVPN.notify"
DontHavePermissionMessage: "&4Sorry but you don't have permission to do that"

# %ip = ip of the player who tried to connect
# %username = username of the player who tried to connect
PlayerWithVPNTriedToConnect: "The player %username with the ip %ip tried to connect but has been blocked by the Anti-VPN"`;

function highlightJava(line: string) {
  if (line.trim().startsWith("@")) return <span className="tk-ann">{line}</span>;
  const parts: React.ReactNode[] = [];
  let last = 0;
  for (const m of line.matchAll(/("[^"]*")|\b(public|static|void|if|else|new|return|String|true|false|try|catch)\b/g)) {
    parts.push(line.slice(last, m.index));
    parts.push(
      <span key={m.index} className={m[1] ? "tk-str" : "tk-kw"}>
        {m[0]}
      </span>
    );
    last = (m.index ?? 0) + m[0].length;
  }
  parts.push(line.slice(last));
  return parts;
}

function highlightYaml(line: string) {
  if (line.startsWith("#")) return <span className="tk-com">{line}</span>;
  const i = line.indexOf(":");
  if (i < 0) return line;
  return (
    <>
      <span className="tk-key">{line.slice(0, i)}</span>:<span className="tk-str">{line.slice(i + 1)}</span>
    </>
  );
}

function Code({ file, source, lang, start = 1 }: { file: string; source: string; lang: "java" | "yaml"; start?: number }) {
  return (
    <div className="code" data-ui>
      <div className="code-tab"><code>{file}</code></div>
      <pre>
        <code>
          {source.split("\n").map((line, i) => (
            <span className="code-line" key={i}>
              <span className="ln" aria-hidden="true">{start + i}</span>
              {lang === "java" ? highlightJava(line) : highlightYaml(line)}
              {"\n"}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}

export function JavaFragment() {
  return <Code file="events/PlayerConnectEvent.java" source={JAVA} lang="java" start={20} />;
}

export function ConfigFragment() {
  return <Code file="resources/config.yml" source={YAML} lang="yaml" />;
}
