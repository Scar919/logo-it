const fs = require("fs");
const inquirer = require ("inquirer");
const questionsList = require("./lib/questions");
const Generatedlogo = require("./Generatedlogo");
const setShape = require("./lib/setShape");

function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile(Generatedlogo, svg, () => console.log("Generated logo"));
}

function init(){
inquirer
.prompt(questionsList)
.then((response) => {
    createLogo(response);
})
.catch(err => {
    console.log(err)
});
}

init();

