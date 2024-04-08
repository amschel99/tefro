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
                        <p className="header__brand__description" >
                        Tefro is a blockchain startup at the forefront of data security. We specialize in researching and developing cutting-edge cryptographic algorithms, particularly those resistant to future quantum computers. Our mission is to empower organizations to safeguard their sensitive data using these post-quantum cryptography methods.

We are also pioneering the development of decentralized AI with end-to-end encryption. This enables training models directly on the blockchain, ensuring the transparency and security of training data while keeping it encrypted. Additionally, Tefro is revolutionizing asset management through tokenization, essentially tokenizing the economy through lines of code.
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
                                src="https://www.youtube.com/embed/xh3OuuCQwGg?si=GfKCn1J_NwsgIo9U"
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
                        <h2 className="services__heading">Solutions</h2>
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
                                    Post-quantum cryptography
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Post-quantum cryptography (PQC) is crucial because it addresses a looming threat to current encryption methods posed by quantum computers. Here's a breakdown:

Why PQC is Important:

    Quantum Threat: Traditional encryption relies on mathematical problems that are difficult for classical computers to solve (e.g., factoring large numbers). However, quantum computers leverage the principles of quantum mechanics to perform these calculations significantly faster. This means they could potentially crack widely used encryption algorithms in the future.
    Future-Proofing Data: PQC algorithms are designed to be resistant to attacks from both classical and quantum computers. By adopting PQC now, organizations can ensure their data remains secure even when quantum computers become more powerful.
    Long-Term Security: Data can be sensitive for years, even decades. Encrypting it with PQC methods now guarantees its confidentiality even in the quantum computing age.



PQC doesn't eliminate all threats, but it strengthens the foundation of encryption in a world where quantum computers might break current methods.                </p>
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
                                   Decentralized AI
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    The reason decentralized AI is crucial lies in its ability to address the inherent limitations of centralized AI models, particularly regarding data security, transparency, and collaboration.  

 Traditional centralized AI models concentrate vast quantities of training data in a single location, creating a prime target for attackers. Decentralized AI distributes this data across a network, making it significantly harder to compromise. Additionally, end-to-end encryption safeguards user data even while it contributes to the model's training, further bolstering privacy. 

 Centralized AI can often be shrouded in secrecy, raising concerns about bias and fairness in decision-making. Decentralized AI fosters transparency by distributing the model and its training data across a network. This allows for greater scrutiny and public trust in the AI's outputs. 

Decentralized AI enables multiple organizations to contribute data and expertise to a shared AI model without relinquishing control over their sensitive information. This collaborative approach can lead to the development of richer, more diverse datasets, ultimately improving the model's accuracy and generalizability.

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
                              Asset Tokenization
                                    </h3>
                                    <p className="services__container__item__description__details">
                                    Asset tokenization, particularly for traditionally illiquid assets like shares, unlocks new levels of liquidity, efficiency, and security by enabling fractional ownership, facilitating 24/7 trading on global marketplaces, and leveraging blockchain technology for automated settlements, reduced transaction costs, and tamper-proof records of ownership.  This is exactly what Quillo, our platform built by Tefro, empowers startups to achieve.  Quillo allows them to raise funds by tokenizing their assets and ownership, democratizing access to capital and fostering innovation. 
                                    
                                    You can check out Quillo at <a style={{color:"white"}} href="https://quillo.tefro.tech" target="_blank"> quillo.tefro.tech.</a>
                                    </p>
                                </div>
                            </div>
                       
                          
                           
                            
                        </div>
                    </section>
                </div>

                {/* Features Section */}
                {/* <section className="features padding">
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
                </section> */}

                {/* Reviews Section */}
                <section className="reviews padding">
                    {/* <h2 className="reviews__heading">OUR REVIEWS</h2> */}
{/* 
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
                    </div> */}
                    <form action="https://formsubmit.co/kariukiamschel9@gmail.com" method="POST" style={{

                        display:"flex",
                        flexDirection:"column",
                        width:"100%",
                        alignItems:"center",
                        marginTop:"50px",
                        justifyContent:"space-evenly"
                    }}>
                          <h2 className="reviews__carousel__item__name" style={{fontWeight:"bold", fontSize:"26px"}}>
                                     Contact Us
                                    </h2>
                                    <input type="hidden" name="_cc" value="art68401@gmail.com,6290.2020@students.ku.ac.ke"></input>
                                    <input type="hidden" name="_captcha" value="false"></input>
     <input  placeholder="Name" 
     style={{
        height: "40px",
        width: "70vw",
        borderRadius: "10px",
        outline: "none",
        border: "2px solid #00f2b6",
        color: "#00f2b6",
        fontSize: "16px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginBlock: "10px",
        resize: "none",  // Disable textarea resizing
        padding: "10px", // Add padding for text margin from the border
      }}
     type="text" name="name" required/>
     <input 
     placeholder="Email"
      style={{
        height: "40px",
        width: "70vw",
        borderRadius: "10px",
        outline: "none",
        border: "2px solid #00f2b6",
        color: "#00f2b6",
        fontSize: "16px",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        marginBlock: "10px",
        resize: "none",  // Disable textarea resizing
        padding: "10px", // Add padding for text margin from the border
      }}
     type="email" name="email" required/>
     <textarea
     placeholder="Message"
  style={{
    height: "100px",
    width: "70vw",
    borderRadius: "10px",
    outline: "none",
    border: "2px solid #00f2b6",
    color: "#00f2b6",
    fontSize: "16px",
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBlock: "10px",
    resize: "none",  // Disable textarea resizing
    padding: "10px", // Add padding for text margin from the border
  }}
  name="message"
  required
/>
<input type="hidden" name="_next" value="https://tefro.tech/success"></input>

     <button  style={{cursor:"pointer"}}  className="btn btn-primary"  type="submit">Send</button>
</form>
                
                </section>
            </main>
        </>
    );
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
