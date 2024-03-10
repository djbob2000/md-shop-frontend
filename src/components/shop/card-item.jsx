import Image from "next/image";
import { useDispatch } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addToCart } from "@/redux/cart/cart.slice";
import { ShoppingCart } from "lucide-react";

export default function CardItem({ item }) {
  const dispatch = useDispatch();
  const { toast } = useToast();

  return (
    <Card className="p-2">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={`/products/${item?.image}`}
          alt="product image"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
          className=" object-cover rounded-lg filter dark:brightness-[0.9]"
          quality={60}
        />
      </div>
      <CardContent className="p-2">
        <p>{item?.name}</p>
        <p className="text-right opacity-75"> $ {item?.price} </p>
      </CardContent>
      <Button
        onClick={() => {
          dispatch(addToCart({ ...item }));
          toast({
            description: "Your product has been added to cart",
          });
        }}
        className="w-full flex gap-3"
      >
        <ShoppingCart />
        Add to cart
      </Button>
    </Card>
  );
}
