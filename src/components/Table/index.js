import React, { Component } from 'react'
import PropTypes from 'prop-types'
import autobind from 'autobind-decorator'
import { connect } from 'react-redux'
import TableHeader from 'components/TableHeader'
import Paging from 'components/Paging'
import List from 'components/List'
import tools from 'Tools'
import { changePage, updateSearchToken } from 'actions'
import { prepareItems, getPages } from './helpers'
import './Table.sss'

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
                    <List page={pages[current]} />
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
