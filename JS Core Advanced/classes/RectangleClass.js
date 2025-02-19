class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height
  }

  calcPerimeter() {
    return 2 * (this.width + this.height);
  }

  calcSquare() {
    return this.width * this.height;
  }
}

const rectangle = new Rectangle(2, 4);

console.log(`Периметр: ${rectangle.calcPerimeter()}`);
console.log(`Площадь: ${rectangle.calcSquare()}`)