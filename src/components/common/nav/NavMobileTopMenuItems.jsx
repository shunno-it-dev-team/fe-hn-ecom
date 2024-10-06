import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavMobileTopMenuItems = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <Link to={item.to}>{item.name}</Link>
          {/* Check if there are subMenuItems and recursively render */}
          {item.subMenuItems && (
            <ul className="p-2 ">
              <NavMobileTopMenuItems items={item.subMenuItems} />
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

NavMobileTopMenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      subMenuItems: PropTypes.array,
    })
  ).isRequired,
};

export default NavMobileTopMenuItems;
