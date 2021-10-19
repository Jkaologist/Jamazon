import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12342422"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="49538094"
            title="Aucma Stand Mixer, 6.5-QT 660W 6-Speed Tilt-Head Food Mixer"
            price={239.99}
            image="https://m.media-amazon.com/images/I/61aT8jl8THL._AC_SL1001_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1237582178"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={199.99}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="5123912039"
            title="Samsung Galaxy Z Fold 3 5G Factory Unlocked Android Cell Phone US Version Smartphone, Phantom Green with Galaxy Z Fold 3 Phone Case"
            price={1599.99}
            image="https://m.media-amazon.com/images/I/61vFklMS2TL._AC_SX679_.jpg"
            rating={4}
          />
          <Product
            id="68917238"
            title='Wooden Bucket 6" x 8" Water Wishing Well Pail with Rope Twine Handle Solid Wood Vintage Style Primitive Planter Handmade in The USA'
            price={34.99}
            image="https://m.media-amazon.com/images/I/51VqtAYc0FL._AC_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="12392847"
            title="Voyager Step-In Air Dog Harness - All Weather Mesh Step in Vest Harness for Small and Medium Dogs by Best Pet Supplies - Blue Trim, X-Large"
            price={12.99}
            image="https://m.media-amazon.com/images/I/71BuAaTVMzL._AC_SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
