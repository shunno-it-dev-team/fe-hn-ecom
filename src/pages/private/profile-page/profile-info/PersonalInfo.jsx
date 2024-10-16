import { useForm } from "react-hook-form";
import FormInput from "../../../../components/common/form/FormInput";
import { personalInfoFormData } from "./personalInfo.helper";

const PersonalInfo = () => {
  const { control, handleSubmit } = useForm({
    mode: "all",
  });

  const formSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <div>
      <div className="p-6">
        <div className="text-2xl font-semibold mb-4">Personal Information</div>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <FormInput
              {...{
                control,
                formData: personalInfoFormData(),
              }}
            />
          </div>

          <button className="btn btn-primary btn-block mt-4" type="submit">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
