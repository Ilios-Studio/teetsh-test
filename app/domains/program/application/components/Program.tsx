import type { Matiere, Program } from "../../domain";
import { Periode } from "./Periode";

interface ProgramProps {
  data: Program;
  selectedMatiere: Matiere;
}

export function Program({ data, selectedMatiere }: ProgramProps) {
  const gridCols = `repeat(${data.periodes.length}, 1fr`;

  const items = data.matieres
    .find((m) => m.id === selectedMatiere.id)
    ?.domaines.flatMap((domaine) => domaine.items);

  return (
    <>
      <div
        className="grid gap-2 overflow-x-auto"
        style={{ gridTemplateColumns: gridCols }}
      >
        {data.periodes.map((p) => (
          <Periode
            key={p.id}
            periode={p}
            items={(items ?? []).filter((item) => item.periodeId === p.id)}
          />
        ))}
      </div>
    </>
  );
}
