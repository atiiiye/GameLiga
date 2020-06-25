import React, { Component } from 'react';

//import components
import Canvas from './../Components/Canvas'
import Sidebar from './../Components/Sidebar'

//import css
import './../css/reset.css'
import './../css/Slider.css';

//import image
import slide1 from './../images/slide-1.1.png';
import slide3 from './../images/slide-3.png';
import slide5 from './../images/slide-5.png';
import slide7 from './../images/slide-7.png';
import slide8 from './../images/slide-8.png';


// import { Carousel } from 'react-responsive-carousel'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Slider extends Component {

    state = {
        pagination: false
    }
    componentDidUpdate(props, state, snapshot) {
        return (
            this.setState({ pagination: true })
        )
    }

    render() {
        return (
            <section className="main-slider">
                <div className="container">
                    <div className="row">
                        <Canvas className="col-lg-3" />

                        <div className="row col-lg-9">
                            <div className="col-lg-1">
                            </div>

                            <div className="card col-lg-11">

                                <div className="card-body col-lg-3">
                                    <h1 className="h Tournament">Tournament</h1>
                                    <h1 className="h1 title">20<span className="h1">000kr</span></h1>
                                    <h1 className="h1 garanti">Garanti</h1>
                                </div>

                                <OwlCarousel items={1}
                                    autoplay={true}
                                    autoplayHoverPause={true}
                                    dots={false}
                                    marginWidth={8}
                                    autoplayTimeout={3000}
                                    center={true}
                                    pagination={true}
                                    loop={true}
                                    className="owl-theme">

                                    <div><img src={slide1} className="card-img-top" /></div>
                                    <div><img src={slide3} className="card-img-top" /></div>
                                    <div><img src={slide7} className="card-img-top" /></div>
                                    <div><img src={slide5} className="card-img-top" /></div>
                                    <div><img src={slide8} className="card-img-top" /></div>
                                </OwlCarousel>

                                <div className="indicators">
                                    <div className="row indicator"><span className={` number ${this.state.pagination ? 'active' : ''}`}>01</span></div>
                                    <div className="row indicator"><span className={` number ${this.state.pagination ? 'active' : ''}`}>02</span></div>
                                    <div className="row indicator"><span className={` number ${this.state.pagination ? 'active' : ''}`}>03</span></div>
                                    <div className="row indicator"><span className={` number ${this.state.pagination ? 'active' : ''}`}>04</span></div>
                                    <div className="row indicator"><span className={` number ${this.state.pagination ? 'active' : ''}`}>05</span></div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </section>
        )
    }
}

export default Slider;
