import React from "react";
import imgfr from "../src/images/bgf.png";
import "./Common.css";
import {Link } from 'react-router-dom';

const Common = (props) => {
return(
<>
   <section id="header">
      <div className="container-fluid">
         <div className="row ">
            <div className="col-10 md-auto mx-auto">
               <div className="row">

               
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                  <div className="hmlf">
                  <h1>{props.name}<strong className="my-name">Shubham Joshi</strong></h1>
                  <h3 className="my-2 ">
                     {props.shortdescp}
                  </h3>
                  <h5>
                      {props.longdescp}
                  </h5>
                  <div className="mt-3">
                     <Link className="btn-get-started" to={props.redr} style={{ textDecoration: 'none' }}>{props.btnname}</Link>
                  </div>
               </div>
               </div>
               <div className="col-lg-6 order-1 order-lg-2 mainbg ">
                  <img src={imgfr} className="img-fluid animated"  alt="Something Wrong With Image" />
               </div>
               
               </div>
            </div>
         </div>
      </div>
   </section>
</>
);
};

export default Common;