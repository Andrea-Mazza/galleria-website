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
                                    <h2>Restaurant</h2>
                                    <a className='home-btn' href='/ristorante'>Find out more</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='d-flex align-items-center justify-content-center'>
                            <div className='home-card'>
                                <img className='img-fluid' src={`${require('../images/home-2.jpeg')}`} />
                                <div className='caption d-flex flex-column align-items-center'>
                                    <h2>Pizza</h2>
                                    <a className='home-btn' href='/pizza'>Find out more</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} sm={6} className='d-flex align-items-center justify-content-center'>
                            <div className='home-card'>
                                <img className='img-fluid' src={`${require('../images/home-3.jpeg')}`} />
                                <div className='caption d-flex flex-column align-items-center'>
                                    <h2>Pastry</h2>
                                    <a className='home-btn' href='/pasticceria'>Find out more</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <h2 className='section-title'>Ristorante Galleria: a Milanese refinement</h2>
                    <p>The elegant restaurant Gallery finds its origins inside the historic Galleria Vittorio Emanuele II in Milan, fifty years ago and is owned by the Galli family since 1983.</p>
                    <p>The interior rooms, the furniture in perfect harmony with the charm and style of the Galleria Vittorio Emanuele II, and the picturesque outdoor area hosting Milanesi and travelers every day of the year, it's for a delicious lunch or a fine dinner.</p>
                </Container>
            </section>
            <Container fluid className='overlay4 d-flex align-items-center'>
            </Container>
            <Footer />
        </>
    );
}

export default HomeIT;