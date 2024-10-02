const PublicFooter = () => {
  return (
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
  );
};

export default PublicFooter;
