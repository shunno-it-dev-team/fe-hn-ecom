import PropTypes from "prop-types";

const Container = ({ children, className, fluid, Component = "div" }) => {
  return (
    <Component
      className={`mx-auto ${
        fluid ? "px-5" : "container px-2 lg:px-0"
      } ${className}`}
    >
      {children}
    </Component>
  );
};

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  Component: PropTypes.elementType,
};

export default Container;
