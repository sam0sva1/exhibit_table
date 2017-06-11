import React from 'react'
import { shallow } from 'enzyme'
import TableHeader from './index'

function init() {

    const props = {
        onSearchInput: jest.fn()
    }

    const wrapper = shallow(
        <TableHeader {...props} />
    )

    return {
        wrapper,
        props
    }
}

describe('components', () => {

    describe('TestHeader', () => {

        test('renders it self', () => {
            const { wrapper } = init()

            expect(wrapper.find('thead')).toHaveLength(1)
            expect(wrapper.find('.table__header')).toHaveLength(4)
        })

        test('Pass props to child Search component', () => {
            const { wrapper, props } = init()

            const SearchProps = wrapper.find('Search').props()
            expect(SearchProps.onInput).toBe(props.onSearchInput)
        })

    })
})
