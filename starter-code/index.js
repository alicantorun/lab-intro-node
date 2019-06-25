class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.unshift(item);
    this.length = this.items.length;
    this.items.sort((a, b) => a - b);
  }
  get(pos) {
    return this.items[pos];
  }
  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items);
    }
  }
  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items);
    }
  }
  average() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return (
        this.items.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        ) / this.items.length
      );
    }
  }
  sum() {
    if (this.items.length == 0) {
      return 0;
    } else {
      return this.items.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );
    }
  }
}

module.exports = SortedList;
