import * as yup from "yup";

const contactDetails = [
  {
    details:
      "রাজশাহী অফিস ঠিকানাঃ ২১৬/১, পশ্চিম তালাইমারি, <br /> কাজলা, বোয়ালিয়া, রাজশাহী-৬২০৪",
    icon: "FaMapMarkerAlt",
    type: "text",
  },
  {
    details: "০১৮৯৬৪৮৮৪৮০",
    icon: "FaMobile",
    type: "link",
    href: "tel:+8801896488480",
  },
  {
    details: "hisabnikash@gmail.com",
    icon: "FaEnvelope",
    type: "link",
    href: "mailto:hisabnikash@gmail.com",
  },
  {
    details: "https://hisabnikashbd.com/",
    icon: "FaGlobe",
    type: "link",
    href: "https://hisabnikashbd.com/",
  },
];

// =================== FORM DEPENDENCY ===================

const contactUsValidationScheme = () => {
  return yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid Email").required("Email is required"),
    subject: yup.string().required("Subject is required"),
    message: yup.string().required("Message is required"),
  });
};

const CONTACT_DETAILS_DEFAULT_VALUES = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const contactUsFormData = () => {
  return [
    {
      type: "text",
      name: "name",
      label: "Name",
      placeholder: "Your Name",
      required: true,
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Your Email",
      required: true,
    },
    {
      type: "text",
      name: "subject",
      label: "Subject",
      placeholder: "Subject",
      required: true,
      colSpans: { xs: 1, lg: 2 },
    },
    {
      type: "textarea",
      name: "message",
      label: "Message",
      placeholder: "Your message",
      required: true,
      colSpans: { xs: 1, lg: 2 },
    },
  ];
};

export {
  contactUsFormData,
  contactDetails,
  contactUsValidationScheme,
  CONTACT_DETAILS_DEFAULT_VALUES,
};
