import react from 'react';
import "./Skills.css";
import Timeline from "./Timeline";

const Skills = () => {
    return(
    <>
<div className="container-fluid ">
    <div className="row">
        <div className=" mx-auto">  
            <div className="skills">
                <h1>My Skills</h1>
                <li>
                        <h4>HTML5</h4><span className="bar"><span className="html"></span></span>
                </li>
                <li>
                        <h4>CSS3</h4><span className="bar"><span className="css"></span></span>
                </li>
                <li>
                        <h4>PHP</h4><span className="bar"><span className="php"></span></span>
                </li>
                <li>
                        <h4>MYSQL</h4><span className="bar"><span className="mysql"></span></span>
                </li>
                <li>
                        <h4>REACT-JS</h4><span className="bar"><span className="reactjs"></span></span>
                </li>
                <li>
                        <h4>C</h4><span className="bar"><span className="c"></span></span>
                </li>
                <li>
                        <h4>C++</h4><span className="bar"><span className="cpp"></span></span>
                </li>
                <li>
                        <h4>JAVA</h4><span className="bar"><span className="java"></span></span>
                </li>
                <li>
                        <h4>PYTHON</h4><span className="bar"><span className="python"></span></span>
                </li>
                <li>
                        <h4>PHOTOSHOP</h4><span className="bar"><span className="photoshop"></span></span>
                </li>
            </div>
        </div>
       <div className="skills">
        <h1>My Timeline</h1>
                <Timeline/>
                </div>
    </div>
</div>
    </>
    );
    };
    
    export default Skills;