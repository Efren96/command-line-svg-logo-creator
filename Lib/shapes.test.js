const { Circle, Square, Triangle } = require('./shapes');

describe("Circle", () => {
    test("test for a circle with a red background", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />'
        );
    });
});

describe("Square", () => {
    test("test for a square with a green background", () => {
        const shape = new Square();
        shape.setColor("green");
        expect(shape.render()).toEqual('<rect width="200" height="200" fill="green"/>'
        );
    });
});

describe("Triangle", () => {
    test("test for a triangle with a blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});