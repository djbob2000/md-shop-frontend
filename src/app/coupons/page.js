import CouponList from "@/components/coupons/coupons-list";

export default function Coupons() {
  return (
    <section className="flex flex-col gap-4 py-10">
      <h1>Your coupons</h1>
      <CouponList />
    </section>
  );
}
