import { getSeed } from "./get-seed.js";
import Randoma from "randoma";

const seed = getSeed();
const random = new Randoma({ seed });

/**
 * Returns a random float between min (inclusive) and max (exclusive).
 *
 * @includeExample ./src/random-float.example.ts
 */
export function randomFloat(min: number, max: number): number {
	return random.floatInRange(min, max);
}
