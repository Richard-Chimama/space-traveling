import '../view/app.css';
import '../view/designSystem.css';
import logo from "../assets/shared/logo.svg";


function App(){
    return(
        <div className="home" style={{minHeight:"100vh", overflow: "hidden"}}>
            <a className="skip-to-content" href="#main">Skip to main content</a>
            <header className="primary-header flex">
                <div>
                    <img src={logo} alt="space tourism logo" className="logo" />
                </div>
                <button id="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"><span className="sr-only">Menu</span></button>
                <nav>
                    <ul id="primary-navigation" data-visible="false" className="primary-navigation underline-indicators flex ">
                        {/* eslint-disable-next-line */}
                        <li className="active page" ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/"><span aria-hidden="true">00</span> Home</a></li>
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="destination-moon"><span aria-hidden="true">01</span> Destination</a></li>
                        {/* eslint-disable-next-line */}
                        <li><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="crew-commander"><span aria-hidden="true">02</span> Crew</a></li>
                        {/* eslint-disable-next-line */}
                        <li ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="/technology"><span aria-hidden="true">03</span> Technology</a></li>
                    </ul>
                </nav>
                {/** ::after */}
            </header>
            <main id="main" className="gird-container grid-container--home" style={{height: "90vh"}}> 
                <div>
                    <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                    <span className="d-block text-white fs-900 ff-serif uppercase">Space</span></h1>
                    <p>Let's face it; if you want to go space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back, and relax because
                        we'll give you a truly out of this world experience. 
                    </p>
                </div>
                <div >
                    <a href="/destination-moon" className="large-button uppercase ff-serif
                        text-dark bg-white fs-600">Explore</a>
                </div>
            </main>
        </div> 
    );
};

export default App;