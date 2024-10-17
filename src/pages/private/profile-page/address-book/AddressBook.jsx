import UtilTable from "../../../../components/common/UtilTable";

const AddressBook = () => {
  const columns = [
    {
      Header: "Full Name",
      accessor: "fullName",
      width: "10%",
    },
    {
      Header: "Address",
      accessor: "address",
      width: "10%",
      Cell: (row) => (
        <>
          {row.homeTag && (
            <span className="badge badge-primary mr-2">HOME</span>
          )}
          {row.address}
        </>
      ),
    },
    {
      Header: "Postcode",
      accessor: "postcode",
      width: "30%",
    },
    {
      Header: "Phone Number",
      accessor: "phoneNumber",
      width: "10%",
    },
    {
      Header: "Actions",
      accessor: "actions",
      width: "40%",
      Cell: (row) => (
        <>
          <div>{row.defaultShipping}</div>
          <div>{row.defaultBilling}</div>
          <button className="text-blue-500">EDIT</button>
        </>
      ),
    },
  ];

  const data = [
    {
      fullName: "Md. Rasel Mahmud",
      homeTag: true,
      address: "Nogorovon, Dorikhorbona",
      postcode: "Rajshahi - Rajshahi - Rajshahi Sadar",
      phoneNumber: "1728140505",
      defaultShipping: "Default Shipping Address",
      defaultBilling: "Default Billing Address",
    },
  ];

  return (
    <div>
      <UtilTable columns={columns} data={data} />
    </div>
  );
};

export default AddressBook;
