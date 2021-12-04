import logo from "../assets/shared/logo.svg";
import spaceportPortrait from "../assets/technology/image-spaceport-portrait.jpg"
import spaceportLandscape from "../assets/technology/image-spaceport-landscape.jpg"
import capsulePortrait  from "../assets/technology/image-space-capsule-portrait.jpg"
import capsuleLandscape from "../assets/technology/image-space-capsule-landscape.jpg"
import launchPortrait from "../assets/technology/image-launch-vehicle-portrait.jpg"
import launchLandscape from "../assets/technology/image-launch-vehicle-landscape.jpg"


function Technology(){
    return(
        <div className="tech">
             <header className="primary-header flex">
                <div>
                    <img src={logo} alt="space tourism logo" className="logo" />
                </div>
                <button id="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
                <nav>
                    <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex ">
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/"><span aria-hidden="true">00</span> Home</a></li>
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="destination-moon"><span aria-hidden="true">01</span> Destination</a></li>
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="crew-commander"><span aria-hidden="true">02</span> Crew</a></li>
                        <li className="active " ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/technology"><span aria-hidden="true">03</span> Technology</a></li>
                    </ul>
                </nav>
                {/** ::after */}
            </header>
            <main className="gird-container grid-container--tech flow">
                <h1 className="numbered-title text-white ff-serif uppercase"><span aria-hidden="true">03</span>Space lauch 101</h1>
             
                
                {/* eslint-disable-next-line */}
                <picture style={{display:"none"}} id="vehicle-image" className="picture"> 
                        <source srcSet={launchLandscape} type="image/jpg" />
                        <img src={launchPortrait} alt="the launch vehicle" className="featuredImage"/>
                    </picture>
                {/* eslint-disable-next-line */}
                <picture style={{display:"block"}} id="capsule-image" className="picture"> 
                    <source srcSet={capsuleLandscape} type="image/jpg" />
                    <img src={capsulePortrait} alt="the capsule" className="featuredImage"/>
                </picture>
                {/* eslint-disable-next-line */}
                <picture style={{display:"none"}} id="spaceport-image" className="picture">
                    <source srcSet={spaceportLandscape} type="image/jpg" />
                    <img src={spaceportPortrait} alt="the spaceport" className="featuredImage"/>
                </picture>
                
                

                <div role="tablist" id="item1" className="numbered-indicators flex">
                      {/* eslint-disable-next-line */}
                      <a href="#space-capsule" role="tab" aria-controls="space-capsule" data-image="capsule-image"   tabIndex="0" aria-selected="true" className="ff-serif
                     text-dark fs-300">1</a>
                      {/* eslint-disable-next-line */}
                      <a href="#spaceport" role="tab" aria-controls="spaceport" data-image="spaceport-image" tabIndex="-1" aria-selected="false" className="ff-serif
                     text-white bg-dark fs-300">2</a>
                      {/* eslint-disable-next-line */}
                      <a href="#launch-vehicle"role="tab" aria-controls="launch-vehicle"  data-image="vehicle-image"   tabIndex="-1" aria-selected="false" className="ff-serif
                     text-white bg-dark fs-300">3</a>
                </div>


             
            {/* Space capsule*/}
            <article id="space-capsule" className="technology-detail flow" role="tabpanel" >
                <div className="flow flow--space-small">
                    <h4 className="text-accent fs-300 ff-sans-cond uppercase letter-spacing-1"> The terminology...</h4>
                    <p className="d-block text-white fs-600 ff-serif uppercase"> Space capsule</p>
                </div>
                    <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
                        capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
                        you'll spend your time during the flight. It includes a space gym, cinema, 
                        and plenty of other activities to keep you entertained.
                    </p>
            </article>
        
            
            {/* Spaceport*/}
            <article id="spaceport" className="technology-detail flow" role="tabpanel" hidden>
                <div className="flow flow--space-small">
                    <h4 className="text-accent fs-300 ff-sans-cond uppercase letter-spacing-1">The terminology...</h4>
                    <p className="d-block text-white fs-600 ff-serif uppercase">Spaceport </p>
                </div>
                    <p>
                    A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
                    by analogy to the seaport for ships or airport for aircraft. Based in the 
                    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
                    of the Earth’s rotation for launch.
                    </p>
            </article>
            
            
            {/* Pilot Victor */}
            <article id="launch-vehicle" className="technology-detail flow" role="tabpanel" hidden>
                <div className="flow flow--space-small">
                    <h4 className="text-accent fs-300 ff-sans-cond uppercase letter-spacing-1">The terminology...</h4>
                    <p className="d-block text-white fs-600 ff-serif uppercase"> Launch vehicle</p>
                </div>
                    <p>
                    A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
                    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
                    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
                    it's quite an awe-inspiring sight on the launch pad!
                    </p>
            </article>
            
                
             </main>
        </div>
    )
}

export default Technology;