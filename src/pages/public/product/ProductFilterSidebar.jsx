import { useForm } from "react-hook-form";
import FormInput from "../../../components/common/form/FormInput";

const ProductFilterSidebar = () => {
  // const {} = useForm

  return (
    <div className="bg-base-100 rounded-xl w-56 overflow-hidden">
      <div className="bg-primary/10 flex justify-between items-center py-2 px-3">
        <h3 className="text-lg text-primary font-semibold">Filter By</h3>

        <button className="text-primary ">Reset</button>
      </div>

      {/* <FormInput/> */}
      <div className="p-3">
        <h4 className="text-lg font-semibold">Category</h4>
        <ul className="space-y-2 mt-2">
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
        </ul>

        <h4 className="text-lg font-semibold mt-4">Price</h4>
        <div className="mt-2">
          <input
            className="range range-xs range-primary"
            type="range"
            id="price"
            name="price"
            min="0"
            max="100"
          />

          <div className="flex justify-between">
            <span>$0</span>
            <span>$100</span>
          </div>
        </div>
        <h4 className="text-lg font-semibold">Category</h4>
        <ul className="space-y-2 mt-2">
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
          <li>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Sub Category</span>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm checkbox-primary"
                />
              </label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductFilterSidebar;
