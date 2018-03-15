import React, { Component } from 'react';

class ConsentCandidat extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: this.props.name,
            indexes: this.props.candidatindexconsents,
            showConsent: this.props.showConsent,
            consent: this.props.candidatconsent,
            consentId: 0
        }
    }

    componentWillMount(){
        const { loadIndexConsent } = this.props;
        loadIndexConsent("idriss","Talentsoft")

    }

    renderBody(indexconsents) {
        let counter = 0;
        const {loadConsent} = this.props;
        if (indexconsents) {
            let returns = indexconsents.map(function (index) {
                counter++;
                return <tr key={counter}>
                    <td>{counter}</td>
                    <td>{index}</td>
                    <td>
                        <button className="pure-button" value={index} onClick={()=>loadConsent(index)}>Details</button>
                    </td>
                </tr>
            })
            return returns
        }
        return <tr></tr>
    }

    renderTable(indexconsents) {
        return (
            <table className="pure-table pure-table-horizontal">
                <thead>
                    <tr>
                        <th>Consents num</th>
                        <th>Consent ID</th>
                        <th>Show Details</th>
                    </tr>
                </thead>

                <tbody>
                    {this.renderBody(indexconsents)}
                </tbody>
            </table>
        )
    }

    shouldComponentUpdate() {
        return true;
    }

    renderDetails(index, consent) {
        console.log(index)
        console.log('consent candidat')
        console.log(consent)
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
                Hello {this.props.name}. There is {this.props.candidatindexconsents.length} consents for this enterprise
                {this.renderTable(this.props.candidatindexconsents)}
            </div>
        )
    }
}

export default ConsentCandidat;

  // 
//   {this.renderDetails(this.props.showConsent, this.props.consent)}