import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import cardimage from '../imgs/cardimage.png'
import './landing.css'


function Details(){

  const [Detail, ] = useState(
    {   
        name: 'Lightning Network Project',
        logo: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        img: '',
        description: 'This is a project to improve the network speed of the BitCoin network',
        raiseAmount: '$500,000',
        raisePercentage: '75%', 
    }
    )

    return (
        <>
        
    <div className="container">

    <div className="upcominghead navbar container-fluid">
                <span><h2>Project Details</h2></span>
    </div>

    <div className="container-head ">
            <div className="container-head d-flex">
                <img className= "product-logo" src={Detail.logo} alt="logo" / >
                <div className="heading m-3">
                    <h3 className="heading">{Detail.name}</h3>     
                </div>
            </div>
        </div>
  
  <div className="d-flex ">  

  <div id="carouselExampleControls" className="carousel slide-size w-75" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src= {Detail.logo} className="d-block w-100 rounded-3" alt="..."/>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

  </div>

    <div className="container float-right w-50 mt-5 p-5 ">

    <div className="card border-0 ">
      <div className="card-body p-0 border-0 card-side">
        <h3 className="card-title m-2">{Detail.raiseAmount}</h3>
        <div className="d-flex">
        <h6 className="card-text m-2">Max Allocation</h6>
        <h6 className="card-text m-2">{Detail.raisePercentage}</h6>
        </div>

        <a href="#" className="btn btn-apply rounded-0 border"> <h5>Apply for Whishlist</h5></a>
      </div>
    </div>
    </div>

    </div>

</div>

        </>
    )

  }

export default Details;