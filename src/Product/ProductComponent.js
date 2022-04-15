import React from 'react';
import react from 'react';
import axios from 'axios';
class ProductComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount(){
       axios.get('http://localhost:9090/productController/viewAllProducts').then((response) =>{
            this.setState({users: response.data})
        });
    }


    render(){
        return (
            <div>
                <div className = "name"><h1>WELCOME TO SHOPPING!!!</h1></div>
                <div style={{ backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC4tAaTrTsLFAfxNIJuHFFEYYTBTSyXpPFDA&usqp=CAU)`,
                           backgroundSize:'cover',
                           height:'6000px'}}>
                <h1>CHOOSE YOUR PRODUCTS</h1>
                
            
                
                   
                    
                        {
                            this.state.users.map(
                                user =>
                                <ul key = {user.productId}>
                                    <img className = "left" src= {user.color} style={{width: "300px"}}/>
                                    <li>productid: {user.productId}</li>
                                    
                                    <li>product price {user.price}</li> 
                                    
                                    <li>dimensions {user.dimension}</li>
                                    <li> specifications{user.specification}</li>
                                    <li>manufacturer {user.manufacturer}</li>
                                    <li>quantity {user.quantity}</li>
                                    <li> <button className = "right" onClick="myFunction()">ADD TO CART</button></li>

                            
                                    <hr></hr>
                                    <hr></hr>
                                    
                                    </ul>
                                    

                            )
                            
                            
                        }
                        <hr></hr>
                    
                    



            </div>
            </div>
        )
    }
}
export default ProductComponent