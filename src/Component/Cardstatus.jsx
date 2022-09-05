import React from "react";
// import cardimage from './imgs/cardimage.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css'
import { useState } from "react";

function Cardstatus(){

    const [Detail, setDetail] = useState(
        {   
            name: 'Lightning Network Project',
            logo: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            img: '',
            description: 'This is a project to improve the network speed of the BitCoin network',
            raiseAmount: '$500,000',
            raisePercentage: '75%', 
        }
        )

        const [status, ] = useState(
            {
                1 : 'Applied',
                2 : 'Unlucky',
                3 : 'Whitelisted'
    
            }
        )

        const [statusindicator, ] = useState(
            {
                Applied: 'yellow',
                Whitelisted: 'green',
                Unlucky: 'red'
            }
        )
        
        // const value = 1;
        const [value, setvalue] = useState(1)
        const app = statusindicator.Applied;
        const unl = statusindicator.Unlucky;
        const white = statusindicator.Whitelisted;
       

    return (
        <>
        <div className="col">
             <div className="card card-size " >
                <img src={Detail.logo} className="card-img-top" alt="..."/>
                <div className="card-logo"> <img className = 'card-logo-image' src={Detail.logo} alt="logo" /></div>
                    <div className="card-body">
                        <h5 className="card-title"> {Detail.name} </h5>
                        <p className="card-text"> {Detail.description}</p>
                        <p className="card-text"> <span className='fw-bold'> Total raise: {Detail.raiseAmount} ({Detail.raisePercentage})</span></p>

                        <div className={`status border p-1 w-25 ${statusindicator[status[value]]}`} > {status[value]} </div>
                </div>
            </div>
        </div>

        </>
    )
}


export default Cardstatus;