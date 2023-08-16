# Challenge 10 - SVG Logo Generator

## User Story

As a freelance web developer, I want to be able to generate a simple logo for my projects. This will save me the expense of hiring a graphic designer and provide me with a customized logo solution.

## Acceptance Criteria

- **GIVEN** a command-line application that accepts user input
- **WHEN** prompted for text
- **THEN** I can enter up to three characters
- **WHEN** prompted for the text color
- **THEN** I can enter a color keyword or a hexadecimal number
- **WHEN** prompted for a shape
- **THEN** I am presented with a list of shapes to choose from: circle, triangle, and square
- **WHEN** prompted for the shape's color
- **THEN** I can enter a color keyword or a hexadecimal number
- **WHEN** input is provided for all prompts
- **THEN** an SVG file is created named "logo.svg"
- **AND** the message "Generated logo.svg" is displayed in the command line
- **WHEN** I open the "logo.svg" file in a browser
- **THEN** I am presented with a 300x200 pixel image that matches the criteria I entered

## Usage

1. Clone the repository and navigate to the project directory.
2. Run the command-line application.
3. Follow the prompts to input the desired text, text color, shape, and shape color.
4. An SVG file named "logo.svg" will be generated in the directory.
5. The message "Generated logo.svg" will be displayed in the command line.
6. Open the "logo.svg" file in a browser to view the customized logo image.

## Examples

Here's an example of how the user flow might look:

$ node logo-generator.js
Enter up to three characters for the logo: ABC
Enter text color (color keyword or hexadecimal number): #ff5733
Choose a shape for the logo (circle/triangle/square): circle
Enter shape color (color keyword or hexadecimal number): blue