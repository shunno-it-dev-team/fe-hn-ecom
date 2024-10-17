import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../product-image/ProductImage";
import ProductReviewTable from "./ProductReviewTable";
import Rating from "react-rating";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

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
        {/* ================= PRODUCT IMAGE ================= */}
        <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
          <div className="rounded-lg overflow-hidden">
            <ProductImage />
          </div>
        </div>

        {/*================= PRODUCT DETAILS ================= */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
          {/*================= TITLE AND DESCRIPTION =================*/}
          <div className="mb-6">
            <h2 className="text-xl text-primary   mb-4">{product.title}</h2>
            <p>
              Added Date <span>01/06/2024</span>
            </p>
            <div className="mb-2">
              <div className="rating rating-xs mt-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-primary"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-primary"
                />
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-primary"
                />
              </div>
            </div>
            <div className="badge badge-accent badge-outline rounded-none ">
              Instock
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-primary">Color</span>
              </label>
              <div className="flex gap-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="radio_size"
                    className="radio hidden"
                    id="radioSize1"
                  />
                  <div
                    className="w-2 h-2 rounded-full border-2 border-primary p-2 mt-1"
                    style={{ backgroundColor: "#ffcc00" }}
                  ></div>
                </label>
              </div>
            </div>
          </div>
          {/*================= PRICE AND CATEGORY ================= */}
          <div className="mb-2">
            <h2 className="font-semibold">Retail Price </h2>
            <p className=" font-semibold text-primary mb-4">
              ${product.price.toFixed(2)}
            </p>
          </div>

          {/* ================= ACTIONS ================= */}
          <div>
            <h2>Quantity</h2>
            <div className="flex  space-x-4 mt-2">
              <div className=" text-lg">
                <form className="w-24 ">
                  <input
                    type="number"
                    id="number-input"
                    aria-describedby="helper-text-explanation"
                    className="input input-sm input-warning  bg-base-100 text-primary w-full max-w-xs"
                    placeholder="10"
                    required
                  />
                </form>
              </div>
              <button className="btn btn-sm btn-primary lg:w-auto  text-lg hover:bg-primary-focus transition-all duration-300">
                Add to Cart
              </button>
            </div>
          </div>
          {/*================= DESCRIPTION SECTION =================*/}
          <div className="max-w-7xl mt-2  bg-base-100 rounded-lg">
            <h2 className="text-xl font-bold text-primary mb-2">Description</h2>
            <p className="text-sm text-justify">{product.description}</p>
          </div>

          <div className="max-w-7xl mt-2 bg-base-100 rounded-lg flex justify-between">
            <div>
              <p className="text-sm font-bold text-primary mb-2">
                Available Stock:
              </p>
              <p>1784</p>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-2">
                Numbers Of Orders:
              </p>
              <p>1784</p>
            </div>
            <div>
              <p className="text-sm font-bold text-primary mb-2">Revenue:</p>
              <p>$8,57,014</p>
            </div>
          </div>
        </div>
      </div>

      {/*================= TABLE SECTION =================*/}
      <div className="max-w-7xl mx-auto mt-8  bg-base-100 rounded-lg">
        <ProductReviewTable />
      </div>

      {/*================= CATEGORY TAGS ================= */}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-base-100 rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-4">Tags</h2>
        <div className="badge badge-secondary badge-outline">
          {product.category}
        </div>
      </div>

      {/*================= REVIEWS SECTION =================*/}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-base-100 rounded-lg">
        <h2 className="text-2xl font-bold text-primary mb-6">Reviews</h2>

        <div className="space-y-4">
          <div className="flex items-center space-x-4 p-4 bg-base-200 border rounded-lg shadow">
            {/*================= AVATAR =================*/}
            <div className="w-12 h-12 rounded-full bg-info flex items-center justify-center">
              <span className="text-xl font-bold ">JD</span>
            </div>

            {/*================= REVIEW CONTENT =================*/}
            <div className="flex flex-col">
              <h3 className="font-semibold ">John Doe</h3>
              <p className="">Very happy with my purchase!</p>

              {/*================= RATING ================= */}
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
          </div>
        </div>
      </div>
      {/*================= COMMENT SECTION =================*/}
      <div className="max-w-7xl mx-auto mt-6 p-6 bg-base-100 rounded-lg">
        <h5 className="text-2xl  font-bold text-primary">Enter Your Comment</h5>
        <div className="flex items-start mt-4">
          <div className="mr-3">
            <img
              src="https://cdn.easyfrontend.com/pictures/testimonial/testimonial_square_1.jpeg"
              alt=""
              className="w-16 h-16 rounded-full border"
            />
          </div>
          <div className="flex-grow">
            <form>
              <div className="form-control">
                <textarea
                  className="textarea textarea-bordered p-2 w-full"
                  rows="2"
                  placeholder="write your review"
                ></textarea>
              </div>
              <div className="mt-3 text-center md:text-right">
                <button className="btn btn-outline mr-4">CANCEL</button>
                <button className="btn btn-primary">POST</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
