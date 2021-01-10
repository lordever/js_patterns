/**
 * Для упорядочивания некоторого набора данных вы используете алгоритм
 * пузырьковой сортировки. Она отлично справляется с небольшими объемами,
 * но тормозит с крупными. У быстрой сортировки противоположная проблема.
 * Тогда вы решаете изменять алгоритм в зависимости от размера набора.
 * Это ваша Стратегия.
 * Шаблон Стратегия позволяет переключать используемый алгоритм в зависимости от ситуации.
 */

//Воплотить Стратегию в JavaScript помогут функции первого класса.
const bubbleSort = dataset => {
    console.log('Sorting with bubble sort')
    // ...
    // ...
    return dataset
}

const quickSort = dataset => {
    console.log('Sorting with quick sort')
    // ...
    // ...
    return dataset
}

//А это клиент, который может использовать любую стратегию:
const sorter = dataset => {
    if (dataset.length > 5) {
        return quickSort
    } else {
        return bubbleSort
    }
}

//Теперь можно сортировать массивы:
const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Sorting with quick sort
sorter2(shortDataSet) // Sorting with bubble sort