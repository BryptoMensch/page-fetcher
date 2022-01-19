// const time = process.argv.slice(2);

// for (const index of time) {
// 	let index = Number(index);
// 	if (typeof index === "number" && index > 0) {
// 		setTimeout(() => process.stdout.write("\x07"), index * 1000);
// 	}
// }

const time = process.argv.slice(2);
for (let index of time) {
	index = Number(index);
	if (typeof index === "number" && index > 0) {
		setTimeout(() => process.stdout.write(","), index * 1000);
	}
	setTimeout(() => process.stdout.write("\n"), time.length * 1200 + 1);
}
