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


class CampaignData(object):
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
        'campaign_id': 'str',
        'click_through_rate': 'float',
        'create_date': 'datetime',
        'end_date': 'datetime',
        'id': 'str',
        'line_item': 'str',
        'metadata': 'dict(str, str)',
        'publisher_campaign_name': 'str',
        'secondary_id': 'str',
        'start_date': 'datetime',
        'total_clicks': 'int',
        'total_impressions': 'int',
        'update_date': 'datetime'
    }

    attribute_map = {
        'campaign_id': 'campaign_id',
        'click_through_rate': 'click_through_rate',
        'create_date': 'create_date',
        'end_date': 'end_date',
        'id': 'id',
        'line_item': 'line_item',
        'metadata': 'metadata',
        'publisher_campaign_name': 'publisher_campaign_name',
        'secondary_id': 'secondary_id',
        'start_date': 'start_date',
        'total_clicks': 'total_clicks',
        'total_impressions': 'total_impressions',
        'update_date': 'update_date'
    }

    def __init__(self, campaign_id=None, click_through_rate=None, create_date=None, end_date=None, id=None, line_item=None, metadata=None, publisher_campaign_name=None, secondary_id=None, start_date=None, total_clicks=None, total_impressions=None, update_date=None):  # noqa: E501
        """CampaignData - a model defined in Swagger"""  # noqa: E501

        self._campaign_id = None
        self._click_through_rate = None
        self._create_date = None
        self._end_date = None
        self._id = None
        self._line_item = None
        self._metadata = None
        self._publisher_campaign_name = None
        self._secondary_id = None
        self._start_date = None
        self._total_clicks = None
        self._total_impressions = None
        self._update_date = None
        self.discriminator = None

        self.campaign_id = campaign_id
        if click_through_rate is not None:
            self.click_through_rate = click_through_rate
        if create_date is not None:
            self.create_date = create_date
        self.end_date = end_date
        if id is not None:
            self.id = id
        if line_item is not None:
            self.line_item = line_item
        if metadata is not None:
            self.metadata = metadata
        if publisher_campaign_name is not None:
            self.publisher_campaign_name = publisher_campaign_name
        if secondary_id is not None:
            self.secondary_id = secondary_id
        self.start_date = start_date
        if total_clicks is not None:
            self.total_clicks = total_clicks
        if total_impressions is not None:
            self.total_impressions = total_impressions
        if update_date is not None:
            self.update_date = update_date

    @property
    def campaign_id(self):
        """Gets the campaign_id of this CampaignData.  # noqa: E501

        campaignId  # noqa: E501

        :return: The campaign_id of this CampaignData.  # noqa: E501
        :rtype: str
        """
        return self._campaign_id

    @campaign_id.setter
    def campaign_id(self, campaign_id):
        """Sets the campaign_id of this CampaignData.

        campaignId  # noqa: E501

        :param campaign_id: The campaign_id of this CampaignData.  # noqa: E501
        :type: str
        """
        if campaign_id is None:
            raise ValueError("Invalid value for `campaign_id`, must not be `None`")  # noqa: E501

        self._campaign_id = campaign_id

    @property
    def click_through_rate(self):
        """Gets the click_through_rate of this CampaignData.  # noqa: E501

        clickThroughRate  # noqa: E501

        :return: The click_through_rate of this CampaignData.  # noqa: E501
        :rtype: float
        """
        return self._click_through_rate

    @click_through_rate.setter
    def click_through_rate(self, click_through_rate):
        """Sets the click_through_rate of this CampaignData.

        clickThroughRate  # noqa: E501

        :param click_through_rate: The click_through_rate of this CampaignData.  # noqa: E501
        :type: float
        """

        self._click_through_rate = click_through_rate

    @property
    def create_date(self):
        """Gets the create_date of this CampaignData.  # noqa: E501


        :return: The create_date of this CampaignData.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this CampaignData.


        :param create_date: The create_date of this CampaignData.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def end_date(self):
        """Gets the end_date of this CampaignData.  # noqa: E501

        endDate  # noqa: E501

        :return: The end_date of this CampaignData.  # noqa: E501
        :rtype: datetime
        """
        return self._end_date

    @end_date.setter
    def end_date(self, end_date):
        """Sets the end_date of this CampaignData.

        endDate  # noqa: E501

        :param end_date: The end_date of this CampaignData.  # noqa: E501
        :type: datetime
        """
        if end_date is None:
            raise ValueError("Invalid value for `end_date`, must not be `None`")  # noqa: E501

        self._end_date = end_date

    @property
    def id(self):
        """Gets the id of this CampaignData.  # noqa: E501


        :return: The id of this CampaignData.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this CampaignData.


        :param id: The id of this CampaignData.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def line_item(self):
        """Gets the line_item of this CampaignData.  # noqa: E501

        lineItem  # noqa: E501

        :return: The line_item of this CampaignData.  # noqa: E501
        :rtype: str
        """
        return self._line_item

    @line_item.setter
    def line_item(self, line_item):
        """Sets the line_item of this CampaignData.

        lineItem  # noqa: E501

        :param line_item: The line_item of this CampaignData.  # noqa: E501
        :type: str
        """

        self._line_item = line_item

    @property
    def metadata(self):
        """Gets the metadata of this CampaignData.  # noqa: E501


        :return: The metadata of this CampaignData.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this CampaignData.


        :param metadata: The metadata of this CampaignData.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def publisher_campaign_name(self):
        """Gets the publisher_campaign_name of this CampaignData.  # noqa: E501

        publisherCampaignName  # noqa: E501

        :return: The publisher_campaign_name of this CampaignData.  # noqa: E501
        :rtype: str
        """
        return self._publisher_campaign_name

    @publisher_campaign_name.setter
    def publisher_campaign_name(self, publisher_campaign_name):
        """Sets the publisher_campaign_name of this CampaignData.

        publisherCampaignName  # noqa: E501

        :param publisher_campaign_name: The publisher_campaign_name of this CampaignData.  # noqa: E501
        :type: str
        """

        self._publisher_campaign_name = publisher_campaign_name

    @property
    def secondary_id(self):
        """Gets the secondary_id of this CampaignData.  # noqa: E501


        :return: The secondary_id of this CampaignData.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this CampaignData.


        :param secondary_id: The secondary_id of this CampaignData.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def start_date(self):
        """Gets the start_date of this CampaignData.  # noqa: E501

        startDate  # noqa: E501

        :return: The start_date of this CampaignData.  # noqa: E501
        :rtype: datetime
        """
        return self._start_date

    @start_date.setter
    def start_date(self, start_date):
        """Sets the start_date of this CampaignData.

        startDate  # noqa: E501

        :param start_date: The start_date of this CampaignData.  # noqa: E501
        :type: datetime
        """
        if start_date is None:
            raise ValueError("Invalid value for `start_date`, must not be `None`")  # noqa: E501

        self._start_date = start_date

    @property
    def total_clicks(self):
        """Gets the total_clicks of this CampaignData.  # noqa: E501

        clickThroughRate  # noqa: E501

        :return: The total_clicks of this CampaignData.  # noqa: E501
        :rtype: int
        """
        return self._total_clicks

    @total_clicks.setter
    def total_clicks(self, total_clicks):
        """Sets the total_clicks of this CampaignData.

        clickThroughRate  # noqa: E501

        :param total_clicks: The total_clicks of this CampaignData.  # noqa: E501
        :type: int
        """

        self._total_clicks = total_clicks

    @property
    def total_impressions(self):
        """Gets the total_impressions of this CampaignData.  # noqa: E501

        totalImpressions  # noqa: E501

        :return: The total_impressions of this CampaignData.  # noqa: E501
        :rtype: int
        """
        return self._total_impressions

    @total_impressions.setter
    def total_impressions(self, total_impressions):
        """Sets the total_impressions of this CampaignData.

        totalImpressions  # noqa: E501

        :param total_impressions: The total_impressions of this CampaignData.  # noqa: E501
        :type: int
        """

        self._total_impressions = total_impressions

    @property
    def update_date(self):
        """Gets the update_date of this CampaignData.  # noqa: E501


        :return: The update_date of this CampaignData.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this CampaignData.


        :param update_date: The update_date of this CampaignData.  # noqa: E501
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
        if issubclass(CampaignData, dict):
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
        if not isinstance(other, CampaignData):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
