interface ICar {
  brand: string;
  model: string;
  year: string;
}

const CarBMW = {
  brand: "BMW"
}

const CarAudi = {
  brand: "Audi",
  model: "A3",
  year: 2020
}

const getCar = (car: ICar | { brand: string }): string => {
  if("year" in car && "model" in car) {
    const { brand, model, year } = car;
    return `Авто: ${brand}, ${model}, ${year}`
  } else {
    const { brand } = car;
    return `Авто: ${brand}`
  }
}

console.log(getCar(CarBMW));
console.log(getCar(CarAudi));