import '../view/designSystem.css';

function DesignSystem() {
  const box = {
    padding: "3rem 1rem 1rem",
    border: "1px solid white"
  }
  return (
    <div className="container">
      <h1 className="text-white uppercase letter-spacing-1">Design system</h1>

        <section id="colors" style={{margin: "4rem 0"}}>
            <h2 className="numbered-title"><span >01</span> Colors</h2>
            <div className="flex">
            <div style={{flex: 1}}>
              <div class="text-accent bg-dark ff-serif fs-500" style={box} >
                #0B0D17
              </div>
              <p><span className="text-accent">RGB</span> 11, 13, 23</p>
              <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
            </div>

            <div style={{flex: 1}}>
              <div className="text-dark bg-accent ff-serif fs-500" style={box} >
                #D0D6F9
              </div>
              <p><span className="text-accent">RGB</span> 208, 214, 249</p>
              <p><span className="text-accent">HSL</span> 231°, 77%, 90%</p>
            </div>

            <div style={{flex: 1}}>
              <div className="text-dark bg-white ff-serif fs-500" style={box} >
                #FFFFFF
              </div>
              <p><span className="text-accent">RGB</span> 255, 255, 255</p>
              <p><span className="text-accent">HSL</span> 0°, 0%, 100%</p>
            </div>
          </div>
        </section>
        <section id="typography"  style={{margin: "4rem 0"}}>
                <h2 className="numbered-title"><span>02 </span>Typography</h2>
                <div class="flex">
                    <div className="flow" style={{flex:" 100%"}}>
                        <div> 
                            <p className="text-accent">Heading 1 - Bellefair Regular - 150px</p>
                            <p className="fs-900 ff-serif uppercase">Earth</p>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 2 - Bellefair Regular - 100px</p>
                            <p className="fs-800 ff-serif uppercase">Venus</p>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 3 - Bellefair Regular - 56px</p>
                            <p className="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 4 - Bellefair Regular - 32px</p>
                            <p className="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
                        </div>
                        <div> 
                            <p className="text-accent">Heading 5 - Barlow Condensed Regular - 28px - 4.75 Character Space</p>
                            <p className="text-accent fs-400 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to space</p>
                        </div>
                    
                    </div>
                    
                    <div className="flow" style={{flex: "100%"}}>
                        <div> 
                            <p className="text-accent">Subheading 1 - Bellefair Regular - 28px</p>
                            <p className="ff-serif fs-500 uppercase">384,400 km</p>
                        </div>
                        <div> 
                            <p className="text-accent">Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character Space</p>
                            <p className="fs-200 uppercase ff-sans-cond letter-spacing-3 ">Avg. Distance</p>
                        </div>
                        <div> 
                            <p className="text-accent">Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space</p>
                            <p className="fs-300 uppercase ff-sans-cond letter-spacing-2 ">Europa</p>
                        </div>
                        <div> 
                            <p className="text-accent">Body Text</p>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flow" id="interactive-elements" style={{marginBottom: '50vh'}}>
              <h2 className="numbered-title"><span>03</span>Interactive elements</h2>

              <div>
                <nav>
                  <ul className="primary-navigation underline-indicators flex">
                    <li className="active" ><a className="uppercase text-white letter-spacing-2 " href="google"><span>00</span>Activity</a></li>
                    <li><a className="uppercase text-white letter-spacing-2 " href="google"><span>01</span>Hovered</a></li>
                    <li><a className="uppercase text-white letter-spacing-2 " href="google"><span>02</span>Idle</a></li>
                  </ul>
                </nav>
              </div>

              <div className="explore-moon flex" >
                  <div style={{marginTop:"5rem"}}>
                    <a href="google.com" className="large-button uppercase ff-serif
                     text-dark bg-white fs-600">Explore</a>
                  </div>
              
                  <div style={{marginBottom: "20vh", marginTop: "4rem"}}>
                      <div className="tab-list underline-indicators flex" >
                        {/* eslint-disable-next-line */}
                        <button aria-selected={true} className="uppercase text-white bg-dark letter-spacing-2">Moon</button>
                        {/* eslint-disable-next-line */}
                        <button aria-selected={false} className="uppercase text-accent bg-dark letter-spacing-2">Mars</button>
                        {/* eslint-disable-next-line */}
                        <button aria-selected={false} className="uppercase text-accent bg-dark letter-spacing-2">Europa</button>
                      </div>

                    <div className="dot-indicators flex" style={{marginTop:"4rem"}}>
                      {/* eslint-disable-next-line */}
                      <button aria-selected="true"><span class="sr-only">Slide title</span></button>
                      {/* eslint-disable-next-line */}
                      <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                      {/* eslint-disable-next-line */}
                      <button aria-selected="false"><span class="sr-only">Slide title</span></button>
                    </div>

                    <div className="flow numbered-indicators grid" style={{marginTop:"4rem"}}>
                      {/* eslint-disable-next-line */}
                      <a href="google.com" aria-selected="true" className="ff-serif
                     text-dark fs-300">1</a>
                      {/* eslint-disable-next-line */}
                      <a href="google.com" aria-selected="false" className="ff-serif
                     text-white bg-dark fs-300">2</a>
                      {/* eslint-disable-next-line */}
                      <a href="google.com" aria-selected="false" className="ff-serif
                     text-white bg-dark fs-300">3</a>
                    </div>
                </div>
            </div>   
              
            </section>
    
    </div>
  );
}

export default DesignSystem;
