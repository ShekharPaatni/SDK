# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import proton_api
from proton_api.api.business_financial_management_api import BusinessFinancialManagementApi  # noqa: E501
from proton_api.rest import ApiException


class TestBusinessFinancialManagementApi(unittest.TestCase):
    """BusinessFinancialManagementApi unit test stubs"""

    def setUp(self):
        self.api = proton_api.api.business_financial_management_api.BusinessFinancialManagementApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_business_financial_health_check(self):
        """Test case for business_financial_health_check

        Business Financial Health Check  # noqa: E501
        """
        pass

    def test_cash_analysis(self):
        """Test case for cash_analysis

        Cash Analysis  # noqa: E501
        """
        pass

    def test_customer_analysis(self):
        """Test case for customer_analysis

        Customer Analysis  # noqa: E501
        """
        pass

    def test_financial_statement_analysis(self):
        """Test case for financial_statement_analysis

        Financial Statement Analysis  # noqa: E501
        """
        pass

    def test_invoice_analysis(self):
        """Test case for invoice_analysis

        Invoice Analysis  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
