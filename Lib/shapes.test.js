const { Circle, Square, Triangle } = require('./shapes');

describe("Circle", () => {
    test("test circles values and make sure they render properly", () => {
        const shape = new Circle("EL", "black", "orange");
        const newValue = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="150" cy="100" r="80" fill="black" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="orange">EL</text></svg>`);
        const circleValue = shape.render();
        expect(circleValue).toEqual(newValue
        );
    });
});

describe("Square", () => {
    test("test squares values and make sure they render properly", () => {
        const shape = new Square("EL", "black", "orange");
        const newValue = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect width="200" height="200" fill="black"/>
        <text x="105" y="125" font-size="60" text-anchor="middle" fill="orange">EL</text></svg>`);
        const squareValue = shape.render();
        expect(squareValue).toEqual(newValue
        );
    });
});

describe("Triangle", () => {
    test("test triangles values and make sure they render properly", () => {
        const shape = new Triangle("EL", "black", "orange");
        const newValue = (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 20 250, 180, 55, 180" fill="black" />
        <text x="150" y="135" font-size="50" text-anchor="middle" fill="orange">EL</text></svg>`);
        const triangleValue = shape.render();
        expect(triangleValue).toEqual(newValue);
    });
});