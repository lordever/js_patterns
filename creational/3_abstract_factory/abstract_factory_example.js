/**
 * Вернемся к дверям. Строго говоря, деревянные двери следует покупать в 
 * магазине деревянных дверей, железные – в магазине железных, а двери из 
 * ПВХ – в специализированном ПВХ-магазине. Также требуется эксперт по 
 * установке: плотник, сварщик или специальный установщик дверей из ПВХ.
 * Абстрактная фабрика – это интерфейс, который группирует другие фабрики, 
 * логически связанные друг с другом.
 */

//У нас есть несколько дверей:
class WoodenDoor {
    getDescription() {
        console.log('I am a wooden door')
    }
}

class IronDoor {
    getDescription() {
        console.log('I am an iron door')
    }
}

//и узкие специалисты-установщики:
class Welder {
    getDescription() {
        console.log('I can only fit iron doors')
    }
}

class Carpenter {
    getDescription() {
        console.log('I can only fit wooden doors')
    }
}

//Нужно все сгруппировать. Деревянные двери – с плотником, железные – со сварщиком.

// Деревянная фабрика возвращает плотника и деревянную дверь
class WoodenDoorFactory {
    makeDoor() {
        return new WoodenDoor()
    }

    makeFittingExpert() {
        return new Carpenter()
    }
}

// Железная фабрика возвращает сварщика и железную дверь
class IronDoorFactory {
    makeDoor() {
        return new IronDoor()
    }

    makeFittingExpert() {
        return new Welder()
    }
}

//Теперь можно и дверьми заняться
const woodenFactory = new WoodenDoorFactory()

const woodenDoor = woodenFactory.makeDoor()
const woodenExpert = woodenFactory.makeFittingExpert()

woodenDoor.getDescription()  // I am a wooden door
woodenExpert.getDescription() // I can only fit wooden doors

const ironFactory = new IronDoorFactory()

const ironDoor = ironFactory.makeDoor()
const ironExpert = ironFactory.makeFittingExpert()

ironDoor.getDescription()  // I am an iron door
ironExpert.getDescription() // I can only fit iron doors

/**
 * Теперь в комплекте с каждой дверью идет нужный мастер.
 * Паттерн полезен, когда есть несколько классов, зависящих друг от друга.
*/