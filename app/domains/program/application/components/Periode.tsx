import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "~/lib/utils";
import type { Matiere, Periode } from "../../domain";

dayjs.locale("fr");

type PeriodeProps = {
  periode: Periode;
  matieres: Matiere[];
};

export function Periode({ periode, matieres }: PeriodeProps) {
  const { name, color, endDate, startDate } = periode;

  const headerColorClass = `bg-${color}`;
  const periodeBgColorClass = `bg-${color.replace(/-\d+/, "-50")}`;
  const startDateFormatted = dayjs(startDate).format("DD MMM");
  const endDateFormatted = dayjs(endDate).format("DD MMM");

  return (
    <section className={cn("w-3xs  rounded-lg p-2", periodeBgColorClass)}>
      <header
        className={cn(
          "flex items-center justify-between px-3 py-2 rounded-sm",
          headerColorClass
        )}
      >
        <h2 className="text-sm font-semibold">{name}</h2>
        <time className="text-xs flex items-center gap-1">
          {startDateFormatted} <ArrowRightIcon className="size-3" />
          {endDateFormatted}
        </time>
      </header>
    </section>
  );
}
