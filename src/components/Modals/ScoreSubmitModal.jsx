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

    this.state = {
      disabled: false,
      username: '',
      postResponseReceived: false,
      statusText: 'Please enter your username to submit your score.'
    };

    this.validateSubmission = this.validateSubmission.bind(this);
  }

  componentDidMount() {
    $(`#${config.modals.scoreSubmit.modalName}`).on('hidden.bs.modal', event => {
      this.setState({
        username: '',
        disabled: false,
        postResponseReceived: false,
        statusText: 'Please enter your username to submit your score.'
      });

      $(document).unbind('keypress');
    });

    $(`#${config.modals.scoreSubmit.modalName}`).on('shown.bs.modal', event => {
      $(document).keypress(event => {
        if (event.which == 13) {
          this.validateSubmission();
          $(this).off(event);
        }
      });
    });
  }

  closeModalTimeout() {
    setTimeout(() => {
      $(`#${config.modals.scoreSubmit.modalName}`).modal('hide');
    }, config.modals.scoreSubmit.closeDelay);
  }

  componentWillUpdate(nextProps) {
    if (!this.state.postResponseReceived) {
      if (nextProps.postState == 'COMPLETED') {
        this.setState({ postResponseReceived: true, statusText: 'Success!' });

        this.closeModalTimeout();
      } else if (nextProps.postState == 'FAILED') {
        this.setState({
          postResponseReceived: true,
          statusText: 'Something Went Wrong... Please Try Again.'
        });

        this.closeModalTimeout();
      }
    }
  }

  validateSubmission() {
    const regex = new RegExp(`[^A-Za-z0-9]`, 'g');

    if (this.state.username.length <= 2 || this.state.username.length >= 21) {
      this.setState({
        statusText: 'Please enter a username between 3 and 20 characters.'
      });
    } else if (regex.test(this.state.username)) {
      this.setState({
        statusText: 'No Special Characters or Spaced Allowed.'
      });
    } else {
      this.props.postGame(this.state.username);

      this.setState({
        disabled: true
      });
    }
  }

  render() {
    let modalStatusClasses = styles.backgroundTransition;

    if (this.state.postResponseReceived) {
      if (this.props.postState == 'COMPLETED') {
        modalStatusClasses += ' btn-success';
      } else if (this.props.postState == 'FAILED') {
        modalStatusClasses += ' btn-danger';
      }
    }

    return (
      <Modal modalName={config.modals.scoreSubmit.modalName}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">{config.modals.scoreSubmit.heading}</h4>
        </div>

        <div className="modal-body">
          <div className={styles.statusWrapper + ' ' + modalStatusClasses}>
            <h4>{this.state.statusText}</h4>
          </div>

          <GameScoreBoard />

          <div className={styles.formWrapper}>
            <label>Enter Your Alias Here:</label>
            <input
              name="username"
              value={this.state.username}
              text="text"
              onChange={event => this.setState({ username: event.target.value })}
            />
          </div>
        </div>

        <div className={`${styles.footerWrapper} modal-footer`}>
          <button disabled={this.state.disabled} onClick={this.validateSubmission} type="button" className="btn btn-lg">
            Submit Game
          </button>
        </div>
      </Modal>
    );
  }
}

ScoreSubmitModal.propTypes = {
  postGame: PropTypes.func,
  postState: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
};

const mapState = state => {
  return {
    postState: state.api.postRequests[0] !== undefined && state.api.postRequests[0].status
  };
};

const mapDispatch = dispatch => {
  return {
    postGame(username) {
      dispatch({ type: 'SUBMIT_SCORE', username });
    }
  };
};

export default connect(mapState, mapDispatch)(ScoreSubmitModal);
