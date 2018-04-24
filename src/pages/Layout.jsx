import React from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import Footer from '../components/Footer';
import config from '../config';

import styles from './Layout.scss';

class Layout extends React.Component {
  render(props) {
    return (
      <div className={styles.layoutWrapper}>
        <div className={styles.headerWrapper}>
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
