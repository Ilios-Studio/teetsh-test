import Strapi from "strapi-sdk-js";

function createStrapiClient(): Strapi {
  if (process.env.NODE_ENV === "test") {
    return new Strapi({
      url: process.env.API_URL || "http://localhost:1337",
      prefix: "/api",
    });
  }

  // Production/development configuration
  if (!process.env.VITE_BASE_STRAPI_API_URL) {
    throw new Error("VITE_BASE_STRAPI_API_URL is not set");
  }

  if (!process.env.VITE_STRAPI_API_TOKEN) {
    throw new Error("VITE_STRAPI_API_TOKEN is not set");
  }

  const client = new Strapi({
    url: process.env.VITE_BASE_STRAPI_API_URL,
    prefix: "/api",
  });

  client.axios.defaults.headers.common["Authorization"] =
    `Bearer ${process.env.VITE_STRAPI_API_TOKEN}`;

  return client;
}

export const strapiClient = createStrapiClient();
