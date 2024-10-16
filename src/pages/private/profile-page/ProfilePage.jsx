import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

const ProfilePage = () => {
  return (
    <section className="min-h-screen">
      <div className="max-w-screen-lg mx-auto flex items-start justify-between gap-5 flex-col lg:flex-row pt-10">
        <ProfileSidebar />

        <div className="rounded-lg bg-base-100 flex-1 p-2">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
