import React, { Component } from 'react';

class ConsentEnterprise extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            indexes: this.props.indexconsents,
            consent: this.props.consent,
            consentId: 0,
            showConsent: this.props.showConsent
        }
    }


    componentWillMount() {
        const { loadConsentIndexes } = this.props;
        loadConsentIndexes()
    }

    renderBody(indexconsents) {
        let counter = 0;
        const {loadConsentByIndex} = this.props;
        if (indexconsents) {
            let returns = indexconsents.map(function (index) {
                counter++;
                return <div className="candidate">
                        <div className="candidate-name">Tom</div>
                        <div className="candidate-consents">
                            <div>Contact for opportunity: software developer <a href="javascript:void(0);" onClick={()=>loadConsentByIndex(index)}>details</a></div>
                            <div></div>
                        </div>
                    </div>
            })
            return returns
        }
        return <tr></tr>
    }

    renderTable(indexconsents) {
        return (
            <div className="company-block">
                
                <div className="candidate">
                    <div className="candidate-name">Kedar Lee</div>
                    <div className="candidate-consents">
                        <div>Contact for opportunity: CTO  <a href="">details</a></div>
                        <div></div>
                    </div>
                </div>
                <div className="candidate">
                    <div className="candidate-name">Cécile Tesson</div>
                    <div className="candidate-consents">
                        <div>Contact for all opportunities</div>
                        <div></div>
                    </div>
                </div>
                    {this.renderBody(indexconsents)}
            </div>  
        )
    }

    shouldComponentUpdate() {
        return true;
    }

    renderDetails(index, consent) {
        // console.log(index)
        if (index)
            return <table className="pure-table pure-table-horizontal">
                <tbody>
                    <tr>
                        <td>enterprise name</td>
                        <td>{consent.enterpriseName}</td>
                    </tr>
                    <tr>
                        <td>candidate</td>
                        <td>{consent.candidate}</td>
                    </tr>
                    <tr>
                        <td>label</td>
                        <td>{consent.label}</td>
                    </tr>
                    <tr>
                        <td>consentType</td>
                        <td>{consent.consentType}</td>
                    </tr>
                    <tr>
                        <td>isActive</td>
                        <td>{this.renderButtonActivated(consent.isActive)}</td>
                    </tr>
                    <tr>
                        <td>createdDate</td>
                        <td>{consent.createdDate}</td>
                    </tr>
                    <tr>
                        <td>expiryDate</td>
                        <td>{consent.expiryDate}</td>
                    </tr>
                </tbody>
            </table>
        return <div></div>
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

                {this.renderTable(this.props.indexconsents)}
                {this.renderDetails(this.props.showConsent, this.props.consent)}
            </div>
        )
    }
}

export default ConsentEnterprise;