import ConsentGdpr from '../../../../build/contracts/ConsentGdpr.json'
import { loginUser } from '../loginbutton/LoginButtonActions'
import store from '../../../store'

const contract = require('truffle-contract')

export function createConsent() {
    let web3 = store.getState().web3.web3Instance

    if (typeof web3 !== 'undefined') {
        return function(dispatch) {
            const gdpr = contract(ConsentGdpr)
            gdpr.setProvider(web3.currentProvider)

            var gdprInstance

            web3.eth.getCoinbase((error, coinbase) => {
                if (error) {
                    console.error(error);
                }

                gdpr.deployed().then(function(instance) {
                    gdprInstance = instance

                    gdprInstance.setConsent('candidate', 'consentType', 'label', 'enterpriseName', {from: coinbase})
                    .then(function(result) {
                        console.log(result)
                        return dispatch(loginUser())
                    })
                    .catch(function(result) {
                        console.error(result)
                    })
                })
            })
        }
    } else {
        console.error('Web3 is not initialized.');
    }
}