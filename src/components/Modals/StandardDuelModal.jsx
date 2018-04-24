import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import config from '../../config';
import DuelModal from './DuelModal';
import styles from './StandardDuelModal.scss';

class StandardDuelModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      default: {
        slider: styles.sliderSchemeInitial
      },
      results: {
        WON: {
          slider: styles.sliderSchemeWin,
          points: 1000
        },
        LOST: {
          slider: styles.sliderSchemeLose,
          points: 0
        },
        DREW: {
          slider: styles.sliderSchemeDraw,
          points: 250
        }
      }
    };
  }

  render() {
    return <DuelModal modal={this.props.modal} results={this.state.results} default={this.state.default} />;
  }
}

StandardDuelModal.propTypes = {
  modal: PropTypes.object
};

const mapState = state => {
  return {
    modal: config.modals.standardDuel
  };
};

export default connect(mapState)(StandardDuelModal);
