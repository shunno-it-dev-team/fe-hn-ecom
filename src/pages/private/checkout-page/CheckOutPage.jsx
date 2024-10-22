import { useForm } from "react-hook-form";
import checkoutHelper from "./checkout.helper";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../../../components/common/form/FormInput";
import { useState } from "react";
import { cn } from "../../../helpers/dynamicClassName";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const CheckOutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("ssl-commerz");
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

  const paymentOptions = [
    {
      label: "SSL Commerz",
      value: "ssl-commerz",
      img: "data:image/png;base64,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",
    },
    {
      label: "Bkash",
      value: "bkash",
      img: "data:image/jpeg;base64,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",
    },
    {
      label: "Cash on Delivery",
      value: "cod",
      img: "data:image/jpeg;base64,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",
    },
  ];

  return (
    <section className="py-3 container mx-auto">
      <h2 className="text-4xl font-semibold text-primary mb-6">Checkout</h2>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col items-start lg:flex-row gap-6 "
      >
        {/*======== CONTACT DETAILS ======== */}
        <div className="w-full lg:w-5/6 bg-base-100 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-6">Contact Details</h2>

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
            <h2 className="text-xl font-semibold mb-4">
              Select Payment Method
            </h2>
            <div className="flex flex-col lg:flex-row gap-4">
              {paymentOptions.map((method) => (
                <div key={method.value} className="lg:w-1/3">
                  <div
                    className={cn(
                      "bg-base-200 p-6 lg:h-36 rounded-lg cursor-pointer hover:outline outline-1 outline-primary/50 hover:text-primary transition-all relative",
                      {
                        "bg-primary/30 text-primary":
                          paymentMethod === method.value,
                      }
                    )}
                    onClick={() => setPaymentMethod(method.value)}
                  >
                    {paymentMethod === method.value && (
                      <span className="absolute top-1 right-1 border border-primary bg-base-100 text-primary rounded-full p-1 text-xs">
                        <FaIconByKeyName iconName="FaCheck" />
                      </span>
                    )}
                    <img
                      src={method.img}
                      alt={method.label}
                      className="h-16 rounded-lg mb-2"
                    />
                    <p className="font-semibold">{method.label}</p>
                  </div>
                </div>
              ))}
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
