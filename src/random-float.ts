import { getSeed } from "./get-seed.js";
import Randoma from "randoma";

const randomMap = new Map<string, Randoma>();

function getRandom(dayOffset = 0): Randoma {
	const seed = getSeed(dayOffset);

	if (!randomMap.has(seed)) {
		randomMap.set(seed, new Randoma({ seed }));
	}

	const random = randomMap.get(seed);

	if (!random) {
		throw new Error("Failed to get random instance");
	}

	return random;
}

/**
 * Returns a random float between min (inclusive) and max (exclusive).
 *
 * @includeExample
 */
export function randomFloat(min: number, max: number, dayOffset = 0): number {
	const random = getRandom(dayOffset);
	return random.floatInRange(min, max);
}
