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

const formPages = (items, numberOfItems) => {
    const pages = []
    items.forEach((item, idx) => {
        const i = Math.floor(idx / numberOfItems)
        if (!pages[i]) pages.push([])
        pages[i].push(item)
    })
    return pages
}

const getPages = (items, part) => {
    return formPages(getTableRows(items), part)
}

const getTableRows = (items) => {
    return items.map(({ name, description, organization, origin }) => (
        <tr key={name}>
            <td>{name}</td>
            <td>{origin}</td>
            <td>{organization}</td>
            <td>{description}</td>
        </tr>
    ))
}

const getFilteredItems = (items, filters) => {
    const activeFilters = filters.filter(f => f.isActive)
    if (activeFilters.length) {
        return items.filter(({ origin }) => {
            for (const one of activeFilters) {
                if (one.name === origin) {
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
    return items.filter((one) => {
        const decision = one.name.toLowerCase().indexOf(trimedToken)
        return decision !== -1
    })
}

const prepareItems = (items, filters, searchToken) => {
    const token = searchToken.trim()
    const filteredItems = getFilteredItems(items, filters)
    return token ? searchByToken(token, filteredItems) : filteredItems
}

@connect(
    state => ({
        ...state,
        items: prepareItems(state.items, state.filters, state.searchToken)
    }),
    null
)
@autobind
class Table extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        filters: PropTypes.array,
        items: PropTypes.array,
        pagination: PropTypes.object.isRequired
    }

    static defaultProps = {
        filters: [],
        items: []
    }

    onSearchFieldInput(input) {
        this.props.dispatch(updateSearchToken(input))
    }

    render() {
        const { items, filters, dispatch, pagination: { part, current } } = this.props
        const pages = getPages(items, part)
        return (
            <div>
                <table className='table table-bordered'>
                    <TableHeader filters={filters} onSearchInput={this.onSearchFieldInput} />
                    <Listing page={pages[current]} />
                </table>
                <Paging
                    amount={pages.length}
                    current={current}
                    onNumberClick={(number) => { dispatch(changePage(number)) }}
                />
            </div>
        )
    }
}

export default Table
