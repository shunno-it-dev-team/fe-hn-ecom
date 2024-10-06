import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/common/PublicNavbar";
import PublicFooter from "../components/common/PublicFooter";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <main className="bg-base-200 pb-10">
        <Outlet />
      </main>

      <PublicFooter />
    </>
  );
};

export default PublicLayout;
