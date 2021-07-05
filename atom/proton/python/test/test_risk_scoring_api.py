# coding: utf-8

"""
    Hydrogen Proton API

    Financial engineering module of Hydrogen Atom  # noqa: E501

    OpenAPI spec version: 1.9.1
    Contact: info@hydrogenplatform.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


from __future__ import absolute_import

import unittest

import proton_api
from proton_api.api.risk_scoring_api import RiskScoringApi  # noqa: E501
from proton_api.rest import ApiException


class TestRiskScoringApi(unittest.TestCase):
    """RiskScoringApi unit test stubs"""

    def setUp(self):
        self.api = proton_api.api.risk_scoring_api.RiskScoringApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_dimensional_risk_score(self):
        """Test case for dimensional_risk_score

        Dimensional Risk Score  # noqa: E501
        """
        pass

    def test_risk_allocation(self):
        """Test case for risk_allocation

        Risk Allocation  # noqa: E501
        """
        pass

    def test_risk_score(self):
        """Test case for risk_score

        Risk Score  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()
