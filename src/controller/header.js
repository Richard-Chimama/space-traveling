import logo from "../assets/shared/logo.svg";

function Header(){

    return(
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
                        <li className="page "><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="destination-moon"><span aria-hidden="true">01</span> Destination</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="page " ><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="crew-commander"><span aria-hidden="true">02</span> Crew</a></li>
                        {/* eslint-disable-next-line */}
                        <li className="page"><a className="ff-sans-cond uppercase text-white letter-spacing-2 " href="google"><span aria-hidden="true">03</span> Technology</a></li>
                    </ul>
                </nav>
                {/** ::after */}
            </header>
    )
}

export default Header;