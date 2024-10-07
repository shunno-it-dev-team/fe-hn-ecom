const ContactUsPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:card-side gap-10 p-6">
      {/* ========== form section ========== */}
      <form className="card-body shadow-md rounded-md p-6 h-screen w-full lg:w-1/4">
        <h3 className="text-3xl font-bold mb-6 text-primary">Write us</h3>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text  text-lg font-semibold text-primary">
              Name
            </span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered rounded-md focus:border-primary focus:text-secondary"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold text-primary">
              Email
            </span>
          </label>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered rounded-md focus:border-primary focus:text-secondary"
            required
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text text-lg font-semibold text-primary">
              Subject
            </span>
          </label>
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered rounded-md focus:border-primary focus:text-secondary"
            required
          />
        </div>

        <div className="form-control mb-6">
          <label className="label">
            <span className="label-text text-lg font-semibold text-primary">
              Message
            </span>
          </label>
          <textarea
            className="textarea textarea-bordered rounded-md focus:border-primary focus:text-secondary h-24"
            placeholder="Your message"
            required
          ></textarea>
        </div>

        <div className="form-control">
          <button className="btn btn-warning w-full py-3 text-lg font-semibold rounded-md">
            Send Message
          </button>
        </div>
      </form>
      {/* ========== contact section ========== */}
      <div className="card-body items-start mt-28 rounded-md p-6 w-full lg:w-1/2">
        <div className="mb-4">
          <h1 className="text-4xl font-bold text-primary text-center lg:text-left">
            Contact Information
          </h1>
          <p className=" text-primary text-center lg:text-left">
            We are open for any suggestion or just to have a chat.
          </p>
        </div>
        <div className="mb-4">
          <p className="font-bold text-lg text-primary">Address:</p>
          <p className="text-primary">
            রাজশাহী অফিস ঠিকানাঃ ২১৬/১, পশ্চিম তালাইমারি, কাজলা, বোয়ালিয়া,
            রাজশাহী-৬২০৪
          </p>
        </div>

        <div className="mb-4">
          <p className="font-bold text-lg text-primary">Phone:</p>
          <p className="text-primary">০১৮৯৬৪৮৮৪৮০</p>
        </div>

        <div className="mb-4">
          <p className="font-bold text-lg text-primary">Email:</p>
          <p className="text-primary">hisabnikash@gmail.com</p>
        </div>

        <div className="mb-4">
          <p className="font-bold text-lg text-primary">Website:</p>
          <a
            href="https://hisabnikashbd.com/"
            className="text-primary hover:underline"
          >
            https://hisabnikashbd.com/
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
