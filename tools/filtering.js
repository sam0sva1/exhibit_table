import sorting from './sorting'

export default (array) => {
    const names = []
    const filters = {}

    array
        .map(({ city, country }) => {
            if (city && country) {
                return `${city}, ${country}`
            } else {
                return `${city}${country}` || '—'
            }
        })
        .forEach(origin => {
            if (!names.find(filter => filter === origin)) {
                names.push(origin)
            }
        })

    sorting(names).forEach(filter => filters[filter] = false)

    return filters
}