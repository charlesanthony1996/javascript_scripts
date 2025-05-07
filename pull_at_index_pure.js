function pull_at_index(arr, pullarr) {
    var removed = []

    var kept = []

    for (var i = 0; i < arr.length; i++) {
        var shouldremove = false

        for (var j = 0; j < pullarr.length; j++) {
            if (i === pullarr[j]) {
                shouldremove = true
                break
            }
        }

        if (shouldremove) {
            removed[removed.length] = arr[i]
        } else {
            kept[kept.length] = arr[i]
        }
    }

    arr.length = 0

    for (var k = 0; k < kept.length; k++) {
        arr[arr.length] = kept[k]
    }

    return removed
}

var arr1 = ['a', 'b', 'c', 'd']
console.log(pull_at_index(arr1, [1]))
console.log(arr1)

// var arr2 = ['1', '2', '3', '4']
// console.log(pull_at_index(arr2, [1]))