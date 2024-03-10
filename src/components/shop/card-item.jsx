import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addToCart } from "@/redux/cart/cart.slice";
import { ShoppingCart, Heart } from "lucide-react";
import { addToFavorites, removeFromFavorites } from "@/redux/goods/goods.slice";

export default function CardItem({ item }) {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const favorites = useSelector((state) => state.goods.favorites);
  const isFavorite = favorites.some((favorite) => favorite === item._id);

  return (
    <Card className="p-2 relative">
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
        variant="ghost"
        onClick={() => {
          if (isFavorite) {
            dispatch(removeFromFavorites(item._id));
          } else {
            dispatch(addToFavorites(item._id));
          }
        }}
        className="flex items-center gap-2 hover:none absolute top-0 right-0"
      >
        {isFavorite ? <Heart color="red" fill="red" /> : <Heart />}
      </Button>
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
