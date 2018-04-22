import React from 'react';
import { connect } from 'react-redux';
import Modal from './Modal';
import PropTypes from 'prop-types';
import GameScoreBoard from '../Game/GameScoreBoard';
import config from '../../config';
import styles from './ScoreSubmitModal.scss';

class ScoreSubmitModal extends React.Component {
  constructor() {
    super();

    this.username = '';

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  usernameChangeHandler(changeEvent) {
    this.username = changeEvent.target.value;
  }

  submitHandler() {
    this.props.postGame(this.username);
  }

  render() {
    return (
      <Modal modalName={config.modals.scoreSubmit.modalName}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">{config.modals.scoreSubmit.heading}</h4>
        </div>

        <div className="modal-body">
          <GameScoreBoard />
          <div className={styles.formWrapper}>
            <label>Enter Your Alias Here</label>
            <form>
              <input name="username" text="text" onChange={this.usernameChangeHandler} />
            </form>
          </div>
        </div>

        <div className={`${styles.footerWrapper} modal-footer`}>
          <button onClick={this.submitHandler} type="button" className="btn btn-lg">
            Submit Game
          </button>
        </div>
      </Modal>
    );
  }
}

ScoreSubmitModal.propTypes = {
  postGame: PropTypes.func
};

const mapDispatch = dispatch => {
  return {
    postGame(username) {
      dispatch({ type: 'SUBMIT_SCORE', username });
    }
  };
};

export default connect(null, mapDispatch)(ScoreSubmitModal);
