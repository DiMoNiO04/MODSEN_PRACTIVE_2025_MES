// Var повторное объявление разрешено и работает безошибочно
var x = 10;
var x = 20;
console.log(x);

// Let повторное объявление не разрешено 
let y = 10;
let y = 20;
console.log(y);

// Const повторное объявление не разрешено 
const z = 10;
const z = 20;
console.log(z);
