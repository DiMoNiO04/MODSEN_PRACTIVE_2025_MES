interface IPerson {
  getName(): string;
  setName(name: string): void;
}

class Person implements IPerson {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }
}

const person = new Person("Dima");
console.log(person.getName());

person.setName("Dmitry");
console.log(person.getName());
