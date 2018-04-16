import { connect } from 'react-redux';
import React from 'react';
import Layout from './Layout';
import config from '../config';
import rockSvg from '../images/rock.svg';
import paperSvg from '../images/paper.svg';
import scissorsSvg from '../images/scissors.svg';
import ModalButton from '../components/Buttons/ModalButton';
import ControlButton from '../components/Buttons/ControlButton';
import GameActionButton from '../components/Buttons/GameActionButton';


class GameArea extends React.Component {
    constructor(props) {
        super(props)

        this.gameControlButton = this.gameControlButton.bind(this);
    }

    gameControlButton(event) {
        if(!this.props.game.started) {
            this.props.dispatch.gameStarted();
        }
    }

    render() {
        return (
            <Layout>
                <div style={styles.baseStyles}>
                    <div style={{ margin: '0 auto', width: '80vw', maxWidth: '1100px' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-around',
                                    alignItems: 'center', padding: '1.5em 0 0', maxWidth: '650px', margin: '0 auto' }}>
                            <ControlButton eventHandler={this.gameControlButton}>Reset Game</ControlButton>
                            <ControlButton eventHandler={this.gameControlButton}>Submit Score</ControlButton>
                            <ModalButton linkModal={config.modals.rules} className="btn btn-lg">Rules</ModalButton>
                        </div>

                        {this.props.game.started ? null :
                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                <h2>Hit a Button to Begin</h2>
                            </div>
                        }

                        <div style={{ border: '1px solid grey', marginTop: '1em'}}>
                            <div style={{ display: 'flex', justifyContent: 'center'}}>
                                <label style={{ paddingTop: '10px', fontSize: '1.5em' }}>
                                    Score: <span style={styles.scoreHighlight}>{this.props.game.score}</span>
                                </label>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 5vw' }}>
                                <label>Rounds Won: <span style={styles.scoreHighlight}>{this.props.game.roundsWon}</span></label>
                                <label>Rounds Lost: <span style={styles.scoreHighlight}>{this.props.game.roundsLost}</span> / 3</label>
                                <label>Multipliers Won: <span style={styles.scoreHighlight}>{this.props.game.multipliers}</span></label>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around', maxWidth: '650px', margin: '1.5em auto 1.5em auto'}}>
                            <label className="score-label">Victory Points: <span id="victory-score">0</span></label>
                            <label className="score-label">Player Score: <span id="player-score">0</span></label>
                            <label className="score-label">Computer Score: <span id="cpu-score">0</span></label>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                            <GameActionButton value="rock" eventHandler={this.gameControlButton} src={rockSvg}></GameActionButton>
                            <GameActionButton value="paper" eventHandler={this.gameControlButton} src={paperSvg}></GameActionButton>
                            <GameActionButton value="scissors" eventHandler={this.gameControlButton} src={scissorsSvg}></GameActionButton>
                        </div>

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
        game: {
            started: state.game.started,
            score: state.game.score,
            roundsWon: state.game.roundsWon,
            roundsLost: state.game.roundsLost,
            multipliers: state.game.multipliers
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

const styles = {
    baseStyles: {
        fontSize: '1.5em',
        lineHeight: '1.6em'
    },
    scoreHighlight: {
        color: 'green'
    }
};

export default connect(mapState, mapDispatch)(GameArea);