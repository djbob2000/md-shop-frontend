"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoupons } from "@/redux/coupons/coupons.slice";
import CouponCard from "@/components/coupons/coupon-card";

const CouponList = () => {
  const dispatch = useDispatch();
  const { coupons, status, error } = useSelector((state) => state.coupons);

  useEffect(() => {
    dispatch(fetchCoupons());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ul className="grid grid-flow-col auto-cols-[300px] gap-4">
        {coupons.map((coupon) => (
          <CouponCard key={coupon._id} coupon={coupon} />
        ))}
      </ul>
    </div>
  );
};

export default CouponList;
