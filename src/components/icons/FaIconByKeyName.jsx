import PropTypes from "prop-types";
import * as FaIcons from "react-icons/fa";

/**
 * @param {{ iconName: keyof typeof FaIcons }} props
 */
const FaIconByKeyName = ({ iconName }) => {
  const IconComponent = FaIcons[iconName];

  if (!IconComponent) {
    return (
      <span className="text-xs text-error p-1 bg-base-100 rounded-lg">
        Icon not found
      </span>
    );
  }

  return <IconComponent />;
};

FaIconByKeyName.propTypes = {
  iconName: PropTypes.oneOf(Object.keys(FaIcons)),
};

export default FaIconByKeyName;
