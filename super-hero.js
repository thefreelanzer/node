class SuperHero {
  constructor(name) {
    this.name = name;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

module.exports = new SuperHero("Batman");
