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

import nucleus_api
from nucleus_api.api.allocation_api import AllocationApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestAllocationApi(unittest.TestCase):
    """AllocationApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.allocation_api.AllocationApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_allocation_composition_using_post(self):
        """Test case for create_allocation_composition_using_post

        Create an allocation composition  # noqa: E501
        """
        pass

    def test_create_allocation_using_post(self):
        """Test case for create_allocation_using_post

        Create an allocation  # noqa: E501
        """
        pass

    def test_delete_allocation_composition_using_delete(self):
        """Test case for delete_allocation_composition_using_delete

        Delete an allocation composition  # noqa: E501
        """
        pass

    def test_delete_allocation_using_delete(self):
        """Test case for delete_allocation_using_delete

        Delete an allocation  # noqa: E501
        """
        pass

    def test_get_all_holdings_using_get(self):
        """Test case for get_all_holdings_using_get

        List all allocation holdings  # noqa: E501
        """
        pass

    def test_get_all_transactions_using_get(self):
        """Test case for get_all_transactions_using_get

        List all allocation transactions  # noqa: E501
        """
        pass

    def test_get_allocation_aggregated_data_using_get(self):
        """Test case for get_allocation_aggregated_data_using_get

        List all Allocation aggregated data overview  # noqa: E501
        """
        pass

    def test_get_allocation_all_using_get(self):
        """Test case for get_allocation_all_using_get

        List all allocations  # noqa: E501
        """
        pass

    def test_get_allocation_composition_all_using_get(self):
        """Test case for get_allocation_composition_all_using_get

        List all allocations compositions  # noqa: E501
        """
        pass

    def test_get_allocation_composition_using_get(self):
        """Test case for get_allocation_composition_using_get

        Retrieve an allocation composition  # noqa: E501
        """
        pass

    def test_get_allocation_using_get(self):
        """Test case for get_allocation_using_get

        Retrieve an allocation  # noqa: E501
        """
        pass

    def test_get_assetsize_using_get(self):
        """Test case for get_assetsize_using_get

        List all allocation asset sizes  # noqa: E501
        """
        pass

    def test_update_allocation_composition_using_put(self):
        """Test case for update_allocation_composition_using_put

        Update an allocation composition  # noqa: E501
        """
        pass

    def test_update_allocation_using_put(self):
        """Test case for update_allocation_using_put

        Update an allocation  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()