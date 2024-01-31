const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./Lib/shapes.js')


inquirer
    .prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to 3 characters:"
        },

        {
            type: "input",
            name: "textColor",
            message: "Enter a color keyword or a hexadecimal number for the text:"
        },

        {
            type: "input",
            name: "shapeColor",
            message: "Enter a color or a hexadecimal number for the shape:"
        },

        {
            type: "list",
            name: "shape",
            message: "Choose which shape you would like:",
            choices: [
                {name: 'Circle', value: 'Circle'},
                {name: 'Square', value: 'Square'},
                {name: 'Triangle', value: 'Triangle'}
            ]
        },
    ])

    .then((res) => {
        if (res.shape === 'Circle') {
            const circle = new Circle(res.text, res.shapeColor, res.textColor)
            fs.writeFile('./Examples/logo.svg', circle.render(), (error) => {
                if (error) {
                    console.log(error);
                }
            })
        } else if (res.shape === 'Square') {
            const square = new Square(res.text, res.shapeColor, res.textColor)
            fs.writeFile('./Examples/logo.svg', square.render(), (error) => {
                if (error) {
                    console.log(error);
                }
            })
        } else {
            const triangle = new Triangle(res.text, res.shapeColor, res.textColor)
            fs.writeFile('./Examples/logo.svg', triangle.render(), (error) => {
                if (error) {
                    console.log(error);
                }
            })
        }
    })
    .then(() => {
        return console.log("Generated logo.svg!")
    });

