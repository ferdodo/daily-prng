import { randomInteger } from "daily-prng";
import assert from "assert/strict";

for (let i = 0; i < 100; i++) {
	const min = 0;
	const max = 3;
	const actual = randomInteger(min, max);
	assert(actual >= min);
	assert(actual < max);
}
