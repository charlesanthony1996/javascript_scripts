// const target = { a: 1, b: 2}
// const source = { b: 4, c: 5}
// const source2 = { d: 6, e: 7}

// const returnedTarget = Object.assign(target, source, source2)
// console.log(returnedTarget)
// console.log(returnedTarget === target)


// cloning an object
// const obj = { a: 1}
// const copy = Object.assign({}, obj)
// console.log(copy)

// warning for deep clone
const obj1 = { a: 0, b: {c: 0}}
const obj2 = Object.assign({}, obj1)
// console.log(obj2)


obj1.a = 1
// console.log(obj1)
// console.log(obj2)

obj2.a = 2
// console.log(obj1)
// console.log(obj2)

obj2.b.c = 3
// console.log(obj1)
// console.log(obj2)

// deep clone
const obj3 = { a: 0, b: { c: 0 }}
const obj4 = structuredClone(obj3)
obj3.a = 4
obj3.b.c = 4
// console.log(obj4)


// merging objects
// const o1 = { a: 1}
// const o2 = { b: 2}
// const o3 = { c: 3}

// const obj = Object.assign(o1, o2, o3)
// console.log(obj)
// console.log(o1)

// merging objects with the same properties
// const o1 = { a: 1, b: 2, c: 3}
// const o2 = { b: 2, c: 2 }
// const o3 = { c: 3}
// const o4 = { c: 4}

// const obj = Object.assign({}, o1, o2, o3)
// console.log(obj)


// copying symbol typed properties
// const o1 = { a: 1}
// const o2 = { [Symbol("foo")]: 2}

// const obj = Object.assign({}, o1, o2)
// console.log(obj)
// Object.getOwnPropertySymbols(obj)



// properties on the prototype chanin and non-enumerable properties cannot be copied
// const obj = Object.create(
//     { foo: 1},
//     {
//         bar: {
//             value: 2
//         },
//         baz: {
//             value: 3,
//             enumerable: true
//         }
//     }
// )

// const copy = Object.assign({}, obj)
// console.log(copy)

// primitives will be wrapped to objects
// const v1 = "abc"
// const v2 = true
// const v3 = 10
// const v4 = Symbol("foo")

// const obj = Object.assign({}, v1, null, v2, undefined, v3, v4)
// console.log(obj)

// exceptions will interrupt the ongoing copying task
// const target = Object.defineProperty({}, "foo", {
//     value: 1,
//     writable: false
// })

// Object.assign(target, { bar: 2 }, { foo2: 3, foo: 3, foo3: 3}, { baz: 4 })


// copying accessors
// const obj = {
//     foo: 1,
//     get bar() {
//         return 2
//     }
// }

// let copy = Object.assign({}, obj)
// console.log(copy)

// function completeAssign(target, ...sources) {
//     sources.forEach((source) => {
//         const descriptors = Object.keys(source).reduce((descriptors, key) => {
//             descriptors[key] = Object.getOwnPropertyDescriptor(source, key)
//             return descriptors
//         }, {})

//         Object.getOwnPropertySymbols(source).forEach((sym) => {
//             const descriptor = Object.getOwnPropertyDescriptor(source, sym)
//             if (descriptor.enumerable) {
//                 descriptors[sym] = descriptor
//             }
//         })
//         Object.defineProperties(target, descriptors)
//     })
//     return target
// }


// copy = completeAssign({}, obj)
// console.log(copy)


// object creation mdn docs
// function shape() {
//     this.x = 0
//     this.y = 0
// }

// shape.prototype.move = function(x, y) {
//     this.x += x
//     this.y += y
//     console.info("shape moved")
// }

// // rectangle subclass
// function rectangle() {
//     shape.call(this)
// }

// // subclass extends superclass
// rectangle.prototype = Object.create(shape.prototype, {
//     constructor: {
//         value: rectangle,
//         enumerable: false,
//         writable: false,
//         configurable: true
//     }
// })

// const rect = new rectangle()

// console.log("is rect an instance of rectangle: ", rect instanceof rectangle)
// console.log("is rect an instance of shape: ", rect instanceof shape)
// rect.move(1, 2)
// console.log(rect.y)

o = {}

o = Object.create(Object.prototype)

o = Object.create(Object.prototype, {
    foo: {
        writable: true,
        configurable: true,
        value: "hello"
    },
    bar: {
        
    }
})

