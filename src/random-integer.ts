import Randoma from "randoma";

const seed = new Date()
	.toLocaleDateString();

const random = new Randoma({ seed });

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 *
 * @includeExample ./src/random-integer.example.ts
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random integer.
 */
export function randomInteger(min: number, max: number): number {
	return random.integerInRange(min, max - 1);
}