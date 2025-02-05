/**
 * У музыкальных плееров есть кнопки next и previous, которые позволяют
 * последовательно перебирать песни или радиостанции.
 * Паттерн Итератор предоставляет доступ к элементам объекта, не раскрывая
 * способ их внутреннего представления.
 */

//Радиостанция:
class RadioStation {
    constructor(frequency) {
        this.frequency = frequency
    }

    getFrequency() {
        return this.frequency
    }
}

//Итератор:
class StationList {
    constructor() {
        this.stations = []
    }

    addStation(station) {
        this.stations.push(station)
    }

    removeStation(toRemove) {
        const toRemoveFrequency = toRemove.getFrequency()
        this.stations = this.stations.filter(station => {
            return station.getFrequency() !== toRemoveFrequency
        })
    }
}

//Можно добавлять и удалять станции, а также получать их частоту:
const stationList = new StationList()

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach(station => console.log(station.getFrequency()))

stationList.removeStation(new RadioStation(89)) // Will remove station 89