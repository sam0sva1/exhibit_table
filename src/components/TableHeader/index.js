import React from 'react'
import Filter from 'components/Filter'
import Search from 'components/Search'

const TableHeader = ({ filters, onSearchInput }) => {
    return (
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
}

export default TableHeader