import CustomCard from "../../../../components/common/CustomCard";
import PropTypes from "prop-types";
import CardSkeleton from "../../../../components/skeleton/CardSkeleton";

const Products = ({ products, isLoading }) => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto">
        <CardSkeleton length={8} isLoading={isLoading} />

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
