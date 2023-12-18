/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Navigationbar } from './Navigationbar';
import me from '../img_jewl/IMG_20210105_063046_388.jpg';
import video from "../img_jewl/gold_-_35575 (720p).mp4";
import { Container } from "react-bootstrap";
import './AboutUs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


export function AboutUs() {
    return (
        <>
            <Navigationbar></Navigationbar>
            <section className="section-white mt-5">
                <div className="container text-center">
                    <h1>About SwarnaRatna</h1>
                    <p>Who are we</p>
                    <Container>
                        <h5>We are a contemporary jewelry destination, offering a diverse array of exquisite pieces that blend traditional 
                            and modern styles. With a rich assortment of over 1000 designs, SwarnaRatna is your go-to for handcrafted local 
                            gems and globally acclaimed brands. Our pride lies in presenting a meticulously curated selection that caters 
                            to every taste. If you can't find what you're looking for, our team is dedicated to sourcing it for you.
                        </h5>
                        <h5>
                            With a legacy spanning three decades, we bring credibility and expertise to meet your unique jewelry desires. 
                            Whether you seek a single piece, a collection for a special occasion, or corporate orders, SwarnaRatna is your 
                            all-encompassing destination for all things jewelry. Explore the world of SwarnaRatna, where every piece is a 
                            timeless celebration of elegance and grace.
                        </h5>
                    </Container>
                </div>
            </section>
            <video src={video} width="100%" height="80%" className="mt-4" autoPlay loop muted playsInline />
            <section className="section-white mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="section-title">Meet the Founder</h2>
                            <p className="section-subtitle mt-3">Embark on a journey with the visionary behind our brand. Our founder is dedicated to enriching your drinking experience with a curated selection of exceptional flavors.</p>
                        </div>

                        <section id="about" className="about-section mt-5 mb-3">
                        <div className="container">
                            <div className="row">
                            <div className="col-lg-4 col-mf-12 col-12">
                                <div className="about-img">
                                <img src={me} alt="" className="img-fluid hover-effect" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 md-5">
                                <div className="about-text">
                                <h1>Munot Gadale</h1>
                                <p>Welcome to SwarnaRatna, where beauty meets craftsmanship in the world of exquisite jewelry. I'm Munot Gadale, 
                                    the founder of this curated space that celebrates the art of adornment.
                                    my passion for fine jewelry and commitment to quality craftsmanship have come together to create a unique 
                                    shopping experience for you.
                                </p>
                                <p>Join me on this glittering journey through the world of SwarnaRatna, where each piece tells a story of 
                                    artistry, dedication, and timeless beauty. Whether you're looking for the perfect gift or treating 
                                    yourself to something special, our commitment to authenticity and elegance ensures you'll find the 
                                    perfect piece for every moment.
                                </p>
                                <h5>Welcome to SwarnaRatna - Your Destination for Timeless Elegance and Unmatched Craftsmanship.
                                </h5>
                                <div className="item-social mt-4">
                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faLinkedin} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faFacebook} />
                                        </a>

                                        <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/" style={{ textDecoration: 'none' }}>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            </section>

        </>
    );
}