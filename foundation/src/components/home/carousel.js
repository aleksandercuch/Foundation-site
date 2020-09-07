import { Component } from "react";
import React from "react";

import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Hidden from '@material-ui/core/Hidden';
import { NavLink } from "react-router-dom";

class Carousels extends Component {

  render() {
    let img1 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    let img2 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    let img3 = "https://static.wixstatic.com/media/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.jpg/v1/fill/w_1583,h_670,al_c,q_85,usm_0.66_1.00_0.01/1150cf_f0ab5d9285314921acff40deeae7f8d6~mv2_d_5013_3208_s_4_2.webp";
    return (
      <div>
        <Hidden mdDown>
          <Carousel
            centered
            dots

            autoPlay={6000}
            animationSpeed={2000}
            infinite
            slidesPerPage={1}
   
          >
            <NavLink to="/facebook"><img className="carouselImage" src={img1} alt="error" /></NavLink>
            <NavLink to="/dudu"><img className="carouselImage" src={img2} alt="error" /></NavLink>
            <NavLink to="/koko"> <img className="carouselImage" src={img3} alt="error" /></NavLink>
          </Carousel>
        </Hidden>
        <Hidden lgUp smDown>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
            infinite
            slidesPerPage={2}
            itemWidth={900}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>
        <Hidden mdUp xsDown>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
            infinite
            slidesPerPage={2}
            itemWidth={600}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>
        <Hidden smUp>
          <Carousel
            centered
            autoPlay={6000}
            animationSpeed={2000}
            infinite
            slidesPerPage={2}
          >
            <img className="carouselImage" src={img1} alt="error" />
            <img className="carouselImage" src={img2} alt="error" />
            <img className="carouselImage" src={img3} alt="error" />
          </Carousel>
        </Hidden>
        </div>
    );
  }
}

export default Carousels;


