/**
 * В автомастерской предлагают несколько видов услуг.
 * Чтобы рассчитать общий счет, нужно взять цену за
 * одну услугу и последовательно прибавить все остальные,
 * пока не получится окончательная стоимость. Каждая
 * услуга является Декоратором.
 * Этот паттерн оборачивает объект и динамически
 * изменяет его поведение.
 */

/**
 * Возьмем для примера кофе.
 * Самый простой кофе, реализующий соответствующий интерфейс:
 */
class SimpleCoffee {

    getCost() {
        return 10
    }

    getDescription() {
        return 'Simple coffee'
    }
}

/**
 * Мы хотим иметь возможность добавлять в кофе различные добавки,
 * для этого создадим некоторые декораторы:
 */
class MilkCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 2
    }

    getDescription() {
        return this.coffee.getDescription() + ', milk'
    }
}

class WhipCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 5
    }

    getDescription() {
        return this.coffee.getDescription() + ', whip'
    }
}

class VanillaCoffee {

    constructor(coffee) {
        this.coffee = coffee
    }

    getCost() {
        return this.coffee.getCost() + 3
    }

    getDescription() {
        return this.coffee.getDescription() + ', vanilla'
    }
}

//Теперь вы можете сделать кофе на свой вкус:
let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost())// 10
console.log(someCoffee.getDescription())// Простой кофе

someCoffee = new MilkCoffee(someCoffee)
console.log(someCoffee.getCost())// 12
console.log(someCoffee.getDescription())// Простой кофе, молоко

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost())// 17
console.log(someCoffee.getDescription())// Простой кофе, молоко, сливки

someCoffee = new VanillaCoffee(someCoffee)
console.log(someCoffee.getCost())// 20
console.log(someCoffee.getDescription())// Простой кофе, молоко, сливки, ваниль