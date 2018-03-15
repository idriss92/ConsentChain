import ConsentGdpr from '../../../../build/contracts/ConsentGdpr.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const CONSENT_CREATED_SUCCESS = 'CONSENT_CREATED_SUCCESS'

function createConsentSuccess() {
    return {
        type: CONSENT_CREATED_SUCCESS,
        payload: true
    }
}

export function createConsent(candidate, consentType, label, enterpriseName) {
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

                    gdprInstance.setConsent(candidate, consentType, label, enterpriseName, {from: coinbase})
                    .then(function(result) {
                        console.log(result)
                        return dispatch(createConsentSuccess())
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