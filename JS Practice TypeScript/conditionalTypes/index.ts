type TConditionalType<T> = T extends true ? string : number;

let string: TConditionalType<true>;
let number: TConditionalType<false>;

string = 'abc';
number = 33;

// string = 33;
// number = 'abc';