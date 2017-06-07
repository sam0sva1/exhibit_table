import prepareOrigin from './prepareOrigin'

const prepareData = (items) => {
    return items.map((one) => {
        return {
            ...one,
            origin: prepareOrigin(one.city, one.country)
        }
    })
}

export default prepareData
