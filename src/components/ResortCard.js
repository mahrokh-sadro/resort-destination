import React from 'react'

const ResortCard = props => {
    return (
        //wats line 7????   //we define the props attributes here??
        <div className="resort-card">
            {/* <a href="">
                <img src={props.image} />
            </a> */}
            <div>
                <h3>{props.title}</h3>
                <p>${props.price} per night</p>
            </div>


        </div>

    )
}

export default ResortCard
