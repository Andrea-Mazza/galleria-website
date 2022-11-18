
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/esm/CarouselItem';
import Footer from '../components/Footer';

function StoriaEN() {
    return (
        <>
            <section id='history'>
                <div className='container'>
                    <div className='storia'>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-md-6 col-lg-4'>
                                <img className='img-fluid img-hovered' src={`${require('../images/ristorante-pizzeria-galleria-storia.jpeg')}`} alt='parte dello spazio interno del ristorante Galleria' />
                            </div>
                            <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-evenly'>
                                <h2>History</h2>
                                <p>
                                    The Gallery Restaurant was born on October 4, 1968 as a small bar in the heart of Milan, where he still is today: a real living room of the beautiful city, where you can stop during a walk through the streets of downtown.</p>
                                <p>Today Gallery is also a restaurant and pizzeria with a wood oven, the only one in the Galleria Vittorio Emanuele II to bake pizzas with this method, typically Italian.</p>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-evenly text-center'>
                                <h2>The dehor in Galleria Vittorio Emanuele: <br /> the 'living room' in the heart of the city.</h2>
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
                        <h2>People from all over the world talk about us</h2>
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
                    <h2>The exclusive scenery of Piazza Duomo and Piazza della Scala - Milan</h2>
                    <div className='row align-items-center'>
                        <div className='col-lg-6 col-md-12'>
                            <p>Ristorante Galleria is just a few steps away from two of Milan's marvellous buildings: the Duomo and La Scala Theatre.
                                The luxurious setting of the Galleria Vittorio Emanuele II connects on one side the Piazza del Duomo, the city's cathedral, and on the opposite side the Piazza della Scala, with its fascinating theatre.</p>
                            <p>
                                Every evening Ristorante Galleria, a historic restaurant in the centre of Milan, is a reference point for pre and post La Scala: before or after theatre performances in a scenic and relaxing setting, a refined and quality dinner awaits you.
                            </p>
                            <p>
                                A stone's throw from the Duomo, Ristorante Galleria is also a landmark during the day: the café and patisserie offer a pleasant break while shopping or to break the hectic pace of Milanese business.
                            </p>
                        </div>
                        <div className='col-lg-6 col-md-12'>
                            <Carousel>
                                <CarouselItem>
                                    <img className='img-fluid' src={`${require('../images/scala.jpeg')}`} alt='Foto che ritrae la Scala di Milano' />
                                </CarouselItem>
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

export default StoriaEN;