import ConsentGdprContract from '../../../../build/contracts/ConsentGdpr.json'
// import AuthenticationContract from '../../../../build/contracts/Authentication.json'

// import {} from '../'
import store from '../../../store'

const contract = require('truffle-contract')

export const CONSENT_CANDIDAT_SUCCESS = 'CONSENT_CANDIDAT_SUCCESS';

function getCandidatConsentSuccess(consents) {
    return {
        type: CONSENT_CANDIDAT_SUCCESS,
        payload: consents
    }
}

export function getCandidatConsent(_candidate) {
    let web3 = store.getState().web3.web3Instance

    if(typeof web3 !== 'undefined') {
        return function(dispatch) {
            // const authentication = contract(AuthenticationContract)
            const consentGdpr = contract(ConsentGdprContract)
            consentGdpr.setProvider(web3.currentProvider)
            // authentication.setProvider(web3.currentProvider)

            var consentInstance
            // var authenticationInstance

            web3.eth.getCoinbase((error, coinbase) => {
                if (error) {
                    console.error(error);
                    console.log('error')
                }
                consentGdpr.deployed().then(function(instance){
                    consentInstance = instance
                    consentInstance.getConsentLabelsIndexByEnterprise("TAL",{from: coinbase})
                    .then(function(result) {
                        console.log(result.length);
                        return dispatch(getCandidatConsentSuccess(result.length))
                    })
                    .catch(function(result) {
                        console.log(result)
                    })
                })
            })            
        }
    }
    else {
        console.error('Web3 is not initialized');
    }
}