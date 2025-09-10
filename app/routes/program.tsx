import { Program } from "~/domains/program/application/components/Program";
import type { Route } from "./+types/program";
import { programQueries } from "~/domains/program/application/queries";
import { useParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teetsh - Progression" },
    { name: "description", content: "Teetsh - Progression" },
  ];
}
export default function ProgressionRoute() {
  const { documentId } = useParams();
  const { data, isLoading, error } = programQueries.useProgram(
    documentId as string
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return <Program data={data} />;
}
