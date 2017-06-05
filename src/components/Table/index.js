import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Filter from 'components/Filter'
import tools from 'Tools'
import './Table.sss'

const Header = ({ filters }) => {
    return (
        <thead>
            <tr>
                <th className='table__header table__header--name'>Название</th>
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

const getShowingItems = (items, filters) => {
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

@connect(
    (state) => ({
        ...state,
        items: getShowingItems(state.items, state.filters)
    }),
    null
)
class Table extends Component {
    render() {
        return (
            <table className="table table-bordered">
                <Header filters={this.props.filters}/>
                <tbody>
                    {getRows(this.props.items)}
                </tbody>
            </table>
        )
    }
}

Table.propTypes = {
    items: PropTypes.array,
    filters: PropTypes.array
}

export default Table
