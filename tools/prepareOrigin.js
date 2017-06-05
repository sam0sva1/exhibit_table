export default ( city, country ) => {
    if (city && country) {
        return `${city}, ${country}`
    } else {
        return `${city}${country}` || '—'
    }
}