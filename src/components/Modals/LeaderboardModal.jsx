import React from 'react';
import Modal from './Modal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';

class LeaderboardModal extends React.Component {
  tableRows(apiData) {
    if (Object.keys(apiData).length > 0) {
      let data = [];
      let leaderBoardPosition = 1;

      for (let game in this.props.data) {
        const gameData = this.props.data[game];
        data.push(
          <p key={gameData.gameID}>
            {leaderBoardPosition} - Player: <strong style={{ color: 'red' }}>{gameData.username}</strong> - Score:{' '}
            <strong>{gameData.score}</strong> - Date: {gameData.date}
          </p>
        );
        leaderBoardPosition++;
      }
      return data;
    } else {
      return <p>No data available... sorry. It&apos;s probably the database.</p>;
    }
  }

  render() {
    return (
      <Modal modalName={this.props.modal.modalName}>
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
          <h4 className="modal-title">{this.props.modal.heading}</h4>
        </div>

        <div className="modal-body">{this.tableRows(this.props.data)}</div>

        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">
            Close
          </button>
        </div>
      </Modal>
    );
  }
}

LeaderboardModal.propTypes = {
  modal: PropTypes.object,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

const mapState = state => {
  return {
    data: state.api.leaderboard,
    modal: config.modals.leaderboard
  };
};

export default connect(mapState)(LeaderboardModal);
