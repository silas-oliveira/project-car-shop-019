import { ICar } from "../../../interfaces/ICar";

export const bodyRequestCarMock: ICar = {
  model: "Ingrid Paulino",
  year: 2002,
  color: "red",
  buyValue: 750000,
  doorsQty: 4,
  seatsQty: 4
}

export const getAllMock: ICar[] = [
  {
    model: "Ingrid Paulino",
    year: 2002,
    color: "red",
    buyValue: 750000,
    doorsQty: 4,
    seatsQty: 4
  },
  {
    model: "Ingrid Paulino",
    year: 2002,
    color: "red",
    buyValue: 750000,
    doorsQty: 4,
    seatsQty: 4
  }
]

export const bodyCarMock: ICar & { _id: string } = {
  _id: "6324c15d9e2315f157161e13",
  model: "Ingrid Paulino",
  year: 2002,
  color: "red",
  buyValue: 750000,
  doorsQty: 4,
  seatsQty: 4
}
