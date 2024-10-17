import capitalizeFirstLetter from "../../../helpers/capitalizeFirstLetter";
import { cn } from "../../../helpers/dynamicClassName";
import PropTypes from "prop-types";

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
        "form-control w-full",
        {
          [`col-span-${colSpans?.xs}`]: colSpans?.xs,
          [`sm:col-span-${colSpans?.sm}`]: colSpans?.sm,
          [`md:col-span-${colSpans?.md}`]: colSpans?.md,
          [`lg:col-span-${colSpans?.lg}`]: colSpans?.lg,
          [`xl:col-span-${colSpans?.xl}`]: colSpans?.xl,
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
  colSpans: PropTypes.number,
  required: PropTypes.bool,
};

export default FormInputWrapper;
