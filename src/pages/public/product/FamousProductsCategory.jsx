import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { useGetProductQuery } from "../../../redux/api/services/product.service";
// import CardSkeleton from "../../../components/skeleton/CardSkeleton";
import CustomCard from "../../../components/common/CustomCard";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const FamousProductsCategory = () => {
  const { data: products, isLoading } = useGetProductQuery();

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <div className="w-full flex flex-col items-center lg:flex-row bg-primary/60 lg:px-4 py-6  mt-10 rounded-lg">
        {/*=========== SWIPER NAVIGATION ARROWS ===========*/}
        <div className="lg:w-1/5 flex flex-col items-center lg:items-start mb-4 lg:mb-0 justify-between">
          {/* TITLE */}
          <div className="pb-5">
            <div>
              <h2 className="text-2xl text-base-100 font-bold ">
                Popular Category
              </h2>
            </div>
          </div>

          {/* CAROUSEL NAVIGATION  */}
          <div className="flex flex-row space-x-4">
            <button ref={prevRef} className="btn btn-primary btn-circle">
              <FaIconByKeyName iconName={"FaAngleLeft"} />
            </button>

            <div ref={nextRef} className="btn btn-primary btn-circle">
              <FaIconByKeyName iconName={"FaAngleRight"} />
            </div>
          </div>
        </div>

        <div className="w-4/5">
          {/*=========== Swiper Slider ===========*/}
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Navigation]}
            className="mySwiper"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            {/* Loading state */}
            {/* <CardSkeleton length={8} isLoading={isLoading} /> */}

            {/*=========== Product cards as Swiper slides ===========*/}
            {!isLoading &&
              products &&
              products.map((product) => (
                <SwiperSlide key={product.id}>
                  <CustomCard product={product} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FamousProductsCategory;
