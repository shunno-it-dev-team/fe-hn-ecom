import { useEffect, useRef, useState } from "react";
import { cn } from "../../helpers/dynamicClassName";
import { Link } from "react-router-dom";
import FaIconByKeyName from "../icons/FaIconByKeyName";
import PropTypes from "prop-types";
// eslint-disable-next-line no-unused-vars
import * as FaIcons from "react-icons/fa";

/**
 * @param {{ title: string, className: string, menuItems: { type: "link" | "divider", icon: keyof typeof FaIcons, title: string, to: string }[], menuPortalClassName: string, hasHeader: boolean, menuHeaderTitle: string }} props
 * */
const CustomDropdown = ({
  title,
  className,
  menuItems,
  menuPortalClassName,
  hasHeader,
  menuHeaderTitle,
  hasFooter,
  FooterComponent,
  placement,
  MenuComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Toggle dropdown open/close
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={cn(
        "dropdown",
        placement === "end" && "dropdown-end",
        placement === "start" && "dropdown-start"
      )}
      ref={dropdownRef}
    >
      {/* Dropdown toggle button */}
      <label
        tabIndex={0}
        className={cn("cursor-pointer m-1", className)}
        onClick={toggleDropdown}
      >
        {title}
      </label>

      {/* Dropdown content */}
      {isOpen && (
        <ul
          tabIndex={0}
          className={cn(
            "dropdown-content menu p-2 shadow bg-base-100 rounded-box",
            menuPortalClassName
          )}
        >
          {hasHeader && (
            <>
              <div className="flex justify-between items-center">
                <h6 className="font-semibold text-primary">
                  {menuHeaderTitle}
                </h6>
                <button
                  className="btn btn-xs btn-ghost btn-circle"
                  onClick={closeDropdown}
                >
                  <FaIconByKeyName iconName="FaTimes" />
                </button>
              </div>
              <div className="divider m-0"></div>
            </>
          )}

          {MenuComponent
            ? MenuComponent
            : menuItems.map((item, index) => {
                if (item.type === "divider") {
                  return <div key={index} className="divider m-0"></div>;
                }
                if (item.type === "link") {
                  return (
                    <li key={index}>
                      <Link to={item.to} className="link link-hover">
                        {item.icon && (
                          <FaIconByKeyName
                            iconName={item.icon}
                            className="mr-2"
                          />
                        )}
                        {item.title}
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <button className={item.className}>
                        {item.icon && (
                          <FaIconByKeyName
                            iconName={item.icon}
                            className="mr-2"
                          />
                        )}
                        {item.title}
                      </button>
                    </li>
                  );
                }
              })}
          {hasFooter && (
            <>
              <div className="divider m-0"></div>
              {FooterComponent}
            </>
          )}
        </ul>
      )}
    </div>
  );
};
CustomDropdown.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["link", "divider"]),
      icon: PropTypes.string,
      title: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
  menuPortalClassName: PropTypes.string,
  hasHeader: PropTypes.bool,
  menuHeaderTitle: PropTypes.string,
  hasFooter: PropTypes.bool,
  FooterComponent: PropTypes.elementType,
  placement: PropTypes.oneOf(["start", "end"]),
  MenuComponent: PropTypes.elementType,
};

export default CustomDropdown;
