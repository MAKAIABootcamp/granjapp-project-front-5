import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/userAuth/thunks";
import Main from "../../components/homeComponents/main/main";
import Body from "../../components/homeComponents/body/body";

const Home = () => {
  // const dispatch = useDispatch();
  // const handleLogout = () => {
  //   dispatch(startLogout());

  return (
    <>
      {/* <Main /> */}
      <Body />
    </>
  );
  {
    /* <div>home</div>
      <button
      onClick={handleLogout}>LogOut</button> */
  }
};

export default Home;
