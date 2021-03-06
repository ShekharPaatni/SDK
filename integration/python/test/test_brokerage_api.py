# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import integration_api
from integration_api.api.brokerage_api import BrokerageApi  # noqa: E501
from integration_api.rest import ApiException


class TestBrokerageApi(unittest.TestCase):
    """BrokerageApi unit test stubs"""

    def setUp(self):
        self.api = integration_api.api.brokerage_api.BrokerageApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_cancel_order_using_put(self):
        """Test case for cancel_order_using_put

        Cancel an Order  # noqa: E501
        """
        pass

    def test_create_bank_link_using_post1(self):
        """Test case for create_bank_link_using_post1

        create a Bank Link  # noqa: E501
        """
        pass

    def test_create_brokerage_account_using_post(self):
        """Test case for create_brokerage_account_using_post

        create a Brokerage account  # noqa: E501
        """
        pass

    def test_create_brokerage_client_using_post(self):
        """Test case for create_brokerage_client_using_post

        Create a Brokerage Client  # noqa: E501
        """
        pass

    def test_create_deposit_using_post(self):
        """Test case for create_deposit_using_post

        Create a deposit  # noqa: E501
        """
        pass

    def test_create_document_using_post(self):
        """Test case for create_document_using_post

        Create a Brokerage document  # noqa: E501
        """
        pass

    def test_create_order_using_post(self):
        """Test case for create_order_using_post

        Create an Order  # noqa: E501
        """
        pass

    def test_create_withdrawal_using_post(self):
        """Test case for create_withdrawal_using_post

        Create a withdrawal  # noqa: E501
        """
        pass

    def test_delete_bank_link_using_delete1(self):
        """Test case for delete_bank_link_using_delete1

        Delete a Bank Link  # noqa: E501
        """
        pass

    def test_get_balance_using_get1(self):
        """Test case for get_balance_using_get1

        Get account balance  # noqa: E501
        """
        pass

    def test_get_bank_link_using_get1(self):
        """Test case for get_bank_link_using_get1

        Get a Bank Link  # noqa: E501
        """
        pass

    def test_get_brokerage_account_statement_using_get(self):
        """Test case for get_brokerage_account_statement_using_get

        Get a Brokerage account statement  # noqa: E501
        """
        pass

    def test_get_document_using_get(self):
        """Test case for get_document_using_get

        Get a Brokerage document  # noqa: E501
        """
        pass

    def test_get_holding_performance_using_get(self):
        """Test case for get_holding_performance_using_get

        Get portfolio holding performance  # noqa: E501
        """
        pass

    def test_get_holding_using_get(self):
        """Test case for get_holding_using_get

        Get portfolio holdings  # noqa: E501
        """
        pass

    def test_get_order_using_get(self):
        """Test case for get_order_using_get

        Get an Order  # noqa: E501
        """
        pass

    def test_get_securities_using_get(self):
        """Test case for get_securities_using_get

        Get securities information  # noqa: E501
        """
        pass

    def test_get_transactions_using_get(self):
        """Test case for get_transactions_using_get

        Get account transactions  # noqa: E501
        """
        pass

    def test_update_bank_link_using_put1(self):
        """Test case for update_bank_link_using_put1

        Update a Bank Link  # noqa: E501
        """
        pass

    def test_update_brokerage_client_using_put(self):
        """Test case for update_brokerage_client_using_put

        Update a Brokerage client  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
