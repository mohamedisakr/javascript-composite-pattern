class CompositeCollection {
  constructor() {
    this.items = [];
  }

  append(item) {
    const checkItem = (item) => {
      if (typeof item === "object" && "value" in item) {
        this.items.push(item.value);
      } else if (typeof item === "number") {
        this.items.push(item);
      }
    };
    checkItem(item);
    this.length++;

    return this;
  }

  increment(number) {
    this.items = this.items.map((item) => item + number);
    return this;
  }

  getValues() {
    return this.items;
  }
}

// 1st example
let valuesComposition = new CompositeCollection();
valuesComposition.append(1).append(2).append({ value: 3 }).increment(2);
console.log(valuesComposition.getValues());
