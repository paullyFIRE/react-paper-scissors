import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GameActionButton from '../Buttons/GameActionButton';
import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

class GameControls extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          paddingTop: '20px'
        }}
      >
        <GameActionButton value="rock" eventHandler={this.props.beginDuel} src={rockSvg} />
        <GameActionButton value="paper" eventHandler={this.props.beginDuel} src={paperSvg} />
        <GameActionButton value="scissors" eventHandler={this.props.beginDuel} src={scissorsSvg} />
      </div>
    );
  }
}

GameControls.propTypes = {
  beginDuel: PropTypes.func,
  style: PropTypes.string
};

const mapDispatch = dispatch => {
  return {
    beginDuel(event) {
      dispatch({
        type: 'GAME_CONTROL_ENTRY',
        data: event.nativeEvent.srcElement.alt
      });
    }
  };
};

export default connect(null, mapDispatch)(GameControls);
