/**
 * Любая организация состоит из людей. Некоторые работники объединяются в группы,
 * и сама организация – это большая группа.
 * Шаблон Компоновщик (composite pattern) позволяет единообразно обрабатывать
 * отдельные объекты и их группы. Он работает с иерархией "часть-целое".
 */

//У нас есть разные типы работников:
class Developer {

    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }

    getRoles() {
        return this.roles
    }

    develop() {
        /* */
    }
}

class Designer {

    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    getName() {
        return this.name
    }

    setSalary(salary) {
        this.salary = salary
    }

    getSalary() {
        return this.salary
    }

    getRoles() {
        return this.roles
    }

    design() {
        /* */
    }
}

//И сама организация
class Organization {
    constructor() {
        this.employees = []
    }

    addEmployee(employee) {
        this.employees.push(employee)
    }

    getNetSalaries() {
        let netSalary = 0

        this.employees.forEach(employee => {
            netSalary += employee.getSalary()
        })

        return netSalary
    }
}

//Теперь можно посчитать общую зарплату всех сотрудников:
const john = new Developer('John Doe', 12000)
const jane = new Designer('Jane', 10000)

const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)

console.log("Net salaries: ", organization.getNetSalaries()) // 22000