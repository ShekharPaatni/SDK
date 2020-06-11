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
from atom_api.api.audit_log_api import AuditLogApi  # noqa: E501
from atom_api.rest import ApiException


class TestAuditLogApi(unittest.TestCase):
    """AuditLogApi unit test stubs"""

    def setUp(self):
        self.api = atom_api.api.audit_log_api.AuditLogApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_audit_log_using_post(self):
        """Test case for create_audit_log_using_post

        Create a audit log  # noqa: E501
        """
        pass

    def test_get_audit_log_all_using_get(self):
        """Test case for get_audit_log_all_using_get

        List all audit log  # noqa: E501
        """
        pass

    def test_get_audit_log_using_get(self):
        """Test case for get_audit_log_using_get

        Retrieve a audit log  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
