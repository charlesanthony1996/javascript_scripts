function asyncoperation1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('asynchronous operation 1')
            resolve()
        }, 1000)
    })

}

function asyncoperation2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('asynchronous operation 2')
            resolve()
        }, 2000)
    })

}

function asyncoperation3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('asynchronous operation 3')
            resolve()
        }, 1500)
    })
}

async function performoperations() {
    try {
        await asyncoperation1()
        await asyncoperation2()
        await asyncoperation3()
        console.log('all operations completed')
    } catch (error) {
        console.log('something broke down')
    }
}

performoperations()