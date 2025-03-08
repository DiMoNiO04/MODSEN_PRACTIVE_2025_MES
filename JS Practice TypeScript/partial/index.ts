type TMyPartial<T> = {
  [K in keyof T]?: T[K]
}

interface IUser {
  name: string;
  surname: string;
  age: number;
}

type TPartialUser = TMyPartial<IUser>;

const user: TPartialUser = {
  name: "Dima"
}