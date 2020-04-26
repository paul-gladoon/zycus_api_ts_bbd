Feature: Invoice Resource

  @postInvoiceFilter
  Scenario: POST /invoice/filter
    Given I am set headers for Invoice Resource endpoints: userId: 'd33b32a2-bbd8-4cff-9181-156672bf3ced', tenantId: '50179423-93a1-4dd9-8062-5ba7b7f6cd3c', trackingNumber: '1234'
    Given I am post the invoice filter using requestBody: 'postInvoiceFilter'
    