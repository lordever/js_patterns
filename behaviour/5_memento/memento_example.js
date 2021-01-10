/**
 * Некоторые калькуляторы умеют сохранять в памяти последнее выражение,
 * то есть последнее состояние вычислений. Шаблон Хранитель (memento)
 * захватывает текущее состояние объекта и дает возможность восстанавливать его.
 */

//Создадим текстовый редактор с функцией сохранения контента.
//Объект Хранителя:
class EditorMemento {
    constructor(content) {
        this._content = content
    }

    getContent() {
        return this._content
    }
}

//Сам редактор:
class Editor {
    constructor() {
        this._content = ''
    }

    type(words) {
        this._content = this._content + ' ' + words
    }

    getContent() {
        return this._content
    }

    save() {
        return new EditorMemento(this._content)
    }

    restore(memento) {
        this._content = memento.getContent()
    }
}

//Теперь все данные будут сохраняться
const editor = new Editor()

// что-нибудь пишем
editor.type('This is the first sentence.')
editor.type('This is second.')

// сохраняем состояние
const saved = editor.save()

// пишем что-нибудь еще
editor.type('And this is third.')

// контент до сохранения
console.log(editor.getContent())// This is the first sentence. This is second. And this is third.

// восстановление последнего состояния
editor.restore(saved)

console.log(editor.getContent()) // This is the first sentence. This is second.

