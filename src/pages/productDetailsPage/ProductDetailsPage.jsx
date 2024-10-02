const ProductDetailsPage = () => {
  // Mock product data
  const product = {
    id: 1,
    name: "Wireless Headphones",
    description:
      "Experience premium sound quality with our wireless headphones. Designed for comfort and built for long listening sessions.",
    price: 89.99,
    image: "https://via.placeholder.com/400",
    features: [
      "High-quality audio",
      "Bluetooth 5.0",
      "Noise-cancelling",
      "Up to 24 hours battery life",
    ],
  };

  return (
    <div className="min-h-screen bg-base-200 p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
        {/* Product Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-neutral">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="text-2xl font-semibold text-primary">
            ${product.price.toFixed(2)}
          </p>

          {/* Features List */}
          <div>
            <h3 className="text-xl font-bold">Features:</h3>
            <ul className="list-disc ml-5 space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline">Back to Products</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
