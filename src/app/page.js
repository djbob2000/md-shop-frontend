import GoodsList from "@/components/shop/goods-list";
import ShopSelector from "@/components/shop/shop-selector";

export default function Home() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 min-h-screen">
      <ShopSelector />
      <GoodsList />
    </div>
  );
}
