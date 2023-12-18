// Home.js

import React from 'react';
import { Navigationbar } from './Navigationbar';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img_jewl/h5-slider-n01.jpg';
import img2 from '../img_jewl/h5-slider-n02.jpg';
import img3 from '../img_jewl/h5-slider-n03.jpg';
// import img4 from '../img_jewl/h5-slider-n04.png';
import HomeCards from './HomeCards';
import Reviews from './Reviews';
import './Home.css'; 
import { Button } from 'react-bootstrap';
import FeaturedProducts from './FeaturedProducts';
import Blogs from './Blogs';

export function Home() {

    return (
        <>
            <Navigationbar />
            <Carousel fade controls={false}>
                <Carousel.Item>
                    <img
                        src={img1}
                        alt="First slide"
                        className="carousel-image"
                    />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Elevate Your Feminine Aura with Jewelry</h3>
                        <p className="text-bold">Take a moment and cherish the grand collection</p>
                        <p><Button type='button' variant="outline-light" >MAKE ORDER</Button> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={img2}
                        alt="Second slide"
                        className="carousel-image"
                    />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">From SwarnaRatna</h3>
                        <p className="text-bold">MODERN COLLECTION</p>
                        <p><Button type='button' variant="outline-light">VIEW COLLECTIONS</Button> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        src={img3}
                        alt="Third slide"
                        className="carousel-image"
                    />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Elevate Style, Illuminate Grace</h3>
                        <p className="text-bold">In the grand collection of life, let your jewelry be the masterpiece</p>
                        <p><Button type='button' variant="outline-light">MAKE ORDER</Button> </p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* <Carousel.Item>
                    <img
                        src={img4}
                        alt="Fourth slide"
                        className="carousel-image"
                    />
                    <Carousel.Caption className="text-container">
                        <h3 className="text-bold">Crafted with Precision</h3>
                        <p className="text-bold">Experience the artistry and quality of our masterfully crafted jewelry.</p>
                        <p><a href="#" class="btn btn-outline-light mt3">EXPLORE</a> </p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>

            <FeaturedProducts />

            <div>
                <HomeCards />
            </div>

            <Blogs />

            <div>
                <Reviews />
            </div>
        </>
    );
}
