import { Program } from "~/domains/program/application/components/Program";
import { useParams } from "react-router";

export default function ProgressionRoute() {
  const { documentId } = useParams();

  return <Program documentId={documentId as string} />;
}
