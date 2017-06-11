import React from 'react'
import PropTypes from 'prop-types'

const makeButtons = (number, current, onClick) => {
    const buttons = []
    for (let i = 0; i < number; i += 1) {
        const button = () => <button key={i} onClick={() => onClick(i)} disabled={i === current}>{ i + 1 }</button>
        buttons.push(button())
    }
    return buttons
}

const Paging = ({ amount, current, onNumberClick }) => (
    <div className='pagination'>
        {makeButtons(amount, current, onNumberClick)}
    </div>
)

Paging.propTypes = {
    amount: PropTypes.number.isRequired,
    current: PropTypes.number.isRequired,
    onNumberClick: PropTypes.func.isRequired
}

export default Paging
