"use client";

import { menu } from "@/data/data";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiTrash } from "react-icons/fi";
import { IoAdd, IoRemoveOutline } from "react-icons/io5";
import ValidationButton from "../ValidationButton/ValidationButton";
import { register } from "./logic.helper";
import { CartItem } from "./types";

const Cart = () => {
  const [items, setItems] = useState<CartItem[] | null>();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setItems(undefined);
    localStorage.removeItem("cart");
  };

  useEffect(() => {
    const itemList = localStorage.getItem("cart")?.split(",");
    setItems(
      itemList?.map((item) => {
        return { id: item.split(":")[0], quantity: Number(item.split(":")[1]) };
      })
    );
  }, []);

  const remove = (id: string) => {
    const newCart = items?.filter((item) => item.id !== id);
    register(setItems, newCart);
  };

  const add = (id: string) => {
    const newCart = items?.map((item) => {
      if (item.id === id) return { ...item, quantity: item.quantity + 1 };
      return item;
    });
    register(setItems, newCart);
  };

  const minus = (id: string) => {
    const newCart = items?.map((item) => {
      if (item.id === id && item.quantity > 0)
        return { ...item, quantity: item.quantity - 1 };
      return item;
    });
    const checkNewCart = newCart?.find((item) => item.quantity === 0);
    register(
      setItems,
      checkNewCart ? items?.filter((item) => item.id !== id) : newCart
    );
  };

  return (
    <div className="p-4 flex flex-col gap-2">
      {items ? (
        items?.map((currItem) => (
          <div
            key={currItem.id}
            className="p-4 bg-gray-100 border border-gray-300 rounded-lg grid grid-cols-2 gap-x-4 drop-shadow-xl"
          >
            <Image
              className="rounded-lg"
              src={`/${menu[Number(currItem.id)].file}`}
              width={170}
              height={170}
              alt={`/${menu[Number(currItem.id)].name}`}
            />
            <div className="flex justify-between flex-col">
              <div className="mt-4 flex justify-between">
                <div className="font-bold">
                  {menu[Number(currItem.id)].name}
                </div>
                <div className="text-gray-500 w-fit">
                  {menu[Number(currItem.id)].price}€
                </div>
              </div>
              <div className="flex items-center mt-4 justify-around">
                <div className="text-lg" onClick={() => remove(currItem.id)}>
                  <FiTrash />
                </div>
                <div className="text-lg" onClick={() => minus(currItem.id)}>
                  <IoRemoveOutline />
                </div>
                <div className="ml-2 mr-2">{currItem.quantity}</div>
                <div className="text-lg ml-2" onClick={() => add(currItem.id)}>
                  <IoAdd />
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Your cart is empty...</div>
      )}
      <ValidationButton text="Order" onClick={openModal} />
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute bg-slate-50 rounded p-8">
            <h2 className="text-xl font-bold mb-4">Success</h2>
            <p>Your order is send to kitchen.</p>
            <button
              className="mt-4 bg-orange-300 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Ok
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
