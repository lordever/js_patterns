/**
 * Представьте себе дверь с кодовым замком. Ее основная функциональность
 * – открыться и пропустить вас в другое помещение, но сверху добавлен
 * Прокси, который проверяет право доступа.
 * Заместитель (proxy) обеспечивает какую-то дополнительную логику:
 * ограничивает доступ к основному объекту, ведет логи или выполняет кэширование.
 */

//Прежде всего создадим интерфейс двери и его реализацию:
class LabDoor {
    open() {
        console.log('Opening lab door')
    }

    close() {
        console.log('Closing the lab door')
    }
}

//А теперь напишем прокси-класс, чтобы обеспечить безопасность нашей двери:
class Security {
    constructor(door) {
        this.door = door
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open()
        } else {
            console.log('Big no! It ain\'t possible.')
        }
    }

    authenticate(password) {
        return password === 'ecr@t'
    }

    close() {
        this.door.close()
    }
}

//Теперь кто попало не сможет зайти:
const door = new Security(new LabDoor())
door.open('invalid') // Big no! It ain't possible.

door.open('ecr@t') // Opening lab door
door.close() // Closing lab door