import React from 'react'

export const formPages = (items, numberOfItems) => {
    const pages = []
    items.forEach((item, idx) => {
        const i = Math.floor(idx / numberOfItems)
        if (!pages[i]) pages.push([])
        pages[i].push(item)
    })
    return pages
}

export const getTableRows = (items) => {
    return items.map(({ name, description, organization, origin }) => (
        <tr key={name}>
            <td>{name}</td>
            <td>{origin}</td>
            <td>{organization}</td>
            <td>{description}</td>
        </tr>
    ))
}

export const getPages = (items, part) => {
    return formPages(getTableRows(items), part)
}

export const getFilteredItems = (items, filters) => {
    const activeFilters = filters.filter(f => f.isActive)
    if (activeFilters.length) {
        return items.filter(({ origin }) => {
            for (const one of activeFilters) {
                if (one.name === origin) {
                    return true
                }
            }
            return false
        })
    } else {
        return items
    }
}

export const searchByToken = (token, items) => {
    const trimedToken = token.toLowerCase().trim()
    return items.filter((one) => {
        const decision = one.name.toLowerCase().indexOf(trimedToken)
        return decision !== -1
    })
}

export const prepareItems = (items, filters, searchToken) => {
    const token = searchToken.trim()
    const filteredItems = getFilteredItems(items, filters)
    return token ? searchByToken(token, filteredItems) : filteredItems
}
