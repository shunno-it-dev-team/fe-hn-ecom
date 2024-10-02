const cardData = [
  {
    imgSrc:
      "/src/assets/image/642aa45523af200eea0b32f7-men-039-s-watches-waterproof-luminous.jpg",
    price: "12000 -18085 BDT",
    title: "Watch",
  },
  {
    imgSrc:
      "/src/assets/image/642aa45523af200eea0b32f7-men-039-s-watches-waterproof-luminous.jpg",
    price: "12000 -18085 BDT",
    title: "Watch",
  },
  {
    imgSrc:
      "/src/assets/image/642aa45523af200eea0b32f7-men-039-s-watches-waterproof-luminous.jpg",
    price: "12000 -18085 BDT",
    title: "Watch",
  },
  {
    imgSrc:
      "/src/assets/image/642aa45523af200eea0b32f7-men-039-s-watches-waterproof-luminous.jpg",
    price: "12000 -18085 BDT",
    title: "Watch",
  },
];

const CustomCard = () => {
  return (
    <>
      {/* ======== CARD DESIGN ======== */}
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="card card-compact m-6 p-6 bg-base-200 border border-gray-300 text-center"
          >
            <figure>
              <img className="w-36" src={card.imgSrc} alt={card.title} />
            </figure>
            <div className="card-body">
              <p className="text-2xl font-bold">{card.price}</p>
              <div className="rating rating-lg rating-half justify-center">
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                  defaultChecked
                />
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name={`rating-${index}`}
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="text-center space-y-4">
                <h4 className="text-lg font-semibold">{card.title}</h4>
                <button className="btn btn-outline text-[#F85559]">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default CustomCard;
