const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/Shape');

const prompts = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color:',
  },
];

async function createLogo() {
  try {
    const answers = await inquirer.prompt(prompts);
    const { text, textColor, shape, shapeColor } = answers;

    const logo = new Logo();
    logo.setTxtColor(text, textColor);

    let shapeObj;
    switch (shape) {
      case 'circle':
        shapeObj = new Circle(text, textColor);
        break;
      case 'triangle':
        shapeObj = new Triangle(text, textColor);
        break;
      case 'square':
        shapeObj = new Square(text, textColor);
        break;
      default:
        console.log('Invalid shape selection.');
        return;
    }
    shapeObj.setColor(shapeColor);
    logo.setShapez(shapeObj);

    const svg = logo.render();
    fs.writeFileSync('examples/logo.svg', svg);
    console.log('Generated examples/logo.svg');
  } catch (error) {
    console.log('An error occurred:', error);
  }
}

class Logo {
  constructor() {
    this.txtColor = '';
    this.shapez = '';
  }

  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.txtColor}${this.shapez}</svg>`;
  }

  setShapez(shape) {
    this.shapez = shape.render();
  }

  setTxtColor(text, color) {
    const textWidth = text.length * 20; // Adjust the value as needed for proper centering
    const xPosition = 150 - textWidth / 2; // Calculate the x position for centering the text
    this.txtColor = `<text x="${xPosition}" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
  }
}

createLogo();