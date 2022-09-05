import React from 'react';
import './landing.css'
import Details from './Details';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import Card from './card'

function mainlanding(){
    return(
        <>
        <div className="container">
            <div className="upcominghead navbar container-fluid">
                <span><h2>Up-coming Projects</h2></span>
                <button type ="button" className='btn btn-outline-secondary explore-btn d-flex ' >explore projects</button>
            </div>

        <div className="row row-col-1 row-cols-md-3 g-1">
            <Card></Card>
            <Card></Card>
        </div>

        <Dashboard></Dashboard>

        <Details></Details>
    </div>
        
        </>
    )

}

export default mainlanding;