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


class Consultation(object):
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
        'account_type_id': 'str',
        'additional_questions': 'str',
        'assets': 'str',
        'assigned': 'str',
        'calendar': 'bool',
        'category': 'str',
        'client_id': 'str',
        'close_time': 'datetime',
        'closed_by': 'str',
        'comments': 'str',
        'completed': 'bool',
        'create_date': 'datetime',
        'email': 'str',
        'firmname': 'str',
        'id': 'str',
        'investment_allocation': 'str',
        'investment_location': 'str',
        'investment_objectives': 'str',
        'is_active': 'bool',
        'metadata': 'dict(str, str)',
        'name': 'str',
        'phone': 'str',
        'reminded': 'bool',
        'secondary_id': 'str',
        'source': 'str',
        'time': 'datetime',
        'update_date': 'datetime'
    }

    attribute_map = {
        'account_type_id': 'account_type_id',
        'additional_questions': 'additional_questions',
        'assets': 'assets',
        'assigned': 'assigned',
        'calendar': 'calendar',
        'category': 'category',
        'client_id': 'client_id',
        'close_time': 'close_time',
        'closed_by': 'closed_by',
        'comments': 'comments',
        'completed': 'completed',
        'create_date': 'create_date',
        'email': 'email',
        'firmname': 'firmname',
        'id': 'id',
        'investment_allocation': 'investment_allocation',
        'investment_location': 'investment_location',
        'investment_objectives': 'investment_objectives',
        'is_active': 'is_active',
        'metadata': 'metadata',
        'name': 'name',
        'phone': 'phone',
        'reminded': 'reminded',
        'secondary_id': 'secondary_id',
        'source': 'source',
        'time': 'time',
        'update_date': 'update_date'
    }

    def __init__(self, account_type_id=None, additional_questions=None, assets=None, assigned=None, calendar=None, category=None, client_id=None, close_time=None, closed_by=None, comments=None, completed=None, create_date=None, email=None, firmname=None, id=None, investment_allocation=None, investment_location=None, investment_objectives=None, is_active=None, metadata=None, name=None, phone=None, reminded=None, secondary_id=None, source=None, time=None, update_date=None):  # noqa: E501
        """Consultation - a model defined in Swagger"""  # noqa: E501

        self._account_type_id = None
        self._additional_questions = None
        self._assets = None
        self._assigned = None
        self._calendar = None
        self._category = None
        self._client_id = None
        self._close_time = None
        self._closed_by = None
        self._comments = None
        self._completed = None
        self._create_date = None
        self._email = None
        self._firmname = None
        self._id = None
        self._investment_allocation = None
        self._investment_location = None
        self._investment_objectives = None
        self._is_active = None
        self._metadata = None
        self._name = None
        self._phone = None
        self._reminded = None
        self._secondary_id = None
        self._source = None
        self._time = None
        self._update_date = None
        self.discriminator = None

        if account_type_id is not None:
            self.account_type_id = account_type_id
        if additional_questions is not None:
            self.additional_questions = additional_questions
        if assets is not None:
            self.assets = assets
        if assigned is not None:
            self.assigned = assigned
        if calendar is not None:
            self.calendar = calendar
        if category is not None:
            self.category = category
        if client_id is not None:
            self.client_id = client_id
        if close_time is not None:
            self.close_time = close_time
        if closed_by is not None:
            self.closed_by = closed_by
        if comments is not None:
            self.comments = comments
        if completed is not None:
            self.completed = completed
        if create_date is not None:
            self.create_date = create_date
        if email is not None:
            self.email = email
        if firmname is not None:
            self.firmname = firmname
        if id is not None:
            self.id = id
        if investment_allocation is not None:
            self.investment_allocation = investment_allocation
        if investment_location is not None:
            self.investment_location = investment_location
        if investment_objectives is not None:
            self.investment_objectives = investment_objectives
        if is_active is not None:
            self.is_active = is_active
        if metadata is not None:
            self.metadata = metadata
        if name is not None:
            self.name = name
        if phone is not None:
            self.phone = phone
        if reminded is not None:
            self.reminded = reminded
        if secondary_id is not None:
            self.secondary_id = secondary_id
        if source is not None:
            self.source = source
        if time is not None:
            self.time = time
        if update_date is not None:
            self.update_date = update_date

    @property
    def account_type_id(self):
        """Gets the account_type_id of this Consultation.  # noqa: E501

        accountTypeId  # noqa: E501

        :return: The account_type_id of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._account_type_id

    @account_type_id.setter
    def account_type_id(self, account_type_id):
        """Sets the account_type_id of this Consultation.

        accountTypeId  # noqa: E501

        :param account_type_id: The account_type_id of this Consultation.  # noqa: E501
        :type: str
        """

        self._account_type_id = account_type_id

    @property
    def additional_questions(self):
        """Gets the additional_questions of this Consultation.  # noqa: E501

        additionalQuestions  # noqa: E501

        :return: The additional_questions of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._additional_questions

    @additional_questions.setter
    def additional_questions(self, additional_questions):
        """Sets the additional_questions of this Consultation.

        additionalQuestions  # noqa: E501

        :param additional_questions: The additional_questions of this Consultation.  # noqa: E501
        :type: str
        """

        self._additional_questions = additional_questions

    @property
    def assets(self):
        """Gets the assets of this Consultation.  # noqa: E501

        assets  # noqa: E501

        :return: The assets of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._assets

    @assets.setter
    def assets(self, assets):
        """Sets the assets of this Consultation.

        assets  # noqa: E501

        :param assets: The assets of this Consultation.  # noqa: E501
        :type: str
        """

        self._assets = assets

    @property
    def assigned(self):
        """Gets the assigned of this Consultation.  # noqa: E501

        assigned  # noqa: E501

        :return: The assigned of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._assigned

    @assigned.setter
    def assigned(self, assigned):
        """Sets the assigned of this Consultation.

        assigned  # noqa: E501

        :param assigned: The assigned of this Consultation.  # noqa: E501
        :type: str
        """

        self._assigned = assigned

    @property
    def calendar(self):
        """Gets the calendar of this Consultation.  # noqa: E501

        calendar  # noqa: E501

        :return: The calendar of this Consultation.  # noqa: E501
        :rtype: bool
        """
        return self._calendar

    @calendar.setter
    def calendar(self, calendar):
        """Sets the calendar of this Consultation.

        calendar  # noqa: E501

        :param calendar: The calendar of this Consultation.  # noqa: E501
        :type: bool
        """

        self._calendar = calendar

    @property
    def category(self):
        """Gets the category of this Consultation.  # noqa: E501

        category  # noqa: E501

        :return: The category of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._category

    @category.setter
    def category(self, category):
        """Sets the category of this Consultation.

        category  # noqa: E501

        :param category: The category of this Consultation.  # noqa: E501
        :type: str
        """

        self._category = category

    @property
    def client_id(self):
        """Gets the client_id of this Consultation.  # noqa: E501

        clientId  # noqa: E501

        :return: The client_id of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._client_id

    @client_id.setter
    def client_id(self, client_id):
        """Sets the client_id of this Consultation.

        clientId  # noqa: E501

        :param client_id: The client_id of this Consultation.  # noqa: E501
        :type: str
        """

        self._client_id = client_id

    @property
    def close_time(self):
        """Gets the close_time of this Consultation.  # noqa: E501

        closeTime  # noqa: E501

        :return: The close_time of this Consultation.  # noqa: E501
        :rtype: datetime
        """
        return self._close_time

    @close_time.setter
    def close_time(self, close_time):
        """Sets the close_time of this Consultation.

        closeTime  # noqa: E501

        :param close_time: The close_time of this Consultation.  # noqa: E501
        :type: datetime
        """

        self._close_time = close_time

    @property
    def closed_by(self):
        """Gets the closed_by of this Consultation.  # noqa: E501

        closedBy  # noqa: E501

        :return: The closed_by of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._closed_by

    @closed_by.setter
    def closed_by(self, closed_by):
        """Sets the closed_by of this Consultation.

        closedBy  # noqa: E501

        :param closed_by: The closed_by of this Consultation.  # noqa: E501
        :type: str
        """

        self._closed_by = closed_by

    @property
    def comments(self):
        """Gets the comments of this Consultation.  # noqa: E501

        comments  # noqa: E501

        :return: The comments of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._comments

    @comments.setter
    def comments(self, comments):
        """Sets the comments of this Consultation.

        comments  # noqa: E501

        :param comments: The comments of this Consultation.  # noqa: E501
        :type: str
        """

        self._comments = comments

    @property
    def completed(self):
        """Gets the completed of this Consultation.  # noqa: E501

        completed  # noqa: E501

        :return: The completed of this Consultation.  # noqa: E501
        :rtype: bool
        """
        return self._completed

    @completed.setter
    def completed(self, completed):
        """Sets the completed of this Consultation.

        completed  # noqa: E501

        :param completed: The completed of this Consultation.  # noqa: E501
        :type: bool
        """

        self._completed = completed

    @property
    def create_date(self):
        """Gets the create_date of this Consultation.  # noqa: E501


        :return: The create_date of this Consultation.  # noqa: E501
        :rtype: datetime
        """
        return self._create_date

    @create_date.setter
    def create_date(self, create_date):
        """Sets the create_date of this Consultation.


        :param create_date: The create_date of this Consultation.  # noqa: E501
        :type: datetime
        """

        self._create_date = create_date

    @property
    def email(self):
        """Gets the email of this Consultation.  # noqa: E501

        email  # noqa: E501

        :return: The email of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._email

    @email.setter
    def email(self, email):
        """Sets the email of this Consultation.

        email  # noqa: E501

        :param email: The email of this Consultation.  # noqa: E501
        :type: str
        """

        self._email = email

    @property
    def firmname(self):
        """Gets the firmname of this Consultation.  # noqa: E501

        firmname  # noqa: E501

        :return: The firmname of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._firmname

    @firmname.setter
    def firmname(self, firmname):
        """Sets the firmname of this Consultation.

        firmname  # noqa: E501

        :param firmname: The firmname of this Consultation.  # noqa: E501
        :type: str
        """

        self._firmname = firmname

    @property
    def id(self):
        """Gets the id of this Consultation.  # noqa: E501


        :return: The id of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._id

    @id.setter
    def id(self, id):
        """Sets the id of this Consultation.


        :param id: The id of this Consultation.  # noqa: E501
        :type: str
        """

        self._id = id

    @property
    def investment_allocation(self):
        """Gets the investment_allocation of this Consultation.  # noqa: E501

        investmentAllocation  # noqa: E501

        :return: The investment_allocation of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._investment_allocation

    @investment_allocation.setter
    def investment_allocation(self, investment_allocation):
        """Sets the investment_allocation of this Consultation.

        investmentAllocation  # noqa: E501

        :param investment_allocation: The investment_allocation of this Consultation.  # noqa: E501
        :type: str
        """

        self._investment_allocation = investment_allocation

    @property
    def investment_location(self):
        """Gets the investment_location of this Consultation.  # noqa: E501

        investmentLocation  # noqa: E501

        :return: The investment_location of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._investment_location

    @investment_location.setter
    def investment_location(self, investment_location):
        """Sets the investment_location of this Consultation.

        investmentLocation  # noqa: E501

        :param investment_location: The investment_location of this Consultation.  # noqa: E501
        :type: str
        """

        self._investment_location = investment_location

    @property
    def investment_objectives(self):
        """Gets the investment_objectives of this Consultation.  # noqa: E501

        investmentObjectives  # noqa: E501

        :return: The investment_objectives of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._investment_objectives

    @investment_objectives.setter
    def investment_objectives(self, investment_objectives):
        """Sets the investment_objectives of this Consultation.

        investmentObjectives  # noqa: E501

        :param investment_objectives: The investment_objectives of this Consultation.  # noqa: E501
        :type: str
        """

        self._investment_objectives = investment_objectives

    @property
    def is_active(self):
        """Gets the is_active of this Consultation.  # noqa: E501

        isActive  # noqa: E501

        :return: The is_active of this Consultation.  # noqa: E501
        :rtype: bool
        """
        return self._is_active

    @is_active.setter
    def is_active(self, is_active):
        """Sets the is_active of this Consultation.

        isActive  # noqa: E501

        :param is_active: The is_active of this Consultation.  # noqa: E501
        :type: bool
        """

        self._is_active = is_active

    @property
    def metadata(self):
        """Gets the metadata of this Consultation.  # noqa: E501


        :return: The metadata of this Consultation.  # noqa: E501
        :rtype: dict(str, str)
        """
        return self._metadata

    @metadata.setter
    def metadata(self, metadata):
        """Sets the metadata of this Consultation.


        :param metadata: The metadata of this Consultation.  # noqa: E501
        :type: dict(str, str)
        """

        self._metadata = metadata

    @property
    def name(self):
        """Gets the name of this Consultation.  # noqa: E501

        name  # noqa: E501

        :return: The name of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._name

    @name.setter
    def name(self, name):
        """Sets the name of this Consultation.

        name  # noqa: E501

        :param name: The name of this Consultation.  # noqa: E501
        :type: str
        """

        self._name = name

    @property
    def phone(self):
        """Gets the phone of this Consultation.  # noqa: E501

        phone  # noqa: E501

        :return: The phone of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._phone

    @phone.setter
    def phone(self, phone):
        """Sets the phone of this Consultation.

        phone  # noqa: E501

        :param phone: The phone of this Consultation.  # noqa: E501
        :type: str
        """

        self._phone = phone

    @property
    def reminded(self):
        """Gets the reminded of this Consultation.  # noqa: E501

        reminded  # noqa: E501

        :return: The reminded of this Consultation.  # noqa: E501
        :rtype: bool
        """
        return self._reminded

    @reminded.setter
    def reminded(self, reminded):
        """Sets the reminded of this Consultation.

        reminded  # noqa: E501

        :param reminded: The reminded of this Consultation.  # noqa: E501
        :type: bool
        """

        self._reminded = reminded

    @property
    def secondary_id(self):
        """Gets the secondary_id of this Consultation.  # noqa: E501


        :return: The secondary_id of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._secondary_id

    @secondary_id.setter
    def secondary_id(self, secondary_id):
        """Sets the secondary_id of this Consultation.


        :param secondary_id: The secondary_id of this Consultation.  # noqa: E501
        :type: str
        """

        self._secondary_id = secondary_id

    @property
    def source(self):
        """Gets the source of this Consultation.  # noqa: E501

        source  # noqa: E501

        :return: The source of this Consultation.  # noqa: E501
        :rtype: str
        """
        return self._source

    @source.setter
    def source(self, source):
        """Sets the source of this Consultation.

        source  # noqa: E501

        :param source: The source of this Consultation.  # noqa: E501
        :type: str
        """

        self._source = source

    @property
    def time(self):
        """Gets the time of this Consultation.  # noqa: E501

        time  # noqa: E501

        :return: The time of this Consultation.  # noqa: E501
        :rtype: datetime
        """
        return self._time

    @time.setter
    def time(self, time):
        """Sets the time of this Consultation.

        time  # noqa: E501

        :param time: The time of this Consultation.  # noqa: E501
        :type: datetime
        """

        self._time = time

    @property
    def update_date(self):
        """Gets the update_date of this Consultation.  # noqa: E501


        :return: The update_date of this Consultation.  # noqa: E501
        :rtype: datetime
        """
        return self._update_date

    @update_date.setter
    def update_date(self, update_date):
        """Sets the update_date of this Consultation.


        :param update_date: The update_date of this Consultation.  # noqa: E501
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
        if issubclass(Consultation, dict):
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
        if not isinstance(other, Consultation):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
