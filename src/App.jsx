import { Toaster } from "sonner";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function App({ children }) {
  const {
    global: { theme },
  } = useSelector((state) => state);

  return (
    <div data-theme={theme}>
      {children}
      <Toaster />
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
