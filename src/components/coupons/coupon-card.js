import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ClipboardCopy } from "lucide-react";

export default function CouponCard({ coupon }) {
  const { toast } = useToast();

  const copyCouponCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <Card className="p-2 relative">
      <div className="relative w-full h-40 overflow-hidden">
        <Image
          src={`/coupons/${coupon?.photo}`}
          alt="coupon image"
          fill
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
          className=" object-cover rounded-lg filter dark:brightness-[0.9]"
          quality={60}
        />
      </div>
      <CardContent className="p-2">
        <p>{coupon?.name}</p>
        <p className="text-right opacity-75 text-3xl">
          {coupon?.discount}% off
        </p>
      </CardContent>

      <Button
        onClick={() => {
          copyCouponCode(coupon.code);
          toast({
            description: "Your code has been copied to your clipboard",
          });
        }}
        className="w-full flex gap-3"
      >
        <ClipboardCopy />
        Copy code to clipboard
      </Button>
    </Card>
  );
}
