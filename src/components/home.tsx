import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { checkAuthStatus } from "../store/user/action";

const Home: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  return (
    <>
      {checkAuthStatus() ? (
        <div className="site-layout-content">Привет, {user}</div>
      ) : (
        <div className="site-layout-content">Привет, Гость!</div>
      )}
    </>
  );
};
export default Home;
