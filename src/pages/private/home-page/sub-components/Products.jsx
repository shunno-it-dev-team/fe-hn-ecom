import CustomCard from "../../../../components/common/CustomCard";
import PropTypes from "prop-types";

const Products = ({ products, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="card card-compact p-3 bg-base-100 hover:outline hover:shadow-none outline-1 outline-primary/40 text-center animate-pulse"
          >
            <div className="skeleton h-40 w-full"></div>
            <div className="skeleton h-4 w-full mt-2"></div>
            <div className="skeleton h-4 w-1/2 mt-2"></div>
            <div className="skeleton h-7 w-1/3 mt-2"></div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, index) => {
                return (
                  <div key={index} className="skeleton h-5 w-5 mt-2"></div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 mt-5">
              <div className="skeleton h-9 rounded-lg w-24"></div>
              <div className="skeleton h-9 rounded-lg w-28"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products &&
            products.map((product) => (
              <CustomCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

Products.propTypes = {
  products: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Products;
