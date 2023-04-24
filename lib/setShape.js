const Circle = require("./Circle");
const Triangle = require("./Triangle");
const Square = require("./Square");

function setShape(response) {
    if (response.shape === "circle"){
        let reShape = new Circle(response.shapeColor, response.text, response.textColor)
        return reShape.render()
    }
    if (response.shape === "Triangle"){
        let reShape = new Triangle(response.shapeColor, response.text, response.textColor)
        return reShape.render()
    }
    if (response.shape === "Square"){
        let reShape = new Square(response.shapeColor, response.text, response.textColor)
        return reShape.render()
    }
};

module.exports = setShape;