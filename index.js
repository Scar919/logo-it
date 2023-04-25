const inquirer = require ("inquirer");
const fs = require("fs");
//const questions = require("./lib/questions.js");
const generatedLogo = "./Generatedlogo/logo.svg";
const setShape = require("./lib/setShape.js");


const questions = [
    {
        name: "shape",
        message: "what shape would you like?",
        type: "list",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        name: "shape color",
        message: "Pick a color for your shape.",
        type: "list",
        choices: ["Blue", "Red", "Yellow", "Green"],

    },
    {
        name: "text",
        message: "Please enter a text. (3 characters max)",
        type: "input",
    },
    {
        name: "text color",
        message: "Chose a color for your text",
        type: "list",
        choices: ["Blue", "Red", "Yellow", "Green"],
    },
];


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(generatedLogo, svg, ()=> console.log("Generated logo.svg"));
}

function init() {
inquirer
.prompt(questions)
.then((response) => {
    createLogo(response);
})
.catch(err => {
    console.log(err)
});
}

init();

