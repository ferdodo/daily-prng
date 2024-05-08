import Randoma from "randoma";
import { getSeed } from "./get-seed.js";

const seed = getSeed();
const random = new Randoma({ seed });

/**
 * Returns a random integer between min (inclusive) and max (exclusive).
 *
 * @includeExample ./src/random-integer.example.ts
 */
export function randomInteger(min: number, max: number): number {
	return random.integerInRange(min, max - 1);
}
