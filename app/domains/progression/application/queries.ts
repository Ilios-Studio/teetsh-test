import { ProgressionRepository } from "../../service-locator";
import type { ProgressionRepository as ProgressionRepositoryType } from "../domain";
import { useQuery } from "@tanstack/react-query";

const createProgressionQueries = (repo: ProgressionRepositoryType) => ({
  useProgression: (id: string) =>
    useQuery({
      queryKey: ["progression", id],
      queryFn: () => repo.getProgression(id),
    }),
});

export const progressionQueries = createProgressionQueries(
  ProgressionRepository
);
