import PropTypes from "prop-types";

const CustomDrawer = ({ children, drawerId }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        {children}
      </div>

      <div className="drawer-side">
        <label
          htmlFor={drawerId}
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a>Sidebar Item 1</a>
          </li>
          <li>
            <a>Sidebar Item 2</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

CustomDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  drawerId: PropTypes.string.isRequired,
};

export default CustomDrawer;
