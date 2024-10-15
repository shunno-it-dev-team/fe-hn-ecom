const ProfilePage = () => {
  return (
    <>
      <div className="flex">
    {/* ============================= SIDEBAR =============================  */}
        <div className=" w-full lg:w-2/6 bg-base-200 p-6">
          <div className="text-lg font-semibold mb-4">My Account</div>
          <ul className="space-y-2">
            <li>
              <a href="/checkOut" className="text-primary">
                Orders
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Hisab Nikash Wallet
                <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Invite Friends <span className="badge badge-primary">New</span>
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                My Rewards
              </a>
            </li>
            <li>
              <a href="#" className="text-primary">
                Customer Care
              </a>
            </li>
          </ul>

          <div className="mt-8">
            <div className="text-lg font-semibold mb-4">Profile</div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-primary">
                  Personal Information
                </a>
              </li>
              <li>
                <a href="#" className="text-primary">
                  Address Book
                </a>
              </li>
              <li>
                <a href="#" className="text-primary">
                  Payments
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================= PERSONAL INFORMATION FORM  ============================= */}
        <div className=" w-full lg:w-5/6 bg-base-100 p-6">
          <div className="text-2xl font-semibold mb-4">
            Personal Information
          </div>

          <form>
            {/* ============================= FIRST NAME AND LAST NAME ============================= */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  First Name*
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Mominul Islam"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Last Name*
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Anik"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary mb-2">
                Nick Name
              </label>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Anik"
              />
            </div>

            {/* <!-- Email Address --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary mb-2">
                Email Address*
              </label>
              <input
                type="email"
                className="input input-bordered w-full"
                placeholder="xyz@xyz.com"
              />
            </div>

            {/* <!-- Password --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary mb-2">
                Password*
              </label>
              <input
                type="password"
                className="input input-bordered w-full"
                placeholder="*********"
              />
            </div>

            {/* <!-- Date of Birth --> */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary mb-2">
                Date of Birth
              </label>
              <input type="date" className="input input-bordered w-full" />
            </div>

            {/*-- Gender  */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-secondary mb-2">
                Gender
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    className="radio radio-primary mr-2"
                  />
                  Female
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="gender"
                    className="radio radio-primary mr-2"
                    checked
                  />
                  Male
                </label>
              </div>
            </div>

            {/* <!-- Telephone --> */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-secondary mb-2">
                Phone
              </label>
              <input
                type="mobile"
                className="input input-bordered w-full"
                placeholder="+880"
              />
            </div>

            {/* <!-- Buttons --> */}
            <div className="flex space-x-4">
              <button className="btn btn-outline btn-secondary w-1/2">
                Restore
              </button>
              <button className="btn btn-primary w-1/2">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
