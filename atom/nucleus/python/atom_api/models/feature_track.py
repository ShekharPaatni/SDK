# coding: utf-8

"""
    Hydrogen Atom API

    The Hydrogen Atom API  # noqa: E501

    OpenAPI spec version: 1.7.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class FeatureTrack(object):
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
        'client_id': 'str',
        'create_date': 'datetime',
        'feature_id': 'str',
        'id': 'str',
        'metadata': 'dict(str, str)',
        'secondary_id': 'str',
        'update_date': 'datetime',
        'visit_time_stamp': 'datetime'
    }

    attribute_map = {
        'client_id': 'client_id',
        'create_date': 'create_date',
        'feature_id': 'feature_id',
        'id': 'id',
        'metadata': 'metadata',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date',
        'visit_time_stamp': 'visit_time_stamp'
    }

    def __init__(self, client_id=None, create_date=None, feature_id=None, id=None, metadata=None, secondary_id=None, update_date=None, visit_time_stamp=None):  # noqa: E501
        """FeatureTrack - a model defined in Swagger"""  # noqa: E501

        self._client_id = None
        self._create_date = None
        self._feature_id = None
        self._id = None
        self._metadata = None
        self._secondary_id = None
        self._update_date = None
        self._visit_time_stamp = None
        self.discriminator = None

        self.client_id = client_id
        if create_date is not None:
            self.create_date = create_date
        self.feature_id = feature_id
        if id is not None:
            self.id = id
        if metadata is not None:
            self.metadata = metadata
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date
        if visit_time_stamp is not None:
            self.visit_time_stamp = visit_time_stamp

    @property
    def client_id(self):
        """Gets the client_id of this FeatureTrack.  # noqa: E501

        client_id  # noqa: E501

        :return: The client_id of this FeatureTrack.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this FeatureTrack.

        client_id  # noqa: E501

        :param client_id: The client_id of this FeatureTrack.  # noqa: E501
        :type: str
        """
        if client_id is None:
            raise ValueError("Invalid value for `client_id`, must not be `None`")  # noqa: E501

        self._client_id = client_id

    @property
    def create_date(self):
        """Gets the create_date of this FeatureTrack.  # noqa: E501


        :return: The create_date of this FeatureTrack.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this FeatureTrack.


        :param create_date: The create_date of this FeatureTrack.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def feature_id(self):
        """Gets the feature_id of this FeatureTrack.  # noqa: E501

        feature_id  # noqa: E501

        :return: The feature_id of this FeatureTrack.  # noqa: E501
        :rtype: str
        """
        return self._feature_id

    @feature_id.setter
    def feature_id(self, feature_id):
        """Sets the feature_id of this FeatureTrack.

        feature_id  # noqa: E501

        :param feature_id: The feature_id of this FeatureTrack.  # noqa: E501
        :type: str
        """
        if feature_id is None:
            raise ValueError("Invalid value for `feature_id`, must not be `None`")  # noqa: E501

        self._feature_id = feature_id

    @property
    def id(self):
        """Gets the id of this FeatureTrack.  # noqa: E501


        :return: The id of this FeatureTrack.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this FeatureTrack.


        :param id: The id of this FeatureTrack.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def metadata(self):
        """Gets the metadata of this FeatureTrack.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this FeatureTrack.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this FeatureTrack.

        metadata  # noqa: E501

        :param metadata: The metadata of this FeatureTrack.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def secondary_id(self):
        """Gets the secondary_id of this FeatureTrack.  # noqa: E501


        :return: The secondary_id of this FeatureTrack.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this FeatureTrack.


        :param secondary_id: The secondary_id of this FeatureTrack.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this FeatureTrack.  # noqa: E501


        :return: The update_date of this FeatureTrack.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this FeatureTrack.


        :param update_date: The update_date of this FeatureTrack.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def visit_time_stamp(self):
        """Gets the visit_time_stamp of this FeatureTrack.  # noqa: E501

        visit_time_stamp  # noqa: E501

        :return: The visit_time_stamp of this FeatureTrack.  # noqa: E501
        :rtype: datetime
        """
        return self._visit_time_stamp

    @visit_time_stamp.setter
    def visit_time_stamp(self, visit_time_stamp):
        """Sets the visit_time_stamp of this FeatureTrack.

        visit_time_stamp  # noqa: E501

        :param visit_time_stamp: The visit_time_stamp of this FeatureTrack.  # noqa: E501
        :type: datetime
        """

        self._visit_time_stamp = visit_time_stamp

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
        if issubclass(FeatureTrack, dict):
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
        if not isinstance(other, FeatureTrack):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
