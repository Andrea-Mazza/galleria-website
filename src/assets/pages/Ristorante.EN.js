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

function RistoranteEN() {
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
                                The Restaurant
                            </h2>
                            <p>The Gallery Restaurant is one of the most prestigious restaurants in the historic city of Milan, both for the unique position where it is located (a short walk from the Duomo, La Scala and San Babila), both for the quality and elegance that offers.</p>
                            <p>The inviting dining room and a nice outdoor area to accommodate passersby all day, all year round, offering delicious Italian dishes and pizzas cooked in the oven for lunch or dinner, coffee and excellent for a gentle stop.
                                The menu of Gallery Restaurant there are the Italian and traditional dishes typical of Milan: ossobuco with risotto, Milanese Cotoletta, Risotto Milanese and the other most famous traditional dishes of Milan.
                                Also every day Gallery Restaurant offers fresh seafood: seafood salad, octopus salad, lobster, sole, sea bass, and the typical flavors of Mediterranean cuisine without neglecting the authenticity and quality of the products bought daily.</p>
                            <p>This kindness of the Gallery Restaurant are a very special place in which to relax and linger to observe the fervor of the city and the people who live there.</p>
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
                    <h1>Exclusive in Milan <br />
                        since 4 October 1968</h1>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default RistoranteEN;