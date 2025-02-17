'use client';

const isArrayContains = (arr, value) => arr.includes(value)

console.log(isArrayContains([1, 2, 3], 2))
console.log(isArrayContains([1, 2, 3], 4))
console.log(isArrayContains(['A', 'f', 'd'], 'd'))
console.log(isArrayContains(['A', 'f', 'd'], 32))