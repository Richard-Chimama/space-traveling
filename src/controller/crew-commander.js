
import douglas from "../assets/crew/image-douglas-hurley.png";
import douglas1 from "../assets/crew/image-douglas-hurley.webp";
import victor from "../assets/crew/image-victor-glover.png";
import victor1 from "../assets/crew/image-victor-glover.webp";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import mark1 from "../assets/crew/image-mark-shuttleworth.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import anousheh1 from "../assets/crew/image-anousheh-ansari.webp";
import logo from "../assets/shared/logo.svg";
function CrewCommander(){
    return(
        <div className="crew" style={{minHeight:"100vh"}}>
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
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="destination-moon"><span aria-hidden="true">01</span> Destination</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="active" ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="crew-commander"><span aria-hidden="true">02</span> Crew</a></li>
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/technology"><span aria-hidden="true">03</span> Technology</a></li>
                    </ul>
                </nav>
                {/** ::after */}
            </header>
        
        <main className="gird-container grid-container--crew flow">
            <h1 className="numbered-title text-white ff-serif uppercase"><span aria-hidden="true">02</span>Meet your crew</h1>

            <div role="tablist" class="dot-indicators flex" aria-label="The crew member list">
                {/* eslint-disable-next-line */}
                <button role="tab" aria-selected="true" aria-controls="commander-tab" tabIndex="0" data-image="commander-image" ><span class="sr-only">The commander</span></button>
                {/* eslint-disable-next-line */}
                <button role="tab" aria-selected="false" aria-controls="mission-tab" tabIndex="-1" data-image="mission-image"><span class="sr-only" >The mission specialist</span></button>
                {/* eslint-disable-next-line */}
                <button role="tab" aria-selected="false" aria-controls="pilot-tab" tabIndex="-1" data-image="pilot-image"><span class="sr-only" >The pilot</span></button>
                {/* eslint-disable-next-line */}
                <button role="tab" aria-selected="false" aria-controls="engineer-tab" tabIndex="-1" data-image="engineer-image"><span class="sr-only">The crew engineer</span></button>
            </div>

            {/* Commander Douglas*/}
            <article id="commander-tab" className="crew-details flow" role="tabpanel" >
                <div className="flow flow--space-small">
                    <h2 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1">Commander</h2>
                    <p className="d-block text-white fs-600 ff-serif uppercase"> Douglas Hurley</p>
                </div>
                    <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                        and former NASA astronaut. He launched into space for the third time as 
                        commander of Crew Dragon Demo-2.
                    </p>
            </article>

            {/* Flight Engineer Anousheh*/}
            <article id="engineer-tab" className="crew-details flow" role="tabpanel" hidden>
                <div className="flow flow--space-small">
                    <h2 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1">Flight Engineer</h2>
                    <p className="d-block text-white fs-600 ff-serif uppercase">Anousheh Ansari </p>
                </div>
                    <p>
                    Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
                    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
                    fly to the ISS, and the first Iranian in space. 
                    </p>
            </article>

            {/* Pilot Victor */}
            <article id="pilot-tab" className="crew-details flow" role="tabpanel" hidden>
                <div className="flow flow--space-small">
                    <h2 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1">Pilot</h2>
                    <p className="d-block text-white fs-600 ff-serif uppercase"> Victor Glover </p>
                </div>
                    <p>
                    Pilot on the first operational flight of the SpaceX Crew Dragon to the 
                    International Space Station. Glover is a commander in the U.S. Navy where 
                    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
                    station systems flight engineer. 
                    </p>
            </article>

            {/* Mission Specialist Mark*/}
            <article id="mission-tab" className="crew-details flow" role="tabpanel" hidden>
                <div className="flow flow--space-small">
                    <h2 className="text-accent fs-600 ff-sans-cond uppercase letter-spacing-1"> Mission Specialist</h2>
                    <p className="d-block text-white fs-600 ff-serif uppercase"> Mark Shuttleworth </p>
                </div>
                    <p>
                    Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
                    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
                    African to travel to space as a space tourist.
                    </p>
            </article>

            <picture style={{display:"none"}} id="engineer-image">
                <source srcset={anousheh1} type="image/webp" />
                <img src={anousheh} alt="anousheh ansari" />
            </picture>
            <picture style={{display:"none"}} id="mission-image">
                <source srcset={mark1} type="image/webp" />
                <img src={mark} alt="Mark Shuttleworth" />
            </picture>
            <picture style={{display:"none"}} id="pilot-image">
                <source srcset={victor1} type="image/webp" />
                <img src={victor} alt="victor glover" />
            </picture>
            <picture style={{display:"block"}} id="commander-image">
                <source srcset={douglas1} type="image/webp" />
                <img src={douglas} alt="Douglas Hurley" />
            </picture>
        </main>
        
        </div>
    );
}

export default CrewCommander;