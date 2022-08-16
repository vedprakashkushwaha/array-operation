arrayHandler = {}
arrayHandler.removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
        arr = []
    }
    let theSet = new Set(arr)
    let uniqueArr = [...theSet]
    return uniqueArr
}

arrayHandler.getSum = (arr) => {
    return arr.reduce((acc, curr) => acc += curr, 0)
}

arrayHandler.getMax = (arr) => {
    return arr.reduce((acc, curr) => acc = acc < curr ? curr : acc, a[0]);
}

arrayHandler.getMin = (arr) => {
    return arr.reduce((acc, curr) => acc = acc > curr ? curr : acc, a[0]);

}

module.exports = arrayHandler