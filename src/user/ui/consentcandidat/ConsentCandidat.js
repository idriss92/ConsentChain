import React, { Component } from 'react';

class ConsentCandidat extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            indexes: this.props.candidatindexconsents,
            showConsent: this.props.showConsentCandidat,
            candidatconsent: this.props.candidatconsent,
            consentId: 0,
            isactive: true
        }
    }

    componentWillMount(){
        console.log(this.props)
        const { loadIndexConsent } = this.props;
        loadIndexConsent(this.props.name,"Talentsoft")

        if (this.props.candidatconsent) this.setState({isactive : true })
        else this.setState({isactive : false })
        
    }


    componentDidUpdate(props) {
    }

    handlesubmit(event) {
        event.preventDefault()
        this.props.revoke(this.state.isactive)
    }

    handleOnchangeYes(){
        this.setState({isactive : false })
    }
    
    handleOnchangeFalse() {
        this.setState({isactive : true })
    }

    renderTable(indexconsents) {
        let to = indexconsents?<input type="checkbox" checked="yes" onChange={this.handleOnchangeYes.bind(this)}/>:<input type="checkbox" onChange={this.handleOnchangeFalse.bind(this)} />
        return (
            <form onSubmit={this.handlesubmit.bind(this)}>
                <div className="company">
                    <h3>Coolblue</h3>
                    <div>
                        <input type="checkbox" checked="yes" onChange={console.log()}/>
                        <label>contact me for opportunity: Devops engineer<span className="consent-date"> - changed on 2018-03-01</span></label>
                    </div>
                    <div> <input type="checkbox" defaultChecked={false} onChange={console.log()}/>
                        <label>contact me for all opportunities</label>
                    </div>
                </div>
                <div className="company">
                    <h3>Dior</h3>
                    <div>
                        <input type="checkbox" checked="yes" onChange={console.log()}/>
                        <label>contact me for opportunity: Software developer <span className="consent-date"> - changed on 2018-03-02</span></label>
                    </div>
                    <div> <input type="checkbox" defaultChecked={false} onChange={console.log()}/>
                        <label>contact me for all opportunities</label>
                    </div>
                </div>

                <div className="company">
                    <h3>Talentsoft</h3>
                    <div>
                        {to}
                        <label>contact me for opportunity: Software developer <span className="consent-date"> - changed on 2018-03-02</span></label>
                    </div>
                </div>
                   
                
                <div className="submitDiv">
                    <input type="submit"/>
                </div>
            </form>
        )
    }
    
    renderButtonActivated(isActivated) {
        if(isActivated) {
            return <button className="pure-button green">Activated</button>
        }
        return <button className="pure-button red">Desactivated</button>
    }

    render() {
        return (
            <div >
                {this.renderTable(this.state.isactive)}
            </div>
        )
    }
}

export default ConsentCandidat;

   
