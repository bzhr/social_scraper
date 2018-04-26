import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navigation from '../components/Navigation';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Social Scraper"
      meta={[
        { name: 'description', content: 'A tool for mining data from social media' },
        { name: 'keywords', content: 'Data Facebook Twitter Instagram Stats Visualization Charts' },
      ]}
    />
    <div className="app">
      <Navigation />

      <hr/>
      <div
        style={{padding: 20}}
      >
        {children()}
      </div>
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
