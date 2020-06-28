import React, { Component } from 'react';

//import components
import Canvas from './../Components/Canvas'

//import css
import './../css/reset.css'
import './../css/Slider.css';
import './../css/formlogin.css'

//import image
import slide1 from './../images/slide-1.1.png';
import slide3 from './../images/slide-3.png';
import slide5 from './../images/slide-5.png';
import slide7 from './../images/slide-7.png';
import slide8 from './../images/slide-8.png';

//import bootstrap 
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



// import { Carousel } from 'react-responsive-carousel'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
        ],
        indicators: [
            {
                id: 1,
                name: "slide1",
            }, {
                id: 2,
                name: "slide2",
            }, {
                id: 3,
                name: "slide3",
            }, {
                id: 4,
                name: "slide4",
            }, {
                id: 5,
                name: "slide5",
            },
        ],
        pagination: false
    }

    isActive = () => {
        // this.setState(prevState => {
        //     return ({
        //         ...prevState,
        //         pagination: ! prevState.pagination}
        //     )
        // })
    }
    render() {
        return (
            <section className="main-slider">
                <div className="container-fluid">
                    <div className="row">
                        <div className="row aaa">
                            <div className="sidebar bbb">
                                <Canvas />
                                {/* <div className='card-group'> */}
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
                                {/* </div> */}
                            </div>
                            <div className="card row ccc">
                                <div className="card-body">
                                    <h1 className="h Tournament">Tournament</h1>
                                    <h1 className="h1 title">20<span className="h1">000kr</span></h1>
                                    <h1 className="h1 garanti">Garanti</h1>
                                </div>
                                <OwlCarousel className="card-body owl-theme" items={1}
                                    // autoplay={true}
                                    autoplayHoverPause={true}
                                    dots={false}
                                    marginWidth={10}
                                    autoplayTimeout={3000}
                                    center={true}
                                    pagination="true"
                                    loop={true}
                                >
                                    {this.state.data.map((img) => <div key={img.id}>
                                        <img src={img.source} className="card-img-top" alt="" />
                                    </div>)}
                                </OwlCarousel>

                                <div className="indicators">
                                    <div className="row indicator">
                                        {this.state.indicators.map(item => <span key={item.id} className={`number ${this.isActive() ? 'active' : ''}`}>0{item.id}</span>)}
                                    </div>

                                </div>
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
