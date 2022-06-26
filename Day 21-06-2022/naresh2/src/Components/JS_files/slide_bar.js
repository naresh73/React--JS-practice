import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/25520.jpg"
                    alt="First slide"
                    height={900}
                    width={900}
                />
                <Carousel.Caption>
                    <h3>GAME OF THRONES</h3>
                    <p>THE NIGHT IS DARK AND FULL OF TERRORS <br /> R'HILLOR</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/1087741.jpg"
                    alt="Second slide"
                    height={900}
                    width={900}
                />

                <Carousel.Caption>
                    <h3>PEAKY BLINDERS</h3>
                    <p>TIME TO MAKE SOME REAL MONEY</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://wallpaperaccess.com/full/2581598.jpg"
                    alt="Third slide"
                    height={900}
                    width={900}
                />

                <Carousel.Caption>
                    <h3>MONEY HEIST</h3>
                    <p>
                        LE CASA DE PAPEL
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;