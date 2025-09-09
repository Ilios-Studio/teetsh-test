import dayjs from "dayjs";
import "dayjs/locale/fr";
import { ArrowRightIcon } from "lucide-react";
import { Card, CardDescription, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { Item, Periode } from "../../domain";

dayjs.locale("fr");

type PeriodeProps = {
  periode: Periode;
  items: Item[];
};

export function Periode({ periode, items }: PeriodeProps) {
  const { name, color, endDate, startDate } = periode;

  const colorClass = `bg-${color}`;
  const Color50 = color.replace(/-\d+/, "-50");
  const color50Class = `bg-${Color50}`;
  const color400Class = color.replace(/-\d+/, "-400");
  const hoverBorderColorClass = `hover:border-${color400Class}`;
  const startDateFormatted = dayjs(startDate).format("DD MMM");
  const endDateFormatted = dayjs(endDate).format("DD MMM");

  return (
    <section className={cn("w-3xs  rounded-lg p-2", color50Class)}>
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
      <main className="flex flex-col gap-2 py-2">
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            hoverBorderColor={hoverBorderColorClass}
          />
        ))}
      </main>
    </section>
  );
}

type ItemCardProps = {
  item: Item;
  hoverBorderColor: string;
};

export function ItemCard({ item, hoverBorderColor }: ItemCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-100 h-full flex flex-col rounded-sm shadow-none",
        hoverBorderColor
      )}
    >
      <CardHeader>
        <CardDescription>
          <div dangerouslySetInnerHTML={{ __html: item.value }} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
