import React from "react";
import "./HomePage.scss";
// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

// Image imports
import headerLogo from "../../assets/header-logo.png";

// Video Imports
import bgMp4 from '../../assets/ezgif.com-gif-maker.mp4'
import bgWebM from '../../assets/ezgif.com-gif-maker.webm'

function HomePage(props) {
    return (
        <>
            <main className="homepage">
                <section className="header padding ">
                    <video id="bg-video" autoPlay loop muted playsInline>
                        <source src={bgWebM} type="video/webm" />
                        <source src={bgMp4} type="video/mp4" />
                    </video>
                    <div className="header__brand " id="tsparticles">
                        <h1 className="hidden-title">Wyvern Team</h1>
                        <img
                            src={headerLogo}
                            alt=""
                            className="header__brand__icon"
                        />
                        <p className="header__brand__description">
                       At Tefro, we are not just a software and design startup; we are architects of the digital future. Our team comprises brilliant engineers and super creative designers, united by a passion for crafting exceptional experiences. we specialize in web, mobile, UI/UX, blockchain, bot development, and the realms of AI and ML. At Tefro, innovation isn't just a buzzword; it's the heartbeat of everything we create.
                        </p>
                    </div>
                </section>

                {/* Wrapper for background */}
                <div className="wrapper-top">
                    {/* Stats Section */}

                    <section className="stats padding">
                        <div class="video-container">
                            <iframe
                                class="video-iframe"
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Rick Roll"
                                frameborder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="stats__container">
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={100}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                    Unique Clients
                                </p>
                            </div>
                            <div className="stats__container__border"></div>
                            <div className="stats__container__item">
                                <h2 className="stats__container__item__counter">
                                    <Ticker
                                        end={500}
                                        duration={1}
                                        suffix=" +"
                                    />
                                </h2>
                                <p className="stats__container__item__description">
                                   Projects
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Services Section */}
                    <section className="services padding">
                        <h2 className="services__heading">OUR SERVICES</h2>
                        <div className="services__container">
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./web development.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Web Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                  We create performant and stunning websites.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./plugin.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Cross Platform App Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                   We create mobile applications that run seamlessly on Android and IOS.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft configuration.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                      Blockchain 
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    We specialize in developing DApps that run seamlessly across various blockchain networks, including Solana, Ethereum, ICP, and more.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./Discord Bot.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Discord Bot Development
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    We specialize in crafting intelligent and interactive Discord bots tailored to enhance engagement, moderation, and overall functionality for your server.
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                        Design
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    At Tefro, we design digital experiences that are both beautiful and easy to use. Our UI/UX experts create interfaces that captivate and simplify, ensuring a seamless and enjoyable user interaction
                                    </p>
                                </div>
                            </div>
                            <div className="services__container__item card-hover">
                                <div className="services__container__item__illustration">
                                    <img
                                        src="./minecraft design.png"
                                        alt=""
                                        className="services__container__item__illustration__image"
                                    />
                                </div>
                                <div className="services__container__item__description">
                                    <h3 className="services__container__item__description__heading">
                                     AI and Machine Learning
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    We harness the power of AI and machine learning to transform data into insights and innovation. Our expert team pioneers intelligent solutions, unlocking new possibilities for your business through cutting-edge technology
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                <section className="features padding">
                    <h2 className="features__heading">OUR CORE VALUES</h2>
                    <div className="features__container">
                        <div className="features__container__item card-hover">
                            <img
                                src="./quality.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Quality
                            </h3>
                            <p className="features__container__item__details">
                            Quality isn't just a standard; it's the cornerstone of everything we do.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./AFFORDABLE.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Affordable
                            </h3>
                            <p className="features__container__item__details">
                            Providing high-quality solutions without breaking the bank.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="./EFFICIENT.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Efficient
                            </h3>
                            <p className="features__container__item__details">
                            Streamlining processes for optimal performance.
                            </p>
                        </div>
                        <div className="features__container__item card-hover">
                            <img
                                src="PROFESSIONAL.png"
                                alt=""
                                className="features__container__item__icon"
                            />
                            <h3 className="features__container__item__heading">
                                Professional
                            </h3>
                            <p className="features__container__item__details">
                            From communication to execution, we uphold the highest standards, ensuring a collaborative and efficient experience at every step.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="reviews padding">
                    <h2 className="reviews__heading">OUR REVIEWS</h2>

                    <div className="reviews__carousel">
                        <img
                            src="./btn-prev.png"
                            alt="btn-prev"
                            className="prev"
                        />
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            slidesPerGroup={1}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={{
                                nextEl: ".next",
                                prevEl: ".prev",
                            }}
                            modules={[Navigation]}
                            className="mySwiper"
                            breakpoints={{
                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    Tefro's Discord bot transformed the way we manage our game animation startup team. Efficient, reliable, and tailored to our needs, it's a game-changer for seamless communication and task coordination. 
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                    Ascii Dave
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    Tefro's web scraper SaaS has been a game-changer for my data-driven projects. Efficient lead generation and streamlined data access are now at the core of my ML model training. Tefro delivered a tailored solution that exceeded my expectations. Grateful for the impact on my workflow!
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                       John Mukundi
                                    </h2>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                {" "}
                                <div className="reviews__carousel__item">
                                    <div className="reviews__carousel__item__stars">
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                        <img
                                            src="./star.png"
                                            alt=""
                                            className="reviews__carousel__item__stars__star"
                                        />
                                    </div>
                                    <p className="reviews__carousel__item__details">
                                    Tefro's fashion design software with ML algorithms has revolutionized my creative process. The innovative suggestions and intuitive features have become indispensable for my design work. Working with Tefro was not just a collaboration; it was a leap forward in pushing the boundaries of fashion creativity.
                                    </p>
                                    <h2 className="reviews__carousel__item__name">
                                      Christian Kavua
                                    </h2>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                        <img src="./btn-next.png" alt="" className="next" />
                    </div>
                    <a
                        href="mailto:info@tefro.tech"
                        target="_blank"
                        className="btn btn-primary"
                    >
                        Send us an Email
                    </a>
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
