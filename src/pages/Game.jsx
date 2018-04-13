import React from 'react';
import Layout from './Layout';

class GameArea extends React.Component {
    render(props) {
        return (
            <div>
                <Layout {...this.props}>
                    <div style={{ margin: '0 auto', width: '650px' }}>
                        <h1>Hello, this is the game page!</h1>
                        <p>lorem ipsum lorem ipsum lorem
                        lorem ipsum lorem ipsum lorem
                        lorem ipsum lorem ipsum lorem
                        lorem ipsum lorem ipsum lorem
                        lorem ipsum lorem ipsum lorem
                        lorem ipsum lorem ipsum lorem</p>
                    </div>
                </Layout>
            </div>
        );
    }
}

export default GameArea;