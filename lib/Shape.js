class Shape {
  constructor(text, textColor) {
    this.color = '';
    this.text = text;
    this.textColor = textColor;
  }

  setColor(color) {
    this.color = color;
  }
}

class Triangle extends Shape {
  render() {
    return `<svg width="300" height="200">
      <polygon points="150,10 290,250 10,250" fill="${this.color}" />
      <text x="50%" y="75%" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
    </svg>`;
  }
}

class Circle extends Shape {
  constructor(text, textColor, radius) {
    super(text, textColor);
    this.radius = radius;
  }

  render() {
    return `<svg width="300" height="200">
      <circle cx="50%" cy="50%" r="${this.radius}" fill="${this.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="50" dy=".3em">${this.text}</text>
    </svg>`;
  }
}

class Square extends Shape {
  constructor(text, textColor, side) {
    super(text, textColor);
    this.side = side;
  }

  render() {
    return `<svg width="300" height="200">
      <rect x="50" y="0" width="${this.side}" height="${this.side}" fill="${this.color}" />
      <text x="${this.side / 2 + 50} " y="${this.side / 2 + 10}" text-anchor="middle" fill="${this.textColor}" font-size="50">${this.text}</text>
    </svg>`;
  }
}

module.exports = { Shape, Triangle, Circle, Square };