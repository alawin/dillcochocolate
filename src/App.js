import React, { Component } from 'react';

// preloader
import Preloader from './components/Preloader/Preloader';


//menu
import Navbar from './components/Navbar/Navbar';
import MobileNavMenu from './components/MobileNav/MobileNavMenu';
import Backdrop from './components/Backdrop/Backdrop';

//animate-on-scroll
import "./animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

//fullscreen wrapper
import FullscreenBg from './components/FullscreenBg/FullscreenBg';

//pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Process from './components/Pages/Process';
import Journey from './components/Pages/Journey';
import Products from './components/Pages/Products';
import Contact from './components/Pages/Contact';

//background images
import HomeBg from './images/Background/home.webp';
import AboutBg from './images/Background/about.webp';
import ProcessBg from './images/Background/process.webp';
import JourneyBg from './images/Background/journey.webp';
import ProductBg from './images/Background/product.webp';
import ContactBg from './images/Background/contact.webp';

//background images placeholder for lazy loading
import HomePlaceholder from './images/Background/home-placeholder.webp';
import AboutPlaceholder from './images/Background/about-placeholder.webp';
import ProcessPlaceholder from './images/Background/process-placeholder.webp';
import JourneyPlaceholder from './images/Background/journey-placeholder.webp';
import ProductPlaceholder from './images/Background/product-placeholder.webp';
import ContactPlaceholder from './images/Background/contact-placeholder.webp';




class App extends Component {
  state = {
    mobileNavMenuOpen: false,
    preload: null,
  };

  // Preloader
  componentWillMount(){
    this.setState({preload: <Preloader className='preloader'/>})
  }

  getData(){
    setTimeout(() => {
        console.log('Loading Dillco Website');
        this.setState({
        preload:<Preloader className='preloader close'/>,
        })
    }, 2500)
  }

  componentDidMount(){
    this.getData();
  }

  // menu
  mobileNavToggleClickHandler = () => {
    this.setState((prevState) => {
      return {mobileNavMenuOpen: !prevState.mobileNavMenuOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({mobileNavMenuOpen: false});
  }


  render() {
    let backdrop;
    if (this.state.mobileNavMenuOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}
      />
    };

    return (
      <div className="App">
        {/* preloader */}
        {this.state.preload}

        {/* menu */}
        <Navbar mobileClickHandler={this.mobileNavToggleClickHandler}/>
        <MobileNavMenu show={this.state.mobileNavMenuOpen}/>
        {backdrop}

        {/* main */}
        <FullscreenBg id='section0'src={HomeBg} placeholder={HomePlaceholder} >
          <Home/>
        </FullscreenBg>

        <FullscreenBg id='section1' src={AboutBg} placeholder={AboutPlaceholder}>
          <About />
        </FullscreenBg>

        <FullscreenBg id='section2' src={ProcessBg} placeholder={ProcessPlaceholder}>
            <Process/>
        </FullscreenBg>

        <FullscreenBg id='section3' src={JourneyBg} placeholder={JourneyPlaceholder}>
          <Journey/>
        </FullscreenBg>

        <FullscreenBg id='section4' src={ProductBg} placeholder={ProductPlaceholder}>
          <Products />
        </FullscreenBg>

        <FullscreenBg id='section5' src={ContactBg} placeholder={ContactPlaceholder}>
          <Contact />
        </FullscreenBg>
      </div>
    );
  }
}


export default App;
