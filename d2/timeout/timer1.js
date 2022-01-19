const time = process.argv.slice(2);
for (let index of time) {
	index = Number(index);
	if (typeof index === "number" && index > 0) {
		setTimeout(() => process.stdout.write(","), index * 1000);
	}
}
