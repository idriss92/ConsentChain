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
                    let indexes = []
                    gdprInstance.getConsentsIndexByEnterprise("enterpriseName", {from: coinbase})
                    .then(function(result) {
                        result.forEach(function(index) {
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
                    let consents = []
                    gdprInstance.getConsentsByIndexByEnterprise("enterpriseName", index, {from: coinbase})
                    .then(function(result) {
                        console.log()
                        result.forEach(function(index) {
                            // consents.push(index.c[0])
                            // console.log(indexes)
                            // gdprInstance.getConsentsByIndexByEnterprise("enterpriseName", index.c[0], { from: coinbase})
                            // .then(function(res) {
                            //     // console.log(res)
                            //     consents.push(res)
                            // })
                            // .catch(function(res) {
                            //     console.error(res)
                            // })
                        })
                        return dispatch(getConsentSuccess(consents))
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