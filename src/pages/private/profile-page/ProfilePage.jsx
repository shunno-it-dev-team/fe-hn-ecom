import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";
import CustomDrawer from "../../../components/common/CustomDrawer";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const ProfilePage = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-7xl mx-auto flex items-start justify-between gap-5 flex-col lg:flex-row pt-10">
        <label
          htmlFor="profile-drawer"
          className="btn btn-sm btn-ghost lg:hidden"
        >
          <FaIconByKeyName iconName="FaBars" />
        </label>

        <CustomDrawer
          {...{
            drawerId: "profile-drawer",
            sidebarComponent: <ProfileSidebar />,
            sidebarClassName: "w-3/4 z-50 lg:z-0",
            className: "items-start",
          }}
        >
          <div className="rounded-lg bg-base-100 flex-1 p-2">
            <Outlet />
          </div>
        </CustomDrawer>
      </div>
    </section>
  );
};

export default ProfilePage;
