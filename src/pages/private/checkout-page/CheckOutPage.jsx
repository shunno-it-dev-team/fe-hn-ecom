const CheckOutPage = () => {
  return (
    <>
      {/*  Delivery Details  */}
      <section className="max-w-7xl mx-auto bg-base-100 py-12">
        {/* ========= STEPS SECTION ========= */}
        <div>
          <ul className="steps">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
        {/* ======== DETAILS SECTION ========  */}

        <div className="flex flex-col lg:flex-row gap-4  px-6 rounded-lg shadow-lg">
          <div className="w-2/3">
            <div className="flex gap-6  bg-base-100 p-6 rounded-lg shadow-md w-full  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="password"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6  bg-base-100 p-6 rounded-lg shadow-md w-full  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="password"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6  bg-base-100 p-6 rounded-lg shadow-md w-full  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="password"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex gap-6  bg-base-100 p-6 rounded-lg shadow-md w-full  ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="password"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div>
              <button className="w-full btn btn-ghost mt-4 shadow-lg">
                Add New Address
              </button>
            </div>

            {/* Payment Section */}
            <div className="flex gap-6">
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>

                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>
                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>
                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* delivery Section */}
            <div className="flex gap-6">
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>

                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>
                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className=" bg-neutral text-neutral-content rounded ">
                  <div className="items-center text-center">
                    <p>Credit Card</p>
                    <h1 className="text-sm">Pay with your credit card</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Order Summary Section  */}

          <div className="bg-base-100 p-6 rounded-lg w-1/3 shadow-md max-w-lg ">
            <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between text-lg">
              <span>Subtotal</span>
              <span>$8,094.00</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Savings</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Store Pickup</span>
              <span>$99.00</span>
            </div>
            <div className="flex justify-between text-lg">
              <span>Tax</span>
              <span>$199.00</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-primary mt-4">
              <span>Total</span>
              <span>$8,392.00</span>
            </div>
            <button className="btn btn-secondary w-full mt-6 hover:btn-primary transition-all">
              Proceed to Payment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
