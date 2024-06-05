// const EventEmitter = require("node:events");
// const emitter = new EventEmitter();
// emitter.on("order-placed", (data) => {
//   console.log(
//     "Order placed successfully, name:" + data.name + ". size:" + data.size
//   );
// });
// emitter.emit("order-placed", {
//   name: "Product name",
//   size: "size",
// });

const PizzaShop = require("./pizza-shop");
const DrinkMachine = require("./drink-machine");
const pizzaShop = new PizzaShop();
const drinkMachine = new DrinkMachine();

pizzaShop.on("order", (data) => {
  console.log(
    "Order received, Baking a" + data.size + " pizza with " + data.topping
  );
  drinkMachine.serveDrink(data.size);
});

pizzaShop.order({ size: "medium", topping: "Mashroom" });
pizzaShop.displayOrderNumber();
