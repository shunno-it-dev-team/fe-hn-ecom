import { FcGoogle } from "react-icons/fc";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center h-screen overflow-hidden mt-10 mb-10 border">
      <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-xl  lg:max-w-lg border">
        <div className="flex justify-center  ">
          <img
            className="w-40"
            src="/src/assets/logo/logo-520e4690.png"
            alt=""
          />
        </div>
        <form className="space-y-2">
          <div>
            <label className="label">
              <span className="text-base label-text font-serif">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text font-serif">Email</span>
            </label>
            <input
              type="text"
              placeholder="Email Address"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text font-serif">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text font-serif">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered input-primary"
            />
          </div>
          <div>
            <button className="btn btn-block btn-info font-serif">
              Sign Up
            </button>
          </div>
          <span>
            Already have an account ?
            <Link to="/login">
              <a
                href="#"
                className="text-md font-serif text-blue-600 hover:underline hover:text-purple-600"
              >
                Login
              </a>
            </Link>
          </span>
        </form>
        <div className="flex  w-full my-4">
          <hr className="w-full" />
          <p className="px-3 ">OR </p>
          <hr className="w-full" />
        </div>
        <div className="flex my-6  gap-2 justify-center items-center ">
          <button className=" p-2  hover:shadow-xl">
            <FcGoogle />
          </button>
          <button className="p-2  hover:shadow-xl">
            <RxGithubLogo />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
