// Carte perforée façon Jacquard : une colonne par lettre, une rangée par bit du code ASCII.
const ROWS = 8;
const COL = 34;
const ROW = 30;
const PAD_X = 40;
const PAD_TOP = 36;
const LABEL = 40;

export default function PunchCard({ text, minColumns = 10, label }: { text: string; minColumns?: number; label?: string }) {
  const letters = Array.from(text.toUpperCase().slice(0, 16));
  const columns = Math.max(minColumns, letters.length);
  const width = PAD_X * 2 + columns * COL;
  const height = PAD_TOP + ROWS * ROW + LABEL;
  const start = Math.floor((columns - letters.length) / 2);

  return (
    <svg
      className="card-svg"
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label ?? `Carte perforée qui encode « ${text} » en binaire`}
    >
      <path
        className="card"
        d={`M18 0 H${width} V${height} H0 V18 Z`}
      />
      {Array.from({ length: columns }, (_, c) => {
        const ch = letters[c - start];
        const code = ch ? ch.charCodeAt(0) & 0xff : 0;
        const x = PAD_X + c * COL + COL / 2;
        return (
          <g key={c}>
            {Array.from({ length: ROWS }, (_, r) => {
              const on = ch !== undefined && ((code >> (ROWS - 1 - r)) & 1) === 1;
              return (
                <rect
                  key={r}
                  className={on ? "hole" : "hole off"}
                  x={x - 6}
                  y={PAD_TOP + r * ROW}
                  width={12}
                  height={18}
                  rx={2}
                />
              );
            })}
            {ch && (
              <text className="letter" x={x} y={height - 14} textAnchor="middle" fontSize="18">
                {ch}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
