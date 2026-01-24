import api from "../services/api";
import toast from "react-hot-toast";

export default function BillItem({ bill, month, year, onUpdate }) {

  async function togglePayment() {
    try {

      await api.post("/payments", {
        billId: bill.billId,
        month,
        year,
        paid: !bill.paid
      });

      toast.success(
        bill.paid ? "Marked as unpaid" : "Marked as paid"
      );

      onUpdate();

    } catch (error) {
      toast.error("Failed to update payment");
      console.error(error);
    }
  }

  const checkboxId = `bill-${bill.billId}`;

  return (
    <article
      className="flex items-center gap-4 bg-white p-3 rounded shadow"
      aria-label={`Bill ${bill.billName}`}
    >

      <input
        id={checkboxId}
        type="checkbox"
        checked={bill.paid}
        onChange={togglePayment}
        className="w-5 h-5 accent-green-600 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      />

      <label
        htmlFor={checkboxId}
        className={`text-lg cursor-pointer ${
          bill.paid ? "line-through text-gray-400" : ""
        }`}
      >
        {bill.billName}
      </label>

    </article>
  );
}
