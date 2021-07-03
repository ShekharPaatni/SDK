# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import re  # noqa: F401

# python 2 and python 3 compatibility library
import six

from nucleus_api.api_client import ApiClient


class BulkApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_bulk_using_post(self, data, entity_uri, **kwargs):  # noqa: E501
        """Create a bulk data  # noqa: E501

        Create a new bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_bulk_using_post(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param JsonNode data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_bulk_using_post_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
        else:
            (data) = self.create_bulk_using_post_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
            return data

    def create_bulk_using_post_with_http_info(self, data, entity_uri, **kwargs):  # noqa: E501
        """Create a bulk data  # noqa: E501

        Create a new bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_bulk_using_post_with_http_info(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param JsonNode data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['data', 'entity_uri']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_bulk_using_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'data' is set
        if self.api_client.client_side_validation and ('data' not in params or
                                                       params['data'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `data` when calling `create_bulk_using_post`")  # noqa: E501
        # verify the required parameter 'entity_uri' is set
        if self.api_client.client_side_validation and ('entity_uri' not in params or
                                                       params['entity_uri'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `entity_uri` when calling `create_bulk_using_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'entity_uri' in params:
            path_params['entity_uri'] = params['entity_uri']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'data' in params:
            body_params = params['data']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/nucleus/v1/bulk/{entity_uri}', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='BulkTransaction',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def delete_bulk_using_delete(self, data, entity_uri, **kwargs):  # noqa: E501
        """Delete a bulk data  # noqa: E501

        Delete a bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_bulk_using_delete(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param JsonNode data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.delete_bulk_using_delete_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
        else:
            (data) = self.delete_bulk_using_delete_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
            return data

    def delete_bulk_using_delete_with_http_info(self, data, entity_uri, **kwargs):  # noqa: E501
        """Delete a bulk data  # noqa: E501

        Delete a bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.delete_bulk_using_delete_with_http_info(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param JsonNode data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['data', 'entity_uri']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method delete_bulk_using_delete" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'data' is set
        if self.api_client.client_side_validation and ('data' not in params or
                                                       params['data'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `data` when calling `delete_bulk_using_delete`")  # noqa: E501
        # verify the required parameter 'entity_uri' is set
        if self.api_client.client_side_validation and ('entity_uri' not in params or
                                                       params['entity_uri'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `entity_uri` when calling `delete_bulk_using_delete`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'entity_uri' in params:
            path_params['entity_uri'] = params['entity_uri']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'data' in params:
            body_params = params['data']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/nucleus/v1/bulk/{entity_uri}', 'DELETE',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='BulkTransaction',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_bulk_status_using_get(self, id, **kwargs):  # noqa: E501
        """Status of bulk transaction  # noqa: E501

        Get the status of bulk transaction.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_bulk_status_using_get(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: UUID Bulk Transaction Id (required)
        :return: BulkTransactionVO
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_bulk_status_using_get_with_http_info(id, **kwargs)  # noqa: E501
        else:
            (data) = self.get_bulk_status_using_get_with_http_info(id, **kwargs)  # noqa: E501
            return data

    def get_bulk_status_using_get_with_http_info(self, id, **kwargs):  # noqa: E501
        """Status of bulk transaction  # noqa: E501

        Get the status of bulk transaction.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_bulk_status_using_get_with_http_info(id, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param str id: UUID Bulk Transaction Id (required)
        :return: BulkTransactionVO
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['id']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_bulk_status_using_get" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'id' is set
        if self.api_client.client_side_validation and ('id' not in params or
                                                       params['id'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `id` when calling `get_bulk_status_using_get`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'id' in params:
            path_params['id'] = params['id']  # noqa: E501

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
            '/nucleus/v1/bulk/status/{id}', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='BulkTransactionVO',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def update_bulk_using_put(self, data, entity_uri, **kwargs):  # noqa: E501
        """Update a bulk data  # noqa: E501

        Update a bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_bulk_using_put(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param object data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.update_bulk_using_put_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
        else:
            (data) = self.update_bulk_using_put_with_http_info(data, entity_uri, **kwargs)  # noqa: E501
            return data

    def update_bulk_using_put_with_http_info(self, data, entity_uri, **kwargs):  # noqa: E501
        """Update a bulk data  # noqa: E501

        Update a bulk data for your firm.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.update_bulk_using_put_with_http_info(data, entity_uri, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param object data: data (required)
        :param str entity_uri: UUID entity_uri (required)
        :return: BulkTransaction
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['data', 'entity_uri']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method update_bulk_using_put" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'data' is set
        if self.api_client.client_side_validation and ('data' not in params or
                                                       params['data'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `data` when calling `update_bulk_using_put`")  # noqa: E501
        # verify the required parameter 'entity_uri' is set
        if self.api_client.client_side_validation and ('entity_uri' not in params or
                                                       params['entity_uri'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `entity_uri` when calling `update_bulk_using_put`")  # noqa: E501

        collection_formats = {}

        path_params = {}
        if 'entity_uri' in params:
            path_params['entity_uri'] = params['entity_uri']  # noqa: E501

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'data' in params:
            body_params = params['data']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['application/json'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/nucleus/v1/bulk/{entity_uri}', 'PUT',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='BulkTransaction',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
