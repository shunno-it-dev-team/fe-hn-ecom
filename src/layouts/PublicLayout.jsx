import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/common/PublicNavbar";
import PublicFooter from "../components/common/PublicFooter";

const PublicLayout = () => {
  return (
    <div>
      <PublicNavbar />
      <Outlet />
      <PublicFooter />
    </div>
  );
};

export default PublicLayout;
