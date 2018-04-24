import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './GameActionButton.scss';

class GameActionButton extends React.Component {
  render() {
    return (
      <button className={`btn ${styles.gameActionButton}`} type="button" onClick={this.props.eventHandler}>
        <img
          className={this.props.gameState == 'MULTIPLIER_ROUND' ? styles.multiplierRound : styles.standardRound}
          src={this.props.src}
          alt={this.props.value}
        />
      </button>
    );
  }
}

GameActionButton.propTypes = {
  src: PropTypes.string,
  eventHandler: PropTypes.func,
  style: PropTypes.object,
  value: PropTypes.string,
  gameState: PropTypes.string
};

const mapState = state => {
  return { gameState: state.game.state };
};

export default connect(mapState)(GameActionButton);
