import { randomizeArray } from "daily-prng";

const randomized = randomizeArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);

const someNumberAreRandomized = randomized.some(function(num, index) {
	return num != index + 1;
});

if (!someNumberAreRandomized) {
	throw new Error("No numbers where randomized");
}

if (new Set(randomized).size !== 9) {
	throw new Error("Randomized array should contain 9 distinct numbers");
}
