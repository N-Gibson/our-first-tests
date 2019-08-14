class Box {
  constructor(height = 100, width = 100) {
    this.height = height;
    this.width = width;
  }

  area() {
    return this.height * this.width
  }

  increaseSize(addSize, location) {
   return this[location] += addSize;
  }
}

module.exports = Box;