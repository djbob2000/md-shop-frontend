import OrderForm from "@/components/cart/order-form";
import CartList from "@/components/cart/cart-list";
import TotalPrice from "@/components/cart/total-price";
import OrderButton from "@/components/cart/order-button";

export default function CartPage() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 py-[40px] gap-6">
      <div>
        <div className="  flex flex-col space-y-1.5 mb-4 rounded-xl border bg-card text-card-foreground p-6  shadow">
          <h3 className="font-semibold leading-none tracking-tight">
            Shipping Details
          </h3>
          <p className="text-sm text-muted-foreground">
            Please provide your shipping information below
          </p>
          <OrderForm />
        </div>
      </div>
      <div className="flex flex-col gap-4 md:max-w-[500px]">
        <CartList />
        <TotalPrice />
        <OrderButton />
      </div>
    </section>
  );
}
