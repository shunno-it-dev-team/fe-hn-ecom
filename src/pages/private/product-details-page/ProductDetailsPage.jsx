import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProductImage from "../product-image/ProductImage";
import ProductReviewTable from "./ProductReviewTable";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 py-12">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden flex flex-col lg:flex-row ">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="rounded-lg overflow-hidden">
            <ProductImage />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
          {/* Title and Description */}
          <div className="mb-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h2>
            <p className="text-gray-700 mb-4">
              {product.description.length > 100
                ? product.description.slice(0, 100) + "..."
                : product.description}
            </p>
          </div>

          {/* Price and Category */}
          <div className="mb-6">
            <p className="text-3xl font-semibold text-green-600 mb-4">
              ${product.price.toFixed(2)}
            </p>
            <div className="text-lg">
              <h3 className="font-bold text-gray-800">Category:</h3>
              <p className="capitalize text-gray-500">{product.category}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4">
            <button className="btn btn-primary lg:w-auto py-3 text-lg hover:bg-primary-focus transition-all duration-300">
              Add to Cart
            </button>
            <button
              className="btn btn-outline lg:w-auto py-3 text-lg hover:bg-info transition-all duration-300"
              onClick={() => navigate(-1)}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto mt-8 p-6 bg-base-100 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      <div className="max-w-7xl mx-auto mt-8 p-6 bg-base-100 rounded-lg">
        <ProductReviewTable />
      </div>

      {/* Category Tags */}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-base-100 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Tags</h2>
        <p className="text-gray-700">{product.category}</p>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-base-100 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Reviews</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-base-200 border rounded-lg shadow">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center">
              <span className="text-xl font-bold text-gray-800">JD</span>
            </div>

            {/* Review Content */}
            <div className="flex flex-col">
              <h3 className="font-semibold text-gray-900">John Doe</h3>
              <p className="text-gray-600">Very unhappy with my purchase!</p>

              {/* Rating */}
              <div className="rating mt-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
