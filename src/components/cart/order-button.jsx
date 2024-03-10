"use client";

import { Button } from "@/components/ui/button";
import { selectCartGoods } from "@/redux/selectors";
import { useSelector } from "react-redux";

export default function OrderButton() {
  const selectedCartGoods = useSelector(selectCartGoods);
  return (
    <Button
      type="submit"
      disabled={selectedCartGoods.length === 0}
      form="formOrder"
    >
      Create Order
    </Button>
  );
}
