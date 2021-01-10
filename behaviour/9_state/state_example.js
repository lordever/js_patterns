/**
 * Вы рисуете в Paint. В зависимости от вашего выбора кисть меняет свое состояние:
 * рисует красным, синим или любым другим цветом.
 * Паттерн Состояние позволяет изменять поведение класса при изменении состояния.
 */

/**
 * Создадим текстовый редактор, в котором можно менять состояние текста – жирный, курсив и т. д
 * Это функции преобразования:
 */
const upperCase = inputString => inputString.toUpperCase()
const lowerCase = inputString => inputString.toLowerCase()
const defaultTransform = inputString => inputString

//А вот и сам редактор:
class TextEditor {
    constructor(transform) {
        this._transform = transform
    }

    setTransform(transform) {
        this._transform = transform
    }

    type(words) {
        console.log(this._transform(words))
    }
}

//Можно работать:
const editor = new TextEditor(defaultTransform)

editor.type('First line')

editor.setTransform(upperCase)

editor.type('Second line')
editor.type('Third line')

editor.setTransform(lowerCase)

editor.type('Fourth line')
editor.type('Fifth line')

// First line
// SECOND LINE
// THIRD LINE
// fourth line
// fifth line

