import React from "react";
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/userAuth/thunks";

const Home = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="">
      <div>home</div>
      <button onClick={handleLogout}>LogOut</button>
    </div>
  );
};

export default Home;
