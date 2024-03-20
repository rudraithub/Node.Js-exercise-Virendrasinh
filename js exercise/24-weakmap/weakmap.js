
let weakmap = new WeakMap()
let key1 = {}
let key2 = {}

weakmap.set(key1,"a")
weakmap.set(key2,"b")

console.log(weakmap.has(key1))
// console.log(weakmap.delete(key1))
console.log(weakmap.has(key1))

