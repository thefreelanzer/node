// const add = require("./add");
// console.log("Index file loaded");
// const sum = add(1, 2);
// console.log(sum);

// (function () {
//   console.log("function 1 loaded");
// })();
// (function () {
//   console.log("function 2 loaded");
// })();
// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Super Man");
// console.log(superHero.getName());

// const math = require("./math");
// const { add, subtract } = math;

// console.log(add(1, 2));
// console.log(subtract(5, 3));

// const data = require("./data.json");
// console.log(data.name);

const path = require("node:path");
console.log(__filename);
console.log(__dirname);

//Last portion
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

//Extension
console.log(path.extname(__filename));

// parse
console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));

console.log(path.isAbsolute(__filename));

console.log("Join");
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "index.html"));
console.log(path.join("/folder1", "//folder2", "../index.html"));
console.log(path.join(__dirname, "index.html"));

console.log("Resolve");
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html"));
console.log(path.resolve(__dirname, "index.html"));
