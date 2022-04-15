import axios from "axios";
import React from "react";
import './UserComponent.css';
class UserComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        axios.get("http://localhost:9090/customerController/viewAllCustomer").then((response) => {
            this.setState({users:response.data})
        });
    }

    render(){
        return(
            <div className="p-0">                
                {/*<h1 className="text-center">Customer Details</h1><br></br>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Mobile Number</td>
                            <td>Email</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.customerId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.mobileNumber}</td>
                                    <td>{user.email}</td>
                                </tr>
                            )
                        }
                    </tbody>
                    </table>*/}
                    <div class="card">
  <div class="card-header">
    CUSTOMER DETAILS
  </div>
{
    this.state.users.map(
        user =>
  <div class="card-body" key = {user.id}> 
  <div className="content" >
  <h5 class="card-title">Customer Id</h5>
  <p class="card-text">{user.customerId}</p>
    
    <h5 class="card-title">First Name</h5>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={user.firstName}/>
   
    <br></br>
    <h5 class="card-title">Last Name</h5>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={user.lastName}/>
    
    <br></br>
    <h5 class="card-title">Mobile Number</h5>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={user.mobileNumber}/>
    
    <br></br>
    <h5 class="card-title">Email</h5>
    <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" defaultValue={user.email}/>
    <br></br>
    <input type="button" class="btn btn-primary btn-lg btn-block" value="Update"/>
    <br></br>
    </div>
  </div>
  
    )}
</div>

            </div>
        )
    }
}

export default UserComponent