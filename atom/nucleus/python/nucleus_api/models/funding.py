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


class Funding(object):
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
        'account_id': 'str',
        'amount': 'float',
        'bank_link_id': 'str',
        'business_id': 'str',
        'card_id': 'str',
        'create_date': 'datetime',
        'currency_code': 'str',
        'description': 'str',
        'end_date': 'date',
        'frequency': 'int',
        'frequency_unit': 'str',
        'funding_status': 'str',
        'funding_type': 'str',
        'id': 'str',
        'is_active': 'bool',
        'is_deposit': 'bool',
        'last_request_date': 'date',
        'metadata': 'dict(str, str)',
        'next_request_date': 'date',
        'portfolio_id': 'str',
        'receiving_account_id': 'str',
        'receiving_bank_link_id': 'str',
        'receiving_portfolio_id': 'str',
        'secondary_id': 'str',
        'start_date': 'date',
        'support_ticket_id': 'str',
        'threshold_amount': 'float',
        'transfer_id': 'str',
        'transfer_speed': 'str',
        'transfer_type': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'amount': 'amount',
        'bank_link_id': 'bank_link_id',
        'business_id': 'business_id',
        'card_id': 'card_id',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        'description': 'description',
        'end_date': 'end_date',
        'frequency': 'frequency',
        'frequency_unit': 'frequency_unit',
        'funding_status': 'funding_status',
        'funding_type': 'funding_type',
        'id': 'id',
        'is_active': 'is_active',
        'is_deposit': 'is_deposit',
        'last_request_date': 'last_request_date',
        'metadata': 'metadata',
        'next_request_date': 'next_request_date',
        'portfolio_id': 'portfolio_id',
        'receiving_account_id': 'receiving_account_id',
        'receiving_bank_link_id': 'receiving_bank_link_id',
        'receiving_portfolio_id': 'receiving_portfolio_id',
        'secondary_id': 'secondary_id',
        'start_date': 'start_date',
        'support_ticket_id': 'support_ticket_id',
        'threshold_amount': 'threshold_amount',
        'transfer_id': 'transfer_id',
        'transfer_speed': 'transfer_speed',
        'transfer_type': 'transfer_type',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, amount=None, bank_link_id=None, business_id=None, card_id=None, create_date=None, currency_code=None, description=None, end_date=None, frequency=None, frequency_unit=None, funding_status=None, funding_type=None, id=None, is_active=None, is_deposit=None, last_request_date=None, metadata=None, next_request_date=None, portfolio_id=None, receiving_account_id=None, receiving_bank_link_id=None, receiving_portfolio_id=None, secondary_id=None, start_date=None, support_ticket_id=None, threshold_amount=None, transfer_id=None, transfer_speed=None, transfer_type=None, update_date=None, _configuration=None):  # noqa: E501
        """Funding - a model defined in Swagger"""  # noqa: E501
        if _configuration is None:
            _configuration = Configuration()
        self._configuration = _configuration

        self._account_id = None
        self._amount = None
        self._bank_link_id = None
        self._business_id = None
        self._card_id = None
        self._create_date = None
        self._currency_code = None
        self._description = None
        self._end_date = None
        self._frequency = None
        self._frequency_unit = None
        self._funding_status = None
        self._funding_type = None
        self._id = None
        self._is_active = None
        self._is_deposit = None
        self._last_request_date = None
        self._metadata = None
        self._next_request_date = None
        self._portfolio_id = None
        self._receiving_account_id = None
        self._receiving_bank_link_id = None
        self._receiving_portfolio_id = None
        self._secondary_id = None
        self._start_date = None
        self._support_ticket_id = None
        self._threshold_amount = None
        self._transfer_id = None
        self._transfer_speed = None
        self._transfer_type = None
        self._update_date = None
        self.discriminator = None

        if account_id is not None:
            self.account_id = account_id
        if amount is not None:
            self.amount = amount
        if bank_link_id is not None:
            self.bank_link_id = bank_link_id
        if business_id is not None:
            self.business_id = business_id
        if card_id is not None:
            self.card_id = card_id
        if create_date is not None:
            self.create_date = create_date
        if currency_code is not None:
            self.currency_code = currency_code
        if description is not None:
            self.description = description
        if end_date is not None:
            self.end_date = end_date
        if frequency is not None:
            self.frequency = frequency
        self.frequency_unit = frequency_unit
        self.funding_status = funding_status
        self.funding_type = funding_type
        if id is not None:
            self.id = id
        if is_active is not None:
            self.is_active = is_active
        self.is_deposit = is_deposit
        if last_request_date is not None:
            self.last_request_date = last_request_date
        if metadata is not None:
            self.metadata = metadata
        if next_request_date is not None:
            self.next_request_date = next_request_date
        if portfolio_id is not None:
            self.portfolio_id = portfolio_id
        if receiving_account_id is not None:
            self.receiving_account_id = receiving_account_id
        if receiving_bank_link_id is not None:
            self.receiving_bank_link_id = receiving_bank_link_id
        if receiving_portfolio_id is not None:
            self.receiving_portfolio_id = receiving_portfolio_id
        if secondary_id is not None:
            self.secondary_id = secondary_id
        self.start_date = start_date
        if support_ticket_id is not None:
            self.support_ticket_id = support_ticket_id
        if threshold_amount is not None:
            self.threshold_amount = threshold_amount
        if transfer_id is not None:
            self.transfer_id = transfer_id
        if transfer_speed is not None:
            self.transfer_speed = transfer_speed
        if transfer_type is not None:
            self.transfer_type = transfer_type
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this Funding.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this Funding.

        accountId  # noqa: E501

        :param account_id: The account_id of this Funding.  # noqa: E501
        :type: str
        """

        self._account_id = account_id

    @property
    def amount(self):
        """Gets the amount of this Funding.  # noqa: E501

        amount  # noqa: E501

        :return: The amount of this Funding.  # noqa: E501
        :rtype: float
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this Funding.

        amount  # noqa: E501

        :param amount: The amount of this Funding.  # noqa: E501
        :type: float
        """

        self._amount = amount

    @property
    def bank_link_id(self):
        """Gets the bank_link_id of this Funding.  # noqa: E501

        bankLinkId  # noqa: E501

        :return: The bank_link_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._bank_link_id

    @bank_link_id.setter
    def bank_link_id(self, bank_link_id):
        """Sets the bank_link_id of this Funding.

        bankLinkId  # noqa: E501

        :param bank_link_id: The bank_link_id of this Funding.  # noqa: E501
        :type: str
        """

        self._bank_link_id = bank_link_id

    @property
    def business_id(self):
        """Gets the business_id of this Funding.  # noqa: E501

        businessId  # noqa: E501

        :return: The business_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._business_id

    @business_id.setter
    def business_id(self, business_id):
        """Sets the business_id of this Funding.

        businessId  # noqa: E501

        :param business_id: The business_id of this Funding.  # noqa: E501
        :type: str
        """

        self._business_id = business_id

    @property
    def card_id(self):
        """Gets the card_id of this Funding.  # noqa: E501

        cardId  # noqa: E501

        :return: The card_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._card_id

    @card_id.setter
    def card_id(self, card_id):
        """Sets the card_id of this Funding.

        cardId  # noqa: E501

        :param card_id: The card_id of this Funding.  # noqa: E501
        :type: str
        """

        self._card_id = card_id

    @property
    def create_date(self):
        """Gets the create_date of this Funding.  # noqa: E501


        :return: The create_date of this Funding.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Funding.


        :param create_date: The create_date of this Funding.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this Funding.  # noqa: E501

        currencyCode  # noqa: E501

        :return: The currency_code of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this Funding.

        currencyCode  # noqa: E501

        :param currency_code: The currency_code of this Funding.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def description(self):
        """Gets the description of this Funding.  # noqa: E501

        description  # noqa: E501

        :return: The description of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._description

    @description.setter
    def description(self, description):
        """Sets the description of this Funding.

        description  # noqa: E501

        :param description: The description of this Funding.  # noqa: E501
        :type: str
        """

        self._description = description

    @property
    def end_date(self):
        """Gets the end_date of this Funding.  # noqa: E501

        endDate  # noqa: E501

        :return: The end_date of this Funding.  # noqa: E501
        :rtype: date
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this Funding.

        endDate  # noqa: E501

        :param end_date: The end_date of this Funding.  # noqa: E501
        :type: date
        """

        self._end_date = end_date

    @property
    def frequency(self):
        """Gets the frequency of this Funding.  # noqa: E501

        frequency  # noqa: E501

        :return: The frequency of this Funding.  # noqa: E501
        :rtype: int
        """
        return self._frequency

    @frequency.setter
    def frequency(self, frequency):
        """Sets the frequency of this Funding.

        frequency  # noqa: E501

        :param frequency: The frequency of this Funding.  # noqa: E501
        :type: int
        """

        self._frequency = frequency

    @property
    def frequency_unit(self):
        """Gets the frequency_unit of this Funding.  # noqa: E501

        frequencyUnit  # noqa: E501

        :return: The frequency_unit of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._frequency_unit

    @frequency_unit.setter
    def frequency_unit(self, frequency_unit):
        """Sets the frequency_unit of this Funding.

        frequencyUnit  # noqa: E501

        :param frequency_unit: The frequency_unit of this Funding.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and frequency_unit is None:
            raise ValueError("Invalid value for `frequency_unit`, must not be `None`")  # noqa: E501

        self._frequency_unit = frequency_unit

    @property
    def funding_status(self):
        """Gets the funding_status of this Funding.  # noqa: E501

        fundingStatus  # noqa: E501

        :return: The funding_status of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._funding_status

    @funding_status.setter
    def funding_status(self, funding_status):
        """Sets the funding_status of this Funding.

        fundingStatus  # noqa: E501

        :param funding_status: The funding_status of this Funding.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and funding_status is None:
            raise ValueError("Invalid value for `funding_status`, must not be `None`")  # noqa: E501

        self._funding_status = funding_status

    @property
    def funding_type(self):
        """Gets the funding_type of this Funding.  # noqa: E501

        fundingType  # noqa: E501

        :return: The funding_type of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._funding_type

    @funding_type.setter
    def funding_type(self, funding_type):
        """Sets the funding_type of this Funding.

        fundingType  # noqa: E501

        :param funding_type: The funding_type of this Funding.  # noqa: E501
        :type: str
        """
        if self._configuration.client_side_validation and funding_type is None:
            raise ValueError("Invalid value for `funding_type`, must not be `None`")  # noqa: E501

        self._funding_type = funding_type

    @property
    def id(self):
        """Gets the id of this Funding.  # noqa: E501


        :return: The id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Funding.


        :param id: The id of this Funding.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def is_active(self):
        """Gets the is_active of this Funding.  # noqa: E501

        isActive  # noqa: E501

        :return: The is_active of this Funding.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Funding.

        isActive  # noqa: E501

        :param is_active: The is_active of this Funding.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def is_deposit(self):
        """Gets the is_deposit of this Funding.  # noqa: E501

        isDeposit  # noqa: E501

        :return: The is_deposit of this Funding.  # noqa: E501
        :rtype: bool
        """
        return self._is_deposit

    @is_deposit.setter
    def is_deposit(self, is_deposit):
        """Sets the is_deposit of this Funding.

        isDeposit  # noqa: E501

        :param is_deposit: The is_deposit of this Funding.  # noqa: E501
        :type: bool
        """
        if self._configuration.client_side_validation and is_deposit is None:
            raise ValueError("Invalid value for `is_deposit`, must not be `None`")  # noqa: E501

        self._is_deposit = is_deposit

    @property
    def last_request_date(self):
        """Gets the last_request_date of this Funding.  # noqa: E501

        lastRequestDate  # noqa: E501

        :return: The last_request_date of this Funding.  # noqa: E501
        :rtype: date
        """
        return self._last_request_date

    @last_request_date.setter
    def last_request_date(self, last_request_date):
        """Sets the last_request_date of this Funding.

        lastRequestDate  # noqa: E501

        :param last_request_date: The last_request_date of this Funding.  # noqa: E501
        :type: date
        """

        self._last_request_date = last_request_date

    @property
    def metadata(self):
        """Gets the metadata of this Funding.  # noqa: E501

        metadata  # noqa: E501

        :return: The metadata of this Funding.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Funding.

        metadata  # noqa: E501

        :param metadata: The metadata of this Funding.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def next_request_date(self):
        """Gets the next_request_date of this Funding.  # noqa: E501

        nextRequestDate  # noqa: E501

        :return: The next_request_date of this Funding.  # noqa: E501
        :rtype: date
        """
        return self._next_request_date

    @next_request_date.setter
    def next_request_date(self, next_request_date):
        """Sets the next_request_date of this Funding.

        nextRequestDate  # noqa: E501

        :param next_request_date: The next_request_date of this Funding.  # noqa: E501
        :type: date
        """

        self._next_request_date = next_request_date

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this Funding.  # noqa: E501

        portfolioId  # noqa: E501

        :return: The portfolio_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this Funding.

        portfolioId  # noqa: E501

        :param portfolio_id: The portfolio_id of this Funding.  # noqa: E501
        :type: str
        """

        self._portfolio_id = portfolio_id

    @property
    def receiving_account_id(self):
        """Gets the receiving_account_id of this Funding.  # noqa: E501

        receivingAccountId  # noqa: E501

        :return: The receiving_account_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._receiving_account_id

    @receiving_account_id.setter
    def receiving_account_id(self, receiving_account_id):
        """Sets the receiving_account_id of this Funding.

        receivingAccountId  # noqa: E501

        :param receiving_account_id: The receiving_account_id of this Funding.  # noqa: E501
        :type: str
        """

        self._receiving_account_id = receiving_account_id

    @property
    def receiving_bank_link_id(self):
        """Gets the receiving_bank_link_id of this Funding.  # noqa: E501

        receivingBankLinkId  # noqa: E501

        :return: The receiving_bank_link_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._receiving_bank_link_id

    @receiving_bank_link_id.setter
    def receiving_bank_link_id(self, receiving_bank_link_id):
        """Sets the receiving_bank_link_id of this Funding.

        receivingBankLinkId  # noqa: E501

        :param receiving_bank_link_id: The receiving_bank_link_id of this Funding.  # noqa: E501
        :type: str
        """

        self._receiving_bank_link_id = receiving_bank_link_id

    @property
    def receiving_portfolio_id(self):
        """Gets the receiving_portfolio_id of this Funding.  # noqa: E501

        receivingPortfolioId  # noqa: E501

        :return: The receiving_portfolio_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._receiving_portfolio_id

    @receiving_portfolio_id.setter
    def receiving_portfolio_id(self, receiving_portfolio_id):
        """Sets the receiving_portfolio_id of this Funding.

        receivingPortfolioId  # noqa: E501

        :param receiving_portfolio_id: The receiving_portfolio_id of this Funding.  # noqa: E501
        :type: str
        """

        self._receiving_portfolio_id = receiving_portfolio_id

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Funding.  # noqa: E501


        :return: The secondary_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Funding.


        :param secondary_id: The secondary_id of this Funding.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def start_date(self):
        """Gets the start_date of this Funding.  # noqa: E501

        startDate  # noqa: E501

        :return: The start_date of this Funding.  # noqa: E501
        :rtype: date
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this Funding.

        startDate  # noqa: E501

        :param start_date: The start_date of this Funding.  # noqa: E501
        :type: date
        """
        if self._configuration.client_side_validation and start_date is None:
            raise ValueError("Invalid value for `start_date`, must not be `None`")  # noqa: E501

        self._start_date = start_date

    @property
    def support_ticket_id(self):
        """Gets the support_ticket_id of this Funding.  # noqa: E501

        supportTicketId  # noqa: E501

        :return: The support_ticket_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._support_ticket_id

    @support_ticket_id.setter
    def support_ticket_id(self, support_ticket_id):
        """Sets the support_ticket_id of this Funding.

        supportTicketId  # noqa: E501

        :param support_ticket_id: The support_ticket_id of this Funding.  # noqa: E501
        :type: str
        """

        self._support_ticket_id = support_ticket_id

    @property
    def threshold_amount(self):
        """Gets the threshold_amount of this Funding.  # noqa: E501

        thresholdAmount  # noqa: E501

        :return: The threshold_amount of this Funding.  # noqa: E501
        :rtype: float
        """
        return self._threshold_amount

    @threshold_amount.setter
    def threshold_amount(self, threshold_amount):
        """Sets the threshold_amount of this Funding.

        thresholdAmount  # noqa: E501

        :param threshold_amount: The threshold_amount of this Funding.  # noqa: E501
        :type: float
        """

        self._threshold_amount = threshold_amount

    @property
    def transfer_id(self):
        """Gets the transfer_id of this Funding.  # noqa: E501

        transferId  # noqa: E501

        :return: The transfer_id of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._transfer_id

    @transfer_id.setter
    def transfer_id(self, transfer_id):
        """Sets the transfer_id of this Funding.

        transferId  # noqa: E501

        :param transfer_id: The transfer_id of this Funding.  # noqa: E501
        :type: str
        """

        self._transfer_id = transfer_id

    @property
    def transfer_speed(self):
        """Gets the transfer_speed of this Funding.  # noqa: E501

        transferSpeed  # noqa: E501

        :return: The transfer_speed of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._transfer_speed

    @transfer_speed.setter
    def transfer_speed(self, transfer_speed):
        """Sets the transfer_speed of this Funding.

        transferSpeed  # noqa: E501

        :param transfer_speed: The transfer_speed of this Funding.  # noqa: E501
        :type: str
        """

        self._transfer_speed = transfer_speed

    @property
    def transfer_type(self):
        """Gets the transfer_type of this Funding.  # noqa: E501

        transferType  # noqa: E501

        :return: The transfer_type of this Funding.  # noqa: E501
        :rtype: str
        """
        return self._transfer_type

    @transfer_type.setter
    def transfer_type(self, transfer_type):
        """Sets the transfer_type of this Funding.

        transferType  # noqa: E501

        :param transfer_type: The transfer_type of this Funding.  # noqa: E501
        :type: str
        """

        self._transfer_type = transfer_type

    @property
    def update_date(self):
        """Gets the update_date of this Funding.  # noqa: E501


        :return: The update_date of this Funding.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Funding.


        :param update_date: The update_date of this Funding.  # noqa: E501
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
        if issubclass(Funding, dict):
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
        if not isinstance(other, Funding):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, Funding):
            return True

        return self.to_dict() != other.to_dict()
