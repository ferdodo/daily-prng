export function getSeed(): string {
	const today = new Date();
	const date = today.getDate();
	const month = today.getMonth();
	const year = today.getFullYear();
	return date + "-" + month + "-" + year;
}
