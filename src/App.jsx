import { Toaster } from "sonner";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";

function App({ children }) {
  const {
    global: { theme },
  } = useSelector((state) => state);

  useEffect(() => {
    window.onload = () => {
      document.body.setAttribute("data-theme", theme);
    };

    // return () => {
    //   window.onload = null;
    // };
  }, []);

  console.log("theme", theme);

  return (
    <>
      {children}

      <Toaster richColors position="top-center" />
    </>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
