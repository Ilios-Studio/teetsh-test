import type { Program } from "../../domain";
import { Periode } from "./Periode";

interface ProgramProps {
  data: Program;
}

export function Program({ data }: ProgramProps) {
  const gridCols = `repeat(${data.periodes.length}, 1fr`;

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
            matieres={data.matieres.filter(
              (m) => m.programmationId === data.programmationId
            )}
          />
        ))}
      </div>
    </>
  );
}
