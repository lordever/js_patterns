/**
 * Когда вы разговариваете с кем-нибудь по мобильному телефону, то между вами
 * есть Посредник – провайдер. В этом паттерне объект Посредника (mediator) управляет
 * взаимодействием между двумя другими объектами (Коллегами), уменьшая связь между ними.
 */

/**
 * Создадим простой чат, в котором пользователи (Коллеги) могут отправлять сообщения друг другу.
 */

// Чат выглядит так:
// Mediator
class ChatRoom {
    showMessage(user, message) {
        const time = new Date()
        const sender = user.getName()

        console.log(time + '[' + sender + ']:' + message)
    }
}

//А это сами пользователи:
class User {
    constructor(name, chatMediator) {
        this.name = name
        this.chatMediator = chatMediator
    }

    getName() {
        return this.name
    }

    send(message) {
        this.chatMediator.showMessage(this, message)
    }
}

//Начнём беседу
const mediator = new ChatRoom()

const john = new User('John Doe', mediator)
const jane = new User('Jane Doe', mediator)

john.send('Hi there!')
jane.send('Hey!')

// Output will be
// Feb 14, 10:58 [John]: Hi there!
// Feb 14, 10:58 [Jane]: Hey!