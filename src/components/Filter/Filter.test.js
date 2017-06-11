import React from 'react'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import Filter from './index'
import configureStore from '../../configureStore'

const store = configureStore()

function init(store) {
    const state = store.getState()

    const Wrapper = ({ children }) => (
        <div>
            {children}
        </div>
    )

    const wrapper = mount(
        <Provider store={store}>
            <Wrapper>
                <Filter />
            </Wrapper>
        </Provider>
        
    )

    return {
        wrapper,
        filters: state.filters
    }
}

describe('Components', () => {

    describe('Filter', () => {

        test('renders it self and checkboxes', () => {
            const { wrapper, filters } = init(store)

            expect(wrapper.find('.filter')).toHaveLength(1)
            expect(wrapper.find('input')).toHaveLength(filters.length)
            expect(wrapper.find('label').first().text()).toBe(filters[0].name)

        })

    })
})
