import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ onInput }) => {
    const onChangeHandler = (event) => {
        onInput(event.target.value)
    }
    return (<input type='text' onChange={onChangeHandler} placeholder='ввод для поиска' />)
}

Search.propTypes = {
    onInput: PropTypes.func.isRequired
}

export default Search
