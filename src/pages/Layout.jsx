import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Layout extends React.Component {
    render(props) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                <div style={{ flex: '1 0 auto' }}>
                    <Header modals={this.props.modals} title={this.props.title} />
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Layout;