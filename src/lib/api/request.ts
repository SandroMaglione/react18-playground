import { pipe } from "fp-ts/lib/function";
import * as T from "fp-ts/Task";
import * as TE from "fp-ts/TaskEither";
import { z } from "zod";

const sleepTE = (time: number) =>
  TE.chainFirstTaskK(
    () => async () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve("");
        }, time)
      )
  );

const errorTE = TE.chain(
  () => async () => new Promise((_, reject) => reject(""))
);

export const apiRequest = <Schema extends z.ZodSchema<unknown>>(
  path: string,
  schema: Schema
): T.Task<z.infer<typeof schema>> =>
  pipe(
    TE.tryCatch(
      async () => fetch(path),
      (error) => `Fetch request error: ${JSON.stringify(error)}`
    ),
    TE.chain((response) =>
      TE.tryCatch(
        async () => response.json(),
        (error) => `Cannot convert response to json: ${JSON.stringify(error)}`
      )
    ),
    TE.chain((responseJson) =>
      pipe(schema.safeParse(responseJson), (parsed) =>
        parsed.success
          ? TE.of(parsed.data)
          : TE.left(
              `Request type validation failed: ${JSON.stringify(parsed.error)}`
            )
      )
    ),
    sleepTE(1500),
    // errorTE,
    TE.fold(
      (error) => async () => {
        console.error("Error in 'request'", error);
        throw new Error(`Error in 'request': ${JSON.stringify(error)}`);
      },
      (data) => T.of(data)
    )
  );
