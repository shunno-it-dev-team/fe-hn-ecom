import { useState } from "react";
import PropTypes from "prop-types";
import { cn } from "../../helpers/dynamicClassName";

const borderBottom = {
  1: "border-b",
  2: "border-b-2",
  3: "border-b-3",
  4: "border-b-4",
  5: "border-b-5",
};

const borderColors = {
  primary: "border-primary",
  secondary: "border-secondary",
  success: "border-success",
  danger: "border-danger",
  warning: "border-warning",
  info: "border-info",
};

const textColors = {
  primary: "text-primary",
  secondary: "text-secondary",
  success: "text-success",
  danger: "text-danger",
  warning: "text-warning",
  info: "text-info",
};

/**
 *
 * @param {tabs} - tabs Array of objects containing title, Component, icon, className
 * @param {tabContentClassName} - tabContentClassName string
 * @param {tabContainerClass} - tabContainerClass string
 * @param {activeColor} - activeColor string
 * @param {activeBorder} - activeBorder number
 * @param {startHeader} - startHeader element
 * @param {endHeader} - endHeader element
 * @example
 * const tabs = [
 *  {
 *   title: "Tab 1",
 *   Component: <Component1 />,
 *   icon: <Icon />,
 *   className: "custom-class",
 *  },
 * ];
 *
 * <TabComponent
 *   tabs={tabs}
 *   tabContentClassName="custom-class"
 *   tabContainerClass="custom-class"
 *   activeColor="primary"
 *   activeBorder={2}
 *   startHeader={<Header />}
 *   endHeader={<Header />}
 * />
 * @returns
 */
const TabComponent = ({
  tabs,
  tabContentClassName,
  tabContainerClass,
  activeColor = "primary",
  activeBorder = 2,
  startHeader,
  endHeader,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <div
        className={cn(
          "flex justify-between items-center",
          (startHeader || endHeader) && "border-b"
        )}
      >
        {startHeader && startHeader}

        <div
          role="tablist"
          className={cn("w-full", tabContainerClass && tabContainerClass)}
        >
          {tabs.map((tab, index) => (
            <a
              key={index}
              role="tab"
              className={cn(
                "tab",
                activeTab === index
                  ? `${borderBottom[activeBorder]} ${borderColors[activeColor]}`
                  : ""
              )}
              onClick={() => setActiveTab(index)}
            >
              {tab.icon && tab.icon}{" "}
              <span
                className={cn(activeTab === index && textColors[activeColor])}
              >
                {tab.title}
              </span>
            </a>
          ))}
        </div>
        {endHeader && endHeader}
      </div>

      <div className={cn(tabContentClassName && tabContentClassName)}>
        {tabs[activeTab].Component}
      </div>
    </>
  );
};

TabComponent.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      Component: PropTypes.element.isRequired,
      icon: PropTypes.element,
      className: PropTypes.string,
    })
  ),
  tabContentClassName: PropTypes.string,
  tabContainerClass: PropTypes.string,
  activeColor: PropTypes.string,
  activeBorder: PropTypes.number,
  startHeader: PropTypes.element,
  endHeader: PropTypes.element,
};

export default TabComponent;
