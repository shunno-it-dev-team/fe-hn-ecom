import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/common/PublicNavbar";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavbar />
      <Outlet />
    </div>
  );
};

export default PublicLayout;
