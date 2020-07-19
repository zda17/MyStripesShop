import React, { useState} from 'react';
import '../stylesheets/Home.scss';


//components
import Header from '../components/Header';
import Banner from '../components/Banner';
import Image from '../components/Image';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeSection: "mens"
        }
    }

    render() {
        return(
            <div className="content-wrap">
                <Banner />
                <section className="featured-collections">
                    <header>
                        <h3 className="sub-heading">NEW ARRIVALS</h3>
                        <div className="tab-button-container">
                            <button className={this.state.activeSection === 'mens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({activeSection: "mens"})}>MENS</button>
                            <button className={this.state.activeSection === 'womens' ? "tab-item is-active" : "tab-item"} onClick={() => this.setState({activeSection: "womens"})}>WOMENS</button>
                        </div>
                    </header>
                </section>
            </div>
        );
    }
}

export default Home;