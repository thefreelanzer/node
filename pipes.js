const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream("./file.txt", { encoding: "utf-8" });
const writeableStream = fs.createWriteStream("./file2.txt");
let gzib = zlib.createGzip();
readableStream.pipe(gzib).pipe(fs.createWriteStream("./file2.txt.gz"));
readableStream.pipe(writeableStream);
