import { createRegex } from "./regex";
import type { Mapper } from "./type";

/**
 * Magic replace function
 */
export function replace(
    [prefix, postfix]: [string, string],
    mapper: Mapper,
    content: string,
) {
    const superRegex = createRegex([prefix, postfix], mapper);
    return content.replace(superRegex, (_, p) => {
        if (typeof p !== "string") {
            throw new Error("Could not match the pattern group");
        }
        return mapper[p];
    });
}
