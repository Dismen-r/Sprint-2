import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Failure from "./Pages/Failure/failure";
import Home from "./Pages/Home/Home";
import Store from "./Store";
import ViewAddressComponent from "./Address/getAddressbyId";
import AddressComponent from "./Address/getAllAddress";
import CreateAddressComponent from "./Address/addAddress";
import ProductComponent from "./Product/ProductComponent";
import UserComponent from "./Components/UserComponent";
import ViewAllOrderComponent from "./Components/ViewAllOrderComponent";
function App() {
  return (
    <Store>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/failure" element={<Failure />} />
          <Route path="/home" element={<Home />} />
          <Route path="/view-address/:id" element={<ViewAddressComponent />}/>
            <Route path="/viewAllAddress" element={<AddressComponent/>}/>
            <Route path="/addaddress" element={<CreateAddressComponent/>}/>
            <Route path="/p1" element={<ProductComponent/>} />
            <Route path="/Customer" element={<UserComponent/>} />
            <Route path="/Order" element={<ViewAllOrderComponent/>} />
            
        </Routes>
      </Router>
    </Store>
  );
}

export default App;
