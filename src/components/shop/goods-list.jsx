"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoods } from "@/redux/goods/goods.operations";
import { resetGoods } from "@/redux/goods/goods.slice";
import { selectGoods, selectCurrentShopID } from "@/redux/selectors";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CardItem from "./card-item";

const GoodsList = () => {
  const selectedGoods = useSelector(selectGoods);
  console.log("🚀 ~ GoodsList ~ selectedGoods:", selectedGoods);
  const currentShopID = useSelector(selectCurrentShopID);
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

  return (
    <div className="w-full min-h-11 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-full w-full flex gap-6  items-center">
        <p className="">Sort by </p>
        <Tabs defaultValue="name" className="">
          <TabsList>
            {/* Обработчик изменения параметров сортировки */}
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
            {/* Обработчик изменения направления сортировки */}
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
      {selectedGoods?.map((item) => (
        <CardItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default GoodsList;
