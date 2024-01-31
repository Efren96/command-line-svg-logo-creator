
class Circle {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }
}

class Square {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" fill="${this.color}"/>
        <text x="100" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 20 250, 180, 55, 180" fill="${this.color}" />
        <text x="150" y="145" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = { Circle, Square, Triangle };