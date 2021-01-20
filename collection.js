const numberValues = [2, 5, 8];

const objectsWithValues = [
  { value: 7 },
  { value: 4 },
  { value: 6 },
  { value: 9 },
];

function values() {
  this.length = 0;
}

values.prototype.append = function (item) {
  if (typeof item === "object" && "value" in item) {
    this[this.length] = item.value;
  } else if (typeof item === "number") {
    this[this.length] = item;
  }
  this.length++;
  return this;
};

let myValues = new values();
for (let prop in objectsWithValues) {
  //   console.log(objectsWithValues[prop].value);
  myValues.append(objectsWithValues[prop]);
}

numberValues.forEach((item) => myValues.append(item));

console.log(myValues);

/*
objectsWithValues.forEach((item) => {
  //   console.log(item);
  myValues.append(item);
});

numberValues.forEach((item) => myValues.append(item));

console.log(myValues);
console.log(myValues.length);
*/

// for (let prop in objectsWithValues) {
//   console.log(objectsWithValues[prop]);
// }
