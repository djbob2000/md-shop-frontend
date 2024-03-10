import HistoryItem from "@/components/history/history-item";

const HistoryList = ({ items }) => {
  return (
    <ul className="flex flex-col gap-10">
      {items.map((item) => (
        <li key={item.id}>
          <HistoryItem item={item} />
        </li>
      ))}
    </ul>
  );
};

export default HistoryList;
