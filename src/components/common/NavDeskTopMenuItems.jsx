import PropTypes from "prop-types";

const NavDeskTopMenuItems = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.to}>{item.name}</a>
          {/* Check if there are subMenuItems and recursively render */}
          {item.subMenuItems && (
            <ul className="p-2">
              <NavDeskTopMenuItems items={item.subMenuItems} />
            </ul>
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
};

export default NavDeskTopMenuItems;
