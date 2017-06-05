const prepare = (incoming, field) => {
    const item = field ? incoming[field] : incoming
    return item.toLowerCase().replace(' ', '')
}

export default (array, field) => {
    return array.sort(function(a, b){
        const first = prepare(a, field)
        const second = prepare(b, field)

        if(first < second) return -1;
        if(first > second) return 1;
        return 0;
    })
}