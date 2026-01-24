import { useState } from "react";
import MonthSelector from "../components/MonthSelector";
import BillsChecklist from "../components/BillsChecklist";

export default function ChecklistPage() {

  const now = new Date();

  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  return (
    <>
    <section className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      <header className="bg-white shadow-sm border-b">
      <div className="max-w-3xl mx-auto px-4 py-4">
      <h1 className="text-2xl font-semibold tracking-tight">
            Bills Manager
          </h1>
          <p className="text-sm text-gray-500">
            Track your monthly payments
          </p>
        </div>

      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">

        <section aria-labelledby="month-selector-title" className="bg-white rounded-xl shadow p-5 mb-6">
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
      </section>

    </>
  );
}
