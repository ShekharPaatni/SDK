# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.0.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import atom_api
from atom_api.api.electron_api import ElectronApi  # noqa: E501
from atom_api.rest import ApiException


class TestElectronApi(unittest.TestCase):
    """ElectronApi unit test stubs"""

    def setUp(self):
        self.api = atom_api.api.electron_api.ElectronApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_delete_campaign(self):
        """Test case for delete_campaign

        Delete a marketing campaign  # noqa: E501
        """
        pass

    def test_delete_campaign_data_record(self):
        """Test case for delete_campaign_data_record

        Delete a marketing campaign data record  # noqa: E501
        """
        pass

    def test_delete_campaign_plan(self):
        """Test case for delete_campaign_plan

        Delete a marketing campaign plan  # noqa: E501
        """
        pass

    def test_delete_chat_log(self):
        """Test case for delete_chat_log

        Delete a chat log  # noqa: E501
        """
        pass

    def test_delete_client_campaign(self):
        """Test case for delete_client_campaign

        Remove a client from a campaign  # noqa: E501
        """
        pass

    def test_delete_consultation(self):
        """Test case for delete_consultation

        Delete a consultation  # noqa: E501
        """
        pass

    def test_delete_document(self):
        """Test case for delete_document

        Delete a document  # noqa: E501
        """
        pass

    def test_delete_faq(self):
        """Test case for delete_faq

        Delete a FAQ  # noqa: E501
        """
        pass

    def test_delete_sales_inquiry(self):
        """Test case for delete_sales_inquiry

        Delete a sales inquiry  # noqa: E501
        """
        pass

    def test_delete_support_ticket(self):
        """Test case for delete_support_ticket

        Delete a support ticket  # noqa: E501
        """
        pass

    def test_delete_support_ticket_comment(self):
        """Test case for delete_support_ticket_comment

        Delete a support ticket comment  # noqa: E501
        """
        pass

    def test_get_campaign(self):
        """Test case for get_campaign

        Retrieve a marketing campaign  # noqa: E501
        """
        pass

    def test_get_campaign_data_record(self):
        """Test case for get_campaign_data_record

        Retrieve a marketing campaign data record  # noqa: E501
        """
        pass

    def test_get_campaign_data_records(self):
        """Test case for get_campaign_data_records

        List all marketing campaign data records  # noqa: E501
        """
        pass

    def test_get_campaign_plan(self):
        """Test case for get_campaign_plan

        Retrieve a marketing campaign plan  # noqa: E501
        """
        pass

    def test_get_campaign_plans(self):
        """Test case for get_campaign_plans

        List all marketing campaign plans  # noqa: E501
        """
        pass

    def test_get_campaigns(self):
        """Test case for get_campaigns

        List all marketing campaigns  # noqa: E501
        """
        pass

    def test_get_chat_log(self):
        """Test case for get_chat_log

        Retrieve a chat log  # noqa: E501
        """
        pass

    def test_get_chat_logs(self):
        """Test case for get_chat_logs

        List all chat logs  # noqa: E501
        """
        pass

    def test_get_client_campaign(self):
        """Test case for get_client_campaign

        Retrieve a client assigned to a campaign  # noqa: E501
        """
        pass

    def test_get_client_campaigns(self):
        """Test case for get_client_campaigns

        List information for all clients that are assigned to a marketing campaign defined for your firm  # noqa: E501
        """
        pass

    def test_get_consultation(self):
        """Test case for get_consultation

        Retrieve a consultation  # noqa: E501
        """
        pass

    def test_get_consultations(self):
        """Test case for get_consultations

        List all consultations  # noqa: E501
        """
        pass

    def test_get_document(self):
        """Test case for get_document

        Retrieve a document  # noqa: E501
        """
        pass

    def test_get_documents(self):
        """Test case for get_documents

        List all documents  # noqa: E501
        """
        pass

    def test_get_faq(self):
        """Test case for get_faq

        Retrieve a FAQ  # noqa: E501
        """
        pass

    def test_get_faqs(self):
        """Test case for get_faqs

        List all FAQs  # noqa: E501
        """
        pass

    def test_get_sales_inquiries(self):
        """Test case for get_sales_inquiries

        List all sales inquiries  # noqa: E501
        """
        pass

    def test_get_sales_inquiry(self):
        """Test case for get_sales_inquiry

        Retrieve a sales inquiry  # noqa: E501
        """
        pass

    def test_get_support_ticket(self):
        """Test case for get_support_ticket

        Retrieve a support ticket  # noqa: E501
        """
        pass

    def test_get_support_ticket_comment(self):
        """Test case for get_support_ticket_comment

        Retrieve a support ticket comment  # noqa: E501
        """
        pass

    def test_get_support_ticket_comments(self):
        """Test case for get_support_ticket_comments

        List all support ticket comments  # noqa: E501
        """
        pass

    def test_get_support_tickets(self):
        """Test case for get_support_tickets

        List all support tickets  # noqa: E501
        """
        pass

    def test_post_campaign(self):
        """Test case for post_campaign

        Create a marketing campaign  # noqa: E501
        """
        pass

    def test_post_campaign_data_record(self):
        """Test case for post_campaign_data_record

        Create a marketing campaign data record  # noqa: E501
        """
        pass

    def test_post_campaign_plan(self):
        """Test case for post_campaign_plan

        Create a marketing campaign plan  # noqa: E501
        """
        pass

    def test_post_chat_log(self):
        """Test case for post_chat_log

        Create a chat log  # noqa: E501
        """
        pass

    def test_post_client_campaign(self):
        """Test case for post_client_campaign

        Assign a client to a campaign to indicate the client has registered through the campaign specified  # noqa: E501
        """
        pass

    def test_post_consultation(self):
        """Test case for post_consultation

        Create a consultation  # noqa: E501
        """
        pass

    def test_post_document(self):
        """Test case for post_document

        Create a document  # noqa: E501
        """
        pass

    def test_post_faq(self):
        """Test case for post_faq

        Create a faq  # noqa: E501
        """
        pass

    def test_post_sales_inquiry(self):
        """Test case for post_sales_inquiry

        Create a sales inquiry  # noqa: E501
        """
        pass

    def test_post_support_ticket(self):
        """Test case for post_support_ticket

        Create a support ticket  # noqa: E501
        """
        pass

    def test_post_support_ticket_comment(self):
        """Test case for post_support_ticket_comment

        Create a support ticket comment  # noqa: E501
        """
        pass

    def test_update_campaign(self):
        """Test case for update_campaign

        Update a marketing campaign  # noqa: E501
        """
        pass

    def test_update_campaign_data_record(self):
        """Test case for update_campaign_data_record

        Update a marketing campaign data record  # noqa: E501
        """
        pass

    def test_update_campaign_plan(self):
        """Test case for update_campaign_plan

        Update a marketing campaign plan  # noqa: E501
        """
        pass

    def test_update_chat_log(self):
        """Test case for update_chat_log

        Update a chat log  # noqa: E501
        """
        pass

    def test_update_client_campaign(self):
        """Test case for update_client_campaign

        Update a client assigned to a campaign  # noqa: E501
        """
        pass

    def test_update_consultation(self):
        """Test case for update_consultation

        Update a consultation  # noqa: E501
        """
        pass

    def test_update_document(self):
        """Test case for update_document

        Update a document  # noqa: E501
        """
        pass

    def test_update_faq(self):
        """Test case for update_faq

        Update a FAQ  # noqa: E501
        """
        pass

    def test_update_sales_inquiry(self):
        """Test case for update_sales_inquiry

        Update a sales inquiry  # noqa: E501
        """
        pass

    def test_update_support_ticket(self):
        """Test case for update_support_ticket

        Update a support ticket  # noqa: E501
        """
        pass

    def test_update_support_ticket_comment(self):
        """Test case for update_support_ticket_comment

        Update a support ticket comment  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
