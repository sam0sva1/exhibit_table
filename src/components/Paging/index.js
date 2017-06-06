import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changePage } from 'actions'

const makeButtons = (number, current, onClick) => {
    const buttons = []
    for (let i = 0; i < number; i += 1) {
        const button = () => <button key={i} onClick={() => onClick(i)} disabled={i === current}>{i+1}</button>
        buttons.push(button())
    }
    return buttons
}

const getNumberOfPages = (amount, part) => {
    return Math.ceil(amount / part)
}

@connect(
    (state) => ({...state}),
    (dispatch) => {
        return {
            onNumberClick: (number) => {
                dispatch(changePage(number))
            }
        }
    }
)
class Paging extends Component {
    static propTypes = {
        pagination: PropTypes.object,
        amount: PropTypes.number,
    }

    render() {
        const pages = getNumberOfPages(this.props.amount, this.props.pagination.part)
        return (
            <div className='pagination'>
                {makeButtons(pages, this.props.pagination.current, this.props.onNumberClick)}
            </div>
        )
    }
}

export default Paging