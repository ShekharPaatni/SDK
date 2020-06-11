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
from atom_api.api.feature_api import FeatureApi  # noqa: E501
from atom_api.rest import ApiException


class TestFeatureApi(unittest.TestCase):
    """FeatureApi unit test stubs"""

    def setUp(self):
        self.api = atom_api.api.feature_api.FeatureApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_feature_track_using_post(self):
        """Test case for create_feature_track_using_post

        Create a Feature Track  # noqa: E501
        """
        pass

    def test_create_feature_using_post(self):
        """Test case for create_feature_using_post

        Create a  Feature  # noqa: E501
        """
        pass

    def test_delete_feature_track_using_delete(self):
        """Test case for delete_feature_track_using_delete

        Delete a Feature Track  # noqa: E501
        """
        pass

    def test_delete_feature_using_delete(self):
        """Test case for delete_feature_using_delete

        Delete a Feature  # noqa: E501
        """
        pass

    def test_get_feature_all_using_get(self):
        """Test case for get_feature_all_using_get

        List all Feature  # noqa: E501
        """
        pass

    def test_get_feature_track_all_using_get(self):
        """Test case for get_feature_track_all_using_get

        List all Feature track  # noqa: E501
        """
        pass

    def test_get_feature_track_using_get(self):
        """Test case for get_feature_track_using_get

        Retrieve a Feature track  # noqa: E501
        """
        pass

    def test_get_feature_using_get(self):
        """Test case for get_feature_using_get

        Retrieve a Feature  # noqa: E501
        """
        pass

    def test_update_feature_track_using_put(self):
        """Test case for update_feature_track_using_put

        Update a Feature Track  # noqa: E501
        """
        pass

    def test_update_feature_using_put(self):
        """Test case for update_feature_using_put

        Update a Feature  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
