"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentShop } from "@/redux/goods/goods.slice";
import { selectCurrentShopID } from "@/redux/selectors";
import shopsData from "@/data/shopsData";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";

export default function ShopRadioGroup() {
  const dispatch = useDispatch();

  const currentShopID = useSelector(selectCurrentShopID);

  const handleShopClick = (shopId) => {
    dispatch(setCurrentShop(shopId));
  };

  return (
    <div
      role="radiogroup"
      style={{ outline: "none" }}
      className="flex flex-col gap-4"
    >
      {shopsData.map((shop) => (
        <React.Fragment key={shop.id}>
          <label
            className={cn(
              "text-sm font-medium leading-none flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground",
              currentShopID === shop.id && "border-primary",
            )}
          >
            <input
              type="radio"
              value={shop.id.toString()}
              checked={currentShopID === shop.id}
              onChange={() => handleShopClick(shop.id)}
              className="sr-only appearance-none outline-none"
            />
            <Icon name={shop.icon} size={32} className="mb-3" />
            {shop.name}
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}
