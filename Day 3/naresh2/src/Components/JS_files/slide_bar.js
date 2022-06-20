import React from 'react';
import {Carousel} from 'react-bootstrap';

function ControlledCarousel() {
         return(
            <Carousel className='poster' fade={true}>
                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                        src = "https://wallpaperaccess.com/full/25520.jpg"
                        alt = "First Slide"
                        
                    />
                <Carousel.Caption>
                    <h3 style={{ color:'golden'}}>GAME OF THRONES</h3>
                </Carousel.Caption>    
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                        src = "https://wallpaperaccess.com/full/1087741.jpg"
                        alt = "Second Slide"
                        
                        
                    />
                <Carousel.Caption>
                    <h3 style={{ color:'white'}}>PEAKY BLINDERS</h3>
                </Carousel.Caption>    
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className = "d-block w-100"
                    src = "https://wallpaperaccess.com/full/2581598.jpg"
                        alt = "Third Slide"
                        
                    />
                <Carousel.Caption>
                    <h3 style={{ color:'white'}}>MONEY HIEST</h3>
                </Carousel.Caption>    
                </Carousel.Item>

            </Carousel>

         );
}

export default ControlledCarousel;