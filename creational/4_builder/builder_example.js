/**
 * Вы заказали себе гамбургер в ресторане быстрого питания.
 * Сначала кассир предлагает вам выбрать хлеб, потом котлету,
 * сыр, соусы… Логика создания гамбургера оказалась довольно
 * сложной, тут не обойтись без паттерна Строитель.
 * Этот шаблон позволяет создавать различные варианты объекта
 * без загрязнения конструктора лишним кодом.
 */

//Начнем с самого гамбургера:
class Burger {
    constructor(builder) {
        this.size = builder.size
        this.cheeze = builder.cheeze || false
        this.pepperoni = builder.pepperoni || false
        this.lettuce = builder.lettuce || false
        this.tomato = builder.tomato || false
    }
}

//А вот и Строитель:
class BurgerBuilder {

    constructor(size) {
        this.size = size
    }

    addPepperoni() {
        this.pepperoni = true
        return this
    }

    addLettuce() {
        this.lettuce = true
        return this
    }

    addCheeze() {
        this.cheeze = true
        return this
    }

    addTomato() {
        this.tomato = true
        return this
    }

    build() {
        return new Burger(this)
    }
}

//Вуаля! Вот наш бургер:
const burger = (new BurgerBuilder(14))
    .addPepperoni()
    .addLettuce()
    .addTomato()
    .build()

/**
 * Паттерн Строитель нужен, если объект может существовать
 * в разных вариациях или процесс инстанцирования состоит из нескольких шагов.
 */

