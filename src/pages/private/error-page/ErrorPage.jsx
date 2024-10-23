import { Link, useNavigate, useRouteError } from "react-router-dom";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  console.error("error", error);

  console.log("type", error?.status);

  return (
    <div className="py-10 flex flex-col justify-center items-center min-h-screen gap-5 text-center">
      {error?.status || error?.statusText ? (
        <div>
          <h1 className=" text-8xl font-semibold text-error">
            {error?.status || "404"}
          </h1>
          <p>{error?.statusText || "Not Found"}</p>
        </div>
      ) : (
        <h1 className=" text-8xl font-semibold text-error">Ops!</h1>
      )}
      <p className="text-error max-w-lg">{error?.data || error?.message}</p>

      <div className="flex items-center gap-2">
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary btn-outline  btn-sm "
        >
          <FaIconByKeyName iconName="FaArrowLeft" /> Back
        </button>
        <Link to="/" className="btn btn-primary btn-sm ">
          <FaIconByKeyName iconName="FaHome" /> Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
