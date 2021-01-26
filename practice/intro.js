function* oneDigitPrimes() {
  // Invoking this function does not run the code
  yield 2; // but just returns a generator object. Calling
  yield 3; // the next() method of that generator runs
  yield 5; // the code until a yield statement provides
  yield 7; // the return value for the next() method.
}

function* sequence(...iterables) {
  for (let iterable of iterables) {
    for (let item of iterable) {
      yield item;
    }
  }
}
console.log([...sequence("abc", oneDigitPrimes())]); // => ["a","b","c",2,3,5,7]

/*
function* fibonacciSequence() {
  let x = 0;
  let y = 1;
  for (;;) {
    yield y;
    [x, y] = [y, x + y]; // Note: destructuring assignment
  }
}

function* take(n, iterable) {
  let iterator = iterable[Symbol.iterator]();
  while (n-- > 0) {
    let next = iterator.next();
    if (next.done) {
      return;
    } else {
      yield next.value;
    }
  }
}

// An array of the first 5 Fibonacci numbers
let result = [...take(5, fibonacciSequence())]; // => [1, 1, 2, 3, 5]
console.log(result);
*/

/*
// 0, 1, 1, 2, 3, 5, 8
let x = 0;
let y = 1;
[x, y] = [y, x + y];
console.log(`x: ${x}, y: ${y}`);
*/

/*
const seq = function* (from, to) {
  for (let i = from; i <= to; i++) yield i;
};
console.log([...seq(3, 5)]); // => [3, 4, 5]
*/

/*
// A generator function that yields the set of one digit (base-10) primes.
function* oneDigitPrimes() {
  // Invoking this function does not run the code
  yield 2; // but just returns a generator object. Calling
  yield 3; // the next() method of that generator runs
  yield 5; // the code until a yield statement provides
  yield 7; // the return value for the next() method.
}

// When we invoke the generator function, we get a generator
let primes = oneDigitPrimes();
// console.log(typeof primes);

// Generators have a Symbol.iterator method to make them iterable
primes[Symbol.iterator](); // => primes
// console.log(primes);
console.log([...oneDigitPrimes()]);

let sum = 0; //oneDigitPrimes()
for (let prime of oneDigitPrimes()) {
  sum += prime;
}
console.log(sum);
*/

/*
// When you iterate a Map object, the returned values are [key, value] pairs, which
// work well with destructuring assignment in a for/of loop:
let m = new Map([
  ["one", 1],
  ["two", 2],
]);

// for (let [k, v] of m) console.log(k, v); // Logs 'one 1' and 'two 2'
console.log([...m.keys()]); // => ["one", "two"]: keys() method iterates just map keys
console.log([...m.values()]); // => [1, 2]: values() method iterates just map values

let theSet = new Set("abc");
console.log(theSet);

// Symbol.iterator()
*/

/*
// Iterators can be used with destructuring assignment:
let purpleHaze = Uint8Array.of(255, 0, 255, 128);
let [r, g, b, a] = purpleHaze; // a == 128
console.log(`r: ${r}, g: ${g}, b: ${b}, a:${a}`);
*/
/*
// Iterators can also be used with the ... operator to expand or “spread” an iterable
// object into an array initializer or function invocation
let chars = [..."abcd"]; // chars == ["a", "b", "c", "d"]
console.log(chars);

let data = [1, 2, 3, 4, 5];
let max = Math.max(...data); // => 5
console.log(max);
*/

/*
let sum = 0;
for (let i of [1, 2, 3]) {
  // Loop once for each of these values
  sum += i;
}
console.log(sum); // => 6
*/
