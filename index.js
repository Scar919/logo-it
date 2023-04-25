// const given names to be called within function
const inquirer = require ("inquirer");
const fs = require("fs");
const generatedLogo = "./Generatedlogo/logo.svg";
const setShape = require("./lib/setShape.js");
const colorKeywords = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];

//array of questions to populate in command line terminal
const questions = [
    {
        name: "shape",
        message: "what shape would you like?",
        type: "list",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        name: "colorShapeChoice",
        message: "Pick a color for your shape. please choose:",
        type: "list",
        choices: ["color keyword", "hexdecimal"],

    },
    //input for shape color with text or hexadecimal
    {   type: "input",
        name: "shapeColor",
        message: "Please enter a color",
        when: (answers) => {
            if(answers.colorShapeChoice === "color keyword"){
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1){
                    return true;
                }}
                return console.log("Please enter valid choice")
            }
        },
    {
        type: "input",
        name: "shapeColor",
        messgae: "Enter a hexdaecimal number (#ffff)",
        when: (answers) => {
            if(answers.colorShapeChoice === "hexadecimal"){
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("Enter valid hexadecimal")
            }
            return true;
        }
    },

    {
        name: "text",
        message: "Please enter a text. (3 characters max)",
        type: "input",
    },
    {
        name: "textColor",
        message: "Chose a color for your text",
        type: "list",
        choices: ["color keyword", "hexadecimal"],
    },
    //input for text color using key word or hexadecimal 
    {
        type: "input",
        name: "textColor",
        message: "Please enter a color",
        when: (answers) => {
            if(answers.textColorChoice === "color keyword"){
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1){
                    return true;
                }}
                return console.log("Please enter valid choice")
            }
    },
    {
        type: "input",
        name: "textColor",
        messgae: "Enter a hexdaecimal number (#ffff)",
        when: (answers) => {
            if(answers.textColorChoice === "hexadecimal"){
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("Enter valid hexadecimal")
            }
            return true;
        }
    },
    
];

//function to create svg logo file 
function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(generatedLogo, svg, ()=> console.log("Generated logo.svg"));
}
//initializing questions to create logo & catch errors
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

