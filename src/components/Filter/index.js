import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleFilter } from 'actions'
import './Filter.sss'

const Checkbox = ({ label, isChecked, toggleFilter }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                    onChange={() => toggleFilter(label)}
                />
                {label}
            </label>
        </div>
    )
}

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
class FilterField extends Component {
    render() {
        const { filters, onFilterClick } = this.props
        return (
            <div className='filter'>
                {Object.keys(filters).map(key => <Checkbox key={key} label={key} isChecked={filters[key]} toggleFilter={onFilterClick}/>)}
            </div>
        )
    }
}

FilterField.propTypes = {
    filters: PropTypes.array
}

export default FilterField