import React from 'react'
import { Provider } from 'react-redux'
import { shallow, mount } from 'enzyme'
import Checkbox from './index'

function init() {
    const props = {
        label: 'Нейпьидо, Мьянма',
        isChecked: true,
        toggleFilter: jest.fn()
    }

    const wrapper = shallow(
        <Checkbox {...props} />
    )

    return {
        wrapper,
        props
    }
}

describe('Components', () => {

    describe('Checkbox', () => {

        test('renders', () => {
            const { wrapper, props } = init()

            expect(wrapper.find('div')).toHaveLength(1)
            expect(wrapper.find('label')).toHaveLength(1)
            expect(wrapper.find('label').first().text()).toBe(props.label)
            expect(wrapper.find('input')).toHaveLength(1)

            wrapper.find('input').simulate('change')
            expect(props.toggleFilter.mock.calls.length).toBe(1)
            expect(props.toggleFilter.mock.calls[0][0]).toBe(props.label)
        })

        test('sends its label when changed', () => {
            const { wrapper, props } = init()

            wrapper.find('input').simulate('change')
            expect(props.toggleFilter.mock.calls.length).toBe(1)
            expect(props.toggleFilter.mock.calls[0][0]).toBe(props.label)
        })

    })
})
