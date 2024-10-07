import PropTypes from "prop-types";

const LoginPage = ({ setIsForgotPassPage }) => {
  return (
    <div className="card bg-base-100 w-full">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
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
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <button
              onClick={() => setIsForgotPassPage(true)}
              className="label-text-alt link link-hover"
            >
              Forgot password?
            </button>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

LoginPage.propTypes = {
  isForgotPassPage: PropTypes.bool.isRequired,
  setIsForgotPassPage: PropTypes.func.isRequired,
};

export default LoginPage;
