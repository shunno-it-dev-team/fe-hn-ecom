const ProductReviewTable = () => {
  return (
    <div className="max-w-7xl  bg-base-200 rounded-lg shadow-lg mt-8 overflow-x-auto mx-4">
      <table className="table-auto w-full text-left border rounded-lg hidden md:table">
        {/* This table will only show on medium (md) and larger screens */}
        <tbody>
          <tr className="border-b">
            <td className="py-4 px-2 md:px-6 font-semibold">Price</td>
            <td className="py-4 px-2 md:px-6 text-primary font-bold">
              {/* ${product.price.toFixed(2)} */}
            </td>
            <td className="py-4 px-2 md:px-6 font-semibold">Discount</td>
            <td className="py-4 px-2 md:px-6">7.17%</td>
            <td className="py-4 px-2 md:px-6 font-semibold">Rating</td>
            <td className="py-4 px-2 md:px-6">
              <div className="rating rating-sm">
                <input type="radio" className="mask mask-star-2 bg-primary" />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-primary"
                  checked
                />
                <input type="radio" className="mask mask-star-2 bg-primary" />
                <input type="radio" className="mask mask-star-2 bg-primary" />
                <input type="radio" className="mask mask-star-2 bg-base-100" />
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-2 md:px-6 font-semibold">Stock</td>
            <td className="py-4 px-2 md:px-6">
              {/* Stock check logic goes here */}
            </td>
            <td className="py-4 px-2 md:px-6 font-semibold">Brand</td>
            <td className="py-4 px-2 md:px-6">Essence</td>
            <td className="py-4 px-2 md:px-6 font-semibold">SKU</td>
            <td className="py-4 px-2 md:px-6">RCH45Q1A</td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-2 md:px-6 font-semibold">Weight</td>
            <td className="py-4 px-2 md:px-6">2g</td>
            <td className="py-4 px-2 md:px-6 font-semibold">Dimensions</td>
            <td className="py-4 px-2 md:px-6">23.17 x 14.43 x 28.01 mm</td>
            <td className="py-4 px-2 md:px-6 font-semibold">Warranty</td>
            <td className="py-4 px-2 md:px-6">1 month warranty</td>
          </tr>
          <tr>
            <td className="py-4 px-2 md:px-6 font-semibold">Shipping</td>
            <td className="py-4 px-2 md:px-6">Ships in 1 month</td>
            <td className="py-4 px-2 md:px-6 font-semibold">Return Policy</td>
            <td className="py-4 px-2 md:px-6">30 days return policy</td>
            <td className="py-4 px-2 md:px-6 font-semibold">
              Minimum Order Quantity
            </td>
            <td className="py-4 px-2 md:px-6">24</td>
          </tr>
        </tbody>
      </table>

      {/* For mobile, use a stacked block layout */}
      <div className="block md:hidden px-2 mx-4">
        <div className="border-b py-4">
          <span className="font-semibold">Price: </span>
          <span className="text-primary font-bold">$9.99</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Discount: </span>
          <span>7.17%</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Rating: </span>
          <div className="rating rating-sm">
            <input type="radio" className="mask mask-star-2 bg-primary" />
            <input
              type="radio"
              className="mask mask-star-2 bg-primary"
              checked
            />
            <input type="radio" className="mask mask-star-2 bg-primary" />
            <input type="radio" className="mask mask-star-2 bg-primary" />
            <input type="radio" className="mask mask-star-2 bg-base-200" />
          </div>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Stock: </span>
          <span>Low Stock (5 in stock)</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Brand: </span>
          <span>Essence</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">SKU: </span>
          <span>RCH45Q1A</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Weight: </span>
          <span>2g</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Dimensions: </span>
          <span>23.17 x 14.43 x 28.01 mm</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Warranty: </span>
          <span>1 month warranty</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Shipping: </span>
          <span>Ships in 1 month</span>
        </div>
        <div className="border-b py-4">
          <span className="font-semibold">Return Policy: </span>
          <span>30 days return policy</span>
        </div>
        <div className="py-4">
          <span className="font-semibold">Minimum Order Quantity: </span>
          <span>24</span>
        </div>
      </div>
    </div>
  );
};

export default ProductReviewTable;
