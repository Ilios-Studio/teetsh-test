import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Link } from "react-router";
import type { Program } from "../../domain";
import { useCallback } from "react";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const link = e.currentTarget.parentElement as HTMLAnchorElement;
      if (link) link.click();
    }
  }, []);

  return (
    <Link
      key={program.documentId}
      to={`/programs/${program.documentId}`}
      aria-label={`Ouvrir le programme ${program.name}`}
      role="gridcell"
      className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
    >
      <Card 
        className="hover:border-primary hover:bg-primary/10 hover:shadow-md transition-all duration-100 h-full flex flex-col"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <CardHeader className="flex-1 flex flex-col">
          <CardTitle className="text-lg font-bold text-foreground mb-4 min-h-[3rem] flex items-start line-clamp-2">
            {program.name}
          </CardTitle>
          <CardDescription className="flex-1">
            {program.shortDescription}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
