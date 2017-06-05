import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './Filter.sss'

const Checkbox = ({ label, isChecked }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    value={label}
                    checked={isChecked}
                />
                {label}
            </label>
        </div>
    )
}

@connect(
    (state) => ({...state}),
    null
)
class FilterField extends Component {
    render() {
        const { filters } = this.props
        return (
            <div className='filter'>
                {Object.keys(filters).map(key => <Checkbox key={key} label={key} isChecked={filters[key]}/>)}
            </div>
        )
    }
}

FilterField.propTypes = {
    filters: PropTypes.array
}

export default FilterField