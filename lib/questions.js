
const questionsList = [
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
]

module.exports = questions