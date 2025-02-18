const sortBubble = (arr) => {
  const result = [...arr];

  for (let i = 0; i < result.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < result.length - i - 1; j++) {
      if (result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return result;
};

console.log(sortBubble([3, 2, 5, 11, 6]));
console.log(sortBubble([10, -2, 0, 8, 4]));
console.log(sortBubble([1, 2, 3]));
