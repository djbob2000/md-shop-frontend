"use client";

import { useSelector } from "react-redux";
import { selectCartGoods } from "../../redux/selectors";

const TotalPrice = () => {
  const selectedCartGoods = useSelector(selectCartGoods);

  const totalPrice = selectedCartGoods.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  return (
    totalPrice > 0 && (
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    )
  );
};

export default TotalPrice;
