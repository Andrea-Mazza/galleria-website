
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Footer from '../components/Footer';

function StoriaIT() {
    return (
        <>
            <section id='history'>
                <div className='container'>
                    <div className='storia d-flex flex-column align-items-center'>
                        <div className='row justify-content-evenly gy-3'>
                            <div className='col-12 col-md-6 col-lg-4 d-flex justify-content-center align-items-center'>
                                <img className='img-fluid img-hovered' src={`${require('../images/ristorante-pizzeria-galleria-storia.jpeg')}`} alt='parte dello spazio interno del ristorante Galleria' />
                            </div>
                            <div className='text-center col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-evenly'>
                                <h2>La nostra storia</h2>
                                <p>
                                    Il Ristorante Galleria nacque il 4 Ottobre 1968 come piccolo bar nel cuore di Milano, dove ancora si trova oggi: un vero e proprio salotto della bella città, dove sostare durante una passeggiata tra le vie del centro.</p>
                                <p>Oggi Galleria è anche Ristorante e Pizzeria con forno a legna, l'unica in Galleria Vittorio Emanuele II a cuocere le pizze con questo metodo, tipicamente italiano.</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row justify-content-center justify-content-evenly gy-3'>
                            <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-evenly text-center'>
                                <h2>Il dehor in Galleria Vittorio Emanuele: <br /> il "salotto" nel cuore della città</h2>
                            </div>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <img className='img-fluid img-hovered' src={`${require('../images/ristorante-galleria-dehor-esterno.jpeg')}`} alt='spazio esterno del ristorante Galleria' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='testimonials'>
                <div className='container'>
                    <div className='row justify-content-center text-center gy-5'>
                        <h2>Gente di tutto il mondo parla di noi</h2>
                        <Carousel variant='dark' indicators={false}>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote cite='https://goo.gl/maps/BeJckP7CWUhU62BM7'>
                                            <p>The food, the service, and the ambiance were all impeccable. Fresh Italian ingredients turned into fantastically satisfying and flavorful dishes. The staff was professional and friendly and really accommodated us when we didn’t speak Italian.</p>
                                        </blockquote>
                                        <figcaption>
                                            Ziad Hariri, <br /> Fonte: <cite><a href='https://goo.gl/maps/BeJckP7CWUhU62BM7' target='_blank' rel="noreferrer">Google Maps</a></cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote>
                                            <p>This restaurant is one of the best spots to try Italian foods. Though it is in the middle of touristic spot, they had one of the best risotto I had in Milan.</p>
                                        </blockquote>
                                        <figcaption>
                                            jaghanivasan <br /> Fonte: <cite><a href='https://goo.gl/maps/yk2cUuBh7gU3HF6W9' target='_blank' rel="noreferrer">Google Maps</a></cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote>
                                            <p>Everything was top-notch, we were seated within a minute, they brought sweets and appetizers on the house for us.</p>
                                        </blockquote>
                                        <figcaption>
                                            Andrei Gorgan <br /> Fonte: <cite><a href='https://goo.gl/maps/Yvr5qfnmYEMv6xET9' target='_blank' rel='noreferrer'>Google Maps</a></cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote cite="https://goo.gl/maps/XyBsiTNTfRpbtrMw9">
                                            <p>Great place in the city center. The best pizza I ever had in my life. The crust is very thin so you taste the toppings very well. And the dessert!!!! Il baba al rum, delicious. Staff is also very friendly and professional.</p>
                                        </blockquote>
                                        <figcaption>Richard van Tol <br /> Fonte: <cite><a href='https://goo.gl/maps/XyBsiTNTfRpbtrMw9' target='_blank' rel='noreferrer'> Google Maps</a></cite></figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote cite='https://goo.gl/maps/K287Sfg3qQxkNvLk6'>
                                            <p>Great restaurant located in a beautiful place, in the heart of the Victor Emmanuel II Gallery.  The classic style of decor can be liked.  The service is nice, professional and very helpful.  Perfectly selected menu, everyone will find something for themselves.</p>
                                        </blockquote>
                                        <figcaption>Jakub Grzybowski <br /> Fonte: <cite><a href='https://goo.gl/maps/K287Sfg3qQxkNvLk6' target='_blank' rel='noreferrer'>Google Maps</a></cite></figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className='row justify-content-center text-center align-items-center'>
                                    <figure>
                                        <blockquote cite='https://goo.gl/maps/A8CCmHPtPtLsD65Q8'>
                                            <p>The Galleria Restaurant was great! The service, atmosphere and food was delicious. I couldn't have asked for a better ending to our tip to Milan. I definitely recommend stopping in and grabbing a bite to eat.</p>
                                        </blockquote>
                                        <figcaption>
                                            Brandon Baker <br /> Fonte: <cite><a href='https://goo.gl/maps/A8CCmHPtPtLsD65Q8' target='_blank' rel='noreferrer'>Google Maps</a></cite>
                                        </figcaption>
                                    </figure>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section id='scenario'>
                <div className='container text-center'>
                    <h2>L'esclusivo scenario di Piazza Duomo e Piazza della Scala - Milano</h2>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <p>Ristorante Galleria si trova a pochi passi da due edifici meravigliosi di Milano: il Duomo e il Teatro alla Scala.
                                La lussuosa cornice della Galleria Vittorio Emanuele II collega da una parte alla Piazza del Duomo, cattedrale della città e, al lato opposto, la Piazza della Scala, con il suo affascinante Teatro.</p>
                            <p>
                                Ogni sera Ristorante Galleria, ristorante storico in centro a Milano, è un punto di riferimento per il pre e dopo Scala: prima o dopo gli spettacoli teatrali in un ambiente scenografico e rilassante vi attende una cena raffinata e di qualità.
                            </p>
                            <p>
                                A due passi dal Duomo il Ristorante Galleria è un punto di riferimento anche durante il giorno: la caffetteria e pasticceria offrono una piacevole pausa durante lo shopping oppure per spezzare i ritmi frenetici del business milanese.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <Carousel>
                                <CarouselItem>
                                    <img className='img-fluid' src={`${require('../images/scala.jpeg')}`} alt='Foto che ritrae la Scala di Milano' />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className='img-fluid' src={`${require('../images/duomo.jpeg')}`} alt='Foto che ritrae il Duomo di Milano' />
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default StoriaIT;