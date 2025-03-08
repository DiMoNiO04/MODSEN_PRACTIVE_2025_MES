const person = {
  name: "Dima",
  surname: "Razumov",
  age: 20
};

const getObjectKeys = <T extends object>(obj: T): string[] => Object.keys(obj);

const keys = getObjectKeys(person);
console.log(keys);