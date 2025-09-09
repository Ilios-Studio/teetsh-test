import type { IProgramRepository } from "../domain";
import { ProgramRepository } from "../../service-locator";
import { useQuery } from "@tanstack/react-query";

const createProgramQueries = (repo: IProgramRepository) => ({
  useProgram: (id: string) =>
    useQuery({
      queryKey: ["progression", id],
      queryFn: () => repo.getProgram(id),
    }),
  usePrograms: () =>
    useQuery({
      queryKey: ["progressions"],
      queryFn: () => repo.getPrograms(),
    }),
});

export const programQueries = createProgramQueries(ProgramRepository);
