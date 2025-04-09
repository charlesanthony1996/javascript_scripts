function pull(arr, valuesToRemove) {
    // what we pull it into
    let pulled = []
    // the index of element pulled into the pulled array, a positioner
    let pulledIndex = 0
    
    // looping through entire array inside function
    for (let i = 0; i < arr.length; i++) {
        // checker flag to label what to remove
        let shouldRemove = false


        for (let j = 0; j < valuesToRemove.length; j++) {
            // if it matches. but notice the strict equality!
            if (arr[i] === valuesToRemove[j]) {
                // checker flag says to remove
                shouldRemove = true
                // break out of the loop
                break
            }
        }

        // dont remove
        if (!shouldRemove) {
            // pulled index of pulled element should stay the same as the index of the arr subjected into the function?
            pulled[pulledIndex] = arr[i]
            // move on with the next number of the array
            pulledIndex++;
        }
    }

    arr.length = 0

    for (let i = 0; i < pulled.length; i++) {
        arr[i] = pulled[i]
    }
    return pulled
}

let arr2 = ['1', '2', '3', '4', '5']
console.log(pull(arr2, '2'))