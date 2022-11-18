
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { useState } from "react";
import CarouselItem from "react-bootstrap/esm/CarouselItem";
import Carousel from 'react-bootstrap/Carousel';
import Footer from "../components/Footer";

function PizzaIT() {

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

    return (
        <>
            <section id='pizza'>
                <Container>
                    <Row>
                        <Col lg={6} md={12} className='d-flex flex-column justify-content-evenly text-center'>
                            <h2>La Pizzeria</h2>
                            <p>Il Ristorante Galleria vanta delle pizze davvero speciali, perché preparate come vuole la migliore tradizione italiana: <span className='bold'>è l'unica pizzeria all'interno della Galleria Vittorio Emanuele II a cuocere ancora le <strong>pizze nel forno tradizionale a legna</strong></span>. Questo tipo di cottura prevede all'interno del forno la fiamma viva del fuoco e molta attenzione da parte del pizzaiolo esperto, che saprà decidere quando sfornarla per servirla al momento giusto.</p>
                            <p>Galleria propone un'ampia scelta di squisite pizze tipiche italiane, calzoni e focacce.</p>
                        </Col>
                        <Col lg={6} md={12}>
                            <Row className='gy-1'>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-start text-center'>
                                    <Button onClick={handleShow}>
                                        <img className='img-fluid' src={`${require('../images/pizza-1.jpeg')}`} alt='Primo piano di una pizza' />
                                    </Button>
                                    <Modal show={show} onHide={handleClose}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-1Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-2Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-3Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-4Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-5Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-6Big.jpeg')}`} alt='Tavolo apparecchiato con sopra una pizza' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-end text-center'>
                                    <Button onClick={handleShow2}>
                                        <img className='img-fluid' src={`${require('../images/pizza-2.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                    </Button>
                                    <Modal show={show2} onHide={handleClose2}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-2Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-3Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-4Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-5Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-6Big.jpeg')}`} alt='Tavolo apparecchiato con sopra una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-1Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={12} sm={6} className='d-lg-flex justify-content-center text-center'>
                                    <Button onClick={handleShow3}>
                                        <img className='img-fluid' src={`${require('../images/pizza-3.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                    </Button>
                                    <Modal show={show3} onHide={handleClose3}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-3Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-4Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-5Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-6Big.jpeg')}`} alt='Tavolo apparecchiato con sopra una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-1Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-2Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-start text-center'>
                                    <Button onClick={handleShow4}>
                                        <img className='img-fluid' src={`${require('../images/pizza-4.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                    </Button>
                                    <Modal show={show4} onHide={handleClose4}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-4Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-5Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-6Big.jpeg')}`} alt='Tavolo apparecchiato con sopra una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-1Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-2Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-3Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                            </Carousel>
                                        </Modal.Body>
                                    </Modal>
                                </Col>
                                <Col lg={6} sm={6} className='d-lg-flex justify-content-end text-center'>
                                    <Button onClick={handleShow5}>
                                        <img className='img-fluid' src={`${require('../images/pizza-5.jpeg')}`} alt='Un piatto di pesce' />
                                    </Button>
                                    <Modal show={show5} onHide={handleClose5}>
                                        <ModalHeader closeButton></ModalHeader>
                                        <Modal.Body>
                                            <Carousel>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-5Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-6Big.jpeg')}`} alt='Tavolo apparecchiato con sopra una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-1Big.jpeg')}`} alt='Primo piano di una pizza' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-2Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-3Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
                                                </CarouselItem>
                                                <CarouselItem>
                                                    <img className='img-fluid' src={`${require('../images/pizza-4Big.jpeg')}`} alt='Pizza di fronte ad un forno a legna' />
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
            <Container fluid className='overlay2 d-flex align-items-center'>
                <Container>
                    <h1>Pizza sempre <br />
                        fragrante</h1>
                </Container>
            </Container>
            <Footer />
        </>
    );
}

export default PizzaIT;