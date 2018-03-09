import React, { Component } from 'react';

class ConsentEnterprise extends Component {
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
            <table className="pure-table pure-table-horizontal">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Year</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Honda</td>
                        <td>Accord</td>
                        <td>2009</td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Toyota</td>
                        <td>Camry</td>
                        <td>2012</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Hyundai</td>
                        <td>Elantra</td>
                        <td>2010</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    render() {
        return (
            <div >
                Hello {this.props.name}
                {this.renderTable()}
            </div>
        )
    }
}

export default ConsentEnterprise;