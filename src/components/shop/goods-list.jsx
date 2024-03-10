"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "@/redux/goods/goods.operations";
import { resetGoods } from "@/redux/goods/goods.slice";
import { selectGoods, selectCurrentShopID } from "@/redux/selectors";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CardItem from "./card-item";

const GoodsList = () => {
  const {
    goods: selectedGoods,
    status,
    error,
  } = useSelector((state) => state.goods);
  const currentShopID = useSelector(selectCurrentShopID);
  const favorites = useSelector((state) => state.goods.favorites);
  const dispatch = useDispatch();
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    dispatch(resetGoods());
    dispatch(fetchGoods({ sortBy, sortOrder }));
  }, [dispatch, currentShopID, sortBy, sortOrder]);

  const handleSortChange = (sortByValue, sortOrderValue) => {
    setSortBy(sortByValue);
    setSortOrder(sortOrderValue);
  };

  const sortGoods = (goods) => {
    const favoritesItems = goods.filter((item) => favorites.includes(item._id));
    const nonFavorites = goods.filter((item) => !favorites.includes(item._id));
    return [...favoritesItems, ...nonFavorites];
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full min-h-11 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-full w-full flex gap-6 ">
        <p className="py-2">Sort by </p>
        <Tabs defaultValue="name" className="">
          <TabsList>
            <TabsTrigger
              value="name"
              onClick={() => handleSortChange("name", sortOrder)}
            >
              Name
            </TabsTrigger>
            <TabsTrigger
              value="createdAt"
              onClick={() => handleSortChange("createdAt", sortOrder)}
            >
              Date
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Tabs defaultValue="asc" className="w-[400px]">
          <TabsList>
            <TabsTrigger
              value="asc"
              onClick={() => handleSortChange(sortBy, "asc")}
            >
              ASC
            </TabsTrigger>
            <TabsTrigger
              value="desc"
              onClick={() => handleSortChange(sortBy, "desc")}
            >
              DESC
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {sortGoods(selectedGoods)?.map((item) => (
        <CardItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default GoodsList;
