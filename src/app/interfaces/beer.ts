interface Hops {
  add: string
  amount: {
    value: number,
    unit: string
  },
  attribute: string,
  name: string,
}

interface Malt {
  amount: {
    value: number,
    unit: string
  },
  name: string
}

export interface Beer {
  abv: number,
  ingredients: {
    hops: Hops[] | null | undefined,
    malt: Malt[] | null | undefined,
    yeast: string | null | undefined,
  },
  name: string,
  volume: {
    unit: string,
    value: number
  }
}
