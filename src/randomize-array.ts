import { randomInteger } from "daily-prng";

/**
 * Returns a new randomized array.
 *
 * @includeExample
 */
export function randomizeArray<T>(arr: T[], dayOffset = 0): T[] {
	return [...arr].sort(() => randomInteger(0, 2, dayOffset) - 0.5);
}
