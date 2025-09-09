import { Progression } from "~/domains/progression/application/components/Progression";

export default function ProgressionRoute() {
  // fake id, should come from the url params
  const progressionId = "wwdnw9553da0cdypjq2t9p3f";

  return <Progression documentId={progressionId} />;
}
