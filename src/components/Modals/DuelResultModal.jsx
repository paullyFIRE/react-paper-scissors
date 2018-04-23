import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

import styles from './DuelResultModal.scss';

class DuelResultModal extends React.Component {
  animateDuel() {
    const images = {
      rock: rockSvg,
      paper: paperSvg,
      scissors: scissorsSvg
    };

    const playerOption = this.props.duelState.player;
    const computerOption = this.props.duelState.computer;

    const $playerHand = $('#player-hand');
    const $computerHand = $('#computer-hand');
    const $modal = $(`#${this.props.modal.modalName}`);

    let resultSlider;
    let resultColor;
    let gameScore = this.props.gameScore;
    let scoreIncrement;
    //maximum animation time of hands is 1500ms
    let modalCloseDelay = 1500;

    switch (this.props.duelState.result) {
      case 'WON':
        resultSlider = styles.sliderSchemeWin;
        resultColor = 'green';
        scoreIncrement = 1000;
        modalCloseDelay += 2000;
        break;
      case 'LOST':
        resultSlider = styles.sliderSchemeLose;
        resultColor = 'red';
        scoreIncrement = 0;
        break;
      case 'DREW':
        resultSlider = styles.sliderSchemeDraw;
        resultColor = 'grey';
        scoreIncrement = 250;
        modalCloseDelay += 500;
        break;
    }

    setTimeout(() => {
      for (let a = 0; a < 3; a++) {
        if (a == 2) {
          $playerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 340 + Math.floor(Math.random() * 40), function() {
            $playerHand.attr('src', images[playerOption]);
            //reveal status text from display:none, and change slider background
            $(`.${styles.titlesBody} h2`).css('display', 'block');
            $(`.${styles.titlesBody} strong`).css('color', resultColor);
            $modal.removeClass(styles.sliderSchemeInitial).addClass(resultSlider);

            $(`.${styles.duelScore}`).css('display', 'flex');
            $(`.${styles.duelScore} span:first-child`).text(gameScore);
            $(`.${styles.duelScore} span > span`).text(scoreIncrement);

            if (scoreIncrement !== 0) {
              setTimeout(() => {
                const ticker = setInterval(() => {
                  if (scoreIncrement == 0) {
                    clearInterval(ticker);
                  } else {
                    gameScore += 5;
                    scoreIncrement -= 5;
                  }

                  $(`.${styles.duelScore} span:first-child`).text(gameScore);
                  $(`.${styles.duelScore} span > span`).text(scoreIncrement);
                }, 10);
              }, 1000);
            }
          });

          $computerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 340 + Math.floor(Math.random() * 40), function() {
            $computerHand.attr('src', images[computerOption]);
          });
        } else {
          $playerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 380);
          $computerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 380);
        }

        $computerHand.animate({ marginBottom: '-=140', marginLeft: '-=5' }, 120);
        $playerHand.animate({ marginBottom: '-=140', marginLeft: '-=5' }, 120);
      }

      //Inverval checking for animation finish
      let animationFinishCheck = setInterval(() => {
        if (!$playerHand.is(':animated')) {
          clearInterval(animationFinishCheck);
          this.props.animationCompleted();

          setTimeout(() => {
            $modal.modal('hide');
          }, this.props.modal.closeDelay + modalCloseDelay);
        }
      }, 200);
    }, this.props.modal.initialDelay);
  }

  resetComponent() {
    $('#player-hand').attr('src', rockSvg);
    $('#computer-hand').attr('src', rockSvg);
    $(`.${styles.titlesBody} h2`).css('display', 'none');
    $(`.${styles.duelScore}`).css('display', 'none');
    $(`#${this.props.modal.modalName}`)
      .addClass(styles.sliderSchemeInitial)
      .removeClass(styles.sliderSchemeWin)
      .removeClass(styles.sliderSchemeLose)
      .removeClass(styles.sliderSchemeDraw);
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
      <Modal modalName={this.props.modal.modalName} modalStyles={styles.sliderSchemeInitial} dialogStyle={styles.dialog}>
        <div className={styles.modalBody}>
          <div className={styles.titlesBody}>
            <div>
              <h2>
                You <strong>{this.props.duelState ? this.props.duelState.result : ''}</strong>!
              </h2>

              {this.props.duelState && this.props.duelState.result !== 'LOST' ? (
                <h3 className={styles.duelScore}>
                  Score:&nbsp;<span />&nbsp;
                  <span>
                    (+<span />)
                  </span>
                </h3>
              ) : null}
            </div>
          </div>

          <div className={styles.animationArea}>
            <div>
              <img id="player-hand" src={rockSvg} />
            </div>
            <div>
              <img id="computer-hand" src={rockSvg} />
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

DuelResultModal.propTypes = {
  duelState: PropTypes.object,
  animationCompleted: PropTypes.func,
  gameScore: PropTypes.number,
  modal: PropTypes.object
};

const mapState = state => {
  return {
    modal: config.modals.duelResult,
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

export default connect(mapState, mapDispatch)(DuelResultModal);
