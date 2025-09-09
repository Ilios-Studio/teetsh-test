import { programQueries } from "../queries";

interface ProgramProps {
  documentId: string;
}

export function Program({ documentId }: ProgramProps) {
  const { data, isLoading, error } = programQueries.useProgram(documentId);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
