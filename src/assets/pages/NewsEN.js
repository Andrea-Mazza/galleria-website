import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from "react-bootstrap/CardImg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function NewsEN() {
    const [showA, setShowA] = useState(false);

    const handleCloseA = () => setShowA(false);
    const handleShowA = () => setShowA(true);

    const [showB, setShowB] = useState(false);

    const handleCloseB = () => setShowB(false);
    const handleShowB = () => setShowB(true);

    return (
        <>
            <section id='news'>
                <Container>
                    <Row className="align-items-center justify-content-center gy-5 gx-5 w-100 m-0">
                        <Col lg={6} md={12} className='d-flex flex-row justify-content-center'>
                            <div className='card-news'>
                                <div className='card-image'>
                                    <img className='img-fluid' src={`${require('../images/news-2.jpeg')}`} />
                                </div>
                                <div className='card-testo'>
                                    <p> Ristorante Galleria wins the prestigious 'Historic and traditional establishment' award from the Lombardy Region</p>
                                    <Button onClick={handleShowA}>Read more</Button>
                                </div>
                            </div>
                            <Modal show={showA} onHide={handleCloseA}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='news-1 text-center'>
                                        <p>Ristorante Galleria was awarded the prestigious distinction of 'Historic and traditional shop sign', thus entering the <a className='link bold' href='http://www.regione.lombardia.it/wps/wcm/connect/16e3046a-05fb-499a-aaec-2fdb731261ec/Elenco+shops+historic_1601+updated+to+13+feb+2018.pdf?MOD=AJPERES&CACHEID=16e3046a-05fb-499a-aaec-2fdb731261ec' target='_blank' rel='noreferrer'>Register of historic business locations in Lombardy</a>.</p>
                                        <p>The regional list encompasses a variety of small and large companies that tell of the ability to renew themselves, the constant commitment, the courage to face the difficulties of the changing times, of many Lombards, in the most diverse realities of our region.</p>
                                        <p>Proud of this recognition and of being, since 4 October 1968, in the heart of Milan, the Galleria Vittorio Emanuele II: a resting place for tourists and ordinary Milanese alike, it has witnessed the historical events and passages of so many protagonists of the cultural and artistic life of the capital.</p>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                        <Col lg={6} md={12} className='d-flex flex-row justify-content-center'>
                            <div className='card-news'>
                                <div className='card-image'>
                                    <img className='img-fluid' src={`${require('../images/news-1.jpeg')}`} />
                                </div>
                                <div className='card-testo'>
                                    <p>Galleria, a recipe for success: the book for the 50th anniversary of Caffè Ristorante Galleria</p>
                                    <Button onClick={handleShowB}>Read more</Button>
                                </div>
                            </div>
                            <Modal show={showB} onHide={handleCloseB}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='news-2 text-center'>
                                        <p>The book, published by Skira, is the story of the last fifty years of the Galli family and at the same time the tale of an era and a way of being Milan.
                                            "Galleria, la ricetta di un successo", edited by Maria Canella and Gabriella Passerini, Lorenzo Anfossi, introduction by Andrea Kerbaker.</p>
                                        <p>'The Galleria restaurant bears the name of the symbolic place where it has been located for fifty years and practices its genius loci every day,' writes Carluccio Sangalli, president of the Milanese traders in the preface.</p>
                                        <a className='link bold' href="https://www.amazon.it/ricetta-successo-Galleria-success-illustrata/dp/8857236927/ref=sr_1_1?s=books&ie=UTF8&qid=1519835994&sr=8-1&keywords=skira+la+ricetta+di+un+successo" target='_blank' rel="noreferrer">Purchase the book</a>
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default NewsEN;