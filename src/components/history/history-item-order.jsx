import Image from "next/image";

const HistoryItemOrder = ({ itemOrder }) => {
  console.log("🚀 ~ HistoryItemOrder ~ itemOrder:", itemOrder);
  return (
    <div className="rounded-xl border bg-card text-card-foreground p-2  w-[300px]">
      <div className="grid grid-cols-[3fr_1fr]">
        <div className="relative w-full h-24 overflow-hidden">
          <Image
            src={`/products/${itemOrder?.image}`}
            alt="product image"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1024px"
            className=" object-cover rounded-lg filter dark:brightness-[0.9]"
            quality={60}
          />
        </div>
        <div className="text-sm font-medium">
          <p>{itemOrder.name}</p>
          <p>Qty: {itemOrder.quantity}</p>
          <p>$ {itemOrder.price * itemOrder.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItemOrder;
