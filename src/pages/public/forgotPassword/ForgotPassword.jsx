import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center h-screen">
      <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-xl  lg:max-w-lg">
        <div className="flex justify-center  ">
          <img
            className="w-40"
            src="/src/assets/logo/logo-520e4690.png"
            alt=""
          />
        </div>

        <form className="space-y-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-semibold font-serif mt-10 mb-2">
              Send Email to reset your password
            </h2>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered input-sm "
            />

            <button className="btn btn-primary w-full">Send Email</button>

            <div>
              Remember your password?
              <Link to="/login" className="btn btn-sm btn-link">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
