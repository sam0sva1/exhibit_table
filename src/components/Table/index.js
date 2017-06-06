import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import TableHeader from 'components/TableHeader'
import Paging from 'components/Paging'
import Listing from 'components/Listing'
import tools from 'Tools'
import { changePage, updateSearchToken } from 'actions'
import './Table.sss'

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
        items: PropTypes.array,
        pagination: PropTypes.object,
        searchToken: PropTypes.string
    }

    static defaultProps = {
        items: []
    }

    onSearchFieldInput(input) {
        this.props.dispatch(updateSearchToken(input))
    }

    getItems() {
        const { items, searchToken } = this.props
        const token = searchToken.trim()
        const result = token ? searchByToken(token, items) : items
        return getRows(result)
    }

    render() {
        const items = this.getItems()
        return (
            <div>
                <table className="table table-bordered">
                    <TableHeader filters={this.props.filters} onSearchInput={this.onSearchFieldInput} />
                    <Listing list={items} />
                </table>
                <Paging amount={items.length}/>
            </div>
        )
    }
}

export default Table
