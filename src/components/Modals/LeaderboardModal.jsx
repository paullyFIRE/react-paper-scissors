import React from 'react';
import Modal from './Modal';

class LeaderboardModal extends React.Component {
    constructor(props) {
        super(props)
    }

    tableRows() {
        if(this.props.data) {
            let data = [];
            let leaderBoardPosition = 1;

            for(let game in this.props.data) {
                let gameData = this.props.data[game];
                data.push(<p key={gameData.gameID}> {leaderBoardPosition} - 
                    Player: <strong style={{color:'red'}}>{gameData.username}</strong> - 
                    Score: {gameData.score} - 
                    Date: {gameData.date}
                    </p>
                );
                leaderBoardPosition++;
            }

            return data;
        }
    }

    render(props) {
        return (
            <Modal modalName={this.props.modalName}>
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                    <h4 className="modal-title">{this.props.heading}</h4>
                    <p>{this.props.description}</p>
                </div>

                <div className="modal-body">
                    {this.tableRows()}
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </Modal>
        );
    }
}

export default LeaderboardModal;