import { randomInteger } from "daily-prng";

/**
 * Returns a random item of an array.
 *
 * @includeExample
 */
export function randomPick<T>(arr: T[], dayOffset = 0): T {
	if (arr.length === 0) {
		throw new Error("Cannot randomly pick an empty array !");
	}

	const index = randomInteger(0, arr.length, dayOffset);
	const item: T | undefined = arr[index];

	if (item === undefined) {
		throw new Error("Missing item in array !");
	}

	return item;
}
