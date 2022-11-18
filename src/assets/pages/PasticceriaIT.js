
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/Footer";
import { CarouselItem } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PasticceriaIT() {
    return (
        <>

            <section id='pasticceria'>
                <Container className='text-center pasticceria-container'>
                    <h1>Le dolci creazioni di Enrico Parassina (Pastry Chef)</h1>
                    <iframe title='Enrico Parassina video' className="video" src='https://www.youtube.com/embed/jeHJd_22qUI?rel=0'></iframe>
                    <h2>La Pasticceria</h2>
                    <p>Al Ristorante Galleria troverete le dolci creazioni del Maestro Pasticciere (Exclusive Pastry Chef) <strong>Enrico Parassina</strong>, frutto di una lunga carriera intrapresa nei migliori alberghi e locali del mondo tra cui: <span className='bold'>Villa d'Este di Cernobbio</span>, <span className='bold'>Kulm di Saint Moritz</span>, <span className='bold'>Excelsior di Venezia</span>, <span className='bold'>Harry's Bar di Londra</span>, <span className='bold'>Four Seasons di Milano</span>.</p>
                    <p>Enrico Parassina ha partecipato a molti concorsi internazionali, vincendo 11 medaglie d'oro, 4 d'argento, 10 di bronzo.
                        Di grandissimo prestigio la medaglia d'oro della Coppa del Mondo del 1991 in Lussemburgo e ai Mondiali di Basilea, oltre alla medaglia d'oro con lode alle Olimpiadi di Francoforte del 1998.</p>
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

export default PasticceriaIT;