"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "@/redux/goods/goods.operations";
import { resetGoods } from "@/redux/goods/goods.slice";
import { selectGoods, selectCurrentShopID } from "@/redux/selectors";
import CardItem from "./card-item";

const GoodsList = () => {
  const selectedGoods = useSelector(selectGoods);
  const currentShopID = useSelector(selectCurrentShopID);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetGoods());
    dispatch(fetchGoods());
  }, [dispatch, currentShopID]);

  return (
    <div className="w-full min-h-11 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      {selectedGoods?.map((item) => (
        <CardItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default GoodsList;
