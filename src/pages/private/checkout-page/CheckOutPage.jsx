const CheckOutPage = () => {
  return (
    <>
      {/*======== DELIVERY DETAILS ========  */}
      <section className="max-w-7xl mx-auto bg-base-100 py-12">
        {/*========  STEPS SECTION ======== */}
        <div className="mb-8">
          <ul className="steps w-full">
            <li className="step step-primary">Cart</li>
            <li className="step step-primary">CheckOut</li>
            <li className="step">Order Summary</li>
          </ul>
        </div>

        {/* ========  MAIN CONTENT SECTION ======== */}
        <div className="flex flex-col lg:flex-row gap-6 px-6">
          {/*========  DELIVERY DETAILS ======== */}
          <div className="w-full lg:w-5/6 bg-base-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary mb-6">
              Delivery Details
            </h2>

            {/*========  ADDRESS SECTION ========  */}
            <div className="space-y-2">
              <div className="flex gap-6 p-2 rounded-lg">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Your Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              {/*========  COUNTRY AND CITY SECTION ======== */}
              <div className="flex gap-6 p-2 rounded-lg">
                <div className="form-control w-full">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-country-input"
                      className="block text-sm font-medium text-primary"
                    >
                      Country*
                    </label>
                  </div>
                  <select
                    id="select-country-input"
                    className="block w-full rounded-lg border   p-2.5 text-sm text-primary "
                  >
                    <option selected>Bangladesh</option>
                    <option value="AU">Australia</option>
                    <option value="FR">France</option>
                    <option value="ES">Spain</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                <div className="form-control w-full">
                  <div className="mb-2 flex items-center gap-2">
                    <label
                      htmlFor="select-city-input"
                      className="block text-sm font-medium text-primary"
                    >
                      City*
                    </label>
                  </div>
                  <select
                    id="select-city-input"
                    className="block w-full rounded-lg border   p-2.5 text-sm text-primary "
                  >
                    <option selected>Rajshahi</option>
                    <option value="LA">Naogaon</option>
                    <option value="CH">Bogura</option>
                    <option value="MI">Dhaka</option>
                    <option value="SF">Khulna</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-6 p-2 rounded-lg">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">
                      Phone Number
                    </span>
                  </label>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <div className="flex gap-6 p-2 rounded-lg">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">
                      Company name
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-primary">Card Number</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Card Number"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>

              <button className="btn btn-primary w-full mt-6 hover:btn-secondary transition-all shadow-lg">
                Add New Address
              </button>
            </div>

            {/*========  PAYMENT SECTION ======== */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Payment Options
              </h2>
              <div className="flex gap-4">
                {["Credit Card", "PayPal", "Bank Transfer"].map((method) => (
                  <div key={method} className="w-1/3">
                    <div className="bg-base-200 p-6 h-56 lg:h-32 rounded-lg text-center shadow-md cursor-pointer hover:bg-primary hover:text-base-100 transition-all">
                      <p className="font-semibold">{method}</p>
                      <p className="text-sm mt-2">
                        Pay with {method.toLowerCase()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/*========  DELIVERY METHOD SECTION ========  */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Delivery Method
              </h2>
              <div className="flex gap-4">
                {["Standard Shipping", "Express Shipping", "Free Shipping"].map(
                  (method) => (
                    <div key={method} className="w-1/3">
                      <div className="bg-base-200 p-6 h-56 lg:h-32  rounded-lg text-center shadow-md cursor-pointer hover:bg-primary hover:text-base-100 transition-all">
                        <p className="font-semibold">{method}</p>
                        <p className="text-sm mt-2">
                          Get your product via {method.toLowerCase()}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/*========  ORDER SUMMARY ========  */}
          <div className="w-full lg:w-2/6 bg-base-100 p-4 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Order Summary
            </h2>
            <div className="space-y-4 text-lg text-secondary">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$8,094.00</span>
              </div>
              <div className="flex justify-between">
                <span>Savings</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Store Pickup</span>
                <span>$99.00</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>$199.00</span>
              </div>
              <div className="flex justify-between font-bold text-primary text-xl mt-4">
                <span>Total</span>
                <span>$8,392.00</span>
              </div>
            </div>
            <button className="btn btn-primary w-full mt-6 hover:btn-secondary transition-all">
              Proceed to Payment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOutPage;
