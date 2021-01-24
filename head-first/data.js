const pancake = [
  {
    name: "K&B's Pancake Breakfast",
    description: "Pancakes with scrambled eggs and toast",
    vegetarian: true,
    price: 2.99,
  },
  {
    name: "Regular Pancake Breakfast",
    description: "Pancakes with fried eggs, sausage",
    vegetarian: false,
    price: 2.99,
  },
  {
    name: "Blueberry Pancakes",
    description: "Pancakes made with fresh blueberries",
    vegetarian: true,
    price: 3.49,
  },
  {
    name: "Waffles",
    description: "Waffles with your choice of blueberries or strawberries",
    vegetarian: true,
    price: 3.59,
  },
];

const diner = [
  {
    name: "Vegetarian BLT",
    description: "(Fakin') Bacon with lettuce & tomato on whole wheat",
    vegetarian: true,
    price: 2.99,
  },
  {
    name: "BLT",
    description: "Bacon with lettuce & tomato on whole wheat",
    vegetarian: false,
    price: 2.99,
  },
  {
    name: "Soup of the day",
    description: "Soup of the day, with a side of potato salad",
    vegetarian: false,
    price: 3.29,
  },
  {
    name: "Hotdog",
    description:
      "A hot dog, with sauerkraut, relish, onions, topped with cheese",
    vegetarian: false,
    price: 3.05,
  },
];

module.exports = { pancake, diner };
