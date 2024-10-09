import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Rating from "react-rating";
import FaIconByKeyName from "../icons/FaIconByKeyName";

const CustomCard = ({ product }) => {
  console.log("product.rating.rate", product.rating.rate);
  return (
    <div className="card card-compact p-3 bg-base-100 hover:outline hover:shadow-none outline-1 outline-primary/40 text-center">
      <figure className="relative bg-white">
        {product.id % 5 == 0 && (
          <>
            <div className="badge badge-accent absolute z-10 top-1 right-1">
              {product.id + 1} % OFF
            </div>
            <div className="absolute top-0 right-0 h-10 w-20 blur-md bg-accent/10"></div>
          </>
        )}

        <img
          className="w-full aspect-[4/3] object-contain p-2"
          src={product.image}
          alt={product.title}
        />
      </figure>

      <div className="card-body !p-0 justify-between items-start">
        <div className="text-start flex flex-col gap-2">
          <h5 className="font-bold text-start">
            {product.title.length > 40
              ? product.title.slice(0, 40) + "..."
              : product.title}
          </h5>

          <span className="text-xs capitalize">{product.category}</span>

          <div>
            <span className={"badge badge-success badge-outline capitalize"}>
              &#2547;{product.price}
            </span>
          </div>

          <div className="text-warning ">
            <Rating
              initialRating={product.rating.rate}
              readonly
              emptySymbol={<FaIconByKeyName iconName="FaRegStar" />}
              fullSymbol={<FaIconByKeyName iconName="FaStar" />}
            />
            <span className="text-sm text-secondary ml-1">
              ({product.rating.count})
            </span>
          </div>
        </div>

        <div className="text-center space-x-2">
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-outline btn-primary btn-sm">
              Details
            </button>
          </Link>

          <button className="btn btn-primary btn-sm">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

CustomCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default CustomCard;
