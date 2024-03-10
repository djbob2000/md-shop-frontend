"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartGoods } from "../../redux/selectors";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TotalPrice = () => {
  const selectedCartGoods = useSelector(selectCartGoods);
  const [discount, setDiscount] = useState(0);
  const [discountedTotalPrice, setDiscountedTotalPrice] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const { coupons } = useSelector((state) => state.coupons);

  const totalPrice = selectedCartGoods.reduce((total, item) => {
    return total + Number(item.price) * Number(item.quantity);
  }, 0);

  const applyDiscount = () => {
    let discountAmount = 0;

    const coupon = coupons.find((coupon) => coupon.code === couponCode);
    if (coupon) {
      discountAmount = (totalPrice * coupon.discount) / 100;
    }

    const discountedPrice = totalPrice - discountAmount;
    setDiscountedTotalPrice(discountedPrice);
  };

  return (
    totalPrice > 0 && (
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </h2>
        <div className="mt-4 flex gap-4">
          <Input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <Button onClick={applyDiscount}>Apply</Button>
        </div>
        {discountedTotalPrice > 0 && (
          <h2 className="text-lg font-semibold mt-4">
            Discounted Total: ${discountedTotalPrice.toFixed(2)}
          </h2>
        )}
      </div>
    )
  );
};

export default TotalPrice;
