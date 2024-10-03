const SearchingPage = () => {
  return (
    <div className="max-w-xs mx-auto bg-white p-4 shadow-md rounded-lg">
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

      <details>
        <summary className="text-xl font-semibold">Brand</summary>
        <ul className="mt-2 space-y-2">
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="buniyadi"
            />
            <label htmlFor="buniyadi" className="ml-2 text-gray-700">
              Buniyadi
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="samson"
            />
            <label htmlFor="samson" className="ml-2 text-gray-700">
              SAMSON
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="vivel"
            />
            <label htmlFor="vivel" className="ml-2 text-gray-700">
              Vivel
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="lenovo"
            />
            <label htmlFor="lenovo" className="ml-2 text-gray-700">
              Lenovo
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="non-brand"
            />
            <label htmlFor="non-brand" className="ml-2 text-gray-700">
              non brand
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="hegrus"
            />
            <label htmlFor="hegrus" className="ml-2 text-gray-700">
              HEGRUS
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="melao"
            />
            <label htmlFor="melao" className="ml-2 text-gray-700">
              Melao
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="twinkle"
            />
            <label htmlFor="twinkle" className="ml-2 text-gray-700">
              twinkle
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="topewon"
            />
            <label htmlFor="topewon" className="ml-2 text-gray-700">
              Topewon
            </label>
          </li>
          <li>
            <input
              type="checkbox"
              className="checkbox checkbox-sm"
              id="not-brand"
            />
            <label htmlFor="not-brand" className="ml-2 text-gray-700">
              Not brands
            </label>
          </li>
          <li className="text-blue-500 hover:underline cursor-pointer">
            VIEW MORE
          </li>
        </ul>
      </details>
    </div>
  );
};

export default SearchingPage;
