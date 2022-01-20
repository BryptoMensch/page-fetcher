// It should take two command line arguments:
// a URL
// a local file path

// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
const fs = require("fs");
const request = require("request");
const net = require("net");
const conn = net.createConnection({
	host: "example.edu",
	port: 80,
	path: "/index.html",
});
conn.setEncoding("UTF8");

conn.on("connect", () => {
	console.log(`Connected to server!`);
	conn.write(`GET / HTTP/1.1\r\n`);
	conn.write(`Host: example.edu\r\n`);
	conn.write(`\r\n`);
});

conn.on("data", (data) => {
	console.log(data);
	conn.end();
});

// http
// 	.get(options, function (res) {
// 		console.log("Got response: " + res.statusCode);
// 		fs.writeFile("/index.html", content, (err) => {
// 			if (err) {
// 				console.error(err);
// 				return;
// 			}
// 			//file written successfully
// 		});
// 	})
// 	.on("error", function (e) {
// 		console.log("Got error: " + e.message);
// 	});

/* Steps
	1. Make a request to GET
	 2. Take the data received, save to local file path.
	 3. Get file size - use .length to determine the bytes to calculate size.

	 /*
	 */

request("http://www.google.com", function (error, response, body) {
	console.error("error:", error); // Print the error if one occurred
	console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
	console.log("body:", body); // Print the HTML for the Google homepage.

	const content = "Some content!";

	fs.writeFile("/index.html", content, (err) => {
		if (err) {
			console.error(err.length);
			return;
		}
		//file written successfully
	});
});
