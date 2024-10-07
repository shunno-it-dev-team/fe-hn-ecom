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

  return (
    <>
      {/* ======== CARD DESIGN ======== */}
      <div className="max-w-screen-xl mx-auto">
        <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.length > 0 &&
            products.map((card, index) => (
              <div
                key={index}
                className="card card-compact p-3 bg-base-100 hover:outline hover:shadow-none outline-1 outline-primary/40 text-center"
              >
                <figure className="relative bg-white">
                  {index % 5 == 0 && (
                    <>
                      <div className="badge badge-accent absolute z-10 top-1 right-1">
                        {index + 1} % OFF
                      </div>
                      <div className="absolute top-0 right-0 h-10 w-20 blur-md bg-accent/10"></div>
                    </>
                  )}
                  <img
                    className="w-full aspect-[4/3] object-contain p-2"
                    src={card.image}
                    alt={card.title}
                  />
                </figure>

                <div className="card-body !p-0 justify-between items-start">
                  <div className="text-start">
                    <h5 className="font-bold text-start">
                      {card.title.length > 40
                        ? card.title.slice(0, 40) + "..."
                        : card.title}
                    </h5>

                    <span className="text-xs capitalize">{card.category}</span>

                    <div>
                      <span
                        className={
                          "badge badge-success badge-outline capitalize"
                        }
                      >
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
