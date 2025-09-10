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
    <div
      className={cn(
        "shrink-0 sticky top-0 z-20 w-[80vw] md:w-2xs p-2 rounded-t-lg",
        color50Class
      )}
      role="columnheader"
      aria-label={`Période ${name}`}
    >
      <div
        className={cn(
          "flex items-center justify-between px-3 py-2 rounded-sm",
          colorClass
        )}
      >
        <h2 className="text-sm font-semibold">{name}</h2>
        <time
          className="text-xs flex items-center gap-1"
          dateTime={`${startDate}/${endDate}`}
          aria-label={`Du ${startDateFormatted} au ${endDateFormatted}`}
        >
          {startDateFormatted} <ArrowRightIcon className="size-3" />
          {endDateFormatted}
        </time>
      </div>
    </div>
  );
}
