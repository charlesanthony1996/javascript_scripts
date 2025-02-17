const jump_search = (nums, value) => {
    const length = nums.length
    let step = Math.floor(Math.sqrt(length))

    let lower_bound = 0

    while(nums[Math.min(step, length) - 1] < value) {
        lower_bound = step
        step += lower_bound
        if (lower_bound >= length) {
            return -1
        }
    }

    const upper_bound = Math.min(step, length)
    while(nums[lower_bound] < value) {
        lower_bound++
        if(lower_bound === upper_bound) {
            return -1
        }
    }

    if (nums[lower_bound] === value) {
        return lower_bound
    }
    return -1
}

const nums = [1, 2, 3, 4, 5]
console.log(jump_search(nums, 5))