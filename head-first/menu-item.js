/**
 * A MenuItem consists of a name, a description,
 * a flag to indicate if the item is vegetarian,
 * and a price. You pass all these values into the
 * constructor to initialize the MenuItem.
 */
class MenuItem {
  constructor(name, description, vegetarian, price) {
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  get getName() {
    return this.name;
  }

  get getDescription() {
    return this.description;
  }

  get getPrice() {
    return this.price;
  }

  get isVegetarian() {
    return this.vegetarian;
  }
}

module.exports = MenuItem;

let myMenuItem = new MenuItem(
  "K&B's Pancake Breakfast",
  "Pancakes with scrambled eggs and toast",
  true,
  2.99
);
console.log(myMenuItem.getName);
