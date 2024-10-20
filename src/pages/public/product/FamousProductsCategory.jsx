import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
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
      <div className="w-full flex bg-primary py-6 px-4 mt-10 rounded-lg">
        {/*=========== SWIPER NAVIGATION ARROWS ===========*/}
        <div className="w-1/5  items-center justify-center ">
          {/* TITLE */}
          <div className="py-10">
            <div>
              <h2 className=" text-2xl text-base-100 font-bold ">
                Popular Category
              </h2>
            </div>
          </div>
          <div className="flex flex-row space-x-4">
            {/* Left Arrow */}

            <div
              ref={prevRef}
              className="cursor-pointer text-base-100 bg-gradient-to-r from-secondary via-secondary/70 to-secondary/50 p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <FaIconByKeyName iconName={"FaAngleLeft"} />
            </div>

            {/* Right Arrow */}
            <div
              ref={nextRef}
              className="cursor-pointer text-base-100 bg-gradient-to-r from-secondary/50 via-secondary/70 to-secondary p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition duration-300"
            >
              <FaIconByKeyName iconName={"FaAngleRight"} />
            </div>
          </div>
        </div>

        <div className="w-4/5 relative">
          {/*=========== Swiper Slider ===========*/}
          <Swiper
            spaceBetween={20}
            slidesPerView={4}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="mySwiper  overflow-hidden "
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
