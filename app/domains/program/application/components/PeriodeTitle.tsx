import "dayjs/locale/fr";

import { ArrowRightIcon } from "lucide-react";
import type { Periode } from "../../domain";
import { cn } from "~/lib/utils";
import dayjs from "dayjs";

dayjs.locale("fr");

type PeriodeProps = {
  periode: Periode;
};

export function PeriodeTitle({ periode }: PeriodeProps) {
  const { name, color, endDate, startDate } = periode;

  const colorClass = `bg-${color}`;
  const Color50 = color.replace(/-\d+/, "-50");
  const color50Class = `bg-${Color50}`;
  const startDateFormatted = dayjs(startDate).format("DD MMM");
  const endDateFormatted = dayjs(endDate).format("DD MMM");

  return (
    <section
      className={cn("sticky top-0 z-20 w-3xs p-2 rounded-t-lg", color50Class)}
    >
      <header
        className={cn(
          "flex items-center justify-between px-3 py-2 rounded-sm",
          colorClass
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
