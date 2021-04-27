# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import nucleus_api
from nucleus_api.api.order_api import OrderApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestOrderApi(unittest.TestCase):
    """OrderApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.order_api.OrderApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_account_order_bulk_using_post(self):
        """Test case for create_account_order_bulk_using_post

        Bulk orders for an account  # noqa: E501
        """
        pass

    def test_create_account_order_buy_only_using_post(self):
        """Test case for create_account_order_buy_only_using_post

        Create buy-only account rebalance orders  # noqa: E501
        """
        pass

    def test_create_account_order_rebalance_using_post(self):
        """Test case for create_account_order_rebalance_using_post

        Create account rebalance orders  # noqa: E501
        """
        pass

    def test_create_account_order_reconciliation(self):
        """Test case for create_account_order_reconciliation

        Create account reconciliation order  # noqa: E501
        """
        pass

    def test_create_account_order_sell_all_using_post(self):
        """Test case for create_account_order_sell_all_using_post

        Sell all account order  # noqa: E501
        """
        pass

    def test_create_account_order_sell_only_using_post(self):
        """Test case for create_account_order_sell_only_using_post

        Create sell-only account rebalance orders  # noqa: E501
        """
        pass

    def test_create_client_order_bulk_using_post(self):
        """Test case for create_client_order_bulk_using_post

        Bulk orders for a client  # noqa: E501
        """
        pass

    def test_create_order_bulk_using_post(self):
        """Test case for create_order_bulk_using_post

        Bulk orders for your firm  # noqa: E501
        """
        pass

    def test_create_order_status_using_post(self):
        """Test case for create_order_status_using_post

        Create an order status  # noqa: E501
        """
        pass

    def test_create_order_track_using_post(self):
        """Test case for create_order_track_using_post

        Create an order tracking record  # noqa: E501
        """
        pass

    def test_create_order_using_post(self):
        """Test case for create_order_using_post

        Create an order record  # noqa: E501
        """
        pass

    def test_create_portfolio_order_buy_only_using_post(self):
        """Test case for create_portfolio_order_buy_only_using_post

        Create buy-only portfolio rebalance orders  # noqa: E501
        """
        pass

    def test_create_portfolio_order_rebalance_using_post(self):
        """Test case for create_portfolio_order_rebalance_using_post

        Create portfolio rebalance orders  # noqa: E501
        """
        pass

    def test_create_portfolio_order_reconciliation(self):
        """Test case for create_portfolio_order_reconciliation

        Create portfolio reconciliation order  # noqa: E501
        """
        pass

    def test_create_portfolio_order_sell_all_using_post(self):
        """Test case for create_portfolio_order_sell_all_using_post

        Sell all portfolio order  # noqa: E501
        """
        pass

    def test_create_portfolio_order_sell_only_using_post(self):
        """Test case for create_portfolio_order_sell_only_using_post

        Create sell-only portfolio rebalance orders  # noqa: E501
        """
        pass

    def test_delete_order_status_using_delete(self):
        """Test case for delete_order_status_using_delete

        Delete an order status  # noqa: E501
        """
        pass

    def test_delete_order_track_using_delete(self):
        """Test case for delete_order_track_using_delete

        Delete an order tracking record  # noqa: E501
        """
        pass

    def test_delete_order_using_delete(self):
        """Test case for delete_order_using_delete

        Delete an order record  # noqa: E501
        """
        pass

    def test_get_order_all_using_get(self):
        """Test case for get_order_all_using_get

        List all order records  # noqa: E501
        """
        pass

    def test_get_order_bulk_all_using_get(self):
        """Test case for get_order_bulk_all_using_get

        List all bulk orders  # noqa: E501
        """
        pass

    def test_get_order_status_all_using_get(self):
        """Test case for get_order_status_all_using_get

        List all order statuses  # noqa: E501
        """
        pass

    def test_get_order_status_using_get(self):
        """Test case for get_order_status_using_get

        Retrieve an order status  # noqa: E501
        """
        pass

    def test_get_order_track_all_using_get(self):
        """Test case for get_order_track_all_using_get

        List all order tracking records  # noqa: E501
        """
        pass

    def test_get_order_track_using_get(self):
        """Test case for get_order_track_using_get

        Retrieve an order tracking record  # noqa: E501
        """
        pass

    def test_get_order_using_get(self):
        """Test case for get_order_using_get

        Retrieve an order record  # noqa: E501
        """
        pass

    def test_update_order_status_using_put(self):
        """Test case for update_order_status_using_put

        Update an order status  # noqa: E501
        """
        pass

    def test_update_order_track_using_put(self):
        """Test case for update_order_track_using_put

        Update an order tracking record  # noqa: E501
        """
        pass

    def test_update_order_using_put(self):
        """Test case for update_order_using_put

        Update an order record  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
