import React from "react";
import img_banner01 from '../static/images/banner01.jpg'
import {useCheckAuthCode} from "../hooks";

const Home = () => {
    useCheckAuthCode();
    return (
        <div>
            <div className='container mt-3 '>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img_banner01} className="d-block w-100" alt="..."/>
                            <div className="text-start carousel-caption d-none d-md-block">
                                <h1 style={{fontSize: 80, fontWeight: 'bold'}} className='text-white'>Gallery01</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img_banner01} className="d-block w-100" alt="..."/>
                            <div className="text-start carousel-caption d-none d-md-block">
                                <h1 style={{fontSize: 80, fontWeight: 'bold'}} className='text-white'>Gallery02</h1>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={img_banner01} className="d-block w-100" alt="..."/>
                            <div className="text-start carousel-caption d-none d-md-block">
                                <h1 style={{fontSize: 80, fontWeight: 'bold'}} className='text-white'>Gallery03</h1>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>


        </div>
    )
}

export default Home;
