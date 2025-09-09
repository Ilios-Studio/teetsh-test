import type { Program } from "../../domain";

interface ProgramProps {
  data: Program;
}

export function Program({ data }: ProgramProps) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
