import React from "react";
import './Home.css';
class Home extends React.Component {
constructor(props) {
    super(props);
    this.state = {color: "blue"};
 

}
render() {
return( 
<div class="box">
	<form>
		<span class="text-center">login</span>
	<div class="input-container">
		<input type="email" required=""/>
		<label>Email</label>		
	</div>
	<div class="input-container">		
		<input type="password" required=""/>
		<label>Password</label>
	</div>
		<button type="button" class="btn">Login </button>
</form>	
</div>

)
}}
export default Home;