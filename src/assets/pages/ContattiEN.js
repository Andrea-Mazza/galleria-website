import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from "../components/Footer";

function ContattiEN() {

    return (
        <>
            <section id='contatti'>
                <Container className='text-center contatti-container'>
                    <h2>Contacts</h2>
                    <p>The Ristorante Galleria is open <span className="bold">every day of the year</span> (except the 25th of December),
                        <span className='bold'>from 10.00 a.m. to 00.30 p.m</span>.
                        The Ristorante Galleria is always open after evening shows of the Teatro alla Scala.
                    </p>
                    <Row className='gy-5'>
                        <Col lg={6} md={12}>
                            <iframe title='video' id='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.185790219822!2d9.187730615476418!3d45.46606117910096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6ae786cc08d%3A0xe5480b103c7b561e!2sGalleria%20Restaurant!5e0!3m2!1sen!2sit!4v1668685129778!5m2!1sen!2sit" width="100%" height="350" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Col>
                        <Col lg={6} md={12} className='d-flex flex-column justify-content-evenly'>
                            <p>For reservations or information, please call <a className='link bold' href='tel:+390286464912'>+39 02 86464912</a> or send an email to <a className='link bold' href='mailto:info@ristorantegalleria.it'>info@ristorantegalleria.it</a>.
                                We will be happy to answer any question.</p>
                            <p>
                                Galleria Vittorio Emanuele II, 75 - 20121
                            </p>
                            <p className="bold">How to reach us</p>
                            <p>Metro MM1 (red line) - Duomo Stop</p>
                            <p>Metro MM3 (yellow line) - Duomo Stop</p>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    );
}

export default ContattiEN;