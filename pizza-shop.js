const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order(data) {
    this.orderNumber++;
    this.emit("order", data);
  }

  displayOrderNumber() {
    console.log(`Current order number${this.orderNumber}`);
  }
}
module.exports = PizzaShop;
