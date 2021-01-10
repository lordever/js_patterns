/**
 * Адаптером является, например, карт-ридер, который необходим,
 * чтобы перенести на компьютер фотографии с карты памяти.
 * Этот паттерн оборачивает несовместимый с чем-то объект
 * и делает его совместимым, не изменяя исходный код.
 */

/**
 * Возьмем игру, в которой герой охотится на львов.
 * Все львы имеют один интерфейс:
*/
class AfricanLion {
    roar() {
        console.log("African lion is roaring")
    }
}

class AsianLion {
    roar() {
        console.log("Asian lion is roaring")
    }
}

//Игрок может охотиться только на объекты, соответствующие этому интерфейсу:
class Hunter {
    hunt(lion) {
        // ... 
        lion.roar()
        //... 
    }
}

/**
 * Нужно ввести в игру дикую собаку, но у нее другой интерфейс. 
 * Чтобы совместить собаку и охотника, нужен Адаптер:
*/
class WildDog {
    bark() {
        console.log("Wild dog is barking")
    }
}

class WildDogAdapter {

    constructor(dog) {
        this.dog = dog;
    }

    roar() {
        this.dog.bark();
    }
}

//Теперь можно вводить в игру нового персонажа:
wildDog = new WildDog()
wildDogAdapter = new WildDogAdapter(wildDog)

hunter = new Hunter()
hunter.hunt(wildDogAdapter)