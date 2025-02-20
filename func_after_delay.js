const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args)

delay(
    function(text) {
        console.log(text)
    },
    3000,
    'later'
)

