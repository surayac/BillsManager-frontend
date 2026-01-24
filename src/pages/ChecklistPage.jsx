import { useState } from "react";
import MonthSelector from "../components/MonthSelector";
import BillsChecklist from "../components/BillsChecklist";

export default function ChecklistPage() {

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  return (
    <>
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold">
          Monthly Bills Checklist
        </h1>
      </header>

      <main className="min-h-screen bg-gray-100 p-6">

        <section aria-labelledby="month-selector-title">
          <h2 id="month-selector-title" className="sr-only">
            Select month and year
          </h2>

          <MonthSelector onChange={(m, y) => {
            setMonth(m);
            setYear(y);
          }} />
        </section>

        <section aria-labelledby="checklist-title" className="mt-6">
          <h2 id="checklist-title" className="text-xl font-semibold mb-3">
            Bills
          </h2>

          <BillsChecklist month={month} year={year} />
        </section>

      </main>
    </>
  );
}
