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
    (dispatch) => {
        return {
            onSearchFieldInput: (input) => {
                dispatch(updateSearchToken(input))
            },
            onBtnClickHandler: (number) => {
                dispatch(changePage(number))
            }
        }
    }
)
@autobind
class Table extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        filters: PropTypes.array,
        items: PropTypes.array,
        onBtnClickHandler: PropTypes.func.isRequired,
        onSearchFieldInput: PropTypes.func.isRequired,
        pagination: PropTypes.object.isRequired,
    }

    static defaultProps = {
        filters: [],
        items: []
    }

    render() {
        const { items, filters, pagination: { part, current }, onSearchFieldInput, onBtnClickHandler } = this.props
        const pages = getPages(items, part)
        return (
            <div>
                <table className='table table-bordered'>
                    <TableHeader filters={filters} onSearchInput={onSearchFieldInput} />
                    <List page={pages[current]} />
                </table>
                <Paging
                    amount={pages.length}
                    current={current}
                    onNumberClick={onBtnClickHandler}
                />
            </div>
        )
    }
}

export default Table
