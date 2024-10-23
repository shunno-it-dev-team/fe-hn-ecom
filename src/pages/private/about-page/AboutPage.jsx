const AboutPage = () => {
  return (
    <section className="bg-base-100 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-primary border-b-4 inline-block border-primary pb-2">
          About Us
        </h2>
      </div>
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <p className="text-lg text-justify leading-relaxed text-base-content">
          Eonbazar Quality Leader Online Shop in Bangladesh. Eonbazar Sister
          Concerns of Eon Group of Industries. Eon group is a fast-growing
          conglomerate in Agri-based industry working to provide inputs to
          farmers (crop & animal) to produce high yield and high-quality farm
          which is produced for consumers. This group is engaged in
          manufacturing, import and distributing all types of agricultural
          inputs primarily for the nation-wide local market and also for the
          global market. Our group is working with the vision to be a
          contributor to “Food Security and Safety” in Bangladesh.
        </p>

        <p className="text-lg font-semibold">Inception: January 2000</p>
        <p className="text-lg">Number of Employees: approx. 1400</p>
        <p className="text-lg">
          <span className="font-bold">TIN Number:</span> 596870980285
        </p>

        <div className="bg-base-200 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-bold text-primary mb-4">Our Vision</h4>
          <p className="text-lg text-justify leading-relaxed text-base-content">
            We are committed to being the Quality leader in Production, Process,
            and Distribution of safe products to the consumer.
          </p>
        </div>

        <div className="bg-base-200 p-6 rounded-lg shadow-sm">
          <h4 className="text-xl font-bold text-primary mb-4">Our Mission</h4>
          <p className="text-lg text-justify leading-relaxed text-base-content mb-4">
            We are committed to contributing to the sustainable growth of the
            overall economy of the country by conducting all our business
            operations through:
          </p>
          <ul className="list-disc pl-6 text-lg text-base-content">
            <li>Innovation and introduction of proper products & services.</li>
            <li>Development of skilled human resources.</li>
            <li>
              Establishment of a healthy trade relationship with the global
              market.
            </li>
          </ul>
        </div>

        <p className="text-lg mt-4 text-base-content">
          We are further committed to training and motivating all our employees
          in order to provide superior quality service to every person we
          interact with.
        </p>

        <div className="mt-6">
          <h4 className="text-xl font-bold text-primary mb-2">
            Our Business Areas:
          </h4>
          <ul className="list-disc pl-6 text-lg text-base-content">
            <li>
              Animal Agriculture (Dairy, Poultry & Aquaculture Integration)
            </li>
            <li>Animal Feed</li>
            <li>Agro-chemical</li>
            <li>Agro Machineries</li>
            <li>
              Crop Agriculture (Seed, Fertilizer, Pesticides, Insecticides)
            </li>
            <li>Consumer Food</li>
            <li>Pharma & Healthcare</li>
            <li>Franchise Restaurant (bb.q)</li>
            <li>Media</li>
          </ul>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-bold text-primary mb-2">Eon Bazar</h4>
          <p className="text-lg text-justify leading-relaxed text-base-content">
            Eon Bazar is an online marketplace of Eon Group committed to deliver
            a wide range of consumer food products to its consumers. All food
            products are antibiotic & chemical-free, freshly produced, and
            sourced through network farming while maintaining a proper cold
            chain.
          </p>
        </div>

        <p className="mt-4 text-lg text-justify text-base-content">
          The production facility of different brands under this group of
          companies are Halal, ISO, and HACCP certified to ensure food safety
          and security to consumers.
        </p>

        <p className="mt-4 text-lg text-justify text-base-content">
          Eon Bazar is currently offering reliable brands like Country Natural,
          Baqarah, Ocean Blue, Ocean Ria, and Puro.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
