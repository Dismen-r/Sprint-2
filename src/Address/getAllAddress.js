import React from 'react'
import {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"
import axios from 'axios';
function AddressComponent(){

    const navigate = useNavigate();

    const[address,setAddress] = React.useState([]);


    useEffect(() => {
        getAllAddress();
      }, []);

      function getAllAddress(){
        axios.get("http://localhost:9090/addressController/viewAllAddress").then((response)=>{
            setAddress(response.data)
            console.log(response.data)   
        })
        .catch((errors)=>{console.log(errors)})
      }

      function deleteAddress(id){
        axios.delete("http://localhost:9090/addressController/removeAddress/"+id).then( id => {
            getAllAddress();
        });
    }

      function viewAddress(id){
            navigate(`/view-address/${id}`)
      }

      function addAddress(){
          navigate('/addaddress')
      }
      
      return(
        <div className="h">
             <h2 >ADDRESS</h2>
            <div >
            <button onClick={addAddress} className="a"> Add Address</button>
                 </div>
                 <br/>
        
                    {
                        address.map(
                            address =>
                            <div className ="addr"key={address.addressId}>
                                <p>Street No - {address.streetNo}</p>
                                <p>Building Name -{address.buildingName}</p>
                                <p>City - {address.city}</p>
                                <p>State - {address.state}</p>
                                <p>Pincode - {address.pincode}</p>
                                <p>

                                        {/* <button onClick={()=>deleteAddress(address.addressId)}>Delete </button> */}
                                        <span>  </span>
                                        <button onClick={()=>viewAddress(address.addressId)}>View </button>
                                </p>
                            </div>
                        )
                    }
        </div>
    )
}


export default AddressComponent
