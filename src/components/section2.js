import React from "react";
import img2 from '../imges/customers.png'
function Section2(){
    return(
        <div id="section2" className="py-5 sec2">
            <div className="container">
                <div className="row p-5 text-light">
                    <div className="col-lg-6 col-12">
                        <img className="w-100 mt-5" src={img2}/>
                    </div>
                    <div className="col-lg-6 col-12">
                        <h2 className="p-2">Get In Touch</h2>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                        <input type="text" placeholder="Email Address"/>
                        <input type="text" placeholder="Phone No."/>
                        <textarea placeholder="Message"/>
                        <button className="btn btn-primary px-4 py-2 mt-3">Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Section2;