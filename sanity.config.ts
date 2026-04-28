"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { sanityEnv } from "@/lib/sanity/env";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "BGK Studio",
  basePath: "/studio",
  projectId: sanityEnv.projectId,
  dataset: sanityEnv.dataset,
  plugins: [deskTool()],
  schema: { types: schemaTypes }
});
