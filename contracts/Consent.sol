pragma solidity ^0.4.2;

import './zeppelin/ownership/Ownable';

contract ConsentGdpr is Ownable {

    event NewConsent(string candidate, ConsentType consentType);
    event ConsentIsRevoked(string _candidate, ConsentType _consentType, string _enterpriseName);

    enum Actor { individu, enterprise }
    enum ConsentType { One, AllOther}

    mapping(address => Consent[]) public consents;
    mapping(address => string) public enterprisesToAddress;
    mapping(string => address) public addressToEnterprise;

    struct Consent {
        string enterpriseName;
        string candidate;
        string label;
        ConsentType consentType;
        bool isActive;
        uint createdDate;
        uint expiryDate;
    }

    function setEnterprise(string _entrepriseName) public {
        enterprisesToAddress[msg.sender] = _entrepriseName;
        addressToEnterprise[_enterpriseName] = msg.sender;
    }

    function createConsent(string _candidate, ConsentType _consentType, string _label) private returns (Consent memory) {
        string memory name = enterprisesToAddress[msg.sender];
        return Consent({
            candidate: _candidate, 
            consentType: _consentType, 
            label: _label,
            isActive: true, 
            enterpriseName: name, 
            createdDate: now, 
            expiryDate: now + 1 years
            });
    }

    function setConsent(string _candidate, ConsentType _consentType) external onlyOwner {
        consents[msg.sender].push(createConsent(_candidate, _consentType));
        NewConsent(_candidate, _consentType);
    }

    function revokeConsent(string _candidate, ConsentType _consentType, string _enterpriseName) {
        string memory enterpriseAddress = addressToEnterprise[_enterpriseName];
        Consent memory consents = consents[enterpriseAddress];
        for (uint index = 0; index < consents.length; index++) {
            require(_candidate == consents[index].candidate && _consentType == consents[index].consentType);
            consents[index].isActive = false;
        }
        ConsentIsRevoked(_candidate, _consentType, _enterpriseName);
    }
}