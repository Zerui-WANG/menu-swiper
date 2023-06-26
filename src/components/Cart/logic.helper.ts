import { SetStateAction } from "react";
import { CartItem } from "./types";

export const formatToLocalStorage = (newCart: CartItem[] | undefined) =>
  newCart?.map((item) => item.id + ":" + item.quantity).toString() ?? "";

export const register = (
  setItems: (value: SetStateAction<CartItem[] | null | undefined>) => void,
  newCart: CartItem[] | undefined
) => {
  setItems(newCart);
  localStorage.setItem("cart", formatToLocalStorage(newCart));
};
