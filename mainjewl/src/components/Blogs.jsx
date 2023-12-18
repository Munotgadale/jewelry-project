import React from 'react';
import aboutImage from '../img_jewl/cards/1.png';
import blog2Image from '../img_jewl/cards/2.png';
import blog3Image from '../img_jewl/cards/3.png';
import blog4Image from '../img_jewl/cards/4.png';
import blog5Image from '../img_jewl/cards/5.png';
import { Button } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
  const containerStyle = {
    textAlign: 'center',
  };

  const titleWrapperStyle = {
    marginTop: '5px',
    marginBottom: '5px',
  };


  return (
    <>
   <section id="about" className="about-section mt-5 mb-3">
      <div className="container">
        <h2 className="section-heading text-center mb-5">About Anna Style</h2>
        <div className="row">
          <div className="col-lg-4 col-mf-12 col-12">
            <div className="about-img">
              <img src={aboutImage} alt="" className="img-fluid hover-effect" />
            </div>
          </div>
          <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5">
            <div className="about-text">
              <h2>Discover the Latest Trends and Style Tips from Anna Style</h2>
              <p>
                At Anna Style, we take pride in offering you the finest and most exquisite jewelry pieces. Our commitment to quality is unmatched, and we strive to provide you with a unique and memorable shopping experience.
              </p>
              <p>
                Explore our curated collections featuring a wide range of designs, from classic to contemporary. Each piece is crafted with precision and attention to detail, ensuring that you receive jewelry of the highest quality.
              </p>
              <p>
                Whether you're looking for a timeless piece for a special occasion or a trendy accessory to complement your everyday style, Anna Style has something for everyone. Our passion for jewelry is reflected in the beauty and elegance of each item in our collection.
              </p>
              <Button type="button" variant="secondary" className="btn-custom mt-3">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>



      <div className="container text-center mt-5 mb-3" style={containerStyle}>
        <div className="row">
          <div
            className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin content-align--center"
            style={titleWrapperStyle}
          >
            <h2 className="title h0">Our Blogs</h2>
            <p className="description">Read The Blogs And Be On-Trend</p>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <div className="card">
                  <img src={blog2Image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Mother Day Special Gifting Guide</h5>
                    <p className="card-text">
                      If you're wondering how to say, "Happy Mother's Day," you're in luck!
                      These Beautiful jewelry will help you to wish and convey your message to
                      your mother.
                    </p>
                    <button type="button" className="btn btn-outline-dark">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={blog3Image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Beautiful Party wear Jewelry collections</h5>
                    <p className="card-text">
                      Whether you're wearing a gown, saree, dress, or skirt, a beautiful set of
                      earrings can elevate your look and complete your perfect party appearance.
                    </p>
                    <button type="button" className="btn btn-outline-dark">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={blog4Image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Treat for fun-loving little fingers</h5>
                    <p className="card-text">
                      Explore the board "Party wear rings". See more ideas about beautiful
                      jewelry, a touch of magic to those joyous little moments.
                    </p>
                    <button type="button" className="btn btn-outline-dark">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <img src={blog5Image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Share your love with couple rings</h5>
                    <p className="card-text">
                      Buy Couple Rings Jewellery collections online from Swarnaratna. Browse our
                      latest Gold and Diamond Jewellery Designs and Collections at Best Price in
                      India.
                    </p>
                    <button type="button" className="btn btn-outline-dark">
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
