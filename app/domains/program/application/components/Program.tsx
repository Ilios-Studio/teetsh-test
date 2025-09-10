import { useState } from "react";
import type { Matiere, Program } from "../../domain";
import { Domain } from "./Domain";
import { PeriodeTitle } from "./PeriodeTitle";
import { SelectMatiere } from "./SelectMatiere";

interface ProgramProps {
  data: Program;
}

export function Program({ data }: ProgramProps) {
  const { periodes, matieres } = data;
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere>(matieres[0]);

  const domaines =
    matieres.find((m) => m.id === selectedMatiere?.id)?.domaines ?? [];

  return (
    <>
      <header className="w-full h-[10vh] flex items-start justify-between py-4 gap-4 rounded-2xl mb-[2vh]">
        <h1 className="text-2xl font-bold text-foreground max-w-none lg:max-w-[40vw] line-clamp-2 break-words overflow-hidden text-ellipsis">
          {data.name}
        </h1>
        <SelectMatiere
          matieres={matieres}
          selectedMatiere={selectedMatiere}
          setSelectedMatiere={setSelectedMatiere}
        />
      </header>
      <section>
        <div className="max-h-[78vh] max-w-fit overflow-auto pb-4 ">
          <div className="flex gap-x-2 sticky top-0 z-10 bg-white">
            {periodes.map((p) => (
              <PeriodeTitle key={p.id} periode={p} />
            ))}
          </div>
          <div className="w-full min-w-fit">
            {domaines.map((d) => (
              <Domain
                key={d.id}
                domain={d}
                periodes={periodes}
                isLast={d === domaines[domaines.length - 1]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
