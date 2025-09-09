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

  const matieresToDisplay = matieres.map((m) => m.name);
  const domaines =
    matieres.find((m) => m.id === selectedMatiere?.id)?.domaines ?? [];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${periodes.length}, 1fr)`,
    gridTemplateRows: `auto repeat(${domaines.length}, minmax(auto, auto))`,
  };

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
      <div className="gap-x-2 overflow-y-auto pb-4 " style={gridStyle}>
        {periodes.map((p) => (
          <PeriodeTitle key={p.id} periode={p} />
        ))}
        {domaines.map((d) => (
          <Domain
            key={d.id}
            domain={d}
            periodes={periodes}
            isLast={d === domaines[domaines.length - 1]}
          />
        ))}
      </div>
    </section>
  );
}
