import React, { Component } from 'react';

//import components
import Canvas from './../Components/Canvas'

//import css
import './../css/reset.css'
import './../css/Slider.css';
import './../css/mediaSlider.css';
import './../css/formlogin.css'

//import image
import slide1 from './../images/slide-1.1.png';
import slide3 from './../images/slide-3.1.png';
import slide5 from './../images/slide-5.1.png';
import slide7 from './../images/slide-7.png';
import slide8 from './../images/slide-8.png';

//import bootstrap 
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';


// import packages
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';


class Slider extends Component {

    state = {
        data: [
            {
                id: 1,
                name: "img1",
                source: slide1
            },
            {
                id: 2,
                name: "img2",
                source: slide3
            }, {
                id: 3,
                name: "img3",
                source: slide5
            }, {
                id: 4,
                name: "img4",
                source: slide7
            }, {
                id: 5,
                name: "img5",
                source: slide8
            }
        ]
    }

    // isActive = () => {
    // this.setState(prevState => {
    //     return (
    //         {
    //             ...prevState,
    //             pagination: !prevState.pagination
    //         }
    //     )
    // })
    // }

    render() {
        const params =
        {
            spaceBetween: 30,
            centeredSlides: true,
            mousewheel: true,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + 0+(index + 1) + '</span>';
                }
            }
        }
        return (
            <section className="main-slider">
                <div className="container-fluid">
                    <div className="row">
                        <div className="row aaa">
                            <div className="sidebar bbb">
                                <Canvas />
                                <CardColumns>
                                    <Card>
                                        <Card.Body>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                        </Card.Body>
                                    </Card>
                                </CardColumns>
                            </div>
                            <div className="card row ccc">

                                <div className="card-body">
                                    <div className="card-text">
                                        <h1 className="h Tournament">Tournament</h1>
                                        <h1 className="h1 title">20<span className="h1">000kr</span></h1>
                                        <h1 className="h1 garanti">Garanti</h1>
                                    </div>
                                </div>
                                <Swiper {...params}>
                                    {this.state.data.map((img) => <div key={img.id} className="slides">
                                        <img src={img.source} className="card-img-top" alt="" />
                                    </div>)}
                                </Swiper>
                                <div className="row images">

                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </section >
        )
    }
}

export default Slider;
