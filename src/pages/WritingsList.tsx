import { titleCaseToDashCase } from "@/functions/titleCaseToDashCase";
import { Link } from "react-router";
import { WritingProps } from "./Writing";

export default function WritingsList({
  writingsList,
}: {
  writingsList: WritingProps[];
}) {
  // 1. Sort writings chronologically in descending order (newest first).
  // It's good practice to create a copy before sorting a prop array.
  const sortedWritings = [...writingsList].sort(
    (a, b) => b.date.getTime() - a.date.getTime(),
  );

  const writingsByMonth: { [key: string]: WritingProps[] } = {};

  // 2. Group writings by month and year.
  sortedWritings.forEach((writing) => {
    const monthYear = writing.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    if (!writingsByMonth[monthYear]) {
      writingsByMonth[monthYear] = [];
    }
    writingsByMonth[monthYear].push(writing);
  });

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 font-sans">
      {Object.keys(writingsByMonth).map((monthYear) => (
        <section key={monthYear} className="mb-10">
          <h2 className="mb-4 border-b border-base-300 pb-2 text-2xl font-semibold text-base-content">
            {monthYear}
          </h2>
          <ul className="list-inside list-disc space-y-2">
            {writingsByMonth[monthYear].map((writing, index) => (
              <li key={index} className="text-lg">
                <Link
                  to={titleCaseToDashCase(writing.title)}
                  className="text-base-content underline"
                >
                  {writing.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
