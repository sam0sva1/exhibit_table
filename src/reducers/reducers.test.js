import itemsReducer from './items'

describe('Reducers - items', () => {
    const initState = {
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

    test('Test 1 - CREACTE ITEM', () => {
        expect(
            itemsReducer(undefined, {})
        ).toEqual([])
    })

    test('Test 2 - CREACTE ITEM with action', () => {
        expect(
            itemsReducer([], firstItem)
        ).toEqual([initState])
    })

    test('Test 3 - CREACTE ITEM and sorting', () => {
        expect(
            itemsReducer([initState], secondItem)
        ).toEqual([{
            name: 'Арбуз',
            city: 'Ереван',
            country: 'Россия',
            organization: 'ОАО Изготовитель',
            desctiption: 'Инетерсный очерк',
            origin: 'Ереван, Россия'
        }, initState])
    })

})
