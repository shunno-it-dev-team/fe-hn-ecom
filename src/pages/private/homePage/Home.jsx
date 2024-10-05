import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";
import CustomCard from "../../../components/common/nav/CustomCard";

const Home = () => {
  const carouselData = [
    {
      id: 1,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
      alt: "First slide",
      prev: "#slide4",
      next: "#slide2",
    },
    {
      id: 2,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
      alt: "Second slide",
      prev: "#slide1",
      next: "#slide3",
    },
    {
      id: 3,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      alt: "Third slide",
      prev: "#slide2",
      next: "#slide4",
    },
    {
      id: 4,
      imgSrc:
        "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
      alt: "Fourth slide",
      prev: "#slide3",
      next: "#slide1",
    },
  ];

  return (
    <>
      {/* ======== CAROUSAL SECTION ========  */}
      <header className="md:container md:mx-auto my-2 ">
        <div className="carousel w-full ">
          {carouselData.map(({ id, imgSrc, alt, prev, next }) => (
            <div
              key={id}
              id={`slide${id}`}
              className="carousel-item relative  w-full"
            >
              <img src={imgSrc} alt={alt} className="w-full" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href={prev} className="btn btn-circle">
                  <FaIconByKeyName iconName="FaAngleLeft" />
                </a>
                <a href={next} className="btn btn-circle">
                  <FaIconByKeyName iconName="FaAngleRight" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </header>

      <main className="flex flex-col gap-5">
        {/* ======== PRODUCTS SECTION ========  */}
        <section className="lg:flex-1 text-center lg:text-left mb-8 lg:mb-0">
          <h2 className=" text-center  font-semibold  text-3xl lg:text-5xl  my-10">
            Products Items
          </h2>
          <CustomCard />
        </section>
      </main>
    </>
  );
};

export default Home;
