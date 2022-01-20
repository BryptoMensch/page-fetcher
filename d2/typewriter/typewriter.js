const animation = function (sentence) {
	let splits = sentence.split("");
	let index = 0;
	for (const char of splits) {
		setTimeout(() => process.stdout.write(char), 50 * index);
		index++;
	}
	setTimeout(() => process.stdout.write("\n"), splits.length * 50 + 1);
};

animation(sentence);
