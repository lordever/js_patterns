/**
 * Вы приходите в ресторан и делаете заказ официанту. Он перенаправляет вашу Команду шеф-повару,
 * который знает, что и как готовить. Паттерн Команда инкапсулирует некоторые действия и
 * необходимые для них данные и позволяет отделить Клиента от Получателя.
 */

//Это Получатель, который умеет совершать различные действия:
// Receiver
class Bulb {
    turnOn() {
        console.log('Bulb has been lit')
    }

    turnOff() {
        console.log('Darkness!')
    }
}


//А вот набор команд:
// Command
class TurnOnCommand {
    constructor(bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOn()
    }

    undo() {
        this.bulb.turnOff()
    }

    redo() {
        this.execute()
    }
}
// Command
class TurnOffCommand {
    constructor(bulb) {
        this.bulb = bulb
    }

    execute() {
        this.bulb.turnOff()
    }

    undo() {
        this.bulb.turnOn()
    }

    redo() {
        this.execute()
    }
}

//Это код Вызывающего (официанта из примера):
// Invoker
class RemoteControl {
    submit(command) {
        command.execute()
    }
}

//Теперь можно использовать так 
const bulb = new Bulb()

const turnOn = new TurnOnCommand(bulb)
const turnOff = new TurnOffCommand(bulb)

const remote = new RemoteControl()
remote.submit(turnOn) // Bulb has been lit!
remote.submit(turnOff) // Darkness!