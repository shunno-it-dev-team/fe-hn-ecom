import { useForm } from "react-hook-form";
import FormInput from "../../../components/common/form/FormInput";

const ProductFilterSidebar = () => {
  const { control } = useForm();

  const formData = [
    {
      label: "Category",
      name: "category",
      type: "multiple-checkbox",
      options: [
        {
          value: "1",
          label: "Category 1",
        },
        {
          value: "2",
          label: "Category 2",
        },
        {
          value: "3",
          label: "Category 3",
        },
      ],
    },
    {
      label: "Sub Category",
      name: "sub_category",
      type: "text",
      options: [
        {
          value: "1",
          label: "Sub Category 1",
        },
        {
          value: "2",
          label: "Sub Category 2",
        },
        {
          value: "3",
          label: "Sub Category 3",
        },
      ],
    },
    {
      label: "Price",
      name: "price",
      type: "two-way-range",
      min: 0,
      max: 100,
    },
  ];

  return (
    <div className="bg-base-100 rounded-xl w-56 overflow-hidden">
      <div className="bg-primary/10 flex justify-between items-center py-2 px-3">
        <h3 className="text-lg text-primary font-semibold">Filter By</h3>

        <button className="text-primary ">Reset</button>
      </div>

      <div className="grid grid-cols-2 gap-1 p-3">
        <FormInput
          {...{
            control,
            formData,
            size: "sm",
          }}
        />
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
