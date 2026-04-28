import { createClient } from "next-sanity";
import { sanityEnv } from "@/lib/sanity/env";

export const sanityClient = createClient({
  apiVersion: sanityEnv.apiVersion,
  dataset: sanityEnv.dataset,
  projectId: sanityEnv.projectId,
  useCdn: true,
  token: sanityEnv.readToken,
  perspective: "published"
});
