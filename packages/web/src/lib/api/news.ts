import { createInfiniteQuery } from "@tanstack/svelte-query";
import { trpc, type InfiniteQueryOpts } from "./trpc";

/**
 * Create a query store for getting the latest feeds
 */
export function createFeedsQuery({}: InfiniteQueryOpts<"newest"> = {}) {
  return createInfiniteQuery({
    queryKey: ["app", "feeds"],
    queryFn: ({ pageParam }) => trpc.newest.query({ page: pageParam }),
    getNextPageParam: ({ page }) => page + 1,
  });
}

/**
 * Create a query store for getting the hottest feeds
 */
export function createGlanceQuery({}: InfiniteQueryOpts<"curation"> = {}) {
  return createInfiniteQuery({
    queryKey: ["app", "glance"],
    queryFn: ({ pageParam }) => trpc.curation.query({ page: pageParam }),
    getNextPageParam: ({ page }) => page + 1,
  });
}
