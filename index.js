const fs = require("fs");
const inquirer = require ("inquirer");

const questionsList = [
    {
        name: "shape",
        message: "what shape would you like?",
        type: "list",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        name: "text color",
        message: "Pick a color for your shape.",
        type: "list",
        choices: [""]

    }
]