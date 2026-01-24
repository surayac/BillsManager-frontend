import { useEffect, useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import BillItem from "./BillItem";

export default function BillsChecklist({ month, year }) {

  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);

  async function loadBills() {
    try {
      setLoading(true);

      const response = await api.get(
        `/payments?month=${month}&year=${year}`
      );

      setBills(response.data);

    } catch (error) {
      toast.error("Failed to load bills");
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBills();
  }, [month, year]);

  if (loading) {
    return (
      <p role="status" aria-live="polite">
        Loading bills...
      </p>
    );
  }

  return (
    <ul className="space-y-2" aria-label="Bills checklist">

      {bills.map(bill => (
        <li key={bill.billId}>
          <BillItem
            bill={bill}
            month={month}
            year={year}
            onUpdate={loadBills}
          />
        </li>
      ))}

    </ul>
  );
}
