import { connect } from 'react-redux';
import React from 'react';
import Layout from './Layout';
import GameScoreBoard from '../components/Game/GameScoreBoard';
import GameHeaderControls from '../components/Game/GameHeaderControls';
import GameControls from '../components/Game/GameControls';


class GameArea extends React.Component {
    constructor() {
        super()

        this.gameControlButton = this.gameControlButton.bind(this);
    }

    gameControlButton(event) {
        if(!this.props.gameState.started) {
            this.props.dispatch.gameStarted();
        }
    }

    render() {
        return (
            <Layout>
                <div style={{ fontSize: '1.5em', lineHeight: '1.6em' }}>
                    <div style={{ margin: '0 auto', width: '80vw', maxWidth: '1100px' }}>

                        <GameHeaderControls eventHandler={this.gameControlButton}/>

                        {this.props.gameState.started ? null :
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <h2>Hit a Button to Begin</h2>
                            </div>
                        }

                        <GameScoreBoard />

                        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '650px', margin: '1.5em auto 1.5em auto'}}>
                            <label className="score-label">Victory Points: <span id="victory-score">0</span></label>
                            <label className="score-label">Player Score: <span id="player-score">0</span></label>
                            <label className="score-label">Computer Score: <span id="cpu-score">0</span></label>
                        </div>

                        <GameControls eventHandler={this.gameControlButton} />

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
            started: state.game.started
        }
    };
};

const mapDispatch = (dispatch) => {
    return {
        dispatch: {
            gameStarted() { dispatch({ type: 'STARTED' }) }
        }
    }
}

export default connect(mapState, mapDispatch)(GameArea);