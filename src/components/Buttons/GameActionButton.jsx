import React from 'react';
import PropTypes from 'prop-types';
import styles from './GameActionButton.scss';

class GameActionButton extends React.Component {
  render() {
    return (
      <button className={`${styles.gameActionButton} btn`} type="button" onClick={this.props.eventHandler}>
        <img src={this.props.src} alt={this.props.value} />
      </button>
    );
  }
}

GameActionButton.propTypes = {
  src: PropTypes.string,
  eventHandler: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string
};

export default GameActionButton;
