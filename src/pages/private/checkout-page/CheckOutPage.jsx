import { useForm } from "react-hook-form";

import checkoutHelper from "./checkout.helper";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/common/form/FormInput";

const CheckOutPage = () => {
  const {
    CHECKOUT_CONTACT_FORM_DEFAULT_VALUES,
    checkoutContactFormValidationSchema,
    checkoutContactFormData,
  } = checkoutHelper;

  const { handleSubmit, control } = useForm({
    defaultValues: CHECKOUT_CONTACT_FORM_DEFAULT_VALUES,
    mode: "all",
    resolver: yupResolver(checkoutContactFormValidationSchema),
  });

  const formSubmit = () => {};

  return (
    <section className="py-3">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col items-start lg:flex-row gap-6 px-6"
      >
        {/*======== CONTACT DETAILS ======== */}
        <div className="w-full lg:w-5/6 bg-base-100 p-4 rounded-lg">
          <h2 className="text-2xl font-semibold text-primary mb-6">
            Contact Details
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <FormInput
              {...{
                control,
                formData: checkoutContactFormData,
              }}
            />
          </div>

          {/*========  PAYMENT SECTION ======== */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Payment Options
            </h2>
            <div className="flex gap-4">
              {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
                <div key={method} className="w-1/3">
                  <div className="bg-base-200 p-6 h-56 lg:h-32 rounded-lg text-center shadow-md cursor-pointer hover:bg-primary hover:text-base-100 transition-all">
                    <p className="font-semibold">{method}</p>
                    <p className="text-sm mt-2">
                      Pay with {method.toLowerCase()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/*========  DELIVERY METHOD SECTION ========  */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Delivery Method
            </h2>
            <div className="flex gap-4">
              {["Standard Shipping", "Express Shipping", "Free Shipping"].map(
                (method) => (
                  <div key={method} className="w-1/3">
                    <div className="bg-base-200 p-6 h-56 lg:h-32  rounded-lg text-center shadow-md cursor-pointer hover:bg-primary hover:text-base-100 transition-all">
                      <p className="font-semibold">{method}</p>
                      <p className="text-sm mt-2">
                        Get your product via {method.toLowerCase()}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/*========  ORDER SUMMARY ========  */}
        <div className="w-full lg:w-2/6 bg-base-100 p-4 rounded-lg sticky top-20">
          <h2 className="text-2xl font-semibold text-primary mb-4">
            Order Summary
          </h2>

          <div className="space-y-1 text-lg ">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$8,094.00</span>
            </div>
            <div className="flex justify-between">
              <span>Savings</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between">
              <span>Store Pickup</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between">
              <span>Tax</span>
              <span>$199.00</span>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between font-bold text-primary text-xl mt-4">
              <span>Total</span>
              <span>$8,392.00</span>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-6 hover:btn-secondary transition-all">
            Proceed to Payment
          </button>
        </div>
      </form>
    </section>
  );
};

export default CheckOutPage;
