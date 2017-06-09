import * as actions from './index'

describe('Actions', () => {

    test('createItem action', () => {
        const item = {
            name: 'Арбуз',
            city: 'Ереван',
            country: 'Россия',
            organization: 'ОАО Изготовитель',
            desctiption: 'Инетерсный очерк'
        }

        const expectedAction = {
            type: 'CREATE_ITEM',
            item
        }

        expect(actions.createItem(item)).toEqual(expectedAction)
    })

})
