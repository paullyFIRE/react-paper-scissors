import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

import styles from './DuelModal.scss';

class DuelModal extends React.Component {
  animateDuel() {
    const images = {
      rock: rockSvg,
      paper: paperSvg,
      scissors: scissorsSvg
    };

    const playerResultSVG = images[this.props.duelState.player];
    const computerResultSVG = images[this.props.duelState.computer];

    const $playerHand = $(`#${this.props.modal.modalName} .player-hand`);
    const $computerHand = $(`#${this.props.modal.modalName} .computer-hand`);
    const $modal = $(`#${this.props.modal.modalName}`);

    let duelSettings = {
      modalCloseDelay: this.props.modal.closeDelay,
      gameScore: this.props.gameScore,
      scoreTickerTotalTime: this.props.modal.scoreTickerTotalTime,
      resultSlider: null,
      resultColor: null,
      scoreIncrement: null
    };

    if (this.props.duelState.result == 'WON') {
      const resultSettings = this.props.results['WON'];

      duelSettings.resultSlider = resultSettings.slider;
      duelSettings.resultColor = 'green';
      duelSettings.scoreIncrement =
        typeof resultSettings.points == 'function' ? resultSettings.points(duelSettings.gameScore) : resultSettings.points;
    } else if (this.props.duelState.result == 'LOST') {
      const resultSettings = this.props.results['LOST'];

      duelSettings.resultSlider = resultSettings.slider;
      duelSettings.resultColor = 'red';
      duelSettings.scoreIncrement =
        typeof resultSettings.points == 'function' ? resultSettings.points(duelSettings.gameScore) : resultSettings.points;
    } else if (this.props.duelState.result == 'DREW') {
      const resultSettings = this.props.results['DREW'];

      duelSettings.resultSlider = resultSettings.slider;
      duelSettings.resultColor = 'grey';
      duelSettings.scoreIncrement =
        typeof resultSettings.points == 'function' ? resultSettings.points(duelSettings.gameScore) : resultSettings.points;
    }

    const closeModal = () => {
      this.props.animationCompleted();

      setTimeout(() => {
        $modal.modal('hide');
      }, duelSettings.modalCloseDelay);
    };

    const animationReveal = () => {
      $(`.${styles.titlesBody} h2`).css('display', 'block');
      $(`.${styles.titlesBody} strong`).css('color', duelSettings.resultColor);
      $modal.removeClass(styles.sliderSchemeInitial).addClass(duelSettings.resultSlider);

      $(`.${styles.duelScore}`).css('display', 'flex');
      $(`.${styles.duelScore} span:first-child`).text(duelSettings.gameScore);

      if (duelSettings.scoreIncrement > 0) {
        $(`.${styles.duelScore} span:nth-child(2)`).css('display', 'block');
        $(`.${styles.duelScore} span > span`).text(duelSettings.scoreIncrement);
      }

      const rate = Math.floor(duelSettings.scoreIncrement / duelSettings.scoreTickerTotalTime * 10);

      if (duelSettings.scoreIncrement !== 0) {
        setTimeout(() => {
          const ticker = setInterval(() => {
            if (duelSettings.scoreIncrement == 0) {
              clearInterval(ticker);
              closeModal();
            } else {
              duelSettings.gameScore += rate;
              duelSettings.scoreIncrement -= rate;
            }

            $(`.${styles.duelScore} span:first-child`).text(duelSettings.gameScore);
            $(`.${styles.duelScore} span > span`).text(duelSettings.scoreIncrement);
          }, 10);
        }, 1000);
      } else {
        closeModal();
      }
    };

    setTimeout(() => {
      for (let a = 0; a < 3; a++) {
        if (a == 2) {
          $playerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 340 + Math.floor(Math.random() * 40), function() {
            $playerHand.attr('src', playerResultSVG);
            animationReveal();
          });

          $computerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 340 + Math.floor(Math.random() * 40), function() {
            $computerHand.attr('src', computerResultSVG);
          });
        } else {
          $playerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 380);
          $computerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 380);
        }

        $computerHand.animate({ marginBottom: '-=140', marginLeft: '-=5' }, 120);
        $playerHand.animate({ marginBottom: '-=140', marginLeft: '-=5' }, 120);
      }
    }, this.props.modal.initialDelay);
  }

  resetComponent() {
    $(`#${this.props.modal.modalName} .player-hand`).attr('src', rockSvg);
    $(`#${this.props.modal.modalName} .computer-hand`).attr('src', rockSvg);
    $(`.${styles.titlesBody} h2`).css('display', 'none');
    $(`.${styles.duelScore}`).css('display', 'none');
    $(`.${styles.duelScore} span:nth-child(2)`).css('display', 'none');
    $(`#${this.props.modal.modalName}`)
      .addClass(this.props.default.slider)
      .removeClass(this.props.results['WON'].slider)
      .removeClass(this.props.results['LOST'].slider)
      .removeClass(this.props.results['DREW'].slider);
  }

  componentDidMount() {
    const $modal = $(`#${this.props.modal.modalName}`);

    $modal.on('shown.bs.modal', event => {
      this.animateDuel();
    });

    $modal.on('hidden.bs.modal', event => {
      this.resetComponent();
    });
  }

  render() {
    return (
      <Modal modalName={this.props.modal.modalName} modalStyles={this.props.default.slider} dialogStyle={styles.dialog}>
        <div className={styles.modalBody}>
          <div className={styles.titlesBody}>
            <div>
              <h2>
                You <strong>{this.props.duelState ? this.props.duelState.result : ''}</strong>!
              </h2>

              <h3 className={styles.duelScore}>
                Score:&nbsp;<span />&nbsp;
                <span>
                  (+<span />)
                </span>
              </h3>
            </div>
          </div>

          <div className={styles.animationArea}>
            <div>
              <img className="player-hand" src={rockSvg} />
            </div>
            <div>
              <img className="computer-hand" src={rockSvg} />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

DuelModal.propTypes = {
  duelState: PropTypes.object,
  animationCompleted: PropTypes.func,
  gameScore: PropTypes.number,
  modal: PropTypes.object,
  default: PropTypes.object,
  results: PropTypes.object
};

const mapState = state => {
  return {
    duelState: state.duelResultQueue.queue[0] || null,
    gameScore: state.game.score
  };
};

const mapDispatch = dispatch => {
  return {
    animationCompleted() {
      dispatch({ type: 'DUEL_ANIMATION_COMPLETED' });
    }
  };
};

export default connect(mapState, mapDispatch)(DuelModal);
