const each = (collection) => {
  if (Array.isArray(collection)) {
    // collection.forEach(item)
    // console.log(`${collection} is an array`);
    for (let i = 0; i < collection.length; i++) {
      console.log(collection[i]);
    }
  } else {
    // console.log(`${collection} is an object`);
    for (let key in collection) {
      if (collection.hasOwnProperty(key)) {
        console.log(collection[key]);
      }
    }
  }
};

const numberValues = [2, 5, 8];

const objectsWithValues = [
  { value: 7 },
  { value: 4 },
  { value: 6 },
  { value: 9 },
];

each(numberValues);
each(objectsWithValues);
