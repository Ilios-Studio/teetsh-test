/**
 *
 * Locate all the services and repositories for the domain and allow dependency injection
 * This allow easy testing ( mocks ) and easy replacement of the implementations
 *
 */

import { StrapiProgramRepository } from "./program/infrastructure/strapi-repository";

export const ProgramRepository = StrapiProgramRepository();
