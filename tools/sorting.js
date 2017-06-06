const prepare = (incoming, field) => {
    const item = field ? incoming[field] : incoming
    return item.toLowerCase().replace(' ', '')
}

const mainSorting = (a, b) => {
    if(a < b) return -1
    if(a > b) return 1
    return 0
}

export const array = (array, field) => {
    return array.sort((a, b) => {
        const first = prepare(a, field)
        const second = prepare(b, field)

        return mainSorting(first, second)
    })
}

export const properties = (state) => {
    const result = {}
    Object
        .keys(state)
        .sort((a, b) => mainSorting(a, b))
        .forEach(one => {
            result[one] = state[one]
        })
    return result
}

export default {
    array,
    properties
}