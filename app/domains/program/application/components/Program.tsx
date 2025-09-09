import { useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import type { Matiere, Program } from "../../domain";
import { Domain } from "./Domain";
import { PeriodeTitle } from "./PeriodeTitle";

interface ProgramProps {
  data: Program;
}

export function Program({ data }: ProgramProps) {
  const { periodes, matieres } = data;
  const [selectedMatiere, setSelectedMatiere] = useState<Matiere | null>(
    matieres[0]
  );

  const domaines =
    matieres.find((m) => m.id === selectedMatiere?.id)?.domaines ?? [];

  return (
    <section>
      <div className="flex flex-wrap gap-2 mb-4 px-2">
        {matieres.map((m) => (
          <Button
            variant="outline"
            key={m.id}
            className={cn(
              "rounded-full opacity-50 text-xs",
              selectedMatiere?.id === m.id && "opacity-100"
            )}
            onClick={() => setSelectedMatiere(m)}
          >
            {m.name}
          </Button>
        ))}
      </div>
      <div className="max-h-[72vh] overflow-auto pb-4 ">
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
  );
}
