const ProductReviewTable = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg mt-8 overflow-x-auto">
      <table className="table-auto w-full text-left border rounded-lg">
        <tbody>
          <tr className="border-b">
            <td className="py-4 px-2 md:px-6 font-semibold">Price</td>
            <td className="py-4 px-2 md:px-6 text-green-600 font-bold">
              {/* ${product.price.toFixed(2)} */}
            </td>
            <td className="py-4 px-2 md:px-6 font-semibold">Discount</td>
            <td className="py-4 px-2 md:px-6">7.17%</td>
            <td className="py-4 px-2 md:px-6 font-semibold">Rating</td>
            <td className="py-4 px-2 md:px-6">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input type="radio" className="mask mask-star-2 bg-gray-300" />
              </div>
            </td>
          </tr>
          <tr className="border-b">
            <td className="py-4 px-2 md:px-6 font-semibold ">Stock</td>
            <td className="py-4 px-2 md:px-6">
              {/* {product.stock <= 5 ? (
                  <span className="text-red-500 font-bold">
                    Low Stock ({product.stock} in stock)
                  </span>
                ) : (
                  `${product.stock} in stock`
                )} */}
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
    </div>
  );
};

export default ProductReviewTable;
