const Circle = require("../Circle.js");

describe("Circle", () => {
    it("should return logo with shape, text, and color", () => {
        const circle = new Circle('red', 'SSS', "yellow");
        expect(circle.render()).toEqual(`
        <svg version = "1.1"
        width= "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg">
            <circle cx = "150" cy = "100" r = "100" fill="red" />
            <text x = "150" y ="125" font-size = "70" text-anchor = "middle" fill="yellow"> "SSS"</text>      
          </svg>
        `
        );
    });
});

const Square = require("../Square.js");

describe("Square", () => {
    it("should return logo with shape, text, and color", () => {
        const square = new Square('blue', 'TTT', "black");
        expect(square.render()).toEqual(`
        <svg version = "1.1"
        width= "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg">
            <rect width = "200" height = "200" fill="blue"/>
            <text x = "100" y ="125" font-size = "70" text-anchor = "middle" fill="black">TTT</text>      
          </svg>
        `
        );
    });
});

const Triangle = require("../Triangle.js");

describe("Triangle", () => {
    it("should return logo with shape, text, and color", () => {
        const triangle = new Triangle('blue', 'TTT', "black");
        expect(triangle.render()).toEqual(`
        <svg version = "1.1"
        width= "300" height = "200"
        xmlns = "http://www.w3.org/2000/svg">
            <rect width = "200" height = "200" fill="blue"/>
            <text x = "100" y ="125" font-size = "70" text-anchor = "middle" fill="black">TTT</text>      
          </svg>
        `
        );
    });
});