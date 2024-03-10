"use client";

import CartItem from "@/components/cart/cart-item";
import { selectCartGoods } from "@/redux/selectors";
import { useSelector } from "react-redux";

export default function CartList() {
  const selectedCartGoods = useSelector(selectCartGoods);

  return (
    <>
      {selectedCartGoods.length ? (
        <ul className="flex flex-col gap-6">
          {selectedCartGoods.map((item) => (
            <li key={item._id}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-base text-center pt-11">
          No items in your cart, please go to SHOP and add goods to cart
        </p>
      )}
    </>
  );
}
