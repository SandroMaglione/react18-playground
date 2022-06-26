import useSWR, { Fetcher, Key, SWRResponse } from "swr";

type SWRResponseSuspense<Data = any, Error = any> = Omit<
  SWRResponse<Data, Error>,
  "data" | "error" | "isLoading"
> & {
  data: Data;
};

class SWRError extends Error {}

export const useSWRSuspense = <
  Data = any,
  Error = any,
  SWRKey extends Key = null
>(
  key: SWRKey,
  fetcher: Fetcher<Data, SWRKey>
): SWRResponseSuspense<Data, Error> => {
  const swrResponse = useSWR<Data, Error>(key, fetcher, {
    suspense: true,
  });

  if (typeof swrResponse.data === "undefined" && !swrResponse.isLoading) {
    throw new SWRError("Error with undefined data in SWR");
  }

  if (typeof swrResponse.error !== "undefined") {
    throw new SWRError("Found unexpected error in SWR");
  }

  return {
    data: swrResponse.data!,
    isValidating: swrResponse.isValidating,
    mutate: swrResponse.mutate,
  };
};
