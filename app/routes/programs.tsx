import { ProgramsGrid } from "~/domains/program/application/components/ProgramsGrid";
import type { Route } from "./+types/programs";
import { programQueries } from "~/domains/program/application/queries";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teetsh - Progression" },
    { name: "description", content: "Teetsh - Progression" },
  ];
}
export default function ProgressionRoute() {
  const { data, isLoading, error } = programQueries.usePrograms();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <h1 className="text-4xl font-bold text-foreground mb-4">Programmes</h1>
      <ProgramsGrid programs={data} />
    </>
  );
}
