import * as Yup from "yup";

// =========== CHECKOUT_CONTACT FORM ===========
const CHECKOUT_CONTACT_FORM_DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  company: "",
  zip: "",
  country: "",
  state: "",
  paymentMethod: "",
  cardName: "",
  cardNumber: "",
  cardExpiration: "",
  cardCvc: "",
};

const checkoutContactFormValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  address: Yup.string().required("Address is required"),
  city: Yup.string().required("City is required"),
  company: Yup.string().required("Company is required"),
  zip: Yup.string().required("Zip is required"),
  country: Yup.string().required("Country is required"),
  state: Yup.string().required("State is required"),
  paymentMethod: Yup.string().required("Payment Method is required"),
  cardName: Yup.string().required("Card Name is required"),
  cardNumber: Yup.string().required("Card Number is required"),
  cardExpiration: Yup.string().required("Card Expiration is required"),
  cardCvc: Yup.string().required("Card Cvc is required"),
});

const checkoutContactFormData = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
    disabled: true,
    colSpans: { lg: 3 },
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
    disabled: true,
  },
  {
    label: "Phone",
    name: "phone",
    type: "text",
    placeholder: "Phone",
  },
];

export default {
  CHECKOUT_CONTACT_FORM_DEFAULT_VALUES,
  checkoutContactFormValidationSchema,
  checkoutContactFormData,
};
