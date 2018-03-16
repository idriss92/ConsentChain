import ConsentGdprContract from '../../../../build/contracts/ConsentGdpr.json'
import store from '../../../store'

const contract = require('truffle-contract')

export const CONSENT_CANDIDAT_SUCCESS = 'CONSENT_CANDIDAT_SUCCESS';
export const CONSENTINDEX_CANDIDAT_SUCCESS = 'CONSENTINDEX_CANDIDAT_SUCCESS';
export const REVOKE_CONSENT_SUCCESS = 'REVOKE_CONSENT_SUCCESS';


function revokeConsentSucesss() {
    return {
        type: REVOKE_CONSENT_SUCCESS,
    }
}

function getCandidatConsentSuccess(consent) {
    return {
        type: CONSENT_CANDIDAT_SUCCESS,
        payload: consent
    }
}

function getCandidatIndexConsentSuccess(indexconsents) {
    return {
        type: CONSENTINDEX_CANDIDAT_SUCCESS,
        payload: indexconsents
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
                    consentInstance.getConsentByCandidateByEnteprise(_candidate,"Talentsoft",{from: coinbase})
                    .then(function(result) {
                        // console.log(result);
                        // let consent = {
                        //     "index": result[0].c[0],                            
                        //     "enterpriseName": result[1],
                        //     "candidate": result[2],
                        //     "consentType": result[3],
                        //     "label": result[4],
                        //     "isActive": result[5],
                        //     "createdDate": result[6].c[0],
                        //     "expiryDate": result[7].c[0]
                        // }
                        return dispatch(getCandidatConsentSuccess(result[5]))
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

export function revokeConsent(isActive) {
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
                    consentInstance.revokeFirstConsent(isActive,{from: coinbase, gas:200000})
                    .then(function(result) {
                        console.log(result)
                        return dispatch(revokeConsentSucesss())
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

export function getConsentIndex(_candidate, _enterpriseName) {
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
                    let indexes = []
                    consentInstance.getConsentsIndexByCandidateByEnterprise(_candidate, _enterpriseName,{from: coinbase})
                    .then(function(result) {
                        // console.log(result)
                        result.forEach(function(index) {
                            indexes.push(index.c[0])
                        })
                        // console.log(indexes)
                        return dispatch(getCandidatIndexConsentSuccess(indexes))
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

export function getConsentByIndex(index) {
    let web3 = store.getState().web3.web3Instance

    if(typeof web3 !== 'undefined') {
        return function(dispatch) {
            const gdpr = contract(ConsentGdprContract)
            gdpr.setProvider(web3.currentProvider)

            var gdprInstance

            web3.eth.getCoinbase((error, coinbase) => {
                if (error) {
                    console.error(error)
                }

                gdpr.deployed().then(function(instance) {
                    gdprInstance = instance
                    let consent
                    gdprInstance.getConsentsByIndexByEnterprise("Talentsoft", index, {from: coinbase})
                    .then(function(result) {
                        consent = {
                            "index": result[0].c[0],                            
                            "enterpriseName": result[1],
                            "candidate": result[2],
                            "consentType": result[3],
                            "label": result[4],
                            "isActive": result[5],
                            "createdDate": result[6].c[0],
                            "expiryDate": result[7].c[0]
                        }
                        return dispatch(getCandidatConsentSuccess(consent))
                    })
                    .catch(function(result) {
                        console.error(result)
                    })

                })
            })
        }
    } else {
        console.error('Web3 is not initialized.')
    }
}