import { useState } from "react";
import TabComponent from "../../../components/common/TabComponent";
import LoginPage from "./login-page/LoginPage";
import RegisterPage from "./register-page/RegisterPage";
import ForgotPassword from "./forgot-password/ForgotPassword";

const AuthWrapper = () => {
  const [isForgotPassPage, setIsForgotPassPage] = useState(false);

  const tabs = [
    {
      title: "Sign In",
      Component: <LoginPage {...{ isForgotPassPage, setIsForgotPassPage }} />,
    },
    {
      title: "Sign Up",
      Component: <RegisterPage />,
    },
  ];

  if (isForgotPassPage) {
    return <ForgotPassword setIsForgotPassPage={setIsForgotPassPage} />;
  } else {
    return (
      <div>
        <TabComponent tabs={tabs} />
      </div>
    );
  }
};

export default AuthWrapper;
