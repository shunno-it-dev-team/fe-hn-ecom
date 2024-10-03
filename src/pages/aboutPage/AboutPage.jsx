const AboutPage = () => {
  return (
    <section className="grid lg:grid-cols-2 grid-cols-1 items-center   mx-auto w-[90%] gap-10 ">
      {/* writing section  */}
      <div className="">
        <h3 className="text-3xl font-semibold text-blue-600 font-serif">
          Meet Our Team
        </h3>
        <p className=" text-justify mt-6  ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          adipisci cupiditate exercitationem debitis sit voluptates autem esse?
          Nesciunt repellendus, tenetur exercitationem autem sint reiciendis
          porro nihil temporibus animi provident? Enim similique odit cumque
        </p>

        <div className="mt-8">
          <button className="btn btn-xs bg-blue-400 rounded-2xl">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* picture section  */}
      <div className="w-full">
        <img src="/src/assets/image/Ecommerce web page (1).gif" alt="" />

      </div>
    </section>
  );
};

export default AboutPage;
