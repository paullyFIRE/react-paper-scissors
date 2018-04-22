import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import config from '../config';

class Layout extends React.Component {
  render(props) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ flex: '1 0 auto' }}>
          <Header modals={config.modals} title={config.title} />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
