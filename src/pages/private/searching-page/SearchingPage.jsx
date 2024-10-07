const SearchingPage = () => {
  return (
    <div className="max-w-xs  bg-base-200  p-4 shadow-md rounded-lg">
      <details className="mb-4">
        <summary className="text-xl font-semibold">Categories</summary>
        <ul className="mt-2 space-y-2">
          <li className="text-gray-700">Mobile Phone Cases</li>
          <li className="text-gray-700">Mens T-Shirts</li>
          <li className="text-gray-700">Wireless Earbuds</li>
          <li className="text-gray-700">Phone Screen Protectors</li>
          <li className="text-gray-700">Trimmers, Groomers & Clippers</li>
          <li className="text-gray-700">Face Skin Care Tools</li>
          <li className="text-gray-700">Health Accessories</li>
          <li className="text-blue-500 hover:underline cursor-pointer">
            VIEW MORE
          </li>
        </ul>
      </details>

      <details className="mb-4">
        <summary className="text-xl font-semibold">Brand</summary>
        <ul className="mt-2 space-y-2">
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="buniyadi"
            />
            <label htmlFor="buniyadi" className="ml-2 text-gray-700">
              Buniyadi
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="samsung"
            />
            <label htmlFor="samsung" className="ml-2 text-gray-700">
              Samsung
            </label>
          </li>
          <li>
            <input type="checkbox" className="checkbox checkbox-xs" id="Vivo" />
            <label htmlFor="Vivo" className="ml-2 text-gray-700">
              Vivo
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="lenovo"
            />
            <label htmlFor="lenovo" className="ml-2 text-gray-700">
              Lenovo
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="non-brand"
            />
            <label htmlFor="non-brand" className="ml-2 text-gray-700">
              Non brand
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Nokia"
            />
            <label htmlFor="Nokia" className="ml-2 text-gray-700">
              Nokia
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Apple"
            />
            <label htmlFor="Apple" className="ml-2 text-gray-700">
              Apple
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Symphony"
            />
            <label htmlFor="Symphony" className="ml-2 text-gray-700">
              Symphony
            </label>
          </li>
          <li>
            <input type="checkbox" className="checkbox checkbox-xs" id="Asus" />
            <label htmlFor="Asus" className="ml-2 text-gray-700">
              Asus
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="non-brand"
            />
            <label htmlFor="not-brand" className="ml-2 text-gray-700">
              Non brands
            </label>
          </li>
          <li className="text-blue-500 hover:underline cursor-pointer">
            VIEW MORE
          </li>
        </ul>
      </details>

      <details className="mb-4">
        <summary className="text-xl font-semibold">Price</summary>
      </details>
      <details>
        <summary className="text-xl font-semibold">Warranty Type</summary>
        <ul>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="no-warranty"
            />
            <label htmlFor="no-warranty" className="ml-2 text-gray-700">
              No Warranty
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="seller-warranty"
            />
            <label htmlFor="seller-warranty" className="ml-2 text-gray-700">
              Seller warranty
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Biller-Warranty"
            />
            <label htmlFor="Biller-Warranty" className="ml-2 text-gray-700">
              Biller Warranty
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Local-Seller-Warranty"
            />
            <label
              htmlFor="Local-Seller-Warranty"
              className="ml-2 text-gray-700"
            >
              Local Seller Warranty
            </label>
          </li>
        </ul>
      </details>
      <details className="mt-4">
        <summary className="text-xl font-semibold"> Language</summary>
        <ul>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="English"
            />
            <label htmlFor="English" className="ml-2 text-gray-700">
              English
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-xs"
              id="Bengali"
            />
            <label htmlFor="Bengali" className="ml-2 text-gray-700">
              Bengali
            </label>
          </li>
        </ul>
      </details>
    </div> 
  );
};

export default SearchingPage;
