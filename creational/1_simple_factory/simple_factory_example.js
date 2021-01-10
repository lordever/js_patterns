/**
 * Самостоятельно делать двери при строительстве дома было бы довольно сложно, 
 * поэтому вы получаете их готовыми из магазина.
 * Паттерн Простая фабрика производит нужный экземпляр, не утруждая клиента 
 * тонкостями этого процесса.
 */

class WoodenDoor {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    getWidth() {
        return this.width
    }

    getHeight() {
        return this.height
    }
}

const DoorFactory = {
    makeDoor: (width, height) => new WoodenDoor(width, height)
}

const door = DoorFactory.makeDoor(100, 200)
console.log('Width:', door.getWidth())
console.log('Height:', door.getHeight())