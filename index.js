function create(array) {
    var tree = new Map()
    array.map((value, index) => {
        for (var i = 0; i < value.length; i++) {
            if (tree.has(i)) {
                if (tree.get(i).has(value.substring(0, i + 1))) {
                    value.length == i + 1 ? tree.get(i).get(value.substring(0, i + 1)).add(index) : null
                } else {
                    tree.get(i).set(value.substring(0, i + 1), value.length == i + 1 ? new Set([index]) : new Set([]))
                }
            } else {
                tree.set(i, new Map([[value.substring(0, i + 1), value.length == i + 1 ? new Set([index]) : new Set()]]))
            }
        }
    })
    return tree
}

module.exports = {
    create
}
