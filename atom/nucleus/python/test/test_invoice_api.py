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
from nucleus_api.api.invoice_api import InvoiceApi  # noqa: E501
from nucleus_api.rest import ApiException


class TestInvoiceApi(unittest.TestCase):
    """InvoiceApi unit test stubs"""

    def setUp(self):
        self.api = nucleus_api.api.invoice_api.InvoiceApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_create_invoice_payment_using_post(self):
        """Test case for create_invoice_payment_using_post

        Create a invoicePayment  # noqa: E501
        """
        pass

    def test_create_invoice_using_post(self):
        """Test case for create_invoice_using_post

        Create a invoice  # noqa: E501
        """
        pass

    def test_delete_invoice_payment_using_delete(self):
        """Test case for delete_invoice_payment_using_delete

        Delete a invoicePayment  # noqa: E501
        """
        pass

    def test_delete_invoice_using_delete(self):
        """Test case for delete_invoice_using_delete

        Delete a invoice  # noqa: E501
        """
        pass

    def test_get_invoice_all_using_get(self):
        """Test case for get_invoice_all_using_get

        List all invoices  # noqa: E501
        """
        pass

    def test_get_invoice_payment_all_using_get(self):
        """Test case for get_invoice_payment_all_using_get

        List all invoice payments  # noqa: E501
        """
        pass

    def test_get_invoice_payment_using_get(self):
        """Test case for get_invoice_payment_using_get

        Retrieve a invoicePayment  # noqa: E501
        """
        pass

    def test_get_invoice_using_get(self):
        """Test case for get_invoice_using_get

        Retrieve a invoice  # noqa: E501
        """
        pass

    def test_update_invoice_payment_using_put(self):
        """Test case for update_invoice_payment_using_put

        Update a invoicePayment  # noqa: E501
        """
        pass

    def test_update_invoice_using_put(self):
        """Test case for update_invoice_using_put

        Update a invoice  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
