import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaIconByKeyName from "../../../../components/icons/FaIconByKeyName";
import { useRef } from "react";

const CategoryVerticalBar = ({ categories, isLoading }) => {
  const scrollRef = useRef(null);

  const handleCategoryVerticalScroll = (isLeftDirection) => () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: isLeftDirection ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="bg-base-100 w-full p-2 rounded-2xl mb-3">
        <div className="flex gap-3 items-center rounded-3xl">
          {Array(10)
            .fill({})
            .map((_, i) => {
              return <div key={i} className="skeleton h-8 w-full"></div>;
            })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2 text-center uppercase">
        Categories
      </h2>
      <div className="relative bg-base-100 w-full p-2 rounded-2xl px-12 mb-3">
        <button
          onClick={handleCategoryVerticalScroll(true)}
          className="badge py-4 badge-primary absolute top-1/2 -translate-y-1/2 left-2 shadow-lg hover:badge-neutral"
        >
          <FaIconByKeyName iconName={"FaAngleLeft"} />
        </button>

        <button
          onClick={handleCategoryVerticalScroll(false)}
          className="badge py-4 badge-primary absolute top-1/2 -translate-y-1/2 right-2 shadow-lg hover:badge-neutral"
        >
          <FaIconByKeyName iconName={"FaAngleRight"} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-3 items-center overflow-x-hidden rounded-3xl"
        >
          {categories &&
            categories.map((category) => (
              <Link
                to={`product/category/${category.category}`}
                key={category.id}
                className="btn btn-sm rounded-full"
              >
                {category.category}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

CategoryVerticalBar.propTypes = {
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default CategoryVerticalBar;
