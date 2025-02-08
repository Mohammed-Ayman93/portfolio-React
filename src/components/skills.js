import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills(){
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <div id="skills" className="skills py-5 text-light text-center slider-container">
            <div className="container"> 
              <div className="skills-con bg-dark p-5 rounded-5">
                <h2 className=" fs-1">Skills</h2>
                <p className="">You can see All My skills here</p>
            <Slider {...settings}>
                            <div >
                    <p className="circle"> <span className="value">80%</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="rgb(42, 42, 155)" />
                          <stop offset="100%" stopColor="rgb(78, 165, 78)" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg> 
                    </p>
                    <span>Data Science</span>
                </div>
                <div >
                    <p className="circle"> <span className="value">90%</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="#222" />
                          <stop offset="100%" stopColor="#7901" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg> 
                    </p>
                    <span>FrontEnd Developer</span>
                </div>
                <div >
                    <p className="circle"> <span className="value">85%</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="#222" />
                          <stop offset="100%" stopColor="#7901" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg> 
                    </p>
                    <span>BackEnd Developer</span>
                </div>
                <div >
                    <p className="circle"> <span className="value">95%</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="#222" />
                          <stop offset="100%" stopColor="#7901" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg> 
                    </p>
                    <span>Cyber Security</span>
                </div>
                <div >
                    <p className="circle"> <span className="value">95%</span> 
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                      <defs>
                        <linearGradient id="GradientColor">
                          <stop offset="0%" stopColor="#222" />
                          <stop offset="100%" stopColor="#7901" />
                        </linearGradient>
                      </defs>
                      <circle cx="80" cy="80" r="70" strokeLinecap="round" />
                    </svg> 
                    </p>
                    <span>FullStack Developer</span>
                </div>
                </Slider>
                </div>
                </div>
        </div>
    )
}
export default Skills;