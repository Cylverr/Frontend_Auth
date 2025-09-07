const tableData = [
  {
    id: 1,
    type: "Deposit",
    amount: "₦20,000",
    status: "In Progress..",
    date: "12th August 2025",
  },
  {
    id: 2,
    type: "Deposit",
    amount: "₦2,000",
    status: "Completed",
    date: "23rd July 2025",
  },
  {
    id: 3,
    type: "SMS",
    amount: "₦5,000",
    status: "Completed",
    date: "20th June 2025",
  },
  {
    id: 4,
    type: "Deposit",
    amount: "₦2,000",
    status: "Completed",
    date: "17th June 2025",
  },
  {
    id: 5,
    type: "SMS",
    amount: "₦6,000",
    status: "Completed",
    date: "15th May 2025",
  },
  {
    id: 6,
    type: "Deposit",
    amount: "₦4,000",
    status: "Completed",
    date: "10th May 2025",
  },
  {
    id: 7,
    type: "Deposit",
    amount: "₦4,000",
    status: "Failed",
    date: "10th May 2025",
  },
  {
    id: 8,
    type: "SMS",
    amount: "₦2,000",
    status: "Completed",
    date: "24th April 2025",
  },
  {
    id: 9,
    type: "SMS",
    amount: "₦2,000",
    status: "Failed",
    date: "31st March 2025",
  },
  {
    id: 10,
    type: "Deposit",
    amount: "₦10,000",
    status: "Completed",
    date: "31st March 2025",
  },
];

const Table = () => {
  return (
    <section className="flex flex-col justify-start items-start w-full">
      <h2 className="text-semibold font-serif text-xl md:text-2xl lg:text-3xl mb-7 lg:mb-10 mt-14 font-bold">
        Recent Transactions
      </h2>

      <div className="w-full max-w-full overflow-x-auto">
        <table className="table-auto min-w-max md:min-w-0 md:w-full lg:table-fixed">
          <thead>
            <tr className="font-serif text-lg md:text-xl lg:text-2xl">
              <th className="space-x-2 py-1 text-left">S/N</th>
              <th className="px-6 py-1 text-left">Type</th>
              <th className="px-6 py-1 text-left">Amount</th>
              <th className="px-6 py-1 text-left">Date</th>
              <th className="px-6 py-1 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {tableData.map((body) => {
              let statusColor = "";

              if (body.status === "Failed") {
                statusColor = "text-red-500";
              }
              if (body.status === "In Progress..") {
                statusColor = "text-amber-500";
              }
              if (body.status === "Completed") {
                statusColor = "text-green-600";
              }

              return (
                <tr key={body.id} className="font-serif text-md lg:text-lg">
                  <td className="space-x-6 py-3">{body.id}</td>
                  <td className="px-6 py-1">{body.type}</td>
                  <td className="px-6 py-1">{body.amount}</td>
                  <td className="px-6 py-1">{body.date}</td>
                  <td className={`px-6 py-1 ${statusColor}`}>{body.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Table;
