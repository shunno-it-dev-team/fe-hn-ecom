import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductImage from "../product-image/ProductImage";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Failed to fetch product:", err));
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="max-w-6xl mx-auto bg-base-100 shadow-md rounded-lg overflow-hidden flex flex-col lg:flex-row">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 p-6 flex items-center justify-center">
          <div className="  rounded-lg overflow-hidden">
            <ProductImage />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between">
          {/* Title and Description */}
          <div className="mb-6">
            <h2 className="text-3xl font-bold bg-accent-content mb-4">
              {product.title}
            </h2>
            <p className=" mb-4">
              {product.description.length > 150
                ? product.description.slice(0, 150) + "..."
                : product.description}
            </p>
          </div>

          {/* Price and Category */}
          <div className="mb-6">
            <p className="text-3xl font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="text-lg">
              <h3 className="font-bold bg-accent-content">Category:</h3>
              <p className="capitalize text-gray-500">{product.category}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button className="btn btn-primary  py-3 text-lg hover:bg-primary-focus transition-all duration-300">
              Add to Cart
            </button>
            <button
              className="btn btn-outline py-3 text-lg hover:bg-info transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
