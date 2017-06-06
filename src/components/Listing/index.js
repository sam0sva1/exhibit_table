import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changePage } from 'actions'

const formPages = (items, numberOfItems) => {
    const pages = []
    items.forEach((item, idx) => {
        const i = Math.floor(idx / numberOfItems)
        if (!pages[i]) pages.push([])
        pages[i].push(item)
    })
    return pages
}

@connect(
    (state) => ({
        ...state
    }),
    null
)
class Listing extends Component {
    static propTypes = {
        pagination: PropTypes.object,
        list: PropTypes.array
    }

    render() {
        const pages = formPages(this.props.list, this.props.pagination.part)
        const page = pages[this.props.pagination.current]
        return (
            <tbody>
                {page}
            </tbody>
        )
    }
}

export default Listing