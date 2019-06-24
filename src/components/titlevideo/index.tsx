/**
 * basic content section component
 */

/**
 * NPM Dependencies
 */
import React, { ReactNode } from 'react';
import Img from 'gatsby-image';
import './titlevideo.css';
import HeaderVideo from '../../assets/videos/header.mp4';
import ShowReel from '../../assets/videos/showreel.mp4';

/**
 * Local dependencies
 */

/**
 * Props for the content section component
 *
 * data
 */
interface Props {
  title?: string;
  subtitle?: string;
  invert?: boolean;
  background?: string;
  backgroundImage?: any;
  className?: string;
  children: ReactNode;
  coverimage?: any;
  coverimageRaw?: any;
  centered?: boolean;
  imageOverlap?: boolean;
}

interface State {
  hidden: boolean;
}

class TitleVideo extends React.Component<Props, State> {

  private videoModal: React.RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      hidden: true,
    };

    this.toggleHidden = this.toggleHidden.bind(this);
    this.videoModal = React.createRef();
  }

  toggleHidden() {
    if (this.state.hidden) {
      this.videoModal.current.play();
    } else {
      this.videoModal.current.pause();
    }

    this.setState({ hidden: !this.state.hidden });
  }

  render() {
    const subtitleEl = this.props.subtitle ? <span>{this.props.subtitle}</span> : null;
    const titleEl = this.props.title ? <h2>{this.props.title}</h2> : null;
    const invertedClassname = this.props.invert ? 'invert' : '';

    const showreel = (
        <div>
          <a className="showreel" onClick={this.toggleHidden}>
            Watch Showreel
          </a>
        </div>
    );
    const centeredClass = this.props.centered ? 'centered' : '';

    return (
        <div className={`komodoGridWrapper title-wrapper ${invertedClassname} ${centeredClass} ${this.props.className}`} style={{ position: 'relative' }}>
          <video autoPlay={true} playsInline={true} muted loop className={'video'}>
            <source src={HeaderVideo} type="video/mp4" />
          </video>
          <button hidden={this.state.hidden} onClick={this.toggleHidden} className={'video-close-button'}>&times;</button>
          <video controls={true} ref={this.videoModal} className={'video modal'} hidden={this.state.hidden}>
            <source src={ShowReel} type="video/mp4"/>
          </video>
          <div className={`Title-Section-Video ${centeredClass}`} style={{ zIndex: 2 }}>
            {subtitleEl}
            {titleEl}
            <div>{this.props.children}</div>
            {showreel}
          </div>
        </div>
    );
  }
}

export default TitleVideo;
