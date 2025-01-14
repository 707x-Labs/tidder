import CreateEndpoint from "./create-endpoint.ts";
import wretch from "wretch";

interface RedditResultResponse<T> {
  after: string;
  before: string | null;
  children: T[];
  dist: number;
  facets: Record<string, unknown>;
  geo_filter: string;
  modhash: string;
}

interface RedditResponse<T> {
  data: RedditResultResponse<T>;
  kind: string;
}

export const api = <T = unknown>(url: string) =>
  wretch(url)
    .headers({
      Accept: "application/json",
    })
    .get()
    .json<RedditResultResponse<T>>((json: RedditResponse<T>) => json.data)
    .catch((error) => {
      throw error;
    });

const baseUrl = "https://www.reddit.com";
const reddit = new CreateEndpoint(baseUrl);

export const searchSubreddit = (
  subreddit: string,
  over18: boolean | null = null
) =>
  reddit
    .url("/search.json")
    .query({
      q: subreddit,
      type: "sr",
      raw_json: 1,
      include_over_18: over18,
    })
    .build();
