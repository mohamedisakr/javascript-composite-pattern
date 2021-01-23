function iterateTree(collection, callback) {
  if (collection === null || collection === undefined) {
    return;
  }
  if (typeof collection === "object") {
    if ("left" in collection) {
      iterateTree(collection.left, callback);
    }
    if ("nodeValue" in collection) {
      callback(collection.nodeValue);
    }
    if ("right" in collection) {
      iterateTree(collection.right, callback);
    }
  } else {
    callback(collection);
  }
}

const filter = (val) => {
  if (val > 4) {
    valuesArray.push(val);
  }
};

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

let valuesArray = [];
iterateTree(collection, filter);

console.log(valuesArray.join(" "));
