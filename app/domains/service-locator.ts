/**
 *
 * Locate all the services and repositories for the domain and allow dependency injection
 * This allow easy testing ( mocks ) and easy replacement of the implementations
 *
 */

import { StrapiProgressionRepository } from "./progression/infrastructure/strapi-repository";

export const ProgressionRepository = StrapiProgressionRepository();
