describe("Triangle", () => {
  test("color", () => {
    const shape = new Triangle("text", "textColor");
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<svg width="300" height="200">
      <polygon points="150,10 290,250 10,250" fill="${shape.color}" />
      <text x="50%" y="75%" text-anchor="middle" fill="${shape.textColor}" font-size="50">${shape.text}</text>
    </svg>`);
  });
});

describe("Circle", () => {
  test("color", () => {
    const shape = new Circle("text", "textColor", 100);
    shape.setColor("blue");
    expect(shape.render()).toEqual(`<svg width="300" height="200">
      <circle cx="50%" cy="50%" r="${shape.radius}" fill="${shape.color}" />
      <text x="50%" y="50%" text-anchor="middle" fill="${shape.textColor}" font-size="50" dy=".3em">${shape.text}</text>
    </svg>`);
  });
});

describe("Square", () => {
  test("color", () => {
    const shape = new Square("text", "textColor", 250);
    shape.setColor("pink");
    expect(shape.render()).toEqual(`<svg width="300" height="200">
      <rect x="50" y="0" width="${shape.side}" height="${shape.side}" fill="${shape.color}" />
      <text x="${shape.side / 2 + 50} " y="${shape.side / 2 + 10}" text-anchor="middle" fill="${shape.textColor}" font-size="50">${shape.text}</text>
    </svg>`);
  });
});