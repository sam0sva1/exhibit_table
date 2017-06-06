import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleFilter } from 'actions'
import Checkbox from 'components/Checkbox'
import './Filter.sss'

@connect(
    (state) => ({...state}),
    (dispatch) => {
        return {
            onFilterClick: (label) => {
                dispatch(toggleFilter(label))
            }
        }
    }
)
class Filter extends Component {
    render() {
        const { filters, onFilterClick } = this.props
        return (
            <div className='filter'>
                {Object.keys(filters).map(key => <Checkbox key={key} label={key} isChecked={filters[key]} toggleFilter={onFilterClick}/>)}
            </div>
        )
    }
}

Filter.propTypes = {
    filters: PropTypes.array
}

export default Filter