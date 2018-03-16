import ConsentGdprContract from '../../../../build/contracts/ConsentGdpr.json'
// import AuthenticationContract from '../../../../build/contracts/Authentication.json'

import store from '../../../store'

const contract = require('truffle-contract')

export const CONSENT_CANDIDAT_SUCCESS = 'CONSENT_CANDIDAT_SUCCESS'
export const GET_CONSENTS_INDEXES_DONE = 'GET_CONSENTS_INDEXES_DONE'
export const GET_CONSENTS_SUCCESS = 'GET_CONSENTS_SUCCESS'
export const SET_CONSENTLABEL_SUCCESS = 'SET_CONSENTLABEL_SUCCESS'
export const RESET_CONSENT_SUCCESS = 'RESET_CONSENT_SUCCESS'

function getCandidatConsentSuccess(consents) {
    return {
        type: CONSENT_CANDIDAT_SUCCESS,
        payload: consents
    }
}

function resetConsent() {
    return {
        type: RESET_CONSENT_SUCCESS,
        payload: false
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

function setConsentLabel() {
    return {
        type: SET_CONSENTLABEL_SUCCESS,
        payload: null
    }
}


export function resetConsentOnEnterprise() {
    return function (dispatch) {
        return dispatch(resetConsent())
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
                }
                consentGdpr.deployed().then(function(instance){
                    consentInstance = instance
                    consentInstance.getConsentLabelsIndexByEnterprise("Talentsoft",{from: coinbase})
                    .then(function(result) {
                        console.log(result);
                        return dispatch(getCandidatConsentSuccess(result.length))
                    })
                    .catch(function(result) {
                        console.error(result)
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
                        // console.log(result)
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

export function createConsentLabel(enterpriseName, consentType, consentLabel) {
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
                    // let consent
                    gdprInstance.setConsentLabel(consentLabel, enterpriseName, consentType, {from: coinbase})
                    .then(function(result) {
                        console.log('create consent label')
                        // console.log(result)
                        return dispatch(setConsentLabel())
                        // consent = {
                        //     "index": result[0].c[0],                            
                        //     "enterpriseName": result[1],
                        //     "candidate": result[2],
                        //     "consentType": result[3],
                        //     "label": result[4],
                        //     "isActive": result[5],
                        //     "createdDate": result[6].c[0],
                        //     "expiryDate": result[7].c[0]
                        // }
                        // return dispatch(getConsentSuccess(consent))
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