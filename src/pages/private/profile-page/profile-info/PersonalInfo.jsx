import { useForm } from "react-hook-form";
import FormInput from "../../../../components/common/form/FormInput";
import {
  PERSONAL_INFO_DEFAULT_VALUES,
  personalInfoFormData,
  personalInfoValidationSchema,
} from "./personalInfo.helper";
import { yupResolver } from "@hookform/resolvers/yup";

const PersonalInfo = () => {
  const { control, handleSubmit } = useForm({
    mode: "all",
    defaultValues: PERSONAL_INFO_DEFAULT_VALUES,
    resolver: yupResolver(personalInfoValidationSchema()),
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
