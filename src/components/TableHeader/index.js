import React from 'react'
import PropTypes from 'prop-types'
import Filter from 'components/Filter'
import Search from 'components/Search'
import './TableHeader.sss'

const TableHeader = ({ onSearchInput }) => (
    <thead>
        <tr>
            <th className='table__header table__header--name'>
                Название
                <Search onInput={onSearchInput} />
            </th>
            <th className='table__header table__header--origin'>
                Место создания
                <Filter />
            </th>
            <th className='table__header table__header--organisation'>Организания</th>
            <th className='table__header table__header--description'>Описание</th>
        </tr>
    </thead>
)

TableHeader.propTypes = {
    onSearchInput: PropTypes.func.isRequired
}

export default TableHeader
