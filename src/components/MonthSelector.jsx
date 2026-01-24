import { useState } from "react";

export default function MonthSelector({ onChange }) {

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  return (
    <form
      className="flex gap-4 mb-6"
      aria-label="Month and year selector"
    >

      <div className="flex flex-col">
        <label htmlFor="month" className="text-sm font-medium">
          Month
        </label>

        <select
          id="month"
          value={month}
          onChange={(e) => {
            const m = Number(e.target.value);
            setMonth(m);
            onChange(m, year);
          }}
          className="p-2 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {[...Array(12)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {new Date(0, i).toLocaleString("en", { month: "long" })}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="year" className="text-sm font-medium">
          Year
        </label>

        <input
          id="year"
          type="number"
          value={year}
          onChange={(e) => {
            const y = Number(e.target.value);
            setYear(y);
            onChange(month, y);
          }}
          className="p-2 rounded border w-28 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

    </form>
  );
}
