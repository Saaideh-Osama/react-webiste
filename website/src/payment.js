import React from "react";


class Payment extends React.Component {
    subtract=()=>{
        this.setState({amount: this.state.amount-5});
    }
constructor(props) {
    super(props);
    this.state = {amount:20 };
    

  
   
}
render() {
return( 
    <div class="container d-flex justify-content-center mt-5">
	<div class="card">
		


		<div>
		    </div>

            <h2>Inital amount :<span id="current amount"> {this.state.amount}$</span> </h2>
		    
		    </div>	


		    	<div class="d-flex justify-content-between px-3 pt-4 pb-3">
		    		
		    		<button type="button" class="btn btn-primary button" onClick={this.subtract()}>Pay amount</button>
		    	</div>



		</div>
	

)
}}
export default Payment;