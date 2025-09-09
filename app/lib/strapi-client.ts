import Strapi from "strapi-sdk-js";

if (!import.meta.env.VITE_BASE_STRAPI_API_URL) {
  throw new Error("VITE_BASE_STRAPI_API_URL is not set");
}

if (!import.meta.env.VITE_STRAPI_API_TOKEN) {
  throw new Error("VITE_STRAPI_API_TOKEN is not set");
}

const strapiClient = new Strapi({
  url: import.meta.env.VITE_BASE_STRAPI_API_URL,
  prefix: "/api",
});

strapiClient.axios.defaults.headers.common["Authorization"] =
  `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}`;

export { strapiClient };
