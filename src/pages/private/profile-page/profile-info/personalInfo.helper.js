const personalInfoFormData = () => {
  return [
    {
      type: "text",
      name: "firstName",
      label: "First Name",
      placeholder: "Mominul XXXX",
    },
    {
      type: "text",
      name: "lastName",
      label: "Last Name",
      placeholder: "XXXX Anik",
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
        { label: "FeMale", value: "FEMALE" },
      ],
    },
  ];
};

export { personalInfoFormData };
