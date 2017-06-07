import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleFilter } from 'actions'
import Checkbox from 'components/Checkbox'
import './Filter.sss'

@connect(
    state => ({ ...state }),
    (dispatch) => {
        return {
            onFilterClick: (label) => {
                dispatch(toggleFilter(label))
            }
        }
    }
)
class Filter extends Component {
    static propTypes = {
        filters: PropTypes.array,
        onFilterClick: PropTypes.func.isRequired
    }

    static defaultProps = {
        filters: []
    }

    render() {
        const { filters, onFilterClick } = this.props
        return (
            <div className='filter'>
                {filters.map(({ name, isActive }) => <Checkbox key={name} label={name} isChecked={isActive} toggleFilter={onFilterClick} />)}
            </div>
        )
    }
}

export default Filter
