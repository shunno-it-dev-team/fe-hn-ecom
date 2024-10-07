import PropTypes from "prop-types";

const ForgotPassword = ({ setIsForgotPassPage }) => {
  return (
    <div className="card bg-base-100 w-full">
      <form className="card-body">
        <h2 className="card-title ">Forgot Password</h2>

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
          <div className="label">
            Remember your password?
            <button
              className="label-text link-primary link link-hover"
              type="button"
              onClick={() => setIsForgotPassPage(false)}
            >
              Login
            </button>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

ForgotPassword.propTypes = {
  setIsForgotPassPage: PropTypes.func.isRequired,
};

export default ForgotPassword;
