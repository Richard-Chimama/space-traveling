import '../view/app.css';
import '../view/designSystem.css';

import featuredImage from "../assets/destination/image-moon.webp";
import featuredImage1 from "../assets/destination/image-moon.png";
import imageEuropa from "../assets/destination/image-europa.webp";
import imageEuropa1 from "../assets/destination/image-europa.png";
import imageMars from "../assets/destination/image-mars.webp";
import imageMars1 from "../assets/destination/image-mars.png";
import imageTitan from "../assets/destination/image-titan.webp";
import imageTitan1 from "../assets/destination/image-titan.png";
import logo from "../assets/shared/logo.svg";


function destinationMoon(){
    return(
        <div className="destination" style={{minHeight:"100vh"}}>
            <a className="skip-to-content" href="#main">Skip to main content</a>
            <header className="primary-header flex">
                <div>
                    <img src={logo} alt="space tourism logo" className="logo" />
                </div>
                <button id="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
                <nav>
                    <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex ">
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/"><span aria-hidden="true">00</span> Home</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="active "><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="destination-moon"><span aria-hidden="true">01</span> Destination</a></li>
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="crew-commander"><span aria-hidden="true">02</span> Crew</a></li>
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/technology"><span aria-hidden="true">03</span> Technology</a></li>
                    </ul>
                </nav>
                {/** ::after */}
            </header>
            <main id="main" className="gird-container grid-container--destination flow" style={{paddingBottom: "4rem"}}> 
    
                    <h1 className="numbered-title text-white ff-serif uppercase"><span aria-hidden="true">01</span>Pick your destination</h1>
                    {/* eslint-disable-next-line */}
                    <picture style={{display:"block"}} id="moon-image"> 
                        <source srcSet={featuredImage} type="image/webp" />
                        <img src={featuredImage1} alt="the moon" className="featuredImage"/>
                    </picture>
                    {/* eslint-disable-next-line */}
                    <picture style={{display:"none"}} id="europa-image"> 
                        <source srcSet={imageEuropa1} type="image/webp" />
                        <img src={imageEuropa} alt="the europa" className="featuredImage"/>
                    </picture>
                    {/* eslint-disable-next-line */}
                    <picture style={{display:"none"}} id="mars-image">
                        <source srcSet={imageMars} type="image/webp" />
                        <img src={imageMars1} alt="the mars" className="featuredImage"/>
                    </picture>
                    {/* eslint-disable-next-line */}
                    <picture style={{display:"none"}} id="titan-image">
                        <source srcSet={imageTitan} type="image/webp" />
                        <img src={imageTitan1} alt="the titan" className="featuredImage"/>
                    </picture>
                
                    <div role="tablist" className="tab-list underline-indicators flex">
                        {/* eslint-disable-next-line */}
                        <button role="tab" aria-selected={true} aria-controls="moon-tab" tabIndex="0" data-image="moon-image" className="uppercase text-white bg-dark letter-spacing-2" >Moon</button>
                        {/* eslint-disable-next-line */}
                        <button role="tab" aria-selected={false} aria-controls="mars-tab" tabIndex="-1" data-image="mars-image" className="uppercase text-accent bg-dark letter-spacing-2" >Mars</button>
                        {/* eslint-disable-next-line */}
                        <button role="tab" aria-selected={false} tabIndex="-1" aria-controls="europa-tab" data-image="europa-image"  className="uppercase text-accent bg-dark letter-spacing-2" >Europa</button> 
                        {/* eslint-disable-next-line */}
                        <button role="tab" aria-selected={false} tabIndex="-1" aria-controls="titan-tab" data-image="titan-image"  className="uppercase text-accent bg-dark letter-spacing-2" >Titan</button>   
                    </div>

                    <article id="moon-tab" className="destination-info flow" tabIndex="0" role="tabpanel">
                        <h2 className="fs-800 uppercase ff-serif">Moon</h2>
                        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
                        regain perspective and come back refreshed. While you’re there, take in some history 
                        by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        <div className="destination-meta flex">
                            <div>  
                                <h3 className="text-accent fs-200 uppercase" >Avg. distance</h3>
                                <p className="ff-serif uppercase">384,400 km</p>
                                </div>
                                <div>
                                <h3 className="text-accent fs-200 uppercase" >Est. travel time</h3>
                                <p className="ff-serif uppercase">3 days</p>
                            </div> 
                        </div>
                    </article>

                    {/* destination europa */}
                    <article  id="europa-tab" className="destination-info flow" tabIndex="-1" role="tabpanel" hidden>
                        <h2 className="fs-800 uppercase ff-serif">Europa</h2>
                        <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
                            winter lover’s dream. With an icy surface, it’s perfect for a bit of 
                            ice skating, curling, hockey, or simple relaxation in your snug 
                            wintery cabin.</p>
                        <div className="destination-meta flex">
                            <div>  
                                <h3 className="text-accent fs-200 uppercase" >Avg. distance</h3>
                                <p className="ff-serif uppercase"> 628 mil. km</p>
                                </div>
                                <div>
                                <h3 className="text-accent fs-200 uppercase" >Est. travel time</h3>
                                <p className="ff-serif uppercase">3 days</p>
                            </div> 
                        </div>
                    </article>

                    {/* destination mars */}
                    <article id="mars-tab" className="destination-info flow" tabIndex="-1" role="tabpanel" hidden>
                        <h2 className="fs-800 uppercase ff-serif">Mars</h2>
                        <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, 
                        the tallest planetary mountain in our solar system. It’s two and a half times 
                        the size of Everest!</p>
                        <div className="destination-meta flex">
                            <div>  
                                <h3 className="text-accent fs-200 uppercase" >Avg. distance</h3>
                                <p className="ff-serif uppercase"> 225 mil. km</p>
                                </div>
                                <div>
                                <h3 className="text-accent fs-200 uppercase" >Est. travel time</h3>
                                <p className="ff-serif uppercase">9 months</p>
                            </div> 
                        </div>
                    </article>

                    {/* destination titan */}
                    <article id="titan-tab" className="destination-info flow" tabIndex="-1" role="tabpanel" hidden>
                        <h2 className="fs-800 uppercase ff-serif">Titan</h2>
                        <p> The only moon known to have a dense atmosphere other than Earth, Titan 
                            is a home away from home (just a few hundred degrees colder!). As a 
                            bonus, you get striking views of the Rings of Saturn.</p>
                        <div className="destination-meta flex">
                            <div>  
                                <h3 className="text-accent fs-200 uppercase" >Avg. distance</h3>
                                <p className="ff-serif uppercase"> 1.6 bil. km</p>
                                </div>
                                <div>
                                <h3 className="text-accent fs-200 uppercase" >Est. travel time</h3>
                                <p className="ff-serif uppercase">7 years</p>
                            </div> 
                        </div>
                    </article>
                 
            </main>
        </div>
    );
}

export default destinationMoon;