const prepare = (incoming) => {
    return incoming.name.toLowerCase().replace(' ', '')
}

export default (array) => {
    return array.sort(function(a, b){
        const first = prepare(a)
        const second = prepare(b)

        if(first < second) return -1;
        if(first > second) return 1;
        return 0;
    })
}