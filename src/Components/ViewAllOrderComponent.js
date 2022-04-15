import React, { Component } from 'react';
import orderservice from './OrderService';


class ViewAllOrderComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
          order : [],
          orderId : Number,
          orderStatus:"",
          orderDate:""


        }
    }


componentDidMount() {
    orderservice.getOrder().then( res => {
        this.setState({order : res.data});
        console.log(this.state.order)
        this.setState({orderId:res.data[0].orderId})
        console.log(this.state.orderId)
        this.setState({orderStatus:res.data[0].orderStatus})
        this.setState({orderDate:res.data[0].orderDate})

    })

}

render() {
    return (
        <div>
            <div className = "bimg"style={{ backgroundImage: `url(https://cdn.wallpapersafari.com/70/10/VQWxKr.jpg)`,
                           backgroundSize:'cover',
                           height:'800px'
                        }}>
             <h1 className="text-center">ORDER-DASHBOARD</h1>
             <br></br>
             <div className = "row">
             <table style={{marginLeft:"30px"}} className="table table-dark table-hover">


                        <thead>
                            <tr>
                                <th> OrderId</th>
                                <th>Product List</th>
                                <th> OrderDate</th>
                                <th> OrderStatus</th>
                            </tr>
                        </thead>
                        <tbody>
                           
                                    {
                                        this.state.order.map(
                                        o=>
                                
                                    
                                    <tr key = {o.orderId}>
                                         <td> {o.orderId} </td>   
                                         <td><ol>
                                             <li><a target="_blank" href="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg">
                                             <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" style={{width: "50px"}}/>
                                             </a>   {o.orderId}</li>
                                             <li><a target="_blank" href="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg">
                                             <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" style={{width: "50px"}}/></a>  name2</li>
                                             <li><a target="_blank" href="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg">
                                             <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" style={{width: "50px"}}/></a>  name3</li>
                                             <li><a target="_blank" href="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg">
                                             <img src="https://media.wired.com/photos/5f401ecca25385db776c0c46/master/pass/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg" style={{width: "50px"}}/></a>  name4</li>
                                         </ol>

                                         </td>
                                         <td> {o.orderDate}</td>
                                         <td> {o.orderStatus}</td>
                                        
                                    </tr>
                                    
                                        )
                                    }
                                    
                                

                        </tbody>
                            
                    </table>

             </div>

        </div>
        </div>
    )
}
}

export default ViewAllOrderComponent;