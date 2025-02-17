const ternary_search = (arr, target, left, right) => {
    if (right >= left) {
        let mid1 = Math.floor(left + (right - left) / 3)
        let mid2 = Math.floor(right + (right - left) / 3)

        if (arr[mid1] == target) {
            return mid1
        }

        else if(arr[mid2] == target) {
            return mid2
        }

        if (target < arr[mid1]) {
            return ternary_search(arr, target, left, mid1 - 1)
        }

        else if (target > arr[mid2]) {
            return ternary_search(arr, target, mid2 + 1, right)
        }
        
        else {
            return ternary_search(arr, target, mid1 + 1, mid2 - 1)
        }
    }

    return -1
}

console.log(ternary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 0, 5))
console.log(ternary_search([1, 2, 3, 4, 5, 6, 7, 8, 9], 2, 6, 8))