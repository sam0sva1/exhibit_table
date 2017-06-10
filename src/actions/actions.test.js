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

    test('changePage action', () => {

        const expectedAction = {
            type: 'CHANGE_PAGE',
            number: 3
        }

        expect(actions.changePage(3)).toEqual(expectedAction)
    })

    test('updateSearchToken action', () => {

        const expectedAction = {
            type: 'NEW_SEARCH',
            token: 'one two'
        }

        expect(actions.updateSearchToken('one two')).toEqual(expectedAction)
    })

    test('toggleFilter action', () => {

        const expectedAction = {
            type: 'TOGGLE_FILTER',
            label: 'Мариуполь, Украина'
        }

        expect(actions.toggleFilter('Мариуполь, Украина')).toEqual(expectedAction)
    })

})
