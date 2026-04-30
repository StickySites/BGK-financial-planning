"use client";

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "BGK Studio",
  basePath: "/studio",
  projectId: "kdjdo3mu",
  dataset: "production",
  plugins: [deskTool()],
  schema: { types: schemaTypes }
});
