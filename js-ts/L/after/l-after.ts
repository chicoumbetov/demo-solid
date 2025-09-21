// Adhering to the Liskov Substitution Principle (LSP)
// We avoid the inheritance hierarchy that causes the problem.
// Instead, we create a common interface for shapes with an area.

interface IShape {
  getArea(): number;
}

class RectangleAfter implements IShape {
  constructor(public width: number, public height: number) {}

  getArea(): number {
    return this.width * this.height;
  }
}

class SquareAfter implements IShape {
  constructor(public side: number) {}

  getArea(): number {
    return this.side * this.side;
  }
}

// A function that works with any shape that has an area,
// without assuming anything about its internal structure.
function calculateArea(shape: IShape): void {
  console.log(`The area is: ${shape.getArea()}`);
}

const rectangleAfter = new RectangleAfter(5, 10);
const squareAfter = new SquareAfter(5);

calculateArea(rectangleAfter);
calculateArea(squareAfter); // Works correctly, as the function is not dependent on the specific implementation details of Rectangle or Square.
