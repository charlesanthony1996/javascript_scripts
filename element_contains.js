const element_contains = (parent, child) => 
    parent !== child && parent.contains(child)

console.log(element_contains(document.querySelector('head'), document.querySelector('title')))