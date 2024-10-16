import { useForm } from "react-hook-form";
import FormInput from "../../../components/common/form/FormInput";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";
import {
  CONTACT_DETAILS_DEFAULT_VALUES,
  contactDetails,
  contactUsFormData,
  contactUsValidationScheme,
} from "./contactUs.helper";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCreateContactMutation } from "../../../redux/api/services/contact.service";

const ContactUsPage = () => {
  const [createContact, { isLoading }] = useCreateContactMutation();

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(contactUsValidationScheme()),
    mode: "all",
    defaultValues: CONTACT_DETAILS_DEFAULT_VALUES,
  });

  const formSubmit = (data) => {
    console.log("data :>> ", data);

    createContact(data);
  };

  return (
    <div className="flex min-h-screen max-w-screen-lg justify-between flex-col gap-5 lg:flex-row mx-auto items-center">
      <div className="text-center lg:text-left relative z-10">
        <h2 className="text-5xl font-bold mb-5 text-primary static">
          Contact Us
        </h2>

        <div className="absolute h-2 w-2/3 rounded-lg bg-primary/40 top-10 blur-sm left-2 -z-10 mb-10"></div>

        {/* CONTACT DETAILS */}
        <div className="flex flex-col gap-2">
          {contactDetails.map((contactDetail, index) => {
            if (contactDetail.type === "text") {
              return (
                <div className="flex items-start gap-2" key={index}>
                  <FaIconByKeyName iconName={contactDetail.icon} />
                  <p
                    className="-mt-1"
                    dangerouslySetInnerHTML={{ __html: contactDetail.details }}
                  ></p>
                </div>
              );
            }
            if (contactDetail.type === "link") {
              return (
                <a
                  href={contactDetail.href}
                  className="flex items-center gap-2"
                  key={index}
                >
                  <FaIconByKeyName iconName={contactDetail.icon} />
                  {contactDetail.details}
                </a>
              );
            }
          })}
        </div>
      </div>

      <div className="card bg-base-100 w-full max-w-lg shrink-0">
        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit(formSubmit)} className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <FormInput
              {...{
                formData: contactUsFormData(),
                control,
              }}
            />
          </div>

          <button className="btn btn-block btn-primary" disabled={isLoading}>
            Send
            {isLoading && (
              <span className="loading loading-bars loading-xs"></span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}; 



export default ContactUsPage;
