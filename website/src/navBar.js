import React from "react";
//https://www.beatsbydre.com/headphones/solo3-wireless

class navBar extends React.Component {
constructor(props) {
    super(props);

}
render() {
return( 
    
<nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav">
  <a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/products">Products </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/payment">payment</a>
        </li>
        
        
    </ul>
  </div>
</nav>

)
}}
export default navBar;