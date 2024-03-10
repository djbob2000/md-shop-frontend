"use client";

import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrders } from "@/redux/orders/orders.slice";
import { fetchOrders } from "@/redux/orders/orders.operations";
import { selectOrders } from "@/redux/selectors";
import { Input } from "@/components/ui/input";

import HistoryList from "@/components/history/history-list";

const History = () => {
  const dispatch = useDispatch();
  const selectedOrders = useSelector(selectOrders);
  const [searchId, setSearchId] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [searchPhone, setSearchPhone] = useState("");

  useEffect(() => {
    dispatch(resetOrders());
    dispatch(fetchOrders());
  }, [dispatch]);

  const filteredOrders = useMemo(() => {
    return selectedOrders.filter((order) => {
      const idMatch = order._id.toLowerCase().includes(searchId.toLowerCase());
      const emailMatch = order.email
        .toLowerCase()
        .includes(searchEmail.toLowerCase());
      const phoneMatch = order.phone
        .toLowerCase()
        .includes(searchPhone.toLowerCase());

      return idMatch && emailMatch && phoneMatch;
    });
  }, [selectedOrders, searchId, searchEmail, searchPhone]);

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col sm:flex-row justify-center space-x-4 mb-4">
        <label>
          Id:
          <Input
            type="text"
            placeholder="Search by _id"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
        </label>
        <label>
          Email:
          <Input
            type="text"
            placeholder="Search by email"
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
          />
        </label>
        <label>
          Phone:
          <Input
            type="text"
            placeholder="Search by phone"
            value={searchPhone}
            onChange={(e) => setSearchPhone(e.target.value)}
          />
        </label>
      </div>
      {filteredOrders.length ? (
        <HistoryList items={filteredOrders} />
      ) : (
        <p className="text-center text-gray-600 text-lg">No orders found!</p>
      )}
    </div>
  );
};

export default History;
