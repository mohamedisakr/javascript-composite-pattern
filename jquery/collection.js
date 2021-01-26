// const { numberValues, objectsWithValues } = require("./data");

function CompositeCollection() {
  this.length = 0;
}

CompositeCollection.prototype.append = function (item) {
  const checkItem = (item) => {
    if (typeof item === "object" && "value" in item) {
      this[this.length] = item.value;
    } else if (typeof item === "number") {
      this[this.length] = item;
    }
  };

  checkItem(item);
  this.length++;

  return this;
};

CompositeCollection.prototype.increment = function (number) {
  for (var i = 0; i < this.length; i++) {
    this[i] += number;
  }
  return this;
};

CompositeCollection.prototype.getValues = function () {
  return Object.values(this);
};

// CompositeCollection.prototype.iterate = function* () {
//   console.log(`this : ${this}`);
//   let iterator = this[Symbol.iterator]();
//   console.log(`iterator ${iterator}`);
//   for (let result = iterator.next(); !result.done; result = iterator.next()) {
//     console.log(result); // result.value == 99
//   }
// };

// TODO: implement iterator here
CompositeCollection.prototype[Symbol.iterator] = function () {
  // The iterator should return an Iterator object
  return {
    // The Iterator object must implement a method, next()
    next: function () {
      // next must itself return an IteratorResult object
      if (!this.iterated) {
        this.iterated = true;
        // The IteratorResult object has two properties
        return {
          // whether the iteration is complete, and
          done: false,
          // the value of the current iteration
          value: this[this.length++],
        };
      }
      return {
        // When iteration is complete, just the done property is needed
        done: true,
      };
    },
    iterated: false,
  };
};

// ================== examples ================

// 1st example
let valuesComposition = new CompositeCollection();
valuesComposition.append(1).append(2).append({ value: 3 }).increment(2);
// console.log(valuesComposition.getValues());
// valuesComposition.iterate();
// let iterator = valuesComposition[Symbol.iterator]();
// // let iter = list[Symbol.iterator]();
for (let item of valuesComposition) {
  console.log(item);
}

// // 2nd example
// let MyComposite = new CompositeCollection();
// for (let key in objectsWithValues) {
//   //   console.log(objectsWithValues[prop].value);
//   MyComposite.append(objectsWithValues[key]);
// }

// numberValues.forEach((item) => MyComposite.append(item));
// // console.log("Using append WITHOUT using getValues");
// // console.log(MyComposite);

// /*
// console.log("Using append WITH using getValues");
// let coll = MyComposite.getValues();
// console.log(coll);
// console.log(coll.join(" "));
// */

// console.log("Before increment");
// let coll = MyComposite.getValues();
// console.log(coll);

// console.log("Using increment");
// MyComposite.increment(3);
// coll = MyComposite.getValues();
// console.log(coll);

// let x = { a: 10, b: 3 };
// // let keys = Object.keys(x);
// let vals = Object.values(x);
// console.log(vals);

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
