import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import Image1 from './immagine1.jpg'
import Image2 from './immagine2.jpg'
import Image3 from './immagine3.jpg'



export default function Home() {
    function goToContact(){
       window.location.href='/cali_scelfo/contact'
    }
    return (
        <div>
            <Container className='mt-3'>
                <Row>
                 <Col>
                 <Carousel>
                     <Carousel.Item>
                             <img className="d-block w-100" src={Image1} alt="First slide"/>
                         <Carousel.Caption>
                             <h3>Straddle planche</h3>
                         </Carousel.Caption>
                    </Carousel.Item>
                     <Carousel.Item>
                          <img className="d-block w-100" src={Image2} alt="Second slide" />
                        <Carousel.Caption>
                             <h3>L-sit + allenamento planche</h3>
                         </Carousel.Caption>
                         </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={Image3} alt="Third slide" />
                        <Carousel.Caption>
                             <h3>Hand stand</h3>
                            <p>con vista mare</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                 </Col>
                 <Col>
                 <h1 className="text-center">Giacomo Sclefo PT</h1>
                 <h2>Chi sono?</h2>
                 <h4>Sono un ragazzo appasionato di discipline a corpo libero da molti anni, in particolare dal calisthenics.</h4>
                 <h4>Ho conseguito un corso per diventare allenatore con BURNINGATE dove ho imparato i fondamenti di questa disciplina e non solo...</h4>
                 <div className='d-flex justify-content-center'>
                 <Button onClick={()=> goToContact()}>Contatti</Button>
                 </div>
                 </Col>
                </Row>
            </Container>
        </div>
    )
}
