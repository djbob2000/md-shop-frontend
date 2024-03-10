"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartGoods } from "@/redux/selectors";
import { addOrder } from "@/redux/orders/orders.operations";
import { resetCart } from "@/redux/cart/cart.slice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "@/components/cart/validation-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CartMap from "@/components/cart/cart-map";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};

// COMPONENT
export default function OrderForm() {
  const [open, setOpen] = useState(false);
  const [address, setAddress] = useState("");
  const selectedCartGoods = useSelector(selectCartGoods);
  const dispatch = useDispatch();

  const form = useForm({
    defaultValues,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const handleAddressChange = (newAddress) => {
    form.setValue("address", newAddress);
    setAddress(newAddress);
  };

  function onSubmit(data) {
    const payload = {
      ...data,
      cartGoods: selectedCartGoods,
    };

    dispatch(addOrder(payload));
    setOpen(true);
    form.reset();
    dispatch(resetCart());
  }

  function handleInput(event) {
    const { name, value } = event.target;
    form.setValue(name, value);
    setAddress(value);
  }

  return (
    <>
      <CartMap address={address} onAddressChange={handleAddressChange} />
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          id="formOrder"
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Shevchenko street, 1 "
                    {...field}
                    onChange={(e) => handleInput(e)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input placeholder="example@gmail.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="+380501234567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
      <Dialog
        open={open}
        onOpenChange={setOpen}
        onClose={() => dispatch(resetCart())}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Success</DialogTitle>
            <DialogDescription>
              Your order was successfully created
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">OK</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
