import type { Domaine, Periode as TPeriode } from "../../domain";

import { Periode } from "./Periode";
import { cn } from "~/lib/utils";

type Props = {
  domain: Domaine;
  periodes: TPeriode[];
  isLast?: boolean;
};

export function Domain({ domain, periodes, isLast }: Props) {
  const { name, color } = domain;

  const colorClass = color ? `bg-${color}` : "bg-blue-200";
  const domainItems = (periode: TPeriode) =>
    domain.items.filter((i) => i.periodeId === periode.id) ?? [];

  return (
    <>
      <div
        className={cn(
          "h-8 flex items-center justify-start px-4 w-full  sticky top-13 z-10",
          colorClass
        )}
      >
        <span className="sticky left-4">{name}</span>
      </div>
      <div className="flex gap-2">
        {periodes.map((p) => (
          <Periode
            key={p.id}
            periode={p}
            items={domainItems(p)}
            isLast={isLast}
          />
        ))}
      </div>
    </>
  );
}
