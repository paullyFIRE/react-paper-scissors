import React from 'react';
import { connect } from 'react-redux';
import config from '../../config';

class GameScoreBoard extends React.Component {
    render() {
        return (
            <div style={{ border: '1px solid grey', marginTop: '1em'}}>
                <div style={{ display: 'flex', justifyContent: 'center'}}>
                    <label style={{ paddingTop: '10px', fontSize: '1.5em' }}>
                        Score: <span style={{ color: 'green' }}>{this.props.gameState.score}</span>
                    </label>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 5vw' }}>
                    <label>Rounds Won: <span style={{ color: 'green' }}>{this.props.gameState.roundsWon}</span></label>
                    <label>Rounds Lost: <span style={{ color: 'green' }}>{this.props.gameState.roundsLost}</span> / {this.props.gameState.lossLimit}</label>
                    <label>Multipliers Won: <span style={{ color: 'green' }}>{this.props.gameState.multipliers}</span></label>
                </div>
            </div>
        );
    }
};

const mapState = (state) => {
    return {
        gameState: {
            started: state.game.started,
            score: state.game.score,
            roundsWon: state.game.roundsWon,
            roundsLost: state.game.roundsLost,
            multipliers: state.game.multipliers,
            lossLimit: config.lossLimit
        }
    }
};

export default connect(mapState)(GameScoreBoard);