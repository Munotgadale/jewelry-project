import React from 'react';
import img1 from '../img_jewl/temp/1.png';
import img2 from '../img_jewl/temp/2.png';
import img3 from '../img_jewl/temp/3.png';
import img4 from '../img_jewl/temp/4.png';
import img5 from '../img_jewl/temp/5_1.jpg';
import img6 from '../img_jewl/temp/6_1.jpg';
import img7 from '../img_jewl/temp/7_1.webp';
import img8 from '../img_jewl/temp/8_1.webp';
import img9 from '../img_jewl/temp/9_2.jpg';
import img10 from '../img_jewl/temp/10.webp';
import img11 from '../img_jewl/temp/11.webp';
import img12 from '../img_jewl/temp/12_1.jpg';
import './FeaturedProducts.css';
import { Button } from 'react-bootstrap';

const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Multi Stone Stud', price: '₹15000', image: img1 },
    { id: 2, name: 'Diamond Ring', price: '₹25000', image: img2 },
    { id: 3, name: 'Dangle Earring', price: '₹30000', image: img3 },
    { id: 4, name: 'Wedding Ring', price: '₹18000', image: img4 },
    { id: 5, name: 'Sapphire Necklace', price: '₹22000', image: img5 },
    { id: 6, name: 'Gold Bracelet', price: '₹12000', image: img6 },
    { id: 7, name: 'Pearl Earrings', price: '₹28000', image: img7 },
    { id: 8, name: 'Silver Ring', price: '₹16000', image: img8 },
    { id: 9, name: 'Ruby Pendant', price: '₹20000', image: img9 },
    { id: 10, name: 'Emerald Brooch', price: '₹35000', image: img10 },
    { id: 11, name: 'Platinum Necklace', price: '₹40000', image: img11 },
    { id: 12, name: 'Amethyst Earrings', price: '₹18000', image: img12 },
  ];

  return (
    <>
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          <div className="title-wrapper-with-link title-wrapper--self-padded-mobile title-wrapper--no-top-margin content-align--center">
            <h2 className="title h0">Featured Products</h2>
            <p className="description">Strahlen Sie wie eine Perle mit unserem Schmuck.</p>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card h-100 product-card">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card__heading h5">{product.name}</h3>
                <p>{product.price}</p>
                <div className="d-grid gap-1 col-4 mx-auto">
                  <Button variant="outline-secondary" className="btn-sm" type="button">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="d-grid gap-1 col-4 mx-auto mt-5">
      <Button variant="outline-secondary" type="button">
          Explore More
      </Button>
    </div>
    </>
  );
};

export default FeaturedProducts;
