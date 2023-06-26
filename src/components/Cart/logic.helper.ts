import { SetStateAction } from "react";
import { CartItem } from "./types";

// Format the cart items into a string for storing in browser local storage
export const formatToLocalStorage = (newCart: CartItem[] | undefined): string =>
  newCart?.map((item) => item.id + ":" + item.quantity).toString() ?? "";

// Update the cart items, store them in local storage, and handle when newCart is empty
export const register = (
  setItems: (value: SetStateAction<CartItem[] | null | undefined>) => void,
  newCart: CartItem[] | undefined
): void => {
  setItems(newCart);
  localStorage.setItem("cart", formatToLocalStorage(newCart));
  if (newCart?.length === 0) {
    setItems(undefined);
    localStorage.removeItem("cart");
  }
};
