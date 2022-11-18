import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../components/Footer';

function HomeIT() {
    return (
        <>
            <section id="home">
                <Container className='text-center'>
                    <Row className='gy-5'>
                        <Col lg={4} sm={6} className='d-flex align-items-center justify-content-center'>
                            <div className='home-card'>
                                <img className='img-fluid' src={`${require('../images/home-1.jpeg')}`} />
                                <div className='caption d-flex flex-column align-items-center'>
                                    <h2>Ristorante</h2>
                                    <a className='home-btn' href='/ristorante'>Entra</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='d-flex align-items-center justify-content-center'>
                            <div className='home-card'>
                                <img className='img-fluid' src={`${require('../images/home-2.jpeg')}`} />
                                <div className='caption d-flex flex-column align-items-center'>
                                    <h2>Pizza</h2>
                                    <a className='home-btn' href='/pizza'>Entra</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='d-flex align-items-center justify-content-center'>
                            <div className='home-card'>
                                <img className='img-fluid' src={`${require('../images/home-3.jpeg')}`} />
                                <div className='caption d-flex flex-column align-items-center'>
                                    <h2>Pasticceria</h2>
                                    <a className='home-btn' href='/pasticceria'>Entra</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <h2 className='section-title'>Ristorante Galleria: una raffinatezza milanese</h2>
                    <p>L'elegante Ristorante Galleria trova le sue origini all'interno della storica Galleria Vittorio Emanuele II a Milano, cinquant'anni fa ed è di proprietà della famiglia Galli dal 1983.</p>
                    <p>
                        Le sale interne, dagli arredi perfettamente in sintonia con la classe e lo stile della Galleria Vittorio Emanuele II, e il pittoresco déhors ospitano Milanesi e viaggiatori tutti i giorni dell'anno,
                        che sia per un prelibato pranzo o per una raffinata cena.
                    </p>
                </Container>
            </section>
            <Container fluid className='overlay4 d-flex align-items-center'>
            </Container>
            <Footer />
        </>
    );
}

export default HomeIT;