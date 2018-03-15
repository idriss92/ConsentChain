import ConsentGdprContract from '../../../../build/contracts/ConsentGdpr.json'
// import AuthenticationContract from '../../../../build/contracts/Authentication.json'

import store from '../../../store'

const contract = require('truffle-contract')

export const CONSENT_CANDIDAT_SUCCESS = 'CONSENT_CANDIDAT_SUCCESS'
export const GET_CONSENTS_INDEXES_DONE = 'GET_CONSENTS_INDEXES_DONE'
export const GET_CONSENTS_SUCCESS = 'GET_CONSENTS_SUCCESS'

function getCandidatConsentSuccess(consents) {
    return {
        type: CONSENT_CANDIDAT_SUCCESS,
        payload: consents
    }
}

function getConsentIndexes(indexes) {
    return {
        type: GET_CONSENTS_INDEXES_DONE,
        payload: indexes
    }
}

function getConsentSuccess(consents) {
    return {
        type: GET_CONSENTS_SUCCESS,
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
                    consentInstance.getConsentLabelsIndexByEnterprise("Talentsoft",{from: coinbase})
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

export function getConsentIndex() {
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
                    let indexes = [];
                    gdprInstance.getConsentsIndexByEnterprise("Talentsoft", {from: coinbase})
                    .then(function(allIndex) {
                        allIndex.forEach(function(index) {
                            indexes.push(index.c[0])
                        })
                        return dispatch(getConsentIndexes(indexes))
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
                            "candidate": result[1],
                            "consentType": result[2],
                            "label": result[3],
                            "isActive": result[4],
                            "enterpriseName": result[5],
                            "createdDate": result[6].c[0],
                            "expiryDate": result[7].c[0]
                        }
                        return dispatch(getConsentSuccess(consent))
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