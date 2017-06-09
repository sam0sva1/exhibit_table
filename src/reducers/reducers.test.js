import itemsReducer from './items'
import filtersReducer from './filters'
import paginationReducer from './pagination'
import serchTokenReducer from './searchToken'

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

describe('Reducers - pagination', () => {

    test('Test 1 - no action', () => {
        expect(
            paginationReducer(undefined, {})
        ).toEqual({
            current: 0,
            part: 2
        })
    })

    test('Test 2 - TOGGLE FILTER', () => {
        expect(
            paginationReducer({
                current: 2,
                part: 2
            }, {
                type: 'TOGGLE_FILTER'
            })
        ).toEqual({
            current: 0,
            part: 2
        })
    })

    test('Test 3 - NEW SEARCH', () => {
        expect(
            paginationReducer({
                current: 2,
                part: 2
            }, {
                type: 'NEW_SEARCH'
            })
        ).toEqual({
            current: 0,
            part: 2
        })
    })

    test('Test 4 - CHANGE PAGE', () => {
        expect(
            paginationReducer({
                current: 0,
                part: 2
            }, {
                type: 'CHANGE_PAGE',
                number: 3
            })
        ).toEqual({
            current: 3,
            part: 2
        })
    })

})

describe('Reducers - searchToken', () => {

    test('Test 1 - no action', () => {
        expect(
            serchTokenReducer(undefined, {})
        ).toEqual('')
    })

    test('Test 2 - NEW SEARCH', () => {
        expect(
            serchTokenReducer(undefined, {
                type: 'NEW_SEARCH',
                token: 'Экспонат'
            })
        ).toEqual('Экспонат')
    })

})
