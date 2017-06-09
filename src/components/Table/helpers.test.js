import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { formPages, getFilteredItems, searchByToken, getTableRows } from './helpers'

const toPages = (() => {
    const set = []
    for (let i = 1; i <= 100; i += 1) {
        set.push(i)
    }
    return set
})()

describe("Helpers - formPages", () => {

    test('Test 1 - 10 items in a page', () => {
        const expectation = expect(formPages(toPages, 10))
        expectation.toHaveLength(10)
        expectation
            .toEqual(expect.arrayContaining([
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
                [91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
            ]))
    })

})

const items = [
    {
        name: 'Красная алыча',
        origin: 'Махачкала, Россия',
        organization: 'Organization 1',
        description: 'Desctioption 1'
    },
    {
        name: 'Мефистофель',
        origin: 'Копенгаген, Дания',
        organization: 'Organization 2',
        description: 'Desctioption 2'
    },
    {
        name: '1123581321',
        origin: 'Бангкок, Таиланд',
        organization: 'Organization 3',
        description: 'Desctioption 3'
    },
    {
        name: 'Фисташки',
        origin: 'Бангкок, Таиланд',
        organization: 'Organization 4',
        description: 'Desctioption 4'
    }
]

const filtersForTest1 = [
    { name: 'Бангкок, Таиланд', isActive: false },
    { name: 'Копенгаген, Дания', isActive: false },
    { name: 'Махачкала, Россия', isActive: false },
    { name: 'Мельбурн, Австралия', isActive: false }
]

const filtersForTest2 = [
    { name: 'Бангкок, Таиланд', isActive: false },
    { name: 'Копенгаген, Дания', isActive: true },
    { name: 'Махачкала, Россия', isActive: false },
    { name: 'Мельбурн, Австралия', isActive: false }
]

const filtersForTest3 = [
    { name: 'Бангкок, Таиланд', isActive: false },
    { name: 'Копенгаген, Дания', isActive: true },
    { name: 'Махачкала, Россия', isActive: true },
    { name: 'Мельбурн, Австралия', isActive: false }
]

const filtersForTest4 = [
    { name: 'Бангкок, Таиланд', isActive: true },
    { name: 'Копенгаген, Дания', isActive: false },
    { name: 'Махачкала, Россия', isActive: false },
    { name: 'Мельбурн, Австралия', isActive: true }
]

describe("Helpers - getFilteredItems", () => {

    test('Test 1 - no filters', () => {
        const expectation = expect(getFilteredItems(items, filtersForTest1))
        expectation.toHaveLength(4)
        expectation.toEqual(expect.arrayContaining(items))
    })

    test('Test 2 - 1 filter', () => {
        const expectation = expect(getFilteredItems(items, filtersForTest2))
        expectation.toHaveLength(1)
        expectation.toEqual(expect.arrayContaining([items[1]]))
    })

    test('Test 3 - 2 filter for 2 items', () => {
        const expectation = expect(getFilteredItems(items, filtersForTest3))
        expectation.toHaveLength(2)
        expectation.toEqual(expect.arrayContaining([items[0], items[1]]))
    })

    test('Test 4 - 2 filters, but 1 have no items and one have 2 items', () => {
        const expectation = expect(getFilteredItems(items, filtersForTest4))
        expectation.toHaveLength(2)
        expectation.toEqual(expect.arrayContaining([items[2], items[3]]))
    })

})

describe('Helpers - searchByToken', () => {

    test('Test 1 - no matches, only spaces', () => {
        const expectation = expect(searchByToken('   ', items))
        expectation.toHaveLength(4)
        expectation.toEqual(expect.arrayContaining(items))
    })

    test('Test 2 - one match', () => {
        const expectation = expect(searchByToken(' 35813 ', items))
        expectation.toHaveLength(1)
        expectation.toEqual(expect.arrayContaining([items[2]]))
    })

    test('Test 3 - two matches', () => {
        const expectation = expect(searchByToken(' фист ', items))
        expectation.toHaveLength(2)
        expectation.toEqual(expect.arrayContaining([items[1], items[3]]))
    })
})

describe('Tabel - getTableRows', () => {

    test('', () => {
        const component = shallow(<tbody>{getTableRows(items)}</tbody>)
        expect(component.find('td')).toHaveLength(16)
        expect(component.find('tr')).toHaveLength(4)
        expect(component.find('tr').first().html()).toEqual('<tr><td>Красная алыча</td><td>Махачкала, Россия</td><td>Organization 1</td><td>Desctioption 1</td></tr>')
    })

})
