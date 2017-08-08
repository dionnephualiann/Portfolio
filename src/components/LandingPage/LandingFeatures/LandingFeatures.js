import React, { Component } from 'react';
import {Col, Row} from 'react-bootstrap';

import './LandingFeatures.css';

class LandingFeatures extends Component {
  render() {
    return (
      <div>
      <section className="c-hero-flex">
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Project 1</h2>
          </a>
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Project 2</h2>
          </a>
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Project 3</h2>
          </a>
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Project 4</h2>
          </a>
          <a className="c-hero-flex__item">
            <h2 className="c-hero-flex__title">Others</h2>
          </a>
          </section>
      </div>


    );
  }
}

export default LandingFeatures;