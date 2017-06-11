import React from 'react'
import { mount } from 'enzyme'
import Paging from './index'

function init() {

    const props = {
        amount: 5,
        current: 3,
        onNumberClick: jest.fn()
    }

    const wrapper = mount(
        <Paging {...props} />
    )

    return {
        wrapper,
        props
    }
}

describe('components', () => {

    describe('Paging', () => {

        test('renders it self and buttons', () => {
            const { wrapper, props } = init()

            expect(wrapper.find('.pagination')).toHaveLength(1)
            expect(wrapper.find('button')).toHaveLength(props.amount)
        })

        test('current button is disabled', () => {
            const { wrapper, props } = init()

            expect(wrapper.find('button').at(props.current).getNode().disabled).toBe(true)
        })

        test('buttons handle clicks', () => {
            const { wrapper, props } = init()
            const index = 4

            wrapper.find('button').at(index).simulate('click')
            expect(props.onNumberClick.mock.calls.length).toBe(1)
            expect(props.onNumberClick.mock.calls[0][0]).toBe(index)
        })

    })
})
