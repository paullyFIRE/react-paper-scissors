import { connect } from 'react-redux';
import React from 'react';
import Layout from './Layout';
import GameScoreBoard from '../components/Game/GameScoreBoard';
import GameHeaderControls from '../components/Game/GameHeaderControls';
import GameControls from '../components/Game/GameControls';
import config from '../config';

class GameArea extends React.Component {
    constructor() {
        super()

        this.gameEventHandler = this.gameEventHandler.bind(this);
    }

    gameEventHandler(event) {
        if(event.nativeEvent.srcElement.value == "SUBMIT") {
            this.props.dispatch("SUBMIT_SCORE");
        } else if (event.nativeEvent.srcElement.value == "RESET") {
            this.props.dispatch("RESET_GAME");
        } else {
            this.props.dispatch("GAME_CONTROL_ENTRY", event.nativeEvent.srcElement.alt)
        }
    }
    
    render() {
        return (
            <Layout>
                <div style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                    <div style={{ margin: '0 auto', width: '80vw', maxWidth: '1100px' }}>

                        <GameHeaderControls eventHandler={this.gameEventHandler}/>

                        
                        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                            <h2>{this.props.gameState.statusText}</h2>
                        </div>

                        <GameScoreBoard />

                        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '650px', margin: '1.5em auto 1.5em auto'}}>
                            <label className="score-label">Player Score: {this.props.gameState.currentRound.pointsPlayer} / {this.props.gameState.roundLimit}</label>
                            <label className="score-label">Draws: {this.props.gameState.currentRound.pointsDraw} </label>
                            <label className="score-label">Computer Score: {this.props.gameState.currentRound.pointsCPU} / {this.props.gameState.roundLimit}</label>
                        </div>

                        <GameControls eventHandler={this.gameEventHandler} />

                        <div id="round-history">
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

const mapState = (state) => {
    return {
        gameState: {
            started: state.game.started,
            statusText: state.game.statusText,
            score: state.game.score,
            multipliers: state.game.multipliers,
            currentRound: state.game.rounds[0],
            roundLimit: config.roundLimit
        }
    };
};

const mapDispatch = (dispatch) => {
    return {
        dispatch(type, data = null) { dispatch({ type: type, data: data })}
    }
}

export default connect(mapState, mapDispatch)(GameArea);