const nums = [1, 5,2,4,5,56,43,2,46]
console.log('original array: ', nums)


let is_sorted = true
while(is_sorted) {
    for(let i = 0; i < nums.length - 1;i++) {
        if (nums[i] > nums[i+ 1]) {
            let temp = nums[i]
            nums[i] = nums[i + 1]
            nums[i+ 1] = temp
            is_sorted = true
        }
    }

    if (is_sorted) {
        break
    }
    is_sorted = false

    for (let j = nums.length - 1; j = 0;j--) {
        if (nums[j- 1] > nums[j]) {
            let temp = nums[j]
            nums[j] = nums[j - 1]
            nums[j - 1] = temp
            is_sorted = true
        }
    }
}

console.log('Sorted array: ', nums)