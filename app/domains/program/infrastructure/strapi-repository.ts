import type { IProgramRepository, Program, getProgramsFilter } from "../domain";

import { strapiClient } from "~/lib/strapi-client";

export function StrapiProgramRepository(): IProgramRepository {
  async function getProgram(documentId: string): Promise<Program> {
    try {
      const response = await strapiClient.findOne<Program>(
        "programmations",
        documentId
      );

      if (!response.data) {
        throw new Error("Failed to fetch program");
      }

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch program");
    }
  }

  async function getPrograms(filter?: getProgramsFilter): Promise<Program[]> {
    try {
      const response = await strapiClient.find<Program>(
        "programmations",
        filter
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch programs");
    }
  }

  return {
    getProgram,
    getPrograms,
  };
}
