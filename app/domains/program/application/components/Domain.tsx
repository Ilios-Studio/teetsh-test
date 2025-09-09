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

  const colorClass = `bg-${color}`;
  const domainItems = (periode: TPeriode) =>
    domain.items.filter((i) => i.periodeId === periode.id) ?? [];

  return (
    <>
      <div
        className={cn("h-10 flex items-center justify-start px-4 ", colorClass)}
        style={{ gridColumn: `1 / -1` }}
      >
        <span className="sticky left-4">{name}</span>
      </div>
      {periodes.map((p) => (
        <Periode
          key={p.id}
          periode={p}
          items={domainItems(p)}
          isLast={isLast}
        />
      ))}
    </>
  );
}
