import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ShopSelector from "@/components/shop-selector";

export default function Home() {
  const array = new Array(10).fill().map((_, index) => index);
  return (
    <div className="flex gap-8 pt-10">
      <div className="w-full max-w-[240px] rounded-xl border bg-card text-card-foreground p-6 shadow min-h-11">
        <ShopSelector />
      </div>
      <div className="w-full min-h-11 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4">
        {array.map((_, index) => (
          <Card key={index} className="p-2">
            <div className="relative w-full h-40 overflow-hidden">
              <Image
                src={`/products/${index}.jpg`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg filter dark:brightness-[0.9]"
              />
            </div>
            <CardContent className="p-2">
              <p>Card Content {index}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
