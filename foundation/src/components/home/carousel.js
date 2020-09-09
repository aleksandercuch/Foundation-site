import { Component } from "react";
import React from "react";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { NavLink } from "react-router-dom";

class Carousels extends Component {

  render() {
    let img1 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    let img2 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    let img3 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    return (
      <div>
        <Carousel
          centered
     
          animationSpeed={2000}
          infinite
          slidesPerPage={2}
          dots
          breakpoints={{
            1920: {
              itemWidth: 1600,
            },
            1300: {
              itemWidth: 1300,

            },
            1250: {
              itemWidth: 1250,

            },
            1200: {
              itemWidth: 1200,
            },
            1150: {
              itemWidth: 1150,
            },
            1100: {
              itemWidth: 1100,
            },
            1050: {
              itemWidth: 1050,
            },
            1000: {
              itemWidth: 1000,
            },
            950: {
              itemWidth: 950,
            },
            900: {
              itemWidth: 900,
            },
            850: {
              itemWidth: 850,
            },
            800: {
              itemWidth: 800,
            },
            750: {
              itemWidth: 765,//
            },
            700: {
              itemWidth: 720,//
            },
            650: {
              itemWidth: 670,//
            },
            600: {
              itemWidth: 600,
            },
            550: {
              itemWidth: 550,//
            },
            500: {
              itemWidth: 510,//
            },
            460: {
              itemWidth: 475,//
            }
          }}
        >
          <NavLink to="/facebook"><img className="carouselImage" src={img1} alt="error" /></NavLink>
          <NavLink to="/dudu"><img className="carouselImage" src={img2} alt="error" /></NavLink>
          <NavLink to="/koko"> <img className="carouselImage" src={img3} alt="error" /></NavLink>
        </Carousel>
      </div>
    );
  }
}

export default Carousels;


