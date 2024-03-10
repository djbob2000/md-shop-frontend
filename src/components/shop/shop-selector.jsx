"use client";

import React from "react";

import ShopRadioGroup from "@/components/shop/shop-radio-group.jsx";

export default function ShopSelector() {
  return (
    <div className="w-full max-w-[240px] rounded-xl border bg-card text-card-foreground p-6 h-[444px] shadow">
      <div className="flex flex-col space-y-1.5 mb-4">
        <h3 className="font-semibold leading-none tracking-tight">
          Select your shop
        </h3>
        <p className="text-sm text-muted-foreground">
          Products are displayed only from the selected store
        </p>
      </div>

      <ShopRadioGroup />
    </div>
  );
}
