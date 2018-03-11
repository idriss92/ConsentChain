pragma solidity ^0.4.2;

import './zeppelin/ownership/Ownable.sol';

contract ConsentGdpr {

    //** public values */
    Consent[] public totalConsents;
    string[] public enterprises;
    ConsentLabel[] public labels;


    //** events */
    event NewConsent(string candidate, string consentType);
    event ConsentIsRevoked(string _candidate, string _consentType, string _enterpriseName);
    event SetEnterprise(string _enterpriseName);
    event SetConsentLabel(string _consentLabel);

    //** modifiers */
    modifier consentLabelDontExistsForEnterprise(string _consentType, string _enterpriseName) {
        bool val = false;
        for (uint i = 0; i < labels.length; i++) {
            require(keccak256(labels[i].consentType) == keccak256(_consentType));
            require(keccak256(labels[i].enterpriseName) == keccak256(_enterpriseName));
            val = true;
        }
        require(val == false);
        _;
    }

    modifier enterpriseDontExists(string _enterpriseName) {
        bool val = false;
        for (uint i = 0; i < enterprises.length; i++) {
            require(keccak256(enterprises[i]) == keccak256(_enterpriseName));
            val = true;
        }
        require(val == false);
        _;
    }
    enum Actor { individu, enterprise }

    //** structs */
    struct Consent {
        uint index;
        string enterpriseName;
        string candidate;
        string label;
        string consentType;
        bool isActive;
        uint createdDate;
        uint expiryDate;
    }
    struct ConsentLabel {
        uint index;
        string label;
        string enterpriseName;
        string consentType;
    }

    // used
    function setEnterprise(string _enterpriseName) public enterpriseDontExists(_enterpriseName) {
        enterprises.push(_enterpriseName);
        SetEnterprise(_enterpriseName);
    }


    function getConsentLabels(string _enterpriseName) internal view returns (ConsentLabel[]) {
        ConsentLabel[] memory _labels = new ConsentLabel[](labels.length);
        ConsentLabel[] memory thislabels = labels;
        uint counter = 0;
        for (uint i = 0; i < thislabels.length; i++) {
            require(keccak256(thislabels[i].enterpriseName) == keccak256(_enterpriseName));
            _labels[counter] = thislabels[i];
            counter ++;
        }
        return (_labels);
    }

    //** consent concern */
    // is working
    function getConsentsIndexByCandidateByEnterprise(string _candidate, string _enterpriseName) public view returns(uint256[]) {
        uint256[] memory counters = new uint256[](totalConsents.length);
        uint  counter = 0;
        for (uint i = 0; i < totalConsents.length; i++) {
            require(keccak256(_candidate) == keccak256(totalConsents[i].candidate));
            require(keccak256(_enterpriseName) == keccak256(totalConsents[i].enterpriseName));
            counters[counter] = totalConsents[i].index;
            counter++;
        }
        return (counters);
    }

    // is working
    function getConsentsIndexByEnterprise(string _enterpriseName) public view returns(uint[]) {
        uint[] memory counters = new uint[](totalConsents.length);
        uint  counter = 0;
        for (uint i = 0; i < totalConsents.length; i++) {
            require(keccak256(_enterpriseName) == keccak256(totalConsents[i].enterpriseName));
            counters[counter] = totalConsents[i].index;
            counter++;
        }
        return (counters);
    }

    // is working
    function getConsentsByIndexByEnterprise(string _enterpriseName, uint _index) public view 
    returns(
        uint index,
        string enterpriseName,
        string candidate,
        string label,
        string consentType,
        bool isActive,
        uint createdDate,
        uint expiryDate)
        {
            Consent memory consentReturned;
        for (uint i = 0; i < totalConsents.length; i++) {
            require(keccak256(_enterpriseName) == keccak256(totalConsents[i].enterpriseName));
            require(_index == totalConsents[i].index);
            consentReturned = totalConsents[i];
        }

                index = consentReturned.index;
                enterpriseName = consentReturned.enterpriseName;
                candidate = consentReturned.candidate;
                label = consentReturned.label;
                consentType = consentReturned.consentType;
                isActive = consentReturned.isActive;
                createdDate = consentReturned.createdDate;
                expiryDate = consentReturned.expiryDate;
    }

    // is working
    function getConsentsByCandidateByIndexByEnterprise(string _candidate, string _enterpriseName, uint _index) external view 
    returns(
        uint index,
        string enterpriseName,
        string candidate,
        string label,
        string consentType,
        bool isActive,
        uint createdDate,
        uint expiryDate)
        {
            Consent memory consentReturned;
        for (uint i = 0; i < totalConsents.length; i++) {
            require(keccak256(_candidate) == keccak256(totalConsents[i].candidate));
            require(keccak256(_enterpriseName) == keccak256(totalConsents[i].enterpriseName));
            require(_index == totalConsents[i].index);
            consentReturned = totalConsents[i];
        }

                index = consentReturned.index;
                enterpriseName = consentReturned.enterpriseName;
                candidate = consentReturned.candidate;
                label = consentReturned.label;
                consentType = consentReturned.consentType;
                isActive = consentReturned.isActive;
                createdDate = consentReturned.createdDate;
                expiryDate = consentReturned.expiryDate;
    }

    // used
    function createConsent(string _candidate, string _consentType, string _label, string _enterpriseName) private view returns (Consent) {
        return Consent ({
            index: totalConsents.length + 1, 
            candidate: _candidate, 
            consentType: _consentType, 
            label: _label, 
            isActive: true, 
            enterpriseName: _enterpriseName, 
            createdDate: now, 
            expiryDate: now + 1 years
            });
    }

    // used
    function setConsent(string _candidate, string _consentType, string _label, string _enterpriseName) public {
        Consent memory consent = createConsent(_candidate, _consentType, _label, _enterpriseName);
        totalConsents.push(consent);
        NewConsent(_candidate, _consentType);
    }

    function revokeConsent(string _candidate, string _consentType, string _enterpriseName) public {
        for (uint index = 0; index < totalConsents.length; index++) {
            require(keccak256(_candidate) == keccak256(totalConsents[index].candidate) && keccak256(_consentType) == keccak256(totalConsents[index].consentType));
            totalConsents[index].isActive = false;
            ConsentIsRevoked(_candidate, _consentType, _enterpriseName);
        }
    }

    //** consent label and type concern */

    // is working
    function getConsentLabelsIndexByEnterprise (string _enterpriseName) public view returns (uint256[]) {
        uint256[] memory valuesIndex = new uint256[](labels.length);
        uint counter = 0;
        for (uint i = 0; i < labels.length; i++) {
            require(keccak256(labels[i].enterpriseName) == keccak256(_enterpriseName));
            valuesIndex[counter] = labels[i].index;
            counter++;
        }
        return (valuesIndex);
    }
    // is  working
    function getConsentsLabelByIndexAndEnterpriseName(uint index, string _enterpriseName) external view returns (string label,string consentType) {
        for (uint i = 0; i < labels.length; i++) {
            require(keccak256(labels[i].enterpriseName) == keccak256(_enterpriseName));
            require(labels[i].index == index);            
            label = labels[i].label;
            consentType = labels[i].consentType;
            break;
        }
        return (label, consentType);
    }

    // used
    function setConsentLabel(string _consentLabel, string _enterpriseName, string _consentType) public consentLabelDontExistsForEnterprise(_consentType, _enterpriseName) {
        labels.push(ConsentLabel({ index: labels.length + 1, label: _consentLabel, enterpriseName: _enterpriseName, consentType: _consentType}));
        SetConsentLabel(_consentLabel);
    }

}