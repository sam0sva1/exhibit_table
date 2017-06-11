import React from 'react'
import { mount } from 'enzyme'
import Search from './index'

function init() {

    const props = {
        onInput: jest.fn()
    }

    const wrapper = mount(
        <Search {...props} />
    )

    return {
        wrapper,
        props
    }
}

describe('components', () => {

    describe('Search', () => {

        test('renders it self and buttons', () => {
            const { wrapper } = init()

            const input = wrapper.find('input')
            expect(input).toHaveLength(1)
            expect(input.props().placeholder).toBe('ввод для поиска')
        })

        test('input handles a change event', () => {
            const { wrapper, props } = init()

            wrapper.find('input').simulate('change')
            expect(props.onInput.mock.calls.length).toBe(1)
        })

    })
})
