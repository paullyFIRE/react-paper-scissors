import React from 'react';
import ModalButton from './Buttons/ModalButton';
import LinkButton from './Buttons/LinkButton';
import { Link } from 'react-router-dom';
import config from '../config';

import styles from './Header.scss';

class Header extends React.Component {
    constructor() {
        super()
    }

    render () {
        return (
            <div className='header'>
                <div>
                    <Link to='/'>
                        <h1 className="title">{config.title}</h1>
                    </Link>
                </div>
                <div className='button-wrapper'>
                    <ModalButton  linkModal={config.modals.leaderboard}/>
                    <ModalButton  linkModal={config.modals.games}/>
                    <LinkButton >{location.pathname == '/' ? 'About' : 'Home'}</LinkButton>
                </div>
            </div>
        );
    }
}

export default Header;