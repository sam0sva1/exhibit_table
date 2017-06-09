import itemsReducer from './items'
import filtersReducer from './filters'

const initItemsState = {
    name: 'Экспонат',
    city: 'Уральск',
    country: 'Россия',
    organization: 'ООО Производитель',
    desctiption: 'Некоторое описание',
    origin: 'Уральск, Россия'
}

const firstItem = {
    type: 'CREATE_ITEM',
    item: {
        name: 'Экспонат',
        city: 'Уральск',
        country: 'Россия',
        organization: 'ООО Производитель',
        desctiption: 'Некоторое описание'
    }
}

const secondItem = {
    type: 'CREATE_ITEM',
    item: {
        name: 'Арбуз',
        city: 'Ереван',
        country: 'Россия',
        organization: 'ОАО Изготовитель',
        desctiption: 'Инетерсный очерк'
    }
}

describe('Reducers - items', () => {

    test('Test 1 - no action', () => {
        expect(
            itemsReducer(undefined, {})
        ).toEqual([])
    })

    test('Test 2 - CREACTE ITEM with action', () => {
        expect(
            itemsReducer([], firstItem)
        ).toEqual([initItemsState])
    })

    test('Test 3 - CREACTE ITEM and sorting', () => {
        expect(
            itemsReducer([initItemsState], secondItem)
        ).toEqual([{
            name: 'Арбуз',
            city: 'Ереван',
            country: 'Россия',
            organization: 'ОАО Изготовитель',
            desctiption: 'Инетерсный очерк',
            origin: 'Ереван, Россия'
        }, initItemsState])
    })

})

const initFiltersState = [
    { name: 'Калининград, Россия', isActive: false },
    { name: 'Вильнюс, Литва', isActive: false }
]

describe('Reducers - filters', () => {

    test('Test 1 - no action', () => {
        expect(
            filtersReducer(undefined, {})
        ).toEqual([])
    })

    test('Test 2 - TOGGLE FILTER', () => {
        expect(
            filtersReducer(initFiltersState, {
                type: 'TOGGLE_FILTER',
                label: 'Вильнюс, Литва'
            })
        ).toEqual([
            { name: 'Калининград, Россия', isActive: false },
            { name: 'Вильнюс, Литва', isActive: true }
        ])
    })

    test('Test 3 - CREATE ITEM and sorting', () => {
        expect(
            filtersReducer(initFiltersState, {
                type: 'CREATE_ITEM',
                item: {
                    name: 'Арбуз',
                    city: 'Ереван',
                    country: 'Россия',
                    organization: 'ОАО Изготовитель',
                    desctiption: 'Инетерсный очерк'
                }
            })
        ).toEqual([
            { name: 'Вильнюс, Литва', isActive: false },
            { name: 'Ереван, Россия', isActive: false },
            { name: 'Калининград, Россия', isActive: false }
        ])
    })

})
