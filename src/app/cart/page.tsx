import Cart from "@/components/Cart/Cart";

const CartPage = () => {
  return (
    <main className="h-[90vh]">
      <h1 className="p-8 text-center text-2xl">Cart</h1>
      <div className="flex-col">
        <Cart />
      </div>
    </main>
  );
};

export default CartPage;
