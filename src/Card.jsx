import React from "react";
import "./Card.css";

const Card = (props) => {
    return(
    <>
<div className="col-md-4 col-10 mx-auto">
    <div className="card" >
        <img src={props.imgsrc} Name="card-img-top" className="image" alt="..."/>
            <div Name="card-body">
                <h5 className="card-title font-weight-bold text-center">{props.title}</h5>
                <p className="card-text text-center">{props.desc}.</p>
                
            </div>
    </div>
</div>
    </>
);
};

export default Card;