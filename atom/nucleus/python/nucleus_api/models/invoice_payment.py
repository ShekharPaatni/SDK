# coding: utf-8

"""
    Hydrogen Nucleus API

    The Hydrogen Nucleus API  # noqa: E501

    OpenAPI spec version: 1.9.0
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from nucleus_api.configuration import Configuration


class InvoicePayment(object):
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
        'currency_code': 'str',
        'id': 'str',
        'invoice_id': 'str',
        'metadata': 'dict(str, str)',
        'payment_amount': 'float',
        'payment_date': 'datetime',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'id': 'id',
        'invoice_id': 'invoice_id',
        'metadata': 'metadata',
        'payment_amount': 'payment_amount',
        'payment_date': 'payment_date',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, create_date=None, currency_code=None, id=None, invoice_id=None, metadata=None, payment_amount=None, payment_date=None, secondary_id=None, update_date=None, _configuration=None):  # noqa: E501
        """InvoicePayment - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._create_date = None
        self._currency_code = None
        self._id = None
        self._invoice_id = None
        self._metadata = None
        self._payment_amount = None
        self._payment_date = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        if create_date is not None:
            self.create_date = create_date
        self.currency_code = currency_code
        if id is not None:
            self.id = id
        self.invoice_id = invoice_id
        if metadata is not None:
            self.metadata = metadata
        self.payment_amount = payment_amount
        self.payment_date = payment_date
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def create_date(self):
        """Gets the create_date of this InvoicePayment.  # noqa: E501


        :return: The create_date of this InvoicePayment.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this InvoicePayment.


        :param create_date: The create_date of this InvoicePayment.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this InvoicePayment.  # noqa: E501

        currency_code  # noqa: E501

        :return: The currency_code of this InvoicePayment.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this InvoicePayment.

        currency_code  # noqa: E501

        :param currency_code: The currency_code of this InvoicePayment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and currency_code is None:
            raise ValueError("Invalid value for `currency_code`, must not be `None`")  # noqa: E501

        self._currency_code = currency_code

    @property
    def id(self):
        """Gets the id of this InvoicePayment.  # noqa: E501


        :return: The id of this InvoicePayment.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this InvoicePayment.


        :param id: The id of this InvoicePayment.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def invoice_id(self):
        """Gets the invoice_id of this InvoicePayment.  # noqa: E501

        invoiceId  # noqa: E501

        :return: The invoice_id of this InvoicePayment.  # noqa: E501
        :rtype: str
        """
        return self._invoice_id

    @invoice_id.setter
    def invoice_id(self, invoice_id):
        """Sets the invoice_id of this InvoicePayment.

        invoiceId  # noqa: E501

        :param invoice_id: The invoice_id of this InvoicePayment.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and invoice_id is None:
            raise ValueError("Invalid value for `invoice_id`, must not be `None`")  # noqa: E501

        self._invoice_id = invoice_id

    @property
    def metadata(self):
        """Gets the metadata of this InvoicePayment.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this InvoicePayment.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this InvoicePayment.

        metadata  # noqa: E501

        :param metadata: The metadata of this InvoicePayment.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def payment_amount(self):
        """Gets the payment_amount of this InvoicePayment.  # noqa: E501

        paymentAmount  # noqa: E501

        :return: The payment_amount of this InvoicePayment.  # noqa: E501
        :rtype: float
        """
        return self._payment_amount

    @payment_amount.setter
    def payment_amount(self, payment_amount):
        """Sets the payment_amount of this InvoicePayment.

        paymentAmount  # noqa: E501

        :param payment_amount: The payment_amount of this InvoicePayment.  # noqa: E501
        :type: float
        """
        if self._configuration.client_side_validation and payment_amount is None:
            raise ValueError("Invalid value for `payment_amount`, must not be `None`")  # noqa: E501

        self._payment_amount = payment_amount

    @property
    def payment_date(self):
        """Gets the payment_date of this InvoicePayment.  # noqa: E501

        paymentDate  # noqa: E501

        :return: The payment_date of this InvoicePayment.  # noqa: E501
        :rtype: datetime
        """
        return self._payment_date

    @payment_date.setter
    def payment_date(self, payment_date):
        """Sets the payment_date of this InvoicePayment.

        paymentDate  # noqa: E501

        :param payment_date: The payment_date of this InvoicePayment.  # noqa: E501
        :type: datetime
        """
        if self._configuration.client_side_validation and payment_date is None:
            raise ValueError("Invalid value for `payment_date`, must not be `None`")  # noqa: E501

        self._payment_date = payment_date

    @property
    def secondary_id(self):
        """Gets the secondary_id of this InvoicePayment.  # noqa: E501


        :return: The secondary_id of this InvoicePayment.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this InvoicePayment.


        :param secondary_id: The secondary_id of this InvoicePayment.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this InvoicePayment.  # noqa: E501


        :return: The update_date of this InvoicePayment.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this InvoicePayment.


        :param update_date: The update_date of this InvoicePayment.  # noqa: E501
        :type: datetime
        """

        self._update_date = update_date

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
        if issubclass(InvoicePayment, dict):
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
        if not isinstance(other, InvoicePayment):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, InvoicePayment):
            return True

        return self.to_dict() != other.to_dict()
