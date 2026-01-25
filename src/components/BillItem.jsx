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
      className={`p-4 rounded-lg border transition
        ${bill.paid
          ? "bg-green-50 border-green-300"
          : "bg-white hover:bg-slate-50"
        }`}
    >

      <section className="flex items-center justify-between">

        <section className="flex items-center gap-3">

          <input
            id={checkboxId}
            type="checkbox"
            checked={bill.paid}
            onChange={togglePayment}
            className="w-5 h-5 accent-green-600 cursor-pointer"
          />

          <label
            htmlFor={checkboxId}
            className={`font-medium cursor-pointer text-lg
              ${bill.paid ? "line-through text-green-700" : ""}
            `}
          >
            {bill.billName}
          </label>

        </section>

        {bill.paid && (
          <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
            PAID
          </span>
        )}
      </section>

      <section className="mt-2 flex justify-between text-sm text-gray-600">
        <span>
          Due day: <strong>{bill.dueDay}</strong>
        </span>

      </section>

    </article>
  );
}
