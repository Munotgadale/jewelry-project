import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../img_jewl/Screenshot 2023-12-16 232510.png';
import img2 from '../img_jewl/reviews/1.jpg';
import img3 from '../img_jewl/reviews/2.jpg';
import img4 from '../img_jewl/reviews/3.jpg';
import img5 from '../img_jewl/reviews/4.jpg';
import img6 from '../img_jewl/reviews/5.jpg';
import img7 from '../img_jewl/reviews/6.jpg';

import './Reviews.css';
import Carousel from 'react-bootstrap/Carousel';

function Reviews() {
    return (
        <>
            <div className='section'>
                <h2>
                    What Clients Say
                </h2>
            </div>
            <Card className="bg-dark text-white position-relative">
                <Card.Img src={img1} alt="Card background" style={{ width: '100%', height: '90vh', objectFit: 'cover' }} />
                <div className="overlay"></div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-center align-items-center">
                    <Carousel fade className="card-carousel" indicators={false} controls={false} interval={5000} pause={false}>
                        <Carousel.Item>
                            <img src={img2} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "Absolutely in love with my gold necklace from SwarnaRatna. The craftsmanship is impeccable,
                                and the intricate design adds a touch of elegance to every outfit. Exceptional quality and stunning aesthetics."
                            </h4>
                            <p>-- Aaradhya Patel --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img7} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I recently purchased a pair of gold earrings for my sister's birthday from SwarnaRatna, and she couldn't be happier.
                                The detailing and brilliance of the gold exceeded our expectations. Thank you for making the celebration extra special!"
                            </h4>
                            <p>-- Diya Sharma --</p>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img src={img3} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "The gold bracelet I bought from SwarnaRatna is a true work of art. It's a timeless piece
                                that adds a touch of sophistication to any ensemble. The attention to detail and quality craftsmanship are truly commendable."
                            </h4>
                            <p>-- Aishwarya Kapoor --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img4} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I received the SwarnaRatna gold ring as a gift, and it exceeded my expectations. The design is exquisite,
                                and the quality of the gold is exceptional. I'm proud to wear a piece from such a reputable brand."
                            </h4>
                            <p>-- Kavya Reddy --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img5} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "SwarnaRatna truly understands the art of crafting timeless pieces. The gold necklace I purchased
                                complements my style perfectly. It's a statement piece that I cherish, and the brand's commitment to quality shines through."
                            </h4>
                            <p>-- Aarohi Sharma --</p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={img6} alt="Reviewer avatar" className="reviewer-avatar" />
                            <h4>
                                "I've been a loyal customer of SwarnaRatna for years, and each piece of gold jewelry tells a unique story.
                                The brand's dedication to authenticity and elegance sets it apart. I always find the perfect piece for every occasion."
                            </h4>
                            <p>-- Vaishnavi Singh --</p>
                        </Carousel.Item>
                    </Carousel>
                </Card.ImgOverlay>
            </Card>
        </>
    );
}

export default Reviews;
