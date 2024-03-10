import HistoryItemOrder from "@/components/history/history-item-order";

const HistoryItem = ({ item }) => {
  const total = item.cartGoods.reduce((acc, item) => {
    return acc + parseFloat(item.price) * parseFloat(item.quantity);
  }, 0);

  return (
    <div className="rounded-xl border bg-card text-card-foreground p-4 shadow">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-4">
        <div>
          <p className="text-xs text-muted-foreground">Order ID: {item._id}</p>
          <p className="text-xs text-muted-foreground">Name: {item.name}</p>
          <p className="text-xs text-muted-foreground">E-mail: {item.email}</p>
          <p className="text-xs text-muted-foreground">Phone: {item.phone}</p>
          <p className="text-xs text-muted-foreground">
            Address: {item.address}
          </p>
        </div>
        <div>
          <ul className="flex flex-wrap gap-4">
            {item.cartGoods.map((itemOrder) => (
              <li key={itemOrder.id}>
                <HistoryItemOrder itemOrder={itemOrder} />
              </li>
            ))}
          </ul>
          <p className="text-xl font-semibold mt-4">
            Total: ${total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
