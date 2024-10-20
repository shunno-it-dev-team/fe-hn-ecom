import { Outlet } from "react-router-dom";
import PublicNavbar from "../components/common/PublicNavbar";
import PublicFooter from "../components/common/PublicFooter";
import MobileTopBar from "../components/common/MobileTopBar";
import { useSelector } from "react-redux";

const PublicLayout = () => {
  const theme = useSelector((state) => state.global.theme);

  const user = {};
  return (
    <>
      <MobileTopBar {...{ theme, user }} />
      <PublicNavbar {...{ theme, user }} />

      <main className="bg-base-200 pb-10">
        <Outlet />
      </main>

      <PublicFooter />
    </>
  );
};

export default PublicLayout;
