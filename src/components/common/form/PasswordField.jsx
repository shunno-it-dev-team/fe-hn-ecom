import { useState } from "react";
import FaIconByKeyName from "../../icons/FaIconByKeyName";
import PropTypes from "prop-types";
import { cn } from "../../../helpers/dynamicClassName";

const PasswordField = ({ inputProps, className, ref }) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <label
      ref={ref}
      className={cn("input input-bordered flex items-center gap-2", className)}
    >
      <input
        {...inputProps}
        type={isShowPass ? "text" : "password"}
        className="grow"
      />

      <button
        type="button"
        className="btn btn-sm btn-ghost"
        onClick={() => setIsShowPass(!isShowPass)}
      >
        {isShowPass ? (
          <FaIconByKeyName iconName="FaEye" />
        ) : (
          <FaIconByKeyName iconName="FaEyeSlash" />
        )}
      </button>
    </label>
  );
};

PasswordField.propTypes = {
  inputProps: PropTypes.object.isRequired,
  ref: PropTypes.object,
  className: PropTypes.string,
};

export default PasswordField;
