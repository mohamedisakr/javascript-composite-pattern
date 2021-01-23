const collection = {
  nodeValue: 7,
  left: {
    nodeValue: 4,
    left: 2,
    right: {
      nodeValue: 6,
      left: 5,
      right: 9,
    },
  },
  right: {
    nodeValue: 9,
    left: 8,
  },
};

const numberValues = [2, 5, 8];

const objectsWithValues = [
  { value: 7 },
  { value: 4 },
  { value: 6 },
  { value: 9 },
];

module.exports = { numberValues, objectsWithValues, collection };
