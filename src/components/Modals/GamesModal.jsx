import React from 'react';
import Modal from './Modal';

class GamesModal extends React.Component {
    constructor(props) {
        super(props)
    }

    tableRows() {
        if(this.props.data) {
            let data = [];

            for(let game in this.props.data) {
                const gameData = this.props.data[game];
                data.push(<p key={gameData.gameID}>
                    Player: <strong style={{color:'red'}}>{gameData.username}</strong> - 
                    Score: {gameData.score} - 
                    Date: {gameData.date}
                    </p>
                );
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

export default GamesModal;