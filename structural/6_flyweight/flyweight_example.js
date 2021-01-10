/**
 * В поездах дальнего следования воду для горячих напитков кипятят
 * в больших емкостях – сразу для всех. Это позволяет экономить
 * электричество (или газ).
 * Шаблон Приспособленец (flyweight) сводит к минимуму использование
 * памяти или вычислительные расходы, разделяя одни данные между \
 * множеством подобных объектов.
 */

//У нас есть разные типы чая и большой чайник:

// Приспособленец — то, что будет кэшировано
// Типы чая — приспособленцы.
class KarakTea {
}

// Действует как фабрика и экономит чай
class TeaMaker {
    constructor() {
        this.availableTea = {}
    }

    make(preference) {
        this.availableTea[preference] = this.availableTea[preference] || (new KarakTea())
        return this.availableTea[preference]
    }
}

//Теперь создадим чайный магазинчик, который будет принимать заказы:
class TeaShop {
    constructor(teaMaker) {
        this.teaMaker = teaMaker
        this.orders = []
    }

    takeOrder(teaType, table) {
        this.orders[table] = this.teaMaker.make(teaType)
    }

    serve() {
        this.orders.forEach((order, index) => {
            console.log('Serving tea to table#' + index)
        })
    }
}

//Работает он следующим образом:
const teaMaker = new TeaMaker()
const shop = new TeaShop(teaMaker)

shop.takeOrder('less sugar', 1)
shop.takeOrder('more milk', 2)
shop.takeOrder('without sugar', 5)

shop.serve()
// Serving tea to table# 1
// Serving tea to table# 2
// Serving tea to table# 5