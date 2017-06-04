import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

@connect(
    (state) => ({...state}),
    null
)
class Table extends Component {
    render() {
        return (
            <div>
                Here is a Table
            </div>
        )
    }
}

Table.propTypes = {
    items: PropTypes.array
}

export default Table
