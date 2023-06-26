export interface CardContent {
  id: number;
  name: string;
  file: string;
  price: number;
  description?: string;
}

export type CardContents = Array<CardContent>;