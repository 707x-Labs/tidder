import { useEffect, useState } from "react";
import { debounce } from "es-toolkit";
import useSWR from "swr";
import { api, searchSubreddit } from "~/utils/endpoints";
import { SearchSubreddit } from "~/types/search-subbreddit.types";

export default function useSearch() {
  const [search, setSearch] = useState<string>("");
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  useEffect(() => {
    const debounceUpdate = debounce(() => {
      setDebouncedSearch(search);
    }, 1000);

    debounceUpdate();

    return () => debounceUpdate.cancel();
  }, [search]);

  const url =
    debouncedSearch.length > 2
      ? searchSubreddit(encodeURIComponent(debouncedSearch), true)
      : undefined;

  const { data, error, isLoading } = useSWR(
    url,
    api<{ kind: string; data: SearchSubreddit }>
  );

  return {
    search,
    setSearch,
    data,
    error,
    isLoading,
  };
}
