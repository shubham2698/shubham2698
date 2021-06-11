import React from "react";
import Common from "./Common";
import Card from "./Card";
import ServiceData from "./ServiceData";

const Service = (props) => {
return(
<>
   <Common 
   name="Grow Your Business With " 
   shortdescp="A Talented Web Developer"
   longdescp=""
   btnname="Contact Me"
   redr="/Contact" 
  
   />
         <div className="my-5">
            <h1 className="text-center">What Do I Offer</h1>
         </div>
         <div className="container-fluid mb-5">
            <div className="row ">
               <div className="col-10 mx-auto">
                  <div className="row gy-3">
                     {
                        ServiceData.map((val,ind)=>{
                           return <Card
                           key={ind}
                           imgsrc={val.imgsrc}
                           title={val.title}
                           desc={val.desc}
                           />
                        })
                     }
                  </div>
               </div>
            </div>
         </div>
         
         

   

</>
);
};

export default Service;