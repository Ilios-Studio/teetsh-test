import dayjs from "dayjs";
import "dayjs/locale/fr";
import { Card, CardDescription, CardHeader } from "~/components/ui/card";
import { cn } from "~/lib/utils";
import type { Item, Periode } from "../../domain";

dayjs.locale("fr");

type PeriodeProps = {
  periode: Periode;
  items?: Item[];
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
        "shrink-0 w-3xs p-2",
        color50Class,
        isLast && "rounded-b-lg"
      )}
    >
      <main className="flex flex-col gap-2 py-2">
        {items?.map((item) => (
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
