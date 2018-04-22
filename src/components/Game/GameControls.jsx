import React from 'react';
import PropTypes from 'prop-types';
import GameActionButton from '../Buttons/GameActionButton';
import rockSvg from '../../images/rock.svg';
import paperSvg from '../../images/paper.svg';
import scissorsSvg from '../../images/scissors.svg';

class GameControls extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <GameActionButton style={this.props.style} value="rock" eventHandler={this.props.eventHandler} src={rockSvg} />
        <GameActionButton style={this.props.style} value="paper" eventHandler={this.props.eventHandler} src={paperSvg} />
        <GameActionButton style={this.props.style} value="scissors" eventHandler={this.props.eventHandler} src={scissorsSvg} />
      </div>
    );
  }
}

GameControls.propTypes = {
  eventHandler: PropTypes.func,
  style: PropTypes.string
};

export default GameControls;
