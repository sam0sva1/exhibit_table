import React from 'react'
import { mount } from 'enzyme'
import Form from './index'
import configureStore from '../../configureStore'

function init() {

    const wrapper = mount(
        <Form store={configureStore()} />
    )

    return wrapper
}

describe('components', () => {

    describe('Form', () => {

        test('renders it self and collupsing button', () => {
            const wrapper = init()

            expect(wrapper.find('.form')).toHaveLength(1)
            expect(wrapper.find('button')).toHaveLength(1)
        })

        test('Button shows form inputs', () => {
            const wrapper = init()

            expect(wrapper.find('input')).toHaveLength(0)
            wrapper.find('button').simulate('click')
            expect(wrapper.find('input')).toHaveLength(4)
            expect(wrapper.find('textarea')).toHaveLength(1)
        })

        test('submit button rendered disabled', () => {
            const wrapper = init()

            wrapper.find('button').simulate('click')
            const submitButton = wrapper.find('.form__btn')
            expect(submitButton).toHaveLength(1)
            expect(submitButton.getNode().disabled).toBe(true)
        })

    })
})
