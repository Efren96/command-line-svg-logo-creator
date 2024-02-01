
// Circle class that will render an SVG shape with size, position and color.
class Circle {
    constructor(text, color, textColor){
        this.text = text,
        this.color = color,
        this.textColor = textColor

    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

// Square class that will render an SVG shape with size, position and color.
class Square {
    constructor(text, color, textColor){
        this.text = text,
        this.color = color,
        this.textColor = textColor

    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <rect width="200" height="200" fill="${this.color}"/>
        <text x="105" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

// Triangle class that will render an SVG shape with size, position and color.
class Triangle {
    constructor(text, color, textColor){
        this.text = text,
        this.color = color,
        this.textColor = textColor

    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> 
        <polygon points="150, 20 250, 180, 55, 180" fill="${this.color}" />
        <text x="150" y="135" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Square, Triangle };