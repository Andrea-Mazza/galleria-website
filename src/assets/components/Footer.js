import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";

function Footer() {
    return (
        <>
            <footer>
                <Container>
                    <Row className='gy-2'>
                        <Col lg={6} md={12}>
                            <p>P.IVA 03453490157, Galleria Vittorio Emanuele II, 75 - 20121 Milano (MI) T. <a href='tel:+390286464912'>+39 02 86464912</a> | <a href='mailto:info@ristorantegalleria.it'>info@ristorantegalleria.it</a></p>
                        </Col>
                        <Col lg={6} md={12}>
                            <p className='credits'>Developed by <a href='https://www.freeattitude.net/' target='_blank' rel="noreferrer">FreeAttitude</a></p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    );
}

export default Footer;