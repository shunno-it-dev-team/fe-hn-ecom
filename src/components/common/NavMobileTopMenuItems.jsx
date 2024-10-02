import PropTypes from "prop-types";

const NavMobileTopMenuItems = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          {item.subMenuItems ? (
            // If the item has subMenuItems, render it as a details-summary element

            <details>
              <summary>{item.name}</summary>
              <ul className="p-2">
                <NavMobileTopMenuItems items={item.subMenuItems} />
              </ul>
            </details>
          ) : (
            // Otherwise, just render the item as a normal link
            <a href={item.to}>{item.name}</a>
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
  isSubmenu: PropTypes.bool,
};

export default NavMobileTopMenuItems;
