import React, {useState} from 'react'
import {useEffect} from "react";
import {useParams} from "react-router-dom"
import "./style.css"
import axios from 'axios';

function ViewAddressComponent (props){ 
{

    const[address,setAddress] = useState([]);

    const id =  useParams().id;

    
    useEffect(() => {
        axios.get("http://localhost:9090/addressController/viewAddressBy/"+id).then( (response) => {
            setAddress(response.data);
            console.log(response.data)
        })
      }, []);


        return (
            <div>
                <h2 className="t">Address Details</h2>
                <br></br>
                <div className="byId">
                    <br/>
                    <p>Street No - {address.streetNo}</p>
                    <p>Building Name -{address.buildingName}</p>
                    <p>City - {address.city}</p>
                    <p>State - {address.state}</p>
                    <p>Pincode - {address.pincode}</p>
                </div>
            </div>
        )
    }
}

export default ViewAddressComponent