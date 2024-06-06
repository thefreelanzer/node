async function greet(name) {
  const { upperCase } = await import("upper-case");
  console.log(`Hello ${upperCase(name)}, Welcome to our system! `);
}

greet("jone Doe");

module.exports = greet;
