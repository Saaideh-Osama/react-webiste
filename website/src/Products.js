import React from "react";
import './Products.css';
import beatsstudio3 from './studio3.jpg';
//https://www.beatsbydre.com/headphones/solo3-wireless

class Products extends React.Component {
constructor(props) {
    super(props);

}
render() {
return( 
<div className="container w-100" >
    <div className="row">
        <div className="col-md-4">
            <div className="card">
                <img src={beatsstudio3} alt="beatsstudio3" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Beats Studio3 Wireless</h5>
                    <p className="card-text">Pure Adaptive Noise Canceling (Pure ANC) actively blocks external noise</p>
                    <a href="https://www.beatsbydre.com/headphones/studio3-wireless" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src={beatsstudio3} alt="beatsstudio3" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Beats Studio3 Wireless</h5>
                    <p className="card-text">Pure Adaptive Noise Canceling (Pure ANC) actively blocks external noise</p>
                    <a href="https://www.beatsbydre.com/headphones/studio3-wireless" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card">
                <img src={beatsstudio3} alt="beatsstudio3" className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title">Beats Studio3 Wireless</h5>
                    <p className="card-text">Pure Adaptive Noise Canceling (Pure ANC) actively blocks external noise</p>
                    <a href="https://www.beatsbydre.com/headphones/studio3-wireless" className="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>
    </div>

</div>

)
}}
export default Products;