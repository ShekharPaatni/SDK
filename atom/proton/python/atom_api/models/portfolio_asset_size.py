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


class PortfolioAssetSize(object):
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
        'asset_size': 'float',
        'asset_size_available': 'float',
        'asset_size_pending': 'float',
        'cash_flow': 'float',
        'create_date': 'datetime',
        'currency_code': 'str',
        '_date': 'datetime',
        'id': 'str',
        'model_id': 'str',
        'portfolio_id': 'str',
        'secondary_id': 'str',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_id': 'account_id',
        'asset_size': 'asset_size',
        'asset_size_available': 'asset_size_available',
        'asset_size_pending': 'asset_size_pending',
        'cash_flow': 'cash_flow',
        'create_date': 'create_date',
        'currency_code': 'currency_code',
        '_date': 'date',
        'id': 'id',
        'model_id': 'model_id',
        'portfolio_id': 'portfolio_id',
        'secondary_id': 'secondary_id',
        'update_date': 'update_date'
    }

    def __init__(self, account_id=None, asset_size=None, asset_size_available=None, asset_size_pending=None, cash_flow=None, create_date=None, currency_code=None, _date=None, id=None, model_id=None, portfolio_id=None, secondary_id=None, update_date=None):  # noqa: E501
        """PortfolioAssetSize - a model defined in Swagger"""  # noqa: E501

        self._account_id = None
        self._asset_size = None
        self._asset_size_available = None
        self._asset_size_pending = None
        self._cash_flow = None
        self._create_date = None
        self._currency_code = None
        self.__date = None
        self._id = None
        self._model_id = None
        self._portfolio_id = None
        self._secondary_id = None
        self._update_date = None
        self.discriminator = None

        self.account_id = account_id
        self.asset_size = asset_size
        if asset_size_available is not None:
            self.asset_size_available = asset_size_available
        if asset_size_pending is not None:
            self.asset_size_pending = asset_size_pending
        self.cash_flow = cash_flow
        if create_date is not None:
            self.create_date = create_date
        if currency_code is not None:
            self.currency_code = currency_code
        self._date = _date
        self.id = id
        self.model_id = model_id
        self.portfolio_id = portfolio_id
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_id(self):
        """Gets the account_id of this PortfolioAssetSize.  # noqa: E501

        accountId  # noqa: E501

        :return: The account_id of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._account_id

    @account_id.setter
    def account_id(self, account_id):
        """Sets the account_id of this PortfolioAssetSize.

        accountId  # noqa: E501

        :param account_id: The account_id of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """
        if account_id is None:
            raise ValueError("Invalid value for `account_id`, must not be `None`")  # noqa: E501

        self._account_id = account_id

    @property
    def asset_size(self):
        """Gets the asset_size of this PortfolioAssetSize.  # noqa: E501

        asset_size  # noqa: E501

        :return: The asset_size of this PortfolioAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._asset_size

    @asset_size.setter
    def asset_size(self, asset_size):
        """Sets the asset_size of this PortfolioAssetSize.

        asset_size  # noqa: E501

        :param asset_size: The asset_size of this PortfolioAssetSize.  # noqa: E501
        :type: float
        """
        if asset_size is None:
            raise ValueError("Invalid value for `asset_size`, must not be `None`")  # noqa: E501

        self._asset_size = asset_size

    @property
    def asset_size_available(self):
        """Gets the asset_size_available of this PortfolioAssetSize.  # noqa: E501

        asset_size_available  # noqa: E501

        :return: The asset_size_available of this PortfolioAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._asset_size_available

    @asset_size_available.setter
    def asset_size_available(self, asset_size_available):
        """Sets the asset_size_available of this PortfolioAssetSize.

        asset_size_available  # noqa: E501

        :param asset_size_available: The asset_size_available of this PortfolioAssetSize.  # noqa: E501
        :type: float
        """

        self._asset_size_available = asset_size_available

    @property
    def asset_size_pending(self):
        """Gets the asset_size_pending of this PortfolioAssetSize.  # noqa: E501

        asset_size_pending  # noqa: E501

        :return: The asset_size_pending of this PortfolioAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._asset_size_pending

    @asset_size_pending.setter
    def asset_size_pending(self, asset_size_pending):
        """Sets the asset_size_pending of this PortfolioAssetSize.

        asset_size_pending  # noqa: E501

        :param asset_size_pending: The asset_size_pending of this PortfolioAssetSize.  # noqa: E501
        :type: float
        """

        self._asset_size_pending = asset_size_pending

    @property
    def cash_flow(self):
        """Gets the cash_flow of this PortfolioAssetSize.  # noqa: E501

        cash_flow  # noqa: E501

        :return: The cash_flow of this PortfolioAssetSize.  # noqa: E501
        :rtype: float
        """
        return self._cash_flow

    @cash_flow.setter
    def cash_flow(self, cash_flow):
        """Sets the cash_flow of this PortfolioAssetSize.

        cash_flow  # noqa: E501

        :param cash_flow: The cash_flow of this PortfolioAssetSize.  # noqa: E501
        :type: float
        """
        if cash_flow is None:
            raise ValueError("Invalid value for `cash_flow`, must not be `None`")  # noqa: E501

        self._cash_flow = cash_flow

    @property
    def create_date(self):
        """Gets the create_date of this PortfolioAssetSize.  # noqa: E501


        :return: The create_date of this PortfolioAssetSize.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this PortfolioAssetSize.


        :param create_date: The create_date of this PortfolioAssetSize.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def currency_code(self):
        """Gets the currency_code of this PortfolioAssetSize.  # noqa: E501

        currency_code  # noqa: E501

        :return: The currency_code of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._currency_code

    @currency_code.setter
    def currency_code(self, currency_code):
        """Sets the currency_code of this PortfolioAssetSize.

        currency_code  # noqa: E501

        :param currency_code: The currency_code of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """

        self._currency_code = currency_code

    @property
    def _date(self):
        """Gets the _date of this PortfolioAssetSize.  # noqa: E501

        date  # noqa: E501

        :return: The _date of this PortfolioAssetSize.  # noqa: E501
        :rtype: datetime
        """
        return self.__date

    @_date.setter
    def _date(self, _date):
        """Sets the _date of this PortfolioAssetSize.

        date  # noqa: E501

        :param _date: The _date of this PortfolioAssetSize.  # noqa: E501
        :type: datetime
        """
        if _date is None:
            raise ValueError("Invalid value for `_date`, must not be `None`")  # noqa: E501

        self.__date = _date

    @property
    def id(self):
        """Gets the id of this PortfolioAssetSize.  # noqa: E501

        logId  # noqa: E501

        :return: The id of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this PortfolioAssetSize.

        logId  # noqa: E501

        :param id: The id of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """
        if id is None:
            raise ValueError("Invalid value for `id`, must not be `None`")  # noqa: E501

        self._id = id

    @property
    def model_id(self):
        """Gets the model_id of this PortfolioAssetSize.  # noqa: E501

        modelId  # noqa: E501

        :return: The model_id of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._model_id

    @model_id.setter
    def model_id(self, model_id):
        """Sets the model_id of this PortfolioAssetSize.

        modelId  # noqa: E501

        :param model_id: The model_id of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """
        if model_id is None:
            raise ValueError("Invalid value for `model_id`, must not be `None`")  # noqa: E501

        self._model_id = model_id

    @property
    def portfolio_id(self):
        """Gets the portfolio_id of this PortfolioAssetSize.  # noqa: E501

        portfolioId  # noqa: E501

        :return: The portfolio_id of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._portfolio_id

    @portfolio_id.setter
    def portfolio_id(self, portfolio_id):
        """Sets the portfolio_id of this PortfolioAssetSize.

        portfolioId  # noqa: E501

        :param portfolio_id: The portfolio_id of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """
        if portfolio_id is None:
            raise ValueError("Invalid value for `portfolio_id`, must not be `None`")  # noqa: E501

        self._portfolio_id = portfolio_id

    @property
    def secondary_id(self):
        """Gets the secondary_id of this PortfolioAssetSize.  # noqa: E501


        :return: The secondary_id of this PortfolioAssetSize.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this PortfolioAssetSize.


        :param secondary_id: The secondary_id of this PortfolioAssetSize.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def update_date(self):
        """Gets the update_date of this PortfolioAssetSize.  # noqa: E501


        :return: The update_date of this PortfolioAssetSize.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this PortfolioAssetSize.


        :param update_date: The update_date of this PortfolioAssetSize.  # noqa: E501
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
        if issubclass(PortfolioAssetSize, dict):
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
        if not isinstance(other, PortfolioAssetSize):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
