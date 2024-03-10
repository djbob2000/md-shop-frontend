import { useDispatch } from "react-redux";
import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { deleteCartGood, setQuantity } from "@/redux/cart/cart.slice";
import { BadgeX } from "lucide-react";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteCartGood({ _id: item._id }));
  };

  const handleSetQuantity = (e) => {
    const inputValue = e.target.value;
    const newQuantity = inputValue !== "" ? parseInt(inputValue) : 0;
    dispatch(setQuantity({ _id: item._id, quantity: newQuantity }));
  };

  const totalPrice = item.price * item.quantity;

  return (
    <Card className="flex gap-4 w-full relative">
      <div className="relative w-[200px] h-40 overflow-hidden">
        <Image
          src={`/products/${item?.image}`}
          alt="product image"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
          className="object-cover rounded-lg filter dark:brightness-[0.9]"
          quality={60}
        />
      </div>
      <CardContent className="p-2">
        <BadgeX
          size={24}
          className="absolute top-1 right-1 cursor-pointer"
          onClick={handleDeleteItem}
        />
        <CardTitle className="text-lg">{item?.name}</CardTitle>
        <p>Quantity:</p>
        <Input
          type="number"
          value={item.quantity}
          onChange={handleSetQuantity}
          className="w-16 text-center border border-gray-300 mb-4"
        />
        <p className="opacity-75"> ${totalPrice} </p>
      </CardContent>
    </Card>
  );
};

export default CartItem;
