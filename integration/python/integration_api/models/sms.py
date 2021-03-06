# coding: utf-8

"""
    Hydrogen Integration API

    The Hydrogen Integration API  # noqa: E501

    OpenAPI spec version: 1.3.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from integration_api.configuration import Configuration


class SMS(object):
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
        'create_date': 'datetime',
        'delivery_status': 'str',
        'delivery_status_timestamp': 'datetime',
        '_from': 'str',
        'id': 'str',
        'nucleus_business_id': 'str',
        'nucleus_client_id': 'str',
        'reply_message': 'str',
        'secondary_id': 'str',
        'sms_id': 'str',
        'to': 'str',
        'type': 'str',
        'update_date': 'datetime',
        'vendor_account_id': 'str',
        'vendor_id': 'str',
        'vendor_name': 'str',
        'vendor_sms_id': 'str'
    }

    attribute_map = {
        'create_date': 'create_date',
        'delivery_status': 'delivery_status',
        'delivery_status_timestamp': 'delivery_status_timestamp',
        '_from': 'from',
        'id': 'id',
        'nucleus_business_id': 'nucleus_business_id',
        'nucleus_client_id': 'nucleus_client_id',
        'reply_message': 'reply_message',
        'secondary_id': 'secondary_id',
        'sms_id': 'sms_id',
        'to': 'to',
        'type': 'type',
        'update_date': 'update_date',
        'vendor_account_id': 'vendor_account_id',
        'vendor_id': 'vendor_id',
        'vendor_name': 'vendor_name',
        'vendor_sms_id': 'vendor_sms_id'
    }

    def __init__(self, create_date=None, delivery_status=None, delivery_status_timestamp=None, _from=None, id=None, nucleus_business_id=None, nucleus_client_id=None, reply_message=None, secondary_id=None, sms_id=None, to=None, type=None, update_date=None, vendor_account_id=None, vendor_id=None, vendor_name=None, vendor_sms_id=None, _configuration=None):  # noqa: E501
        """SMS - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._create_date = None
        self._delivery_status = None
        self._delivery_status_timestamp = None
        self.__from = None
        self._id = None
        self._nucleus_business_id = None
        self._nucleus_client_id = None
        self._reply_message = None
        self._secondary_id = None
        self._sms_id = None
        self._to = None
        self._type = None
        self._update_date = None
        self._vendor_account_id = None
        self._vendor_id = None
        self._vendor_name = None
        self._vendor_sms_id = None
        self.discriminator = None

        if create_date is not None:
            self.create_date = create_date
        if delivery_status is not None:
            self.delivery_status = delivery_status
        if delivery_status_timestamp is not None:
            self.delivery_status_timestamp = delivery_status_timestamp
        if _from is not None:
            self._from = _from
        if id is not None:
            self.id = id
        if nucleus_business_id is not None:
            self.nucleus_business_id = nucleus_business_id
        if nucleus_client_id is not None:
            self.nucleus_client_id = nucleus_client_id
        if reply_message is not None:
            self.reply_message = reply_message
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if sms_id is not None:
            self.sms_id = sms_id
        if to is not None:
            self.to = to
        if type is not None:
            self.type = type
        if update_date is not None:
            self.update_date = update_date
        if vendor_account_id is not None:
            self.vendor_account_id = vendor_account_id
        if vendor_id is not None:
            self.vendor_id = vendor_id
        if vendor_name is not None:
            self.vendor_name = vendor_name
        if vendor_sms_id is not None:
            self.vendor_sms_id = vendor_sms_id

    @property
    def create_date(self):
        """Gets the create_date of this SMS.  # noqa: E501


        :return: The create_date of this SMS.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this SMS.


        :param create_date: The create_date of this SMS.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def delivery_status(self):
        """Gets the delivery_status of this SMS.  # noqa: E501

        deliveryStatus  # noqa: E501

        :return: The delivery_status of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._delivery_status

    @delivery_status.setter
    def delivery_status(self, delivery_status):
        """Sets the delivery_status of this SMS.

        deliveryStatus  # noqa: E501

        :param delivery_status: The delivery_status of this SMS.  # noqa: E501
        :type: str
        """

        self._delivery_status = delivery_status

    @property
    def delivery_status_timestamp(self):
        """Gets the delivery_status_timestamp of this SMS.  # noqa: E501

        deliveryStatusTimestamp  # noqa: E501

        :return: The delivery_status_timestamp of this SMS.  # noqa: E501
        :rtype: datetime
        """
        return self._delivery_status_timestamp

    @delivery_status_timestamp.setter
    def delivery_status_timestamp(self, delivery_status_timestamp):
        """Sets the delivery_status_timestamp of this SMS.

        deliveryStatusTimestamp  # noqa: E501

        :param delivery_status_timestamp: The delivery_status_timestamp of this SMS.  # noqa: E501
        :type: datetime
        """

        self._delivery_status_timestamp = delivery_status_timestamp

    @property
    def _from(self):
        """Gets the _from of this SMS.  # noqa: E501

        from  # noqa: E501

        :return: The _from of this SMS.  # noqa: E501
        :rtype: str
        """
        return self.__from

    @_from.setter
    def _from(self, _from):
        """Sets the _from of this SMS.

        from  # noqa: E501

        :param _from: The _from of this SMS.  # noqa: E501
        :type: str
        """

        self.__from = _from

    @property
    def id(self):
        """Gets the id of this SMS.  # noqa: E501


        :return: The id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this SMS.


        :param id: The id of this SMS.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def nucleus_business_id(self):
        """Gets the nucleus_business_id of this SMS.  # noqa: E501

        nucleusBusinessId  # noqa: E501

        :return: The nucleus_business_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_business_id

    @nucleus_business_id.setter
    def nucleus_business_id(self, nucleus_business_id):
        """Sets the nucleus_business_id of this SMS.

        nucleusBusinessId  # noqa: E501

        :param nucleus_business_id: The nucleus_business_id of this SMS.  # noqa: E501
        :type: str
        """

        self._nucleus_business_id = nucleus_business_id

    @property
    def nucleus_client_id(self):
        """Gets the nucleus_client_id of this SMS.  # noqa: E501

        nucleusClientId  # noqa: E501

        :return: The nucleus_client_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._nucleus_client_id

    @nucleus_client_id.setter
    def nucleus_client_id(self, nucleus_client_id):
        """Sets the nucleus_client_id of this SMS.

        nucleusClientId  # noqa: E501

        :param nucleus_client_id: The nucleus_client_id of this SMS.  # noqa: E501
        :type: str
        """

        self._nucleus_client_id = nucleus_client_id

    @property
    def reply_message(self):
        """Gets the reply_message of this SMS.  # noqa: E501

        replyMessage  # noqa: E501

        :return: The reply_message of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._reply_message

    @reply_message.setter
    def reply_message(self, reply_message):
        """Sets the reply_message of this SMS.

        replyMessage  # noqa: E501

        :param reply_message: The reply_message of this SMS.  # noqa: E501
        :type: str
        """

        self._reply_message = reply_message

    @property
    def secondary_id(self):
        """Gets the secondary_id of this SMS.  # noqa: E501


        :return: The secondary_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this SMS.


        :param secondary_id: The secondary_id of this SMS.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def sms_id(self):
        """Gets the sms_id of this SMS.  # noqa: E501


        :return: The sms_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._sms_id

    @sms_id.setter
    def sms_id(self, sms_id):
        """Sets the sms_id of this SMS.


        :param sms_id: The sms_id of this SMS.  # noqa: E501
        :type: str
        """

        self._sms_id = sms_id

    @property
    def to(self):
        """Gets the to of this SMS.  # noqa: E501

        to  # noqa: E501

        :return: The to of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._to

    @to.setter
    def to(self, to):
        """Sets the to of this SMS.

        to  # noqa: E501

        :param to: The to of this SMS.  # noqa: E501
        :type: str
        """

        self._to = to

    @property
    def type(self):
        """Gets the type of this SMS.  # noqa: E501

        type  # noqa: E501

        :return: The type of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this SMS.

        type  # noqa: E501

        :param type: The type of this SMS.  # noqa: E501
        :type: str
        """

        self._type = type

    @property
    def update_date(self):
        """Gets the update_date of this SMS.  # noqa: E501


        :return: The update_date of this SMS.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this SMS.


        :param update_date: The update_date of this SMS.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

    @property
    def vendor_account_id(self):
        """Gets the vendor_account_id of this SMS.  # noqa: E501


        :return: The vendor_account_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._vendor_account_id

    @vendor_account_id.setter
    def vendor_account_id(self, vendor_account_id):
        """Sets the vendor_account_id of this SMS.


        :param vendor_account_id: The vendor_account_id of this SMS.  # noqa: E501
        :type: str
        """

        self._vendor_account_id = vendor_account_id

    @property
    def vendor_id(self):
        """Gets the vendor_id of this SMS.  # noqa: E501

        vendorId  # noqa: E501

        :return: The vendor_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._vendor_id

    @vendor_id.setter
    def vendor_id(self, vendor_id):
        """Sets the vendor_id of this SMS.

        vendorId  # noqa: E501

        :param vendor_id: The vendor_id of this SMS.  # noqa: E501
        :type: str
        """

        self._vendor_id = vendor_id

    @property
    def vendor_name(self):
        """Gets the vendor_name of this SMS.  # noqa: E501


        :return: The vendor_name of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._vendor_name

    @vendor_name.setter
    def vendor_name(self, vendor_name):
        """Sets the vendor_name of this SMS.


        :param vendor_name: The vendor_name of this SMS.  # noqa: E501
        :type: str
        """

        self._vendor_name = vendor_name

    @property
    def vendor_sms_id(self):
        """Gets the vendor_sms_id of this SMS.  # noqa: E501


        :return: The vendor_sms_id of this SMS.  # noqa: E501
        :rtype: str
        """
        return self._vendor_sms_id

    @vendor_sms_id.setter
    def vendor_sms_id(self, vendor_sms_id):
        """Sets the vendor_sms_id of this SMS.


        :param vendor_sms_id: The vendor_sms_id of this SMS.  # noqa: E501
        :type: str
        """

        self._vendor_sms_id = vendor_sms_id

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
        if issubclass(SMS, dict):
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
        if not isinstance(other, SMS):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, SMS):
            return True

        return self.to_dict() != other.to_dict()
