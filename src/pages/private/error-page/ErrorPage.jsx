import { Link, useNavigate, useRouteError } from "react-router-dom";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("error", error.stack);

  return (
    <div className="py-10 flex flex-col justify-center items-center min-h-screen gap-5 text-center">
      <div>
        <h1 className=" text-8xl font-semibold text-error">
          {error?.status || "404"}
        </h1>
        <p>{error?.statusText || "Not Found"}</p>
      </div>
      <p className="text-error">{error?.data || error?.message}</p>

      <div className="join">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary btn-outline  btn-sm join-item"
        >
          <FaIconByKeyName iconName="FaArrowLeft" /> Back
        </button>
        <Link to="/" className="btn btn-primary btn-sm join-item">
          <FaIconByKeyName iconName="FaHome" /> Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;