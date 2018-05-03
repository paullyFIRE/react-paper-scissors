import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ScoreboardRoundLabel from '../Labels/ScoreboardRoundLabel';
import config from '../../config';
import styles from './GameScoreBoard.scss';

class GameScoreBoard extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.sectionWrapper}>
          <div className={styles.scoreWrapper}>
            <label>
              Score: <span>{this.props.gameState.score}</span>
            </label>
          </div>

          <div className={styles.subScoreWrapper}>
            <ScoreboardRoundLabel label="Rounds Won" firstValue={this.props.gameState.roundsWon} />
            <ScoreboardRoundLabel
              label="Rounds Lost"
              firstValue={this.props.gameState.roundsLost}
              secondValue={this.props.gameState.lossLimit}
            />
            <ScoreboardRoundLabel label="Multipliers" firstValue={this.props.gameState.multipliers} />
          </div>

          {this.props.displayMode == 'game-only' ? null : (
            <div className={styles.roundWrapper}>
              <div>
                <label>Current Round</label>
              </div>
              <div>
                <ScoreboardRoundLabel
                  label="Wins"
                  firstValue={this.props.gameState.pointsPlayer}
                  secondValue={this.props.gameState.roundLimit}
                />
                <ScoreboardRoundLabel
                  label="Losses"
                  firstValue={this.props.gameState.pointsCPU}
                  secondValue={this.props.gameState.roundLimit}
                />
                <ScoreboardRoundLabel label="Draws" firstValue={this.props.gameState.pointsDraw} />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

GameScoreBoard.propTypes = {
  gameState: PropTypes.object,
  style: PropTypes.object,
  displayMode: PropTypes.string
};

const mapState = state => {
  return {
    gameState: {
      score: state.game.score,
      roundsWon: state.game.roundsWon,
      roundsLost: state.game.roundsLost,
      multipliers: state.game.multipliers,
      lossLimit: config.lossLimit,
      pointsCPU: state.game.rounds[0].pointsCPU,
      pointsDraw: state.game.rounds[0].pointsDraw,
      pointsPlayer: state.game.rounds[0].pointsPlayer,
      roundLimit: config.roundLimit
    }
  };
};

export default connect(mapState)(GameScoreBoard);
