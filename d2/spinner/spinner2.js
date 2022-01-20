// setTimeout(() => {
// 	process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
// 	process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
// 	process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
// 	process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
// 	// Need to escape the backslash since it's a special character.
// 	process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
// 	process.stdout.write("\r| \r/  ");
// }, 900);

// setTimeout(() => process.stdout.write("\n"), 1000);

const spinning = "\r|\r/\r-\r|\r\\\r| ";
const animation = function (spinning) {
	let splits = spinning.split("");
	let index = 0;
	for (const char of splits) {
		setTimeout(() => process.stdout.write(char), 200 * index);
		index++;
	}
	setTimeout(() => process.stdout.write("\n"), splits.length * 200 + 1);
};

animation(spinning);
