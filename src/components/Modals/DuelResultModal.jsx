import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import GameControls from '../Game/GameControls';

import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

import styles from './duelResultModal.scss';

class DuelResultModal extends React.Component {
  animate() {
    const images = {
      rock: rockSvg,
      paper: paperSvg,
      scissors: scissorsSvg
    };

    const playerOption = this.props.duelState.player;
    const computerOption = this.props.duelState.computer;

    const $playerHand = $('#player-hand');
    const $computerHand = $('#computer-hand');

    setTimeout(() => {
      for (let a = 0; a < 3; a++) {
        if (a == 2) {
          $playerHand.animate({ marginBottom: '+=140', marginLeft: '+=5' }, 340 + Math.floor(Math.random() * 40), function() {
            $playerHand.attr('src', images[playerOption]);
            //reveal status text from display:none
            $(`.${styles.title} h2`).css('display', 'block');
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
        if (!$(`#player-hand`).is(':animated')) {
          clearInterval(animationFinishCheck);
          this.props.animationCompleted();

          setTimeout(() => {
            $(`#${this.props.modal.modalName}`).modal('hide');
          }, this.props.modal.closeDelay);
        }
      }, 200);
    }, this.props.modal.initialDelay);
  }

  resetComponent() {
    $('#player-hand').attr('src', rockSvg);
    $('#computer-hand').attr('src', rockSvg);
    $(`.${styles.title} h2`).css('display', 'none');
  }

  componentDidMount() {
    const $modal = $(`#${this.props.modal.modalName}`);

    $modal.on('show.bs.modal', event => {
      setTimeout(() => {
        $('.modal-backdrop.in').css('opacity', '1');
      }, 1);
    });

    $modal.on('shown.bs.modal', event => {
      this.animate();
    });

    $modal.on('hide.bs.modal', event => {
      //Smoothens Background Opacity Fade-In on modal hide
      $('.modal-backdrop.in').css('opacity', '0.1');
    });

    $modal.on('hidden.bs.modal', event => {
      this.resetComponent();
    });
  }

  render() {
    return (
      <Modal modalName={this.props.modal.modalName} dialogStyle={styles.dialog}>
        <div className={styles.modalBody}>
          <div className={styles.title}>
            <h2>
              You <strong>{this.props.duelState ? this.props.duelState.result : ''}</strong>!
            </h2>
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
  modal: PropTypes.object
};

const mapState = state => {
  return {
    modal: config.modals.duelResult,
    duelState: state.duelResultQueue.queue[0] || null
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
