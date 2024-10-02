import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { cn } from "../../../helpers/dynamicClassName";

const CustomCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log("products", products);

  return (
    <>
      {/* ======== CARD DESIGN ======== */}
      <div className="max-w-screen-xl mx-auto">
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.length > 0 &&
            products.map((card, index) => (
              <div
                key={index}
                className="card card-compact p-3 bg-base-200 hover:outline hover:shadow-none outline-1 outline-primary/20 text-center"
              >
                <figure>
                  <img
                    className="w-full h-56 object-cover object-top "
                    src={card.image}
                    alt={card.title}
                  />
                </figure>

                <div className="card-body justify-between items-start">
                  <div className="text-start">
                    <h5 className="card-title text-start">
                      {card.title.length > 22
                        ? card.title.slice(0, 22) + "..."
                        : card.title}
                    </h5>
                    <span className="text-xs capitalize">{card.category}</span>

                    <div>
                      <span className={"badge badge-outline capitalize "}>
                        &#2547;{card.price}
                      </span>
                    </div>

                    <div className="rating rating-lg rating-half justify-center">
                      <input
                        type="radio"
                        name={`rating-${index}`}
                        disabled
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                      />
                      <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                        disabled
                      />
                      <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                      />
                      <input
                        type="radio"
                        name={`rating-${index}`}
                        className="mask mask-star-2 bg-orange-400"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="text-center space-x-2">
                    <Link to={`/product/${card.id}`}>
                      <button className="btn btn-outline btn-primary btn-sm">
                        Details
                      </button>
                    </Link>
                    <button className="btn btn-primary btn-sm">
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </section>
      </div>
    </>
  );
};

export default CustomCard;
