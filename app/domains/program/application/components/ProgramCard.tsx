import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

import { Link } from "react-router";
import type { Program } from "../../domain";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Link key={program.documentId} to={`/programs/${program.documentId}`}>
      <Card className="hover:border-secondary hover:shadow-md transition-all duration-100 h-full flex flex-col">
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
