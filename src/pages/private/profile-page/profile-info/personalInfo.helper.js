import * as Yup from "yup";

const PERSONAL_INFO_DEFAULT_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  dob: "",
  gender: "",
};

const personalInfoValidationSchema = () => {
  return Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required"),
    dob: Yup.string().required("Date of Birth is required"),
    gender: Yup.string().oneOf(["MALE", "FEMALE"]).required(),
  });
};

const personalInfoFormData = () => {
  return [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Mr. XXXX",
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "XXXX",
    },
    {
      type: "email",
      name: "email",
      label: "Email Address",
      placeholder: "example@gmail.com",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      placeholder: "********",
    },
    {
      type: "date",
      name: "dob",
      label: "Date of Birth",
    },
    {
      type: "radio",
      name: "gender",
      label: "Gender",
      options: [
        { label: "Male", value: "MALE" },
        { label: "Female", value: "FEMALE" },
      ],
    },
  ];
};

export {
  personalInfoFormData,
  PERSONAL_INFO_DEFAULT_VALUES,
  personalInfoValidationSchema,
};
