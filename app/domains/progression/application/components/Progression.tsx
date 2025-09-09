import { progressionQueries } from "../queries";

interface ProgressionProps {
  documentId: string;
}

export function Progression({ documentId }: ProgressionProps) {
  const { data, isLoading, error } =
    progressionQueries.useProgression(documentId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
