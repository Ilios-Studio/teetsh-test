import type { Program } from "../../domain";
import { ProgramCard } from "./ProgramCard";

type ProgramsGridProps = {
  programs: Program[];
};

export function ProgramsGrid({ programs }: ProgramsGridProps) {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
      {programs.map((program) => (
        <ProgramCard key={program.documentId} program={program} />
      ))}
    </section>
  );
}
