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


class KYCApi(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    Ref: https://github.com/swagger-api/swagger-codegen
    """

    def __init__(self, api_client=None):
        if api_client is None:
            api_client = ApiClient()
        self.api_client = api_client

    def create_kyc_using_post(self, kyc_request_co, **kwargs):  # noqa: E501
        """Do kyc for the client.  # noqa: E501

        Do kyc for the client.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_kyc_using_post(kyc_request_co, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param KycRequestCO kyc_request_co: kycRequestCO (required)
        :return: KycResponseVo
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.create_kyc_using_post_with_http_info(kyc_request_co, **kwargs)  # noqa: E501
        else:
            (data) = self.create_kyc_using_post_with_http_info(kyc_request_co, **kwargs)  # noqa: E501
            return data

    def create_kyc_using_post_with_http_info(self, kyc_request_co, **kwargs):  # noqa: E501
        """Do kyc for the client.  # noqa: E501

        Do kyc for the client.  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.create_kyc_using_post_with_http_info(kyc_request_co, async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param KycRequestCO kyc_request_co: kycRequestCO (required)
        :return: KycResponseVo
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['kyc_request_co']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method create_kyc_using_post" % key
                )
            params[key] = val
        del params['kwargs']
        # verify the required parameter 'kyc_request_co' is set
        if self.api_client.client_side_validation and ('kyc_request_co' not in params or
                                                       params['kyc_request_co'] is None):  # noqa: E501
            raise ValueError("Missing the required parameter `kyc_request_co` when calling `create_kyc_using_post`")  # noqa: E501

        collection_formats = {}

        path_params = {}

        query_params = []

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        if 'kyc_request_co' in params:
            body_params = params['kyc_request_co']
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # HTTP header `Content-Type`
        header_params['Content-Type'] = self.api_client.select_header_content_type(  # noqa: E501
            ['application/json'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/kyc', 'POST',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='KycResponseVo',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)

    def get_kyc_status_using_get(self, **kwargs):  # noqa: E501
        """Fetch kyc_status for the given nucleus_client_id  # noqa: E501

        Fetch kyc_status for the given nucleus_client_id  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_kyc_status_using_get(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool get_latest: get_latest
        :param str kyc_type: kyc_type
        :param str nucleus_business_id: nucleus_business_id
        :param str nucleus_client_id: nucleus_client_id
        :param str product: product
        :return: list[KycResponseVo]
                 If the method is called asynchronously,
                 returns the request thread.
        """
        kwargs['_return_http_data_only'] = True
        if kwargs.get('async_req'):
            return self.get_kyc_status_using_get_with_http_info(**kwargs)  # noqa: E501
        else:
            (data) = self.get_kyc_status_using_get_with_http_info(**kwargs)  # noqa: E501
            return data

    def get_kyc_status_using_get_with_http_info(self, **kwargs):  # noqa: E501
        """Fetch kyc_status for the given nucleus_client_id  # noqa: E501

        Fetch kyc_status for the given nucleus_client_id  # noqa: E501
        This method makes a synchronous HTTP request by default. To make an
        asynchronous HTTP request, please pass async_req=True
        >>> thread = api.get_kyc_status_using_get_with_http_info(async_req=True)
        >>> result = thread.get()

        :param async_req bool
        :param bool get_latest: get_latest
        :param str kyc_type: kyc_type
        :param str nucleus_business_id: nucleus_business_id
        :param str nucleus_client_id: nucleus_client_id
        :param str product: product
        :return: list[KycResponseVo]
                 If the method is called asynchronously,
                 returns the request thread.
        """

        all_params = ['get_latest', 'kyc_type', 'nucleus_business_id', 'nucleus_client_id', 'product']  # noqa: E501
        all_params.append('async_req')
        all_params.append('_return_http_data_only')
        all_params.append('_preload_content')
        all_params.append('_request_timeout')

        params = locals()
        for key, val in six.iteritems(params['kwargs']):
            if key not in all_params:
                raise TypeError(
                    "Got an unexpected keyword argument '%s'"
                    " to method get_kyc_status_using_get" % key
                )
            params[key] = val
        del params['kwargs']

        collection_formats = {}

        path_params = {}

        query_params = []
        if 'get_latest' in params:
            query_params.append(('get_latest', params['get_latest']))  # noqa: E501
        if 'kyc_type' in params:
            query_params.append(('kyc_type', params['kyc_type']))  # noqa: E501
        if 'nucleus_business_id' in params:
            query_params.append(('nucleus_business_id', params['nucleus_business_id']))  # noqa: E501
        if 'nucleus_client_id' in params:
            query_params.append(('nucleus_client_id', params['nucleus_client_id']))  # noqa: E501
        if 'product' in params:
            query_params.append(('product', params['product']))  # noqa: E501

        header_params = {}

        form_params = []
        local_var_files = {}

        body_params = None
        # HTTP header `Accept`
        header_params['Accept'] = self.api_client.select_header_accept(
            ['*/*'])  # noqa: E501

        # Authentication setting
        auth_settings = ['oauth2']  # noqa: E501

        return self.api_client.call_api(
            '/kyc_status', 'GET',
            path_params,
            query_params,
            header_params,
            body=body_params,
            post_params=form_params,
            files=local_var_files,
            response_type='list[KycResponseVo]',  # noqa: E501
            auth_settings=auth_settings,
            async_req=params.get('async_req'),
            _return_http_data_only=params.get('_return_http_data_only'),
            _preload_content=params.get('_preload_content', True),
            _request_timeout=params.get('_request_timeout'),
            collection_formats=collection_formats)
