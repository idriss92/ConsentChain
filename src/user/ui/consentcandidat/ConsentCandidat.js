import React, { Component } from 'react';

class ConsentCandidat extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name
        }
    }

    componentWillMount(){
        let res = this.props.loadConsent(this.state.name)
        console.log(res);
    }
    renderTable() {
        return (
            <div>
                <div className="company">
                    <h3>Unicorn startup</h3>
                    <div>
                        <input type="checkbox"/>
                        <label>contact me for opportunity: Data engineer</label>
                    </div>
                    <div> <input type="checkbox"/>
                        <label>contact me for all opportunities</label>
                    </div>
                </div>
                <div className="company">
                    <h3>Coolblue</h3>
                    <div>
                        <input type="checkbox" checked="yes"/>
                        <label>contact me for opportunity: Devops engineer<span className="consent-date"> - changed on 2018-03-01</span></label>
                    </div>
                    <div> <input type="checkbox"/>
                        <label>contact me for all opportunities</label>
                    </div>
                </div>
                <div className="company">
                    <h3>Dior</h3>
                    <div>
                        <input type="checkbox" checked="yes"/>
                        <label>contact me for opportunity: Software developer <span className="consent-date"> - changed on 2018-03-02</span></label>
                    </div>
                    <div> <input type="checkbox"/>
                        <label>contact me for all opportunities</label>
                    </div>
                </div>
                <div className="submitDiv">
                    <input type="submit"/>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div >
                
                {this.renderTable()}
            </div>
        )
    }
}

export default ConsentCandidat;