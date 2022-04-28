import React from 'react';
import ScrollableAnchor, { configureAnchors } from 'react-scrollable-anchor';
import AboutUsCarousel from '../aboutUs/AboutUsCarousel';
import AboutUsText from './AboutUsText';


class AboutUs extends React.Component {
  // debugger;
  componentWillUnmount() {
    configureAnchors({ offset: 0, scrollDuration: 600 })
  }
  render() {

    return (
      <ScrollableAnchor id={'aboutUs'}>
        <div className='aboutUs'>

          <div className='aboutUs__text'>
            <AboutUsText text={this.props.text} />
          </div>

          <div className='aboutUs__carousel'>
            <AboutUsCarousel imgSrc={this.props.carousel.imgSrc} />
          </div>

        </div>
      </ScrollableAnchor>

    )
  }

}

export default AboutUs;