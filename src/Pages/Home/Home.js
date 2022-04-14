import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Context } from "../../Store";
import Store from "../../Store";
const Home = () => {
  const [state, setState]=useContext(Context);
  return (
    <div>
      <Navbar />
      UserId :{state.userId}
    </div>
  );
};

export default Home;
