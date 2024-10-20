import UtilTable from "../../../components/common/UtilTable";

const OrderHistory = () => {
  const columns = [
    {
      Header: "Order ID",
      accessor: "id",
      width: "20%",
    },
    {
      Header: "Date",
      accessor: "date",
      width: "20%",
    },
    {
      Header: "Price",
      accessor: "price",
      width: "15%",
    },
    {
      Header: "Status",
      accessor: "status",
      width: "25%",
      Cell: (row) => (
        <span
          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            row.status === "Cancelled"
              ? "bg-error/10 text-error"
              : row.status === "In transit"
              ? "bg-secondary/10 text-secondary"
              : "bg-success/10 text-success"
          }`}
        >
          {row.status === "Cancelled" ? (
            <span className="inline-block w-2 h-2 mr-1 bg-error rounded-full"></span>
          ) : row.status === "In transit" ? (
            <span className="inline-block w-2 h-2 mr-1 bg-secondary rounded-full"></span>
          ) : (
            <span className="inline-block w-2 h-2 mr-1 bg-success rounded-full "></span>
          )}
          {row.status}
        </span>
      ),
    },
  ];

  const data = [
    {
      id: "#FWB127364372",
      date: "20.12.2023",
      price: "$4,756",
      status: "Pre-order",
    },
    {
      id: "#FWB127364373",
      date: "21.12.2023",
      price: "$3,200",
      status: "Cancelled",
    },
    {
      id: "#FWB127364374",
      date: "25.12.2023",
      price: "$7,200",
      status: "In transit",
    },
    {
      id: "#FWB127364375",
      date: "26.12.2023",
      price: "$1,500",
      status: "Success",
    },
  ];

  return (
    <section className="bg-base-100 py-2 antialiased">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-5xl">
          {/* HEADER */}
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-primary sm:text-2xl">
              Order List
            </h2>
            <div className="mt-6 gap-4 sm:mt-0 sm:flex sm:items-center">
              <div>
                <label
                  htmlFor="order-type"
                  className="sr-only text-sm text-base-content/40"
                >
                  Select order type
                </label>
                <select
                  id="order-type"
                  className="select select-bordered w-full min-w-[8rem] text-sm"
                >
                  <option selected>All orders</option>
                  <option value="pre-order">Pre-order</option>
                  <option value="transit">In transit</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <span className="inline-block font-semibold text-base-content">
                from
              </span>
              <div>
                <label
                  htmlFor="duration"
                  className="sr-only text-sm text-base-content/40"
                >
                  Select duration
                </label>
                <select
                  id="duration"
                  className="select select-bordered w-full text-sm"
                >
                  <option selected>this week</option>
                  <option value="this month">this month</option>
                  <option value="last 3 months">the last 3 months</option>
                  <option value="last 6 months">the last 6 months</option>
                  <option value="this year">this year</option>
                </select>
              </div>
            </div>
          </div>

          {/* ORDER TABLE */}
          <div className="mt-6 flow-root sm:mt-8">
            <div className="overflow-x-auto">
              <UtilTable columns={columns} data={data} border={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;
