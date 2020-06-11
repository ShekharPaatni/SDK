# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import atom_api
from atom_api.api.customer_api import CustomerApi  # noqa: E501
from atom_api.rest import ApiException


class TestCustomerApi(unittest.TestCase):
    """CustomerApi unit test stubs"""

    def setUp(self):
        self.api = atom_api.api.customer_api.CustomerApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_customer_revenue_using_post(self):
        """Test case for create_customer_revenue_using_post

        Create a customer revenue  # noqa: E501
        """
        pass

    def test_create_customer_using_post(self):
        """Test case for create_customer_using_post

        Create a customer  # noqa: E501
        """
        pass

    def test_delete_customer_revenue_using_delete(self):
        """Test case for delete_customer_revenue_using_delete

        Delete a customer revenue  # noqa: E501
        """
        pass

    def test_delete_customer_using_delete(self):
        """Test case for delete_customer_using_delete

        Delete a customer  # noqa: E501
        """
        pass

    def test_get_customer_all_using_get(self):
        """Test case for get_customer_all_using_get

        List all customer  # noqa: E501
        """
        pass

    def test_get_customer_revenue_all_using_get(self):
        """Test case for get_customer_revenue_all_using_get

        List all customer revenue  # noqa: E501
        """
        pass

    def test_get_customer_revenue_using_get(self):
        """Test case for get_customer_revenue_using_get

        Retrieve a customer revenue  # noqa: E501
        """
        pass

    def test_get_customer_using_get(self):
        """Test case for get_customer_using_get

        Retrieve a customer  # noqa: E501
        """
        pass

    def test_update_customer_revenue_using_put(self):
        """Test case for update_customer_revenue_using_put

        Update a customer revenue  # noqa: E501
        """
        pass

    def test_update_customer_using_put(self):
        """Test case for update_customer_using_put

        Update a customer  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
