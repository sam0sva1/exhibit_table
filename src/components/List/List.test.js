import React from 'react'
import { shallow } from 'enzyme'
import { getTableRows } from '../Table/helpers'
import List from './index'

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

function init() {

    const props = {
        page: getTableRows(items)
    }

    const wrapper = shallow(
        <List {...props} />
    )

    return {
        wrapper,
        props
    }
}

describe('List', () => {
    test('render list of elements', () => {
        const { wrapper, props } = init()

        expect(wrapper.find('tbody')).toHaveLength(1)
        expect(wrapper.find('tr')).toHaveLength(props.page.length)
    })
})
