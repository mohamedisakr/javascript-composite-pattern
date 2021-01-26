## Composite Pattern

1. Use property (an array) to hold collection items <<done>>
2. Convert to component function <<not working>>
3. Convert to class

## Iterator Pattern

#### How iteration in JavaScript work

There are 3 separate types needed to understand iteration in JavaScript

1. There are the iterable objects:
   Is any object with a special iterator method that returns an iterator object.
   (these are types like Array, Set, and Map that can be iterated)
2. There is the iterator object:
   Is any object with a next() method that returns an iteration result object.
   (which performs the iteration)
3. There is the iteration result object:
   Is an object with properties named value and done.  
   (that holds the result of each step of the iteration)
