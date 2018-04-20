import React from 'react';
import Modal from './Modal';
import config from '../../config';

class RulesModal extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Modal modalName={config.modals.rules.modalName}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">{config.modals.rules.heading}</h4>
        </div>

        <div className="modal-body">
          <p>The aim is to get as high a score as possible, to get yourself onto the leaderboard!</p>
          <p>For each first-to-5 round against the AI, you'll get points for the following:</p>
          <ul>
            <li>
              Winning a duel: <strong>1000 points</strong>
            </li>
            <li>
              Drawing a duel: <strong>250 points</strong>
            </li>
            <li>
              An extra <strong>1000 points</strong> per point difference against the opponent when you win!
            </li>
            <li>E.g. if you win 5-3, you'll be awarded an extra 2000 points for the lead!</li>
          </ul>
          <p>After winning a round, you'll be able to play a best-of-1 round to double your score!</p>
          <p>After losing 3 rounds to the AI, the game will be over and you'll be able to submit your high score.</p>
          <p>You'll be able to submit your score at any time, but then all of your progress will be reset.</p>
          <p>Good luck, and see you on the leaderboard!</p>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

export default RulesModal;
