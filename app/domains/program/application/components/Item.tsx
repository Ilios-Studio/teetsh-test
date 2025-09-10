import { Card, CardDescription, CardHeader } from "~/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "~/components/ui/dialog";

import DOMPurify from "dompurify";
import type { Item as IItem } from "../../domain";
import { cn } from "~/lib/utils";

type ItemProps = {
  item: IItem;
  hoverBorderColor: string;
};

export function Item({ item, hoverBorderColor }: ItemProps) {
  return (
    <Dialog>
      <DialogTrigger aria-label="Ouvrir l'item">
        <ItemCard item={item} hoverBorderColor={hoverBorderColor} />
      </DialogTrigger>
      <DialogContent className="shadow-none">
        <ItemContent value={item.value} />
      </DialogContent>
    </Dialog>
  );
}

type ItemCardProps = {
  item: IItem;
  hoverBorderColor: string;
};

export function ItemCard({ item, hoverBorderColor }: ItemCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-100 h-full flex flex-col rounded-sm shadow-none focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        hoverBorderColor
      )}
      tabIndex={0}
    >
      <CardHeader>
        <CardDescription>
          <ItemContent value={item.value} />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function ItemContent({ value }: { value: string }) {
  /*
   * Basic sanitize to avoid xss attacks
   * shoumld be better to chack links and other tags
   * we may want to use a lib like DOMPurify but enough for a technical test
   */
  const sanitizedValue = DOMPurify.sanitize(value);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedValue }} />;
}
