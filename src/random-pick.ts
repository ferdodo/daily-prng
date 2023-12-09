import { randomInteger } from "daily-prng";

/**
 * Returns a random item of an array.
 *
 * @includeExample ./src/random-pick.example.ts
 */
export function randomPick<T>(arr: T[]): T {
	if (arr.length === 0) {
		throw new Error("Cannot randomly pick an empty array !");
	}

	const index = randomInteger(0, arr.length);
	const item: T | undefined = arr[index];

	if (item === undefined) {
		throw new Error("Missing item in array !");
	}

	return item;
}
