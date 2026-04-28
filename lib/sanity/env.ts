const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-04-01";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const sanityEnv = {
  apiVersion,
  dataset,
  projectId,
  readToken: process.env.SANITY_API_READ_TOKEN
};
