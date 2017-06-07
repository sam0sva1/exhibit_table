export const toggleFilter = label => ({
    type: 'TOGGLE_FILTER',
    label
})

export const updatePagination = amount => ({
    type: 'UPDATE_PAGINATION',
    amount
})

export const changePage = number => ({
    type: 'CHANGE_PAGE',
    number
})

export const updateSearchToken = token => ({
    type: 'NEW_SEARCH',
    token
})

export const createItem = item => ({
    type: 'CREATE_ITEM',
    item
})
