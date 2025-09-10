import dayjs from "dayjs";
import "dayjs/locale/fr";
import { cn } from "~/lib/utils";
import type { Item as IItem, Periode } from "../../domain";
import { Item } from "./Item";

dayjs.locale("fr");

type PeriodeProps = {
  periode: Periode;
  items?: IItem[];
  isLast?: boolean;
};

export function Periode({ periode, items, isLast }: PeriodeProps) {
  const { color } = periode;

  const Color50 = color.replace(/-\d+/, "-50");
  const color50Class = `bg-${Color50}`;
  const color400Class = color.replace(/-\d+/, "-400");
  const hoverBorderColorClass = `hover:border-${color400Class}`;

  return (
    <section
      className={cn(
        "shrink-0 w-[80vw] md:w-2xs p-2",
        color50Class,
        isLast && "rounded-b-lg"
      )}
      role="cell"
      aria-label={`Période ${periode.name}, ${items?.length || 0} éléments`}
    >
      <main className="flex flex-col gap-2 py-2">
        {items?.map((item) => (
          <Item
            key={item.id}
            item={item}
            hoverBorderColor={hoverBorderColorClass}
          />
        ))}
      </main>
    </section>
  );
}
