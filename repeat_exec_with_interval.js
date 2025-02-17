function repeat_function(fn, interval) {
    fn()

    const intervalid = setInterval(fn, interval)

    return function stopexecution() {
        clearInterval(intervalid)
        console.log('it stopped')
    }
}

const intervalms = 1000

function printmessage() {
    console.log('executing the function')
}

const stopexecution = repeat_function(printmessage, intervalms)

setTimeout(() => {
    stopexecution()
}, 2000)