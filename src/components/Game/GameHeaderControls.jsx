import React from 'react';
import ModalButton from '../Buttons/ModalButton';
import ControlButton from '../Buttons/ControlButton';
import config from '../../config';

class GameHeaderControls extends React.Component {
  submitEvent() {
    $(`#${config.modals.scoreSubmit.modalName}`).modal();
  }

  resetEvent() {
    $(`#${config.modals.confirmModal.modalName}`).modal();
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '1.5em 0 0',
          maxWidth: '650px',
          margin: '0 auto'
        }}
      >
        <ControlButton value="RESET" eventHandler={this.resetEvent}>
          Reset Game
        </ControlButton>
        <ControlButton value="SUBMIT" eventHandler={this.submitEvent}>
          Submit Score
        </ControlButton>
        <ModalButton linkModal={config.modals.rules}>Rules</ModalButton>
      </div>
    );
  }
}

export default GameHeaderControls;
