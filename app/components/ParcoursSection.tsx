import { education, experience, type CareerRow } from "../data";

function Rows({ rows }: { rows: CareerRow[] }) {
  return (
    <>
      {rows.map((r, i) => (
        <tr key={r.what} className="row" data-reveal style={{ ["--d" as string]: i }}>
          <th scope="row" className="col-what">{r.what}</th>
          <td className="col-where">{r.where}</td>
          <td className="col-detail detail">{r.detail}</td>
          <td className="col-when">{r.when}</td>
        </tr>
      ))}
    </>
  );
}

export default function ParcoursSection() {
  return (
    <section id="parcours" className="career" aria-labelledby="parcours-title">
      <h2 id="parcours-title" className="section-head" data-reveal>
        Parcours
      </h2>
      <table>
        <thead className="sr-only">
          <tr>
            <th scope="col">Poste ou diplôme</th>
            <th scope="col">Où</th>
            <th scope="col">Détail</th>
            <th scope="col">Quand</th>
          </tr>
        </thead>
        <tbody>
          <tr className="part">
            <th colSpan={4} scope="rowgroup">Expérience</th>
          </tr>
          <Rows rows={experience} />
        </tbody>
        <tbody>
          <tr className="part">
            <th colSpan={4} scope="rowgroup">Formation et certifications</th>
          </tr>
          <Rows rows={education} />
        </tbody>
      </table>
    </section>
  );
}
