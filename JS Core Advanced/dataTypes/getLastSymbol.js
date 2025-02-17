'use strict'

const getLastSymbol = (str) => str.length > 0 ? str[str.length - 1] : ''

console.log(getLastSymbol('dima'))
console.log(getLastSymbol('hello'))
console.log(getLastSymbol('123'))
console.log(getLastSymbol(''))