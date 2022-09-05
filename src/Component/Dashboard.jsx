import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './landing.css'
import CardStatus from './Cardstatus'
import { useState } from "react";

function Dashboard(){



    return (
        <>
            <div className="container">
            <div className="upcominghead navbar container-fluid">
                <span><h2>Dashboard</h2></span>
            </div>

    
            <CardStatus></CardStatus>
            </div>
        </>
    )
}

export default Dashboard;