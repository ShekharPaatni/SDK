# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import nucleus_api
from nucleus_api.api.card_api import CardApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestCardApi(unittest.TestCase):
    """CardApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.card_api.CardApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_card_program_using_post(self):
        """Test case for create_card_program_using_post

        Create a cardProgram request  # noqa: E501
        """
        pass

    def test_create_card_using_post(self):
        """Test case for create_card_using_post

        Create a card request  # noqa: E501
        """
        pass

    def test_delete_card_program_using_delete(self):
        """Test case for delete_card_program_using_delete

        Delete an cardProgram  # noqa: E501
        """
        pass

    def test_delete_card_using_delete(self):
        """Test case for delete_card_using_delete

        Delete a card request  # noqa: E501
        """
        pass

    def test_get_all_client_cards_using_get(self):
        """Test case for get_all_client_cards_using_get

        List all client cards  # noqa: E501
        """
        pass

    def test_get_card_all_using_get(self):
        """Test case for get_card_all_using_get

        List all card requests  # noqa: E501
        """
        pass

    def test_get_card_asset_size_agg_all_using_get(self):
        """Test case for get_card_asset_size_agg_all_using_get

        List all card asset sizes  # noqa: E501
        """
        pass

    def test_get_card_program_all_using_get(self):
        """Test case for get_card_program_all_using_get

        List all cardProgram  # noqa: E501
        """
        pass

    def test_get_card_program_using_get(self):
        """Test case for get_card_program_using_get

        Retrieve an cardProgram  # noqa: E501
        """
        pass

    def test_get_card_transaction_agg_all_using_get(self):
        """Test case for get_card_transaction_agg_all_using_get

        List all card transactions  # noqa: E501
        """
        pass

    def test_get_card_transaction_agg_all_using_get1(self):
        """Test case for get_card_transaction_agg_all_using_get1

        List all card transactions  # noqa: E501
        """
        pass

    def test_get_card_using_get(self):
        """Test case for get_card_using_get

        Retrieve a card request  # noqa: E501
        """
        pass

    def test_update_card_program_using_put(self):
        """Test case for update_card_program_using_put

        Update an cardProgram  # noqa: E501
        """
        pass

    def test_update_card_using_put(self):
        """Test case for update_card_using_put

        Update a card request  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
