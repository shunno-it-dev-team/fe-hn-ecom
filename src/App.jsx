function App() {
  return (
    <>
      {/* ========carosel section ==========  */}

      <section> </section>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* footer section  */}
      <section>
        <footer className="footer footer-center p-10 bg-gray-950 text-primary-content text-center">
          <div className="grid grid-flow-col gap-4">
            <span>
              <img src="./images/logo.png" alt="" />{" "}
            </span>
            <h2 className="text-4xl font-bold text-white">HISAB NIKASH ECOM</h2>
          </div>
          <div>
            <div className="grid grid-cols-3  lg:grid-flow-col items-center gap-4   text-white">
              <a>Home</a>
              <a>About Us</a>
              <a>Shop</a>
              <a>All Products</a>
              <a>Support</a>
              <a>My Account</a>
            </div>
          </div>
          <div>
            <div className="grid grid-flow-col gap-5 text-white">
              <a>
                <i className="fa-brands fa-square-twitter"></i>
              </a>
              <a>
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a>
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a>
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a>
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a>
                <i className="fa-brands fa-apple"></i>
              </a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
