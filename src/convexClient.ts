import { ConvexHttpClient } from "convex/browser";
import { makeFunctionReference } from "convex/server";

export const convex = new ConvexHttpClient(
  import.meta.env.VITE_CONVEX_URL as string,
);

// This repo has no convex/ folder; reference the shared deployment's function by name.
export const getByCode = makeFunctionReference<
  "query",
  { code: string },
  { message: string } | null
>("letters:getByCode");
