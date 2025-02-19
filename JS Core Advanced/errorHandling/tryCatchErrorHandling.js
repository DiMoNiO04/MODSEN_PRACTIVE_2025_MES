function getPropery(obj, prop) {
  try {
    return obj[prop];
  } catch (e) {
    if(e instanceof TypeError) {
      console.error(`Ошибка: невозможно получить свойство '${prop}'`)
      return null
    }
    throw e;
  }
}

const obj = {
  // name: 'Dima',
  age: 20,
  city: 'Minsk',
};

console.log(getPropery(obj, 'name'))