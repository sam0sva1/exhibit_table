export default (city, country) => {
    return (city && country) ? `${city}, ${country}` : `${city}${country}` || '—'
}
