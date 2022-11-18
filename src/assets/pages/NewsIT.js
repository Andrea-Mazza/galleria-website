import Footer from "../components/Footer";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardImg from "react-bootstrap/CardImg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

function NewsIT() {
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
                    <Row className="align-items-center justify-content-center gx-5 gy-5 w-100 m-0">
                        <Col lg={6} md={12} className='d-flex flex-row justify-content-center'>
                            <div className='card-news'>
                                <div className='card-image'>
                                    <img className='img-fluid' src={`${require('../images/news-2.jpeg')}`} />
                                </div>
                                <div className='card-testo'>
                                    <p> Ristorante Galleria si aggiudica il prestigiosissimo riconoscimento di “Insegna storica e di tradizione” della Regione Lombardia</p>
                                    <Button onClick={handleShowA}>Scopri di più</Button>
                                </div>
                            </div>
                            <Modal show={showA} onHide={handleCloseA}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='news-1 text-center'>
                                        <p>Ristorante Galleria ha ottenuto il prestigioso riconoscimento di “Insegna storica e di tradizione” entrando così nel <a className='link bold' href='http://www.regione.lombardia.it/wps/wcm/connect/16e3046a-05fb-499a-aaec-2fdb731261ec/Elenco+negozi+storici_1601+aggiornati+al+13+feb+2018.pdf?MOD=AJPERES&CACHEID=16e3046a-05fb-499a-aaec-2fdb731261ec' target='_blank' rel="noreferrer">Registro regionale dei luoghi storici del commercio lombardo</a>.</p>
                                        <p>L’elenco regionale racchiude una varietà di piccole e grandi imprese che raccontano le capacità di rinnovarsi, l’impegno costante, il coraggio nell’affrontare le difficoltà dei tempi che cambiano, di tanti lombardi, nelle realtà più disparate della nostra regione.</p>
                                        <p>Orgogliosi di questo riconoscimento e di essere, dal 4 ottobre 1968, nel cuore di Milano, la Galleria Vittorio Emanuele II: luogo di sosta per turisti e milanesi comuni, è stato testimone delle vicende storiche e dei passaggi di tanti protagonisti della vita culturale e artistica del capoluogo.</p>
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
                                    <p> Galleria, la ricetta di un successo: il libro per i cinquant’anni del Caffè Ristorante Galleria</p>
                                    <Button onClick={handleShowB}>Scopri di più</Button>
                                </div>
                            </div>
                            <Modal show={showB} onHide={handleCloseB}>
                                <Modal.Header closeButton></Modal.Header>
                                <Modal.Body>
                                    <div className='news-2 text-center'>
                                        <p>Il libro, edito da Skira, è la storia degli ultimi cinquant’anni della famiglia Galli e allo stesso tempo il racconto di un’epoca e di un modo di essere Milano.
                                            “Galleria, la ricetta di un successo”, a cura di Maria Canella e Gabriella Passerini, Lorenzo Anfossi, introduzione di Andrea Kerbaker.</p>
                                        <p>“Il ristorante Galleria porta il nome del luogo simbolo in cui si trova da cinquant’anni e ne pratica ogni giorno il genius loci”, scrive Carluccio Sangalli, presidente dei commercianti milanesi nella prefazione.</p>
                                        <a className='link bold' href="https://www.amazon.it/ricetta-successo-Galleria-success-illustrata/dp/8857236927/ref=sr_1_1?s=books&ie=UTF8&qid=1519835994&sr=8-1&keywords=skira+la+ricetta+di+un+successo" target='_blank' rel="noreferrer">Acquista il libro</a>
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

export default NewsIT;