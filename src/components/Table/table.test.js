import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import Table from './index'
import configureStore from '../../configureStore'

function init() {
    const Wrapper = ({ children }) => (
        <div>
            {children}
        </div>
    )

    const wrapper = mount(
        <Provider store={configureStore()}>
            <Wrapper>
                <Table />
            </Wrapper>
        </Provider>
        
    )

    return wrapper
}

describe('components', () => {

    describe('Test', () => {

        test('render it self and children', () => {
            const wrapper = init()

            expect(wrapper.find('table').hasClass('table')).toBe(true)
            expect(wrapper.find('thead')).toHaveLength(1)
            expect(wrapper.find('tbody')).toHaveLength(1)

        })

    })
})
