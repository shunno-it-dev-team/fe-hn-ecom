import capitalizeFirstLetter from "../../../helpers/capitalizeFirstLetter";
import { cn } from "../../../helpers/dynamicClassName";
import PropTypes from "prop-types";

const colSpansObj = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
  5: "col-span-5",
  6: "col-span-6",
  7: "col-span-7",
  8: "col-span-8",
  9: "col-span-9",
  10: "col-span-10",
  11: "col-span-11",
  12: "col-span-12",
};

const colSpansSM_Obj = {
  1: "sm:col-span-1",
  2: "sm:col-span-2",
  3: "sm:col-span-3",
  4: "sm:col-span-4",
  5: "sm:col-span-5",
  6: "sm:col-span-6",
  7: "sm:col-span-7",
  8: "sm:col-span-8",
  9: "sm:col-span-9",
  10: "sm:col-span-10",
  11: "sm:col-span-11",
  12: "sm:col-span-12",
};

const colSpansMD_Obj = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};
const colSpansLG_Obj = {
  1: "lg:col-span-1",
  2: "lg:col-span-2",
  3: "lg:col-span-3",
  4: "lg:col-span-4",
  5: "lg:col-span-5",
  6: "lg:col-span-6",
  7: "lg:col-span-7",
  8: "lg:col-span-8",
  9: "lg:col-span-9",
  10: "lg:col-span-10",
  11: "lg:col-span-11",
  12: "lg:col-span-12",
};

const colSpansXL_Obj = {
  1: "xl:col-span-1",
  2: "xl:col-span-2",
  3: "xl:col-span-3",
  4: "xl:col-span-4",
  5: "xl:col-span-5",
  6: "xl:col-span-6",
  7: "xl:col-span-7",
  8: "xl:col-span-8",
  9: "xl:col-span-9",
  10: "xl:col-span-10",
  11: "xl:col-span-11",
  12: "xl:col-span-12",
};

const FormInputWrapper = ({
  label,
  errorMessage,
  className,
  colSpans,
  required,
  children,
}) => {
  return (
    <label
      className={cn(
        "form-control w-full ",
        {
          [colSpansObj[colSpans?.xs]]: colSpans?.xs,
          [colSpansSM_Obj[colSpans?.sm]]: colSpans?.sm,
          [colSpansMD_Obj[colSpans?.md]]: colSpans?.md,
          [colSpansLG_Obj[colSpans?.lg]]: colSpans?.lg,
          [colSpansXL_Obj[colSpans?.xl]]: colSpans?.xl,
        },
        className
      )}
    >
      <div className="label">
        <span className="label-text">
          {label} {required && <span className="text-error">*</span>}
        </span>
      </div>

      {children}

      {errorMessage && (
        <div className="label  italic">
          <span className="label-text-alt text-error">
            {capitalizeFirstLetter(errorMessage)}
          </span>
        </div>
      )}
    </label>
  );
};

FormInputWrapper.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  colSpans: PropTypes.shape({
    xs: PropTypes.number,
    sm: PropTypes.number,
    md: PropTypes.number,
    lg: PropTypes.number,
    xl: PropTypes.number,
  }),
  required: PropTypes.bool,
};

export default FormInputWrapper;
