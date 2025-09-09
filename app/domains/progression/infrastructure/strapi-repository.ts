import type { Progression, ProgressionRepository } from "../domain";

import { strapiClient } from "~/lib/strapi-client";

export function StrapiProgressionRepository(): ProgressionRepository {
  async function getProgression(documentId: string): Promise<Progression> {
    try {
      const response = await strapiClient.findOne<Progression>(
        "programmations",
        documentId
      );

      if (!response.data) {
        throw new Error("Failed to fetch progression");
      }

      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to fetch progression");
    }
  }

  return {
    getProgression,
  };
}
