import { Link } from "react-router-dom";
import FaIconByKeyName from "../../../components/icons/FaIconByKeyName";

const ProfileSidebar = () => {
  const profileMenu = [
    {
      title: "Personal Information",
      icon: "FaUser",
      link: "/profile/personal-information",
    },
    {
      title: "Address Book",
      icon: "FaAddressBook",
      link: "/profile/address-book",
    },
    {
      title: "Payment History",
      icon: "FaCreditCard",
      link: "/profile/payments",
    },
    {
      title: " My Order List",
      icon: "FaBabyCarriage",
      link: "/profile/order",
    },
  ];

  return (
    <div className="bg-base-100 rounded-lg p-3 flex flex-col gap-3 sticky top-20">
      <div className="flex flex-col items-center">
        {/* avatar  */}
        <label
          htmlFor="avatar"
          className="relative overflow-hidden w-24 h-24 rounded-full group cursor-pointer"
        >
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>

          <div className="hidden group-hover:flex absolute top-0 left-0 items-center justify-center w-full h-full bg-black/10 backdrop-blur-sm transition hover:duration-500">
            <FaIconByKeyName iconName="FaCamera" />
          </div>

          <input id="avatar" type="file" className="hidden" />
        </label>

        <h2 className="text-lg font-semibold mt-4">Tasnia Rahman</h2>
        <p className="text-sm">tasnia@mail.com</p>
      </div>

      <ul className="menu bg-base-200 rounded-box w-56">
        {profileMenu.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <FaIconByKeyName iconName={item.icon} />
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileSidebar;
