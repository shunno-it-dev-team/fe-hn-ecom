import UtilTable from "../../../components/common/UtilTable";

const PaymentHistory = () => {
  const columns = [
    {
      Header: "Date",
      accessor: "date",
      width: "15%",
    },
    {
      Header: "Subscription Package",
      accessor: "package",
      width: "20%",
    },
    {
      Header: "Payment Method",
      accessor: "paymentMethod",
      width: "20%",
    },
    {
      Header: "Amount",
      accessor: "amount",
      width: "15%",
    },
    {
      Header: "Status",
      accessor: "status",
      width: "20%",
      Cell: (row) => (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            row.status === "Success"
              ? "bg-success/10 text-success"
              : "bg-error/10 text-error"
          }`}
        >
          {row.status === "Success" ? (
            <span className="inline-block w-2 h-2 mr-1 bg-success rounded-full"></span>
          ) : (
            <span className="inline-block w-2 h-2 mr-1 bg-error rounded-full"></span>
          )}
          {row.status}
        </span>
      ),
    },
  ];

  const data = [
    {
      date: "22/06/23 08:08",
      package: "Monthly",
      paymentMethod: "Card payment",
      amount: "₦2,500.00",
      status: "Success",
    },
    {
      date: "22/06/23 08:08",
      package: "Monthly",
      paymentMethod: "Card payment",
      amount: "₦2,500.00",
      status: "Failed",
    },
    {
      date: "22/06/23 08:08",
      package: "Monthly",
      paymentMethod: "Card payment",
      amount: "₦2,500.00",
      status: "Failed",
    },
    {
      date: "22/06/23 08:08",
      package: "Monthly",
      paymentMethod: "Card payment",
      amount: "₦2,500.00",
      status: "Success",
    },
  ];

  return (
    <div>
      <UtilTable columns={columns} data={data} />
    </div>
  );
};

export default PaymentHistory;
