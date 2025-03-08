function sortArr<T>(arr: T[]): T[] {
  return arr.sort((a, b) => {
    if(typeof a === "number" && typeof b === "number") {
      return a - b;
    } else if(typeof a === "string" && typeof b === "string") {
      return a.localeCompare(b);
    } else {
      throw new Error("Массив должен содержать только числа или строки");
    }
  })
}

console.log(sortArr<number>([3, 1, 4, 1, 5]));
console.log(sortArr<string>(["banana", "apple", "cherry"]));