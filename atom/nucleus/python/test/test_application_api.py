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
from atom_api.api.application_api import ApplicationApi  # noqa: E501
from atom_api.rest import ApiException


class TestApplicationApi(unittest.TestCase):
    """ApplicationApi unit test stubs"""

    def setUp(self):
        self.api = atom_api.api.application_api.ApplicationApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_application_using_post(self):
        """Test case for create_application_using_post

        Create an application  # noqa: E501
        """
        pass

    def test_delete_application_using_delete(self):
        """Test case for delete_application_using_delete

        Delete an Application  # noqa: E501
        """
        pass

    def test_get_application_all_using_get(self):
        """Test case for get_application_all_using_get

        List all Application  # noqa: E501
        """
        pass

    def test_get_application_using_get(self):
        """Test case for get_application_using_get

        Retrieve an Application  # noqa: E501
        """
        pass

    def test_update_application_using_put(self):
        """Test case for update_application_using_put

        Update an Application  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
