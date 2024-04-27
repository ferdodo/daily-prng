import { randomInteger } from "daily-prng";

/**
 * Returns a new randomized array.
 *
 * @includeExample ./src/randomize-array.example.ts
 */
export function randomizeArray<T>(arr: T[]): T[] {
	return [...arr].sort(() => randomInteger(0, 2) - 0.5);
}
