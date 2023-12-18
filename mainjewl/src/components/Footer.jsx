import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {

    return (
        <div className="footer-dark mt-5">
            <footer>
                <Container>
                    <Row>
                        <Col sm={6} md={3} className="item">
                            <h3>Designed and Owner By</h3>
                                <p>Munot Gadale</p>
                        </Col>
                        <Col sm={6} md={3} className="item">
                            <h3>Help</h3>
                            <ul>
                                <li>Shipping</li>
                                <li>Contact Us</li>
                                <li>FAQ</li>
                            </ul>
                        </Col>
                        <Col md={6} className="item text">
                            <h3>SWARNA-RATNA</h3>
                            <p>
                                Discover elegance redefined at SwarnaRatna. Our jewelry reflects timeless beauty,
                                blending local craftsmanship with global allure. Life's special moments deserve 
                                SwarnaRatna's touch—where sophistication meets sentiment, and every piece is a 
                                celebration in itself. Unveil the art of adornment with us.
                            </p>
                        </Col>
                        <Col className="item-social">
                            <h3>Get In Touch</h3>
                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>

                            <a href="https://www.linkedin.com/in/munot-gadale-4a804722a/">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </Col>
                    </Row>
                    <p className="copyright">SwarnaRatna © 2023</p>
                </Container>
            </footer>
        </div>
    );
};
