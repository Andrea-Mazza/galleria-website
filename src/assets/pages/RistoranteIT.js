import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useState } from "react";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/Footer";

function RistoranteIT() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    return (
        <>
            <section id='ristorante'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} className='d-flex flex-column justify-content-evenly text-center'>
                            <h2>
                                Il Ristorante
                            </h2>
                            <p>Il Ristorante Galleria è uno dei ristoranti storici più prestigiosi della città di Milano, sia per la posizione unica in cui si trova (a due passi da Piazza del Duomo e dal Teatro alla Scala), sia per la qualità e l'eleganza che offre.</p>
                            <p>Un'accogliente sala interna e un grazioso déhors ospitano i passanti a ogni ora del giorno, offrendo prelibati piatti tipici italiani e fragranti pizze cotte nel forno a legna, per un pranzo o una cena di qualità.
                                Nel menù di Ristorante Galleria ci sono i piatti tradizionali italiani e tipici della città meneghina: ossobuco con il risotto, costoletta alla milanese, risotto alla milanese e gli altri piatti più famosi della tradizione di Milano.
                                Inoltre ogni giorno Ristorante Galleria offre ai suoi clienti pesce freschissimo: insalata di mare, insalata di piovra, astice, sogliola, branzino e i sapori tipici della cucina Mediterranea senza mai tralasciare la genuinità e la qualità dei prodotti acquistati giornalmente.</p>
                            <p>Questo e tanta gentilezza fanno del Ristorante Galleria un luogo davvero speciale in cui soffermarsi per rilassarsi e osservare il fervore della città e della gente che la vive.</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <Row className='gy-1'>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-start text-center'>
                                    <Button onClick={handleShow}>
                                        <img className='img-fluid' src={`${require('../images/fish.jpeg')}`} alt='Un piatto di pesce' />
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-end text-center'>
                                    <Button onClick={handleShow2}>
                                        <img className='img-fluid' src={`${require('../images/fish-2.jpeg')}`} alt='Un piatto di pesce' />
                                    </Button>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={12} sm={6} className='d-lg-flex justify-content-center text-center'>
                                    <Button onClick={handleShow3}>
                                        <img className='img-fluid' src={`${require('../images/wine.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                    </Button>
                                    <Modal show={show3} onHide={handleClose3}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-start text-center'>
                                    <Button onClick={handleShow4}>
                                        <img className='img-fluid' src={`${require('../images/intern-1.jpeg')}`} alt='Interno del ristorante Galleria' />
                                    </Button>
                                    <Modal show={show4} onHide={handleClose4}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-end text-center'>
                                    <Button onClick={handleShow5}>
                                        <img className='img-fluid' src={`${require('../images/intern-2.jpeg')}`} alt='Interno del ristorante Galleria' />
                                    </Button>
                                    <Modal show={show5} onHide={handleClose5}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={12} sm={6} className='d-lg-flex justify-content-center text-center'>
                                    <Button onClick={handleShow6}>
                                        <img className='img-fluid' src={`${require('../images/intern-3.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                    </Button>
                                    <Modal show={show6} onHide={handleClose6}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel variant="dark">
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-3Big.jpeg')}`} alt='Sala interna del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fishBig.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/fish-2Big.jpeg')}`} alt='Un piatto di pesce' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/wineBig.jpeg')}`} alt='Un insieme di bottiglie di vino' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/intern-1Big.jpeg')}`} alt='Interno del ristorante Galleria' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/piattoBig.jpeg')}`} alt='Primo piano di un piatto a base di funghi e pesce' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container fluid className='overlay d-flex align-items-center'>
                <Container>
                    <h1>Esclusivo a Milano <br />
                        dal 4 Ottobre 1968</h1>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default RistoranteIT;