import { sanityClient } from "@/lib/sanity/client";
import { sanityEnv } from "@/lib/sanity/env";

export async function safeSanityFetch<T>(query: string, params?: Record<string, string>): Promise<T | null> {
  if (!sanityEnv.projectId) {
    return null;
  }

  try {
    return await sanityClient.fetch<T>(query, params || {});
  } catch {
    return null;
  }
}
