import sorting from './sorting'
import prepareOrigin from './prepareOrigin'

export default (array) => {
    const names = []
    const filters = {}

    array
        .map(({ city, country }) => {
            return prepareOrigin(city, country)
        })
        .forEach(origin => {
            if (!names.find(filter => filter === origin)) {
                names.push(origin)
            }
        })

    sorting.array(names)
        .forEach(filter => filters[filter] = false)

    return filters
}