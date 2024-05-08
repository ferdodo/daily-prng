import { randomFloat } from "./random-float.js";

for (let i = 0; i < 100; i++) {
	const min = 0;
	const max = 3;
	const actual = randomFloat(min, max);

	if (actual < min) {
		throw new Error(`Expected ${actual} to be greater than or equal to ${min}`);
	}

	if (actual >= max) {
		throw new Error(`Expected ${actual} to be less than ${max}`);
	}
}
