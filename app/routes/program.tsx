import { Program } from "~/domains/program/application/components/Program";
import { programQueries } from "~/domains/program/application/queries";
import { useParams } from "react-router";

export default function ProgressionRoute() {
  const { documentId } = useParams();
  const { data, isLoading, error } = programQueries.useProgram(
    documentId as string
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <>
      <header className="w-fit flex items-center p-4 rounded-2xl mb-2">
        <h1 className="text-2xl font-bold text-foreground max-w-none lg:max-w-[50vw] line-clamp-2 break-words overflow-hidden text-ellipsis">
          {data.name}
        </h1>
      </header>
      <Program data={data} />
    </>
  );
}
