import sorting from './sorting'

describe('Tools', () => {

    describe('Sorting', () => {

        test('Test 1 - gets an array of primitives and returns sorted array', () => {
            const setOfPrimitives = ['one', 'two', 'three', 'four', 'five', 'six', 'seven']

            expect(sorting(setOfPrimitives)).toEqual(['five', 'four', 'one', 'seven', 'six', 'three', 'two'])
        })

        test('Test 2 - gets an array of objects and name of field for sorting', () => {
            const setOfPrimitives = [
                { fieldToSort: 'one', anotherField: 3 },
                { fieldToSort: 'two', anotherField: 5 },
                { fieldToSort: 'three', anotherField: 4 },
                { fieldToSort: 'four', anotherField: 2 },
                { fieldToSort: 'five', anotherField: 1 }
            ]

            expect(sorting(setOfPrimitives, 'fieldToSort'))
                .toEqual([
                    { fieldToSort: 'five', anotherField: 1 },
                    { fieldToSort: 'four', anotherField: 2 },
                    { fieldToSort: 'one', anotherField: 3 },
                    { fieldToSort: 'three', anotherField: 4 },
                    { fieldToSort: 'two', anotherField: 5 }
                ])
        })

    })

})
