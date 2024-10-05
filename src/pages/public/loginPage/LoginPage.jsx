import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className=" flex flex-col justify-center h-screen ">
      <div className="w-full p-6 m-auto bg-base-100 rounded-md shadow-xl  lg:max-w-lg">
        <div className="flex justify-center  ">
          <img
            className="w-40"
            src="/src/assets/logo/logo-520e4690.png"
            alt=""
          />
        </div>
        <form className="space-y-4">
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
          <Link to="/forgot">
            <a
              href="#"
              className="text-xs text-blue-600 hover:underline hover:text-purple-600"
            >
              Forget Password?
            </a>
          </Link>
          <div>
            <button className=" btn btn-block btn-info">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
