import React from 'react'

const Search = ({ onInput }) => {
    const onChangeHandler = (event) => {
        onInput(event.target.value)
    }
    return (<input type="text" onChange={onChangeHandler} placeholder='ввод для поиска' />)
}

export default Search