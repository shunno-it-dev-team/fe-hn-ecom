import { publicNavMenuItems } from "../../menu-items/publicNavMenuItems";
import NavDeskTopMenuItems from "./nav/NavDeskTopMenuItems";
import NavMobileTopMenuItems from "./nav/NavMobileTopMenuItems";
import { setThemeToRedux } from "../../redux/reducers/globalSlice";
import CustomModal from "./CustomModal";
import AuthWrapper from "../../pages/public/auth/AuthWrapper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import FaIconByKeyName from "../icons/FaIconByKeyName";

const PublicNavbar = ({ theme, user }) => {
  return (
    <div className="navbar bg-primary sticky text-base-100 top-0 z-30">
      {/* NAVBAR START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-primary rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavMobileTopMenuItems items={publicNavMenuItems} />
          </ul>
        </div>

        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <NavDeskTopMenuItems
            items={publicNavMenuItems}
            className={"bg-primary min-w-40"}
          />
        </ul>
      </div>

      {/* NAVBAR CENTER */}
      <div className="navbar-center ">
        <Link to="/" className="btn btn-ghost text-xl hover:bg-transparent">
          <img
            src="/src/assets/logo/logo-520e4690.png"
            alt=""
            className="w-auto h-6"
          />
        </Link>
      </div>

      {/* NAVBAR END */}
      <div className="navbar-end gap-2 hidden lg:flex">
        <label className="input input-sm border-base-100/20 text-base-100 focus:outline-offset-0 focus:outline-1 focus-within:outline-offset-0 focus-within:outline-1 bg-base-100/20 flex items-center gap-2">
          <input
            type="text"
            className="grow placeholder:text-base-100/50"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>

        <label className="btn btn-ghost btn-circle btn-sm swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={({ target }) => {
              if (target.checked) {
                setThemeToRedux("dark");
              } else {
                setThemeToRedux("light");
              }
            }}
            checked={theme === "dark"}
            value={theme}
          />

          {/* sun icon */}
          <svg
            className="swap-off h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>

        {/* CART */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content text-base-content bg-base-100 z-[1] mt-3 w-96 shadow"
          >
            <ul className="menu menu-lg rounded-box ">
              <h2 className="font-bold mt-2 pl-6">Shopping cart</h2>
              <div className="divider m-0"></div>

              <li>
                <Link href="/">
                  <figure className="h-14 w-14 rounded-none ">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                      alt="Album"
                    />
                  </figure>
                  <div className="gap-8">
                    <div className="flex justify-between mb-4">
                      <p className="font-bold text-sm text-primary">
                        Throwback Hip Bag
                      </p>
                      <p className="text-sm "> &#2547; 90</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm ">Qty 1</p>
                      <button className="link-primary link-hover text-xs ">
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <figure className="h-14 w-14 rounded-none ">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                      alt="Album"
                    />
                  </figure>
                  <div className="gap-8">
                    <div className="flex justify-between mb-4">
                      <p className="font-bold text-sm text-primary">
                        Throwback Hip Bag
                      </p>
                      <p className="text-sm "> &#2547; 90</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm ">Qty 1</p>
                      <button className="link-primary link-hover text-xs ">
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/">
                  <figure className="h-14 w-14 rounded-none ">
                    <img
                      src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                      alt="Album"
                    />
                  </figure>
                  <div className="gap-8">
                    <div className="flex justify-between mb-4">
                      <p className="font-bold text-sm text-primary">
                        Throwback Hip Bag
                      </p>
                      <p className="text-sm ">&#2547; 90</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm ">Qty 1</p>
                      <button className="link-primary link-hover text-xs ">
                        Remove
                      </button>
                    </div>
                  </div>
                </Link>
              </li>
            </ul>

            <div className="flex flex-col gap-3 border-t border-base-300 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-bold text-base-content">
                <p>Subtotal</p>
                <p>&#2547; 262.00</p>
              </div>

              <p className=" text-xs text-warning">
                Shipping and taxes calculated at checkout.
              </p>

              <div className="flex items-center justify-center gap-5">
                <Link
                  to="/cart"
                  className="btn btn-sm btn-primary  btn-outline"
                >
                  View All
                </Link>

                <Link to="/checkout" className="btn btn-sm  btn-primary ">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* NOTIFICATION */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-ghost btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs indicator-item"></span>
            </div>
          </div>

          <div
            tabIndex={0}
            className="card card-compact dropdown-content text-base-content bg-base-100 z-[1] mt-3 w-80 shadow"
          >
            <ul className="menu menu-lg rounded-box ">
              <h2 className="font-bold mt-2 pl-6">Notification</h2>

              <div className="divider m-0"></div>
              <li>
                <Link href="/" className="justify-between">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm text-primary">
                      Order #34567
                    </h4>
                    <span className="text-xs">Your order is placed</span>
                    <span className="text-xs text-primary">1 minute ago</span>
                  </div>
                  <span className="badge badge-primary badge-xs"></span>
                </Link>
              </li>
              <li>
                <Link href="/" className="justify-between">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm">Order #34567</h4>
                    <span className="text-xs">Your order is placed</span>
                    <span className="text-xs">2 hours ago</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/" className="justify-between">
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm">Order #34567</h4>
                    <span className="text-xs">Your order is placed</span>
                    <span className="text-xs">2 hours ago</span>
                  </div>
                </Link>
              </li>

              <div className="divider m-0"></div>
              <div className="text-center">
                <Link
                  to="/notifications"
                  className=" link link-primary link-hover"
                >
                  View all
                </Link>
              </div>
            </ul>
          </div>
        </div>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-sm btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-10 bg-primary mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/profile/personal-information">
                  <FaIconByKeyName iconName="FaUserCircle" />
                  Profile
                </Link>
              </li>

              <li>
                <Link to="/logout">
                  <FaIconByKeyName iconName="FaSignOutAlt" />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <label
              htmlFor="login-page"
              className="btn btn-sm btn-ghost btn-outline border-base-100 text-base-100 rounded-3xl"
            >
              Login
            </label>
          </>
        )}
      </div>

      <CustomModal
        {...{
          title: "Join",
          modalId: "login-page",
          hasAction: false,
          closeRef: null,
        }}
      >
        <AuthWrapper />
      </CustomModal>
    </div>
  );
};

PublicNavbar.propTypes = {
  theme: PropTypes.string.isRequired,
  user: PropTypes.object,
};

export default PublicNavbar;
