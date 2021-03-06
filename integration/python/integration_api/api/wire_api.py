# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from integration_api.api_client import ApiClient


class WireApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def cancel_wire_transfer_using_delete(self, nucleus_funding_id, **kwargs):  # noqa: E501
        """Cancel the Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.cancel_wire_transfer_using_delete(nucleus_funding_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_funding_id: nucleus_funding_id (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.cancel_wire_transfer_using_delete_with_http_info(nucleus_funding_id, **kwargs)  # noqa: E501
        else:
            (data) = self.cancel_wire_transfer_using_delete_with_http_info(nucleus_funding_id, **kwargs)  # noqa: E501
            return data

    def cancel_wire_transfer_using_delete_with_http_info(self, nucleus_funding_id, **kwargs):  # noqa: E501
        """Cancel the Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.cancel_wire_transfer_using_delete_with_http_info(nucleus_funding_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_funding_id: nucleus_funding_id (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_funding_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method cancel_wire_transfer_using_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_funding_id' is set
        if self.api_client.client_side_validation and ('nucleus_funding_id' not in params or
                                                       params['nucleus_funding_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_funding_id` when calling `cancel_wire_transfer_using_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_funding_id' in params:
            path_params['nucleus_funding_id'] = params['nucleus_funding_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/{nucleus_funding_id}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireTransferResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def create_bank_link_using_post3(self, request, **kwargs):  # noqa: E501
        """Create bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_bank_link_using_post3(request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param WireBankLinkRequestCO request: request (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_bank_link_using_post3_with_http_info(request, **kwargs)  # noqa: E501
        else:
            (data) = self.create_bank_link_using_post3_with_http_info(request, **kwargs)  # noqa: E501
            return data

    def create_bank_link_using_post3_with_http_info(self, request, **kwargs):  # noqa: E501
        """Create bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_bank_link_using_post3_with_http_info(request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param WireBankLinkRequestCO request: request (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['request']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_bank_link_using_post3" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'request' is set
        if self.api_client.client_side_validation and ('request' not in params or
                                                       params['request'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `request` when calling `create_bank_link_using_post3`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'request' in params:
            body_params = params['request']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/bank_link', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireBankLinkResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def delete_bank_link_using_delete4(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Delete bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_bank_link_using_delete4(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.delete_bank_link_using_delete4_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
        else:
            (data) = self.delete_bank_link_using_delete4_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
            return data

    def delete_bank_link_using_delete4_with_http_info(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Delete bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_bank_link_using_delete4_with_http_info(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_bank_link_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method delete_bank_link_using_delete4" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_bank_link_id' is set
        if self.api_client.client_side_validation and ('nucleus_bank_link_id' not in params or
                                                       params['nucleus_bank_link_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_bank_link_id` when calling `delete_bank_link_using_delete4`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_bank_link_id' in params:
            path_params['nucleus_bank_link_id'] = params['nucleus_bank_link_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/bank_link/{nucleus_bank_link_id}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireBankLinkResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_bank_link_using_get3(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Get bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_bank_link_using_get3(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_bank_link_using_get3_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_bank_link_using_get3_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
            return data

    def get_bank_link_using_get3_with_http_info(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Get bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_bank_link_using_get3_with_http_info(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_bank_link_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_bank_link_using_get3" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_bank_link_id' is set
        if self.api_client.client_side_validation and ('nucleus_bank_link_id' not in params or
                                                       params['nucleus_bank_link_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_bank_link_id` when calling `get_bank_link_using_get3`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_bank_link_id' in params:
            path_params['nucleus_bank_link_id'] = params['nucleus_bank_link_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/bank_link/{nucleus_bank_link_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireBankLinkResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_client_bank_links_using_get2(self, nucleus_client_id, **kwargs):  # noqa: E501
        """Get client bank links  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_client_bank_links_using_get2(nucleus_client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_client_id: nucleus_client_id (required)
        :return: list[WireBankLinkResponseVO]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_client_bank_links_using_get2_with_http_info(nucleus_client_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_client_bank_links_using_get2_with_http_info(nucleus_client_id, **kwargs)  # noqa: E501
            return data

    def get_client_bank_links_using_get2_with_http_info(self, nucleus_client_id, **kwargs):  # noqa: E501
        """Get client bank links  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_client_bank_links_using_get2_with_http_info(nucleus_client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_client_id: nucleus_client_id (required)
        :return: list[WireBankLinkResponseVO]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_client_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_client_bank_links_using_get2" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_client_id' is set
        if self.api_client.client_side_validation and ('nucleus_client_id' not in params or
                                                       params['nucleus_client_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_client_id` when calling `get_client_bank_links_using_get2`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_client_id' in params:
            path_params['nucleus_client_id'] = params['nucleus_client_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/bank_link/client/{nucleus_client_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[WireBankLinkResponseVO]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_list_of_wire_transfers_using_get(self, nucleus_client_id, **kwargs):  # noqa: E501
        """Get a list of Wire transfers  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_list_of_wire_transfers_using_get(nucleus_client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_client_id: nucleus_client_id (required)
        :return: list[WireTransferResponseVO]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_list_of_wire_transfers_using_get_with_http_info(nucleus_client_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_list_of_wire_transfers_using_get_with_http_info(nucleus_client_id, **kwargs)  # noqa: E501
            return data

    def get_list_of_wire_transfers_using_get_with_http_info(self, nucleus_client_id, **kwargs):  # noqa: E501
        """Get a list of Wire transfers  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_list_of_wire_transfers_using_get_with_http_info(nucleus_client_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_client_id: nucleus_client_id (required)
        :return: list[WireTransferResponseVO]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_client_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_list_of_wire_transfers_using_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_client_id' is set
        if self.api_client.client_side_validation and ('nucleus_client_id' not in params or
                                                       params['nucleus_client_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_client_id` when calling `get_list_of_wire_transfers_using_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_client_id' in params:
            path_params['nucleus_client_id'] = params['nucleus_client_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/client/{nucleus_client_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[WireTransferResponseVO]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_wire_transfer_using_get(self, nucleus_funding_id, **kwargs):  # noqa: E501
        """Get the Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_wire_transfer_using_get(nucleus_funding_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_funding_id: nucleus_funding_id (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_wire_transfer_using_get_with_http_info(nucleus_funding_id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_wire_transfer_using_get_with_http_info(nucleus_funding_id, **kwargs)  # noqa: E501
            return data

    def get_wire_transfer_using_get_with_http_info(self, nucleus_funding_id, **kwargs):  # noqa: E501
        """Get the Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_wire_transfer_using_get_with_http_info(nucleus_funding_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_funding_id: nucleus_funding_id (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_funding_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_wire_transfer_using_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_funding_id' is set
        if self.api_client.client_side_validation and ('nucleus_funding_id' not in params or
                                                       params['nucleus_funding_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_funding_id` when calling `get_wire_transfer_using_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_funding_id' in params:
            path_params['nucleus_funding_id'] = params['nucleus_funding_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/{nucleus_funding_id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireTransferResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def submit_wire_transfer_using_post(self, transfer_request, **kwargs):  # noqa: E501
        """Submit a Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.submit_wire_transfer_using_post(transfer_request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param WireTransferRequestCO transfer_request: transferRequest (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.submit_wire_transfer_using_post_with_http_info(transfer_request, **kwargs)  # noqa: E501
        else:
            (data) = self.submit_wire_transfer_using_post_with_http_info(transfer_request, **kwargs)  # noqa: E501
            return data

    def submit_wire_transfer_using_post_with_http_info(self, transfer_request, **kwargs):  # noqa: E501
        """Submit a Wire transfer  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.submit_wire_transfer_using_post_with_http_info(transfer_request, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param WireTransferRequestCO transfer_request: transferRequest (required)
        :return: WireTransferResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['transfer_request']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method submit_wire_transfer_using_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'transfer_request' is set
        if self.api_client.client_side_validation and ('transfer_request' not in params or
                                                       params['transfer_request'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `transfer_request` when calling `submit_wire_transfer_using_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'transfer_request' in params:
            body_params = params['transfer_request']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireTransferResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_bank_link_using_put3(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Update bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_bank_link_using_put3(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.update_bank_link_using_put3_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
        else:
            (data) = self.update_bank_link_using_put3_with_http_info(nucleus_bank_link_id, **kwargs)  # noqa: E501
            return data

    def update_bank_link_using_put3_with_http_info(self, nucleus_bank_link_id, **kwargs):  # noqa: E501
        """Update bank link  # noqa: E501

        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_bank_link_using_put3_with_http_info(nucleus_bank_link_id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str nucleus_bank_link_id: nucleus_bank_link_id (required)
        :return: WireBankLinkResponseVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['nucleus_bank_link_id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_bank_link_using_put3" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'nucleus_bank_link_id' is set
        if self.api_client.client_side_validation and ('nucleus_bank_link_id' not in params or
                                                       params['nucleus_bank_link_id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `nucleus_bank_link_id` when calling `update_bank_link_using_put3`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'nucleus_bank_link_id' in params:
            path_params['nucleus_bank_link_id'] = params['nucleus_bank_link_id']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/wire/bank_link/{nucleus_bank_link_id}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='WireBankLinkResponseVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
