import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default Home;
