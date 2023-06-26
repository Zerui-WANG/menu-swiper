// Data types explicited
export interface CardContent {
  id: number;
  name: string;
  file: string;
  price: number;
  // description is optional
  description?: string;
}

export type CardContents = Array<CardContent>;