import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import Filter from 'components/Filter'
import tools from 'Tools'
import './Table.sss'

const SearchField = ({ onInput }) => {
    const onChangeHandler = (event) => {
        onInput(event.target.value)
    }
    return (<input type="text" onChange={onChangeHandler} placeholder='ввод для поиска' />)
}

const Header = ({ filters, onSearchInput }) => {
    return (
        <thead>
            <tr>
                <th className='table__header table__header--name'>
                    Название
                    <SearchField onInput={onSearchInput} />
                </th>
                <th className='table__header table__header--origin'>
                    Место создания
                    <Filter />
                </th>
                <th className='table__header table__header--organisation'>Организания</th>
                <th className='table__header table__header--description'>Описание</th>
            </tr>
        </thead>
    )
}

const getRows = (items) => {
    return items.map(({name, description, organization, city, country}) => {
        return (
            <tr key={name}>
                <td>{name}</td>
                <td>{tools.prepareOrigin(city, country)}</td>
                <td>{organization}</td>
                <td>{description}</td>
            </tr>
        )
    })
}

const getFilteredItems = (items, filters) => {
    const activeFilters = Object.keys(filters).filter(key => filters[key])
    if (activeFilters.length) {
        return items.filter(({ city, country }) => {
            const origin = tools.prepareOrigin(city, country)
            for (let one of activeFilters) {
                if (one === origin) {
                    return true
                }
            }
            return false
        })
    } else {
        return items
    }
}

const searchByToken = (token, items) => {
    const trimedToken = token.toLowerCase().trim()
    return items.filter(one => {
        const decision = one.name.toLowerCase().indexOf(trimedToken)
        return decision === -1 ? false : true
    })
}



@connect(
    (state) => ({
        ...state,
        items: getFilteredItems(state.items, state.filters)
    }),
    null
)
@autobind
class Table extends Component {
    static propTypes = {
        items: PropTypes.array
    }

    static defaultProps = {
        items: []
    }

    state = {
        input: ''
    }

    onSearchFieldInput(input) {
        this.setState({ input })
    }

    getItems() {
        const token = this.state.input.trim()
        const { items } = this.props
        const result = token ? searchByToken(token, items) : items
        return getRows(result)
    }
    render() {
        return (
            <table className="table table-bordered">
                <Header filters={this.props.filters} onSearchInput={this.onSearchFieldInput} />
                <tbody>
                    {this.getItems()}
                </tbody>
            </table>
        )
    }
}

export default Table
