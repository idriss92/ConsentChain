pragma solidity ^0.4.2;

import './zeppelin/ownership/Ownable.sol';

contract ConsentGdpr is Ownable {

    event NewConsent(string candidate, string consentType);
    event ConsentIsRevoked(string _candidate, string _consentType, string _enterpriseName);

    enum Actor { individu, enterprise }
    mapping(address => Consent[]) consents;
    mapping(address => string) enterprisesToAddress;
    mapping(string => address) addressToEnterprise;
    mapping(string => string[]) consentsLabelToEnterprise;

    struct Consent {
        string enterpriseName;
        string candidate;
        string label;
        string consentType;
        bool isActive;
        uint createdDate;
        uint expiryDate;
    }

    Consent[] public totalConsents;

    function setEnterprise(string _enterpriseName) public {
        enterprisesToAddress[msg.sender] = _enterpriseName;
        addressToEnterprise[_enterpriseName] = msg.sender;
    }

    function setConsentLabel(string _consentLabel) public {
        string memory enterpriseName = enterprisesToAddress[msg.sender];
        consentsLabelToEnterprise[enterpriseName].push(_consentLabel);
    }

    function createConsent(string _candidate, string _consentType, string _label) private returns (Consent) {
        string memory name = enterprisesToAddress[msg.sender];
        return Consent ({
            candidate: _candidate, 
            consentType: _consentType, 
            label: _label, 
            isActive: true, 
            enterpriseName: name, 
            createdDate: now, 
            expiryDate: now + 1 years
            });
    }

    function setConsent(string _candidate, string _consentType, string _label) external onlyOwner {
        Consent memory consent = createConsent(_candidate, _consentType, _label);
        consents[msg.sender].push(consent);
        totalConsents.push(consent);
        NewConsent(_candidate, _consentType);
    }

    function revokeConsent(string _candidate, string _consentType, string _enterpriseName) public {
        address enterpriseAddress = addressToEnterprise[_enterpriseName];
        Consent[] memory _consents = consents[enterpriseAddress];
        for (uint index = 0; index < _consents.length; index++) {
            require(keccak256(_candidate) == keccak256(_consents[index].candidate) && keccak256(_consentType) == keccak256(_consents[index].consentType));
            consents[enterpriseAddress][index].isActive = false;
        }
        ConsentIsRevoked(_candidate, _consentType, _enterpriseName);
    }

    function getConsentLabels(string _enterpriseName) internal returns (string[] ) {
        return consentsLabelToEnterprise[_enterpriseName];
    }

    function getConsentsByEnterprise() external view returns (Consent[]) {
        return consents[msg.sender];
    }
    
    function getConsentsByCandidate(string _candidate) external view returns(Consent[] memory) {
        Consent[] memory thisConsents = totalConsents;
        Consent[] memory _consents;
        uint counter = 0;
        for (uint i = 0; i < thisConsents.length; i++) {
            require(keccak256(_candidate) == keccak256(thisConsents[i]));
            _consents[counter] = thisConsents[i];
        }
        return _consents;
    }

}