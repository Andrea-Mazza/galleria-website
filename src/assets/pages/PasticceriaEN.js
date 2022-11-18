
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/Footer";
import { CarouselItem } from "react-bootstrap";

function PasticceriaEN() {
    return (
        <>

            <section id='pasticceria'>
                <Container className='text-center text-center pasticceria-container'>
                    <h1>The sweet creations by Enrico Parassina (Pastry Chef)</h1>
                    <iframe title='Enrico Parassina video' className="video" src='https://www.youtube.com/embed/jeHJd_22qUI?rel=0'></iframe>
                    <h2>The Pastry</h2>
                    <p>The desserts are the latest creations of Master Pastry Chef (Pastry Chef Exclusive) <strong>Enrico Parassina</strong>, the result of a long career taken in the best hotels and clubs of the world including: <span className='bold'>Villa d'Esta Cernobbio</span>, <span className='bold'>Saint Moritz Kulm</span>, <span className='bold'>Excelsior Venice</span>, <span className='bold'>Harry's Bar in London</span>, <span className='bold'>Four Seasons Hotel in Milan</span></p>
                    <p>Parassina has participated in many international competitions, winning 11 gold medals, 4 silver, 10 bronze. Highly prestigious gold medal of the 1991 World Cup in Luxembourg and the World Championships in Basel, in addition to the gold medal at the Olympics in Frankfurt with honors in 1998.</p>
                    <Carousel variant='dark'>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-1.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-2.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-3.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-4.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-5.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-6.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-7.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-8.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-9.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-10.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-11.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="img-fluid" src={`${require('../images/pasticceria-12.jpeg')}`} alt="Un'immagine raffigurante dei dolci" />
                        </CarouselItem>
                    </Carousel>
                </Container>
            </section>
            <Container fluid className='overlay3 d-flex align-items-center'>
            </Container>
            <Footer />
        </>
    );
}

export default PasticceriaEN;