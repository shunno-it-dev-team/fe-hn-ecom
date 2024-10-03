const ContactUsPage = () => {
  return (
    <div className="hero mx-auto my-10 bg-base-200 w-[90%]">
      <div className="hero-content flex-col  lg:flex-row-reverse  ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contact Information</h1>
          <p className="py-6">
            We are open for any suggestion or just to have a chat.
          </p>

          <div className="mb-4 flex items-start">
            <div>
              <p className="font-bold text-start">Address:</p>
              <p>
                রাজশাহী অফিস ঠিকানাঃ ২১৬/১, পশ্চিম তালাইমারি, কাজলা, বোয়ালিয়া,
                রাজশাহী-৬২০৪
              </p>
            </div>
          </div>

          <div className="mb-4 flex items-start">
            <div>
              <p className="font-bold">Phone:</p>
              <p>০১৮৯৬৪৮৮৪৮০</p>
            </div>
          </div>

          <div className="mb-4 flex items-start">
            <div>
              <p className="font-bold">Email:</p>
              <p>hisabnikash@gmail.com</p>
            </div>
          </div>

          <div className="mb-4 flex items-start">
            <div>
              <p className="font-bold">Website:</p>
              <p>https://hisabnikashbd.com/</p>
            </div>
          </div>
        </div>

        <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
          <form className="card-body">
            <h3 className="text-2xl font-bold mb-4">Write us</h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text ">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text  ">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  ">Subject</span>
              </label>
              <input
                type="subject"
                placeholder="subject"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text  ">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="btn  btn-warning  "> Send Message </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
