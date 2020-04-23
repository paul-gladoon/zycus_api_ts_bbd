Feature: CBL

  #Scenario: GET /CBL/company/{requestUserId}
    #Given I am set headers for CBL endpoints: userId: 'd33b32a2-bbd8-4cff-9181-156672bf3ced', tenantId: '50179423-93a1-4dd9-8062-5ba7b7f6cd3c', trackingNumber: '785'
    #Given I am get the company entities using requestUserId: 'd33b32a2-bbd8-4cff-9181-156672bf3ced'

  Scenario: GET /CBL/bu/{requestUserId}/{companyCode}
    Given I am set headers for CBL endpoints: userId: 'd33b32a2-bbd8-4cff-9181-156672bf3ced', tenantId: '50179423-93a1-4dd9-8062-5ba7b7f6cd3c', trackingNumber: '785'
    Given I am get the Business Units using requestUserId: 'd33b32a2-bbd8-4cff-9181-156672bf3ced', companyCode: 'OU_1-089'
    