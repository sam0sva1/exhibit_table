import sorting from './sorting'
import filtering from './filtering'

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

    describe('Filtering', () => {

        test('Test 1 - gets an array of items and returns an array of filters', () => {
            const items = [
                { name: 'Машина контрольно-кассовая электронная «ЭКР- 3102 Ф»', city: 'Курск', country: 'Россия', organization: 'ОАО "Счетмаш"', description: 'Характеризует модернизацию конструкции и расширение набора выполняемых функций электронных контрольно-кассовых машин с программированием цен на товары конца 1990-х гг.' },
                { name: 'Образец серной кислоты', city: 'Усть-Каменогорск', country: 'СССР', organization: 'Усть-Каменогорский ордена Ленина свинцово-цинковый комбинат', description: 'Документирует выпуск материалов Усть-Каменогорского свинцово-цинкового комбината в 1960-х гг.' },
                { name: 'Фотоаппарат \'Glyphoscope\' стереоскопический, ящичный', city: 'Париж', country: 'Франция', organization: 'Фирма "J.RICHARD"', description: '' },
                { name: 'Кассета к киносъемочному апарату "Кинап"', city: 'Ленинград', country: 'СССР', organization: 'Ленинградский завод "Кинап" (Ленкинап)', description: 'Предназначена для хранения неэкспонированной пленки' },
                { name: 'Футляр фотоаппарата "Certo Dollina"', city: 'Дрезден', country: 'Германия', organization: '', description: '' },
                { name: 'Фотоаппарат \'Смена\', клаппкамера с автоматически устанавливающейся объективной доской', city: '', country: '', organization: 'Государственный оптико-механический завод (ГОМЗ)', description: '' }
            ]

            const result = [
                { name: 'Дрезден, Германия', isActive: false },
                { name: 'Курск, Россия', isActive: false },
                { name: 'Ленинград, СССР', isActive: false },
                { name: 'Париж, Франция', isActive: false },
                { name: 'Усть-Каменогорск, СССР', isActive: false },
                { name: '—', isActive: false }
            ]

            expect(filtering(items)).toEqual(result)
        })

    })

})
