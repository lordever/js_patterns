/**
 * Чтобы отправиться за границу, нужно получить разрешение (визу).
 * Но оказавшись в стране, вы можете спокойно посещать самые разные места,
 * не спрашивая дополнительного разрешения. Достаточно лишь узнать о них.
 * Паттерн Посетитель (visitor) позволяет добавлять объектам дополнительные операции,
 * не изменяя их исходный код.
 */

//Смоделируем зоопарк с разными видами животных:
class Monkey {
    shout() {
        console.log('Ooh oo aa aa!')
    }

    accept(operation) {
        operation.visitMonkey(this)
    }
}

class Lion {
    roar() {
        console.log('Roaaar!')
    }

    accept(operation) {
        operation.visitLion(this)
    }
}

class Dolphin {
    speak() {
        console.log('Tuut tuttu tuutt!')
    }

    accept(operation) {
        operation.visitDolphin(this)
    }
}

//Теперь мы хотим послушать, какие звуки они издают. Для этого создадим Посетителя:
const speak = {
    visitMonkey(monkey) {
        monkey.shout()
    },
    visitLion(lion) {
        lion.roar()
    },
    visitDolphin(dolphin) {
        dolphin.speak()
    }
}

//Он просто обращается к каждому классу и вызывает нужный метод:
const monkey = new Monkey()
const lion = new Lion()
const dolphin = new Dolphin()

monkey.accept(speak)    // Ooh oo aa aa!    
lion.accept(speak)      // Roaaar!
dolphin.accept(speak)   // Tuut tutt tuutt!

/**
 * Посетитель позволяет не изменять существующие объекты. С его помощью можно,
 * например, добавить всем этим животным возможность прыгать без создания дополнительных методов.
 */
const jump = {
    visitMonkey(monkey) {
        console.log('Jumped 20 feet high! on to the tree!')
    },
    visitLion(lion) {
        console.log('Jumped 7 feet! Back on the ground!')
    },
    visitDolphin(dolphin) {
        console.log('Walked on water a little and disappeared')
    }
}

monkey.accept(speak)   // Ooh oo aa aa!
monkey.accept(jump)    // Jumped 20 feet high! on to the tree!

lion.accept(speak)     // Roaaar!
lion.accept(jump)      // Jumped 7 feet! Back on the ground! 

dolphin.accept(speak)  // Tuut tutt tuutt! 
dolphin.accept(jump)   // Walked on water a little and disappeared