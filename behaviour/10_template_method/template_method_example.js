/**
 * Вы строите дом по определенному плану: сначала фундамент, затем стены и
 * только потом крыша. Порядок этих шагов изменить нельзя, но их реализация
 * может быть разной.
 * Шаблонный метод определяет "скелет" алгоритма, но делегирует реализацию
 * шагов дочерним классам.
 */

/**
 * Создадим инструмент для тестирования, сборки и разворачивания приложения.
 * Базовый класс определяет скелет алгоритма сборки:
 */
class Builder {
    // Template method 
    build() {
        this.test()
        this.lint()
        this.assemble()
        this.deploy()
    }
}

//А дочерние классы – конкретную реализацию каждого шага:
class AndroidBuilder extends Builder {
    test() {
        console.log('Running android tests')
    }

    lint() {
        console.log('Linting the android code')
    }

    assemble() {
        console.log('Assembling the android build')
    }

    deploy() {
        console.log('Deploying android build to server')
    }
}

class IosBuilder extends Builder {
    test() {
        console.log('Running ios tests')
    }

    lint() {
        console.log('Linting the ios code')
    }

    assemble() {
        console.log('Assembling the ios build')
    }

    deploy() {
        console.log('Deploying ios build to server')
    }
}

//Соберём проект
const androidBuilder = new AndroidBuilder()
androidBuilder.build()

// Running android tests
// Linting the android code
// Assembling the android build
// Deploying android build to server

const iosBuilder = new IosBuilder()
iosBuilder.build()

// Running ios tests
// Linting the ios code
// Assembling the ios build
// Deploying ios build to server