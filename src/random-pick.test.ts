import { randomPick } from "daily-prng";

for (let i = 0; i < 100; i++) {
	const arr = [1, 2, 3];
	const pick = randomPick(arr);

	switch (pick) {
		case 1:
		case 2:
		case 3:
			break;
		default:
			throw new Error(`Bad value ${pick} !`);
	}
}
