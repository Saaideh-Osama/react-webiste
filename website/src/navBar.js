import React from "react";
//https://www.beatsbydre.com/headphones/solo3-wireless

class navBar extends React.Component {
constructor(props) {
    super(props);

}
render() {
return( 
    
<nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a className="navbar-brand" href="/">Home</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="/products">Products </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="/payment">payment</a>
        </li>
        
        
    </ul>
  </div>
</nav>

)
}}
export default navBar;