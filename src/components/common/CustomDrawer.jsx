import PropTypes from "prop-types";
import { cn } from "../../helpers/dynamicClassName";

const CustomDrawer = ({
  children,
  drawerId,
  drawerSidebarWidth = "w-56",
  sidebarComponent,
  className,
  pageContentClassName,
  sidebarClassName,
}) => {
  return (
    <div className={cn("drawer lg:drawer-open py-2", className)}>
      <input id={drawerId} type="checkbox" className="drawer-toggle" />

      <div className={cn("drawer-content px-1", pageContentClassName)}>
        {/* Page content here */}
        {children}
      </div>

      <div
        className={cn(
          "drawer-side min-h-full pr-2",
          drawerSidebarWidth,
          sidebarClassName
        )}
      >
        {sidebarComponent}
      </div>
    </div>
  );
};

CustomDrawer.propTypes = {
  children: PropTypes.node.isRequired,
  drawerId: PropTypes.string.isRequired,
  drawerSidebarWidth: PropTypes.string,
  className: PropTypes.string,
  sidebarClassName: PropTypes.string,
  pageContentClassName: PropTypes.string,
  sidebarComponent: PropTypes.node.isRequired,
};

export default CustomDrawer;
