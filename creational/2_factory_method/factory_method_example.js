/**
 * Менеджер по подбору персонала работает с кандидатами на разные вакансии.
 * Вместо того чтобы вникать в тонкости каждой должности, он делегирует
 * проведение технического интервью коллегам-специалистам.
 * Паттерн Фабричный метод позволяет делегировать логику создания нужных
 * экземпляров дочерним классам.
 */

//Создадим несколько типов интервьюеров с одним интерфейсом:
class Developer {
    askQuestions() {
        console.log('Asking about design patterns!')
    }
}

class CommunityExecutive {
    askQuestions() {
        console.log('Asking about community building')
    }
}

class HRExecutive {
    askQuestions() {
        console.log('Asking about work')
    }
}

//А вот и менеджер по подбору персонала:
class HiringManager {
    takeInterview() {
        const interviewer = this.makeInterviewer()
        interviewer.askQuestions()
    }
}

//Дочерние классы расширяют его и предоставляют нужных интервьюеров:
class DevelopmentManager extends HiringManager {
    makeInterviewer() {
        return new Developer()
    }
}

class MarketingManager extends HiringManager {
    makeInterviewer() {
        return new CommunityExecutive()
    }
}

class HRManager extends HiringManager {
    makeInterviewer() {
        return new HRExecutive()
    }
}

//Теперь можно проводить собеседования:
const devManager = new DevelopmentManager()
devManager.takeInterview() // Asking about design patterns

const marketingManager = new MarketingManager()
marketingManager.takeInterview() // Asking about community buildng.

const hrManager = new HRManager()
hrManager.takeInterview() // Asking about work.

/**
 * Паттерн полезен, если логика работы подклассов одинаковая, 
 * но конкретный подкласс выясняется только во время выполнения программы.
 */