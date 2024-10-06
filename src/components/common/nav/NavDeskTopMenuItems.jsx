import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavDeskTopMenuItems = ({ items, className }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          {item.subMenuItems ? (
            // If the item has subMenuItems, render it as a details-summary element

            <details>
              <summary>{item.name}</summary>
              <ul className={`p-2 ${className}`}>
                <NavDeskTopMenuItems items={item.subMenuItems} />
              </ul>
            </details>
          ) : (
            // Otherwise, just render the item as a normal link
            <Link to={item.to}>{item.name}</Link>
          )}
        </li>
      ))}
    </>
  );
};

NavDeskTopMenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
      subMenuItems: PropTypes.array,
    })
  ).isRequired,
  isSubmenu: PropTypes.bool,
  className: PropTypes.string,
};

export default NavDeskTopMenuItems;
