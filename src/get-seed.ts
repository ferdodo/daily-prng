export function getSeed(dayOffset = 0): string {
	const today = new Date();
	today.setDate(today.getDate() + dayOffset);
	const date = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear();
	return `${date}-${month}-${year}`;
}
