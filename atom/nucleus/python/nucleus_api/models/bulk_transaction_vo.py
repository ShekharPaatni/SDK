# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.2
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class BulkTransactionVO(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'error': 'object',
        'id': 'str',
        'progress': 'object',
        'status': 'str',
        'success': 'object'
    }

    attribute_map = {
        'error': 'error',
        'id': 'id',
        'progress': 'progress',
        'status': 'status',
        'success': 'success'
    }

    def __init__(self, error=None, id=None, progress=None, status=None, success=None, _configuration=None):  # noqa: E501
        """BulkTransactionVO - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._error = None
        self._id = None
        self._progress = None
        self._status = None
        self._success = None
        self.discriminator = None

        if error is not None:
            self.error = error
        if id is not None:
            self.id = id
        if progress is not None:
            self.progress = progress
        if status is not None:
            self.status = status
        if success is not None:
            self.success = success

    @property
    def error(self):
        """Gets the error of this BulkTransactionVO.  # noqa: E501


        :return: The error of this BulkTransactionVO.  # noqa: E501
        :rtype: object
        """
        return self._error

    @error.setter
    def error(self, error):
        """Sets the error of this BulkTransactionVO.


        :param error: The error of this BulkTransactionVO.  # noqa: E501
        :type: object
        """

        self._error = error

    @property
    def id(self):
        """Gets the id of this BulkTransactionVO.  # noqa: E501


        :return: The id of this BulkTransactionVO.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this BulkTransactionVO.


        :param id: The id of this BulkTransactionVO.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def progress(self):
        """Gets the progress of this BulkTransactionVO.  # noqa: E501


        :return: The progress of this BulkTransactionVO.  # noqa: E501
        :rtype: object
        """
        return self._progress

    @progress.setter
    def progress(self, progress):
        """Sets the progress of this BulkTransactionVO.


        :param progress: The progress of this BulkTransactionVO.  # noqa: E501
        :type: object
        """

        self._progress = progress

    @property
    def status(self):
        """Gets the status of this BulkTransactionVO.  # noqa: E501


        :return: The status of this BulkTransactionVO.  # noqa: E501
        :rtype: str
        """
        return self._status

    @status.setter
    def status(self, status):
        """Sets the status of this BulkTransactionVO.


        :param status: The status of this BulkTransactionVO.  # noqa: E501
        :type: str
        """

        self._status = status

    @property
    def success(self):
        """Gets the success of this BulkTransactionVO.  # noqa: E501


        :return: The success of this BulkTransactionVO.  # noqa: E501
        :rtype: object
        """
        return self._success

    @success.setter
    def success(self, success):
        """Sets the success of this BulkTransactionVO.


        :param success: The success of this BulkTransactionVO.  # noqa: E501
        :type: object
        """

        self._success = success

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(BulkTransactionVO, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, BulkTransactionVO):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, BulkTransactionVO):
            return True

        return self.to_dict() != other.to_dict()
