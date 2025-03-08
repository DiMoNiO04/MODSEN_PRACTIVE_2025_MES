type TArg = string | number;

function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: TArg, b: TArg): TArg {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else if (typeof a === "string" && typeof b === "string") {
    return a + b; 
  }

  throw new Error("Аргументы должны быть либо числами, либо строками");
}

console.log(combine(10, 5));
console.log(combine("Hello, ", "world!"));
