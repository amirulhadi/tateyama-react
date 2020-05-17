import React from 'react';
import './index.css';
import '../../App.css';
import 'bootstrap';
import FruitsImg from '../../assets/fruits.jpg'
function UpperContent(){
    return(
        <div className = "bg">
            <div className="row">
                <div className="col-md-6">
                <h3>HYGIENIC FOODS</h3>
                <span>Preparation of hygienic nature within clean room environment
                    without comprimising the texture and taste of the foods. Safe foods
                    handling practices are required in any commercial kitchen to prevent 
                    the spread of bacteria and diseases.
                    Hygienic food preparation follows a few basics principles that will reduce
                    your risk of liability and help you remain in compliance with local sanitation
                    requrements.
                </span>
                </div>
                <div className="col-md-6" >
                    <img  src={FruitsImg} style = {{padding: '0px'}} />
                </div>
            </div>
        
        </div>
    )
}

export default UpperContent;