// Violation of the Liskov Substitution Principle (LSP)
// The `Square` class breaks the behavior of the `Rectangle` class.
// A function that expects a `Rectangle` will fail with a `Square`.

class Rectangle {
  constructor(public width: number, public height: number) {}

  setWidth(width: number): void {
    this.width = width;
  }
  setHeight(height: number): void {
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(public side: number) {
    super(side, side);
  }

  // LSP violation: This method changes the behavior of the base class.
  // We can't set the width and height independently, which is expected
  // from the Rectangle class.
  setWidth(width: number): void {
    this.width = width;
    this.height = width;
  }

  setHeight(height: number): void {
    this.height = height;
    this.width = height;
  }
}

// A function that uses the base class
function resize(rectangle: Rectangle, newWidth: number): void {
  rectangle.setWidth(newWidth);
  rectangle.setHeight(10); // Expecting to set height independently
  console.log(`Expected area: ${newWidth * 10}`);
  console.log(`Actual area: ${rectangle.getArea()}`);
}

const rect = new Rectangle(5, 5);
resize(rect, 8); // Works as expected

const square = new Square(5);
resize(square, 8); // Fails: expected area is 80, but actual is 8*8 = 64
