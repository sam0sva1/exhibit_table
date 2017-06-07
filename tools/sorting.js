const prepare = (incoming, field) => {
    const item = field ? incoming[field] : incoming
    return item.toLowerCase().replace(' ', '')
}

const mainSorting = (a, b) => {
    if (a < b) return -1
    if (a > b) return 1
    return 0
}

const array = (array, field) => {
    return array.sort((a, b) => {
        const first = prepare(a, field)
        const second = prepare(b, field)

        return mainSorting(first, second)
    })
}

export default array
