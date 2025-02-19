/**
 * У вас есть веб-сайт, на который вы хотите добавить темизацию.
 * Можно создать для каждой темы копии всех существующих страниц,
 * или изменять страницу в соответствии с выбранной темой.
 * Паттерн Мост позволяет отделить реализацию от самого объекта
 * и выстроить иерархию реализаций.
 */

//Вот иерархия страниц вашего веб-сайта:
class About {
    constructor(theme) {
        this.theme = theme
    }

    getContent() {
        return "About page in " + this.theme.getColor()
    }
}

class Careers {
    constructor(theme) {
        this.theme = theme
    }

    getContent() {
        return "Careers page in " + this.theme.getColor()
    }
}

//И отдельная иерархия различных тем оформления:
class DarkTheme {
    getColor() {
        return 'Dark Black'
    }
}
class LightTheme {
    getColor() {
        return 'Off white'
    }
}
class AquaTheme {
    getColor() {
        return 'Light blue'
    }
}

//А вот их взаимодействие:
const darkTheme = new DarkTheme()

const about = new About(darkTheme)
const careers = new Careers(darkTheme)

console.log(about.getContent())// "About page in Dark Black"
console.log(careers.getContent())// "Careers page in Dark Black"