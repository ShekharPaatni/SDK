/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HydrogenProtonApi);
  }
}(this, function(expect, HydrogenProtonApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('RiskScoreRequest', function() {
      beforeEach(function() {
        instance = new HydrogenProtonApi.RiskScoreRequest();
      });

      it('should create an instance of RiskScoreRequest', function() {
        // TODO: update the code to test RiskScoreRequest
        expect(instance).to.be.a(HydrogenProtonApi.RiskScoreRequest);
      });

      it('should have the property clientId (base name: "client_id")', function() {
        // TODO: update the code to test the property clientId
        expect(instance).to.have.property('clientId');
        // expect(instance.clientId).to.be(expectedValueLiteral);
      });

      it('should have the property answers (base name: "answers")', function() {
        // TODO: update the code to test the property answers
        expect(instance).to.have.property('answers');
        // expect(instance.answers).to.be(expectedValueLiteral);
      });

      it('should have the property weights (base name: "weights")', function() {
        // TODO: update the code to test the property weights
        expect(instance).to.have.property('weights');
        // expect(instance.weights).to.be(expectedValueLiteral);
      });

      it('should have the property maxAnswers (base name: "max_answers")', function() {
        // TODO: update the code to test the property maxAnswers
        expect(instance).to.have.property('maxAnswers');
        // expect(instance.maxAnswers).to.be(expectedValueLiteral);
      });

      it('should have the property questionnaireId (base name: "questionnaire_id")', function() {
        // TODO: update the code to test the property questionnaireId
        expect(instance).to.have.property('questionnaireId');
        // expect(instance.questionnaireId).to.be(expectedValueLiteral);
      });

      it('should have the property postScore (base name: "post_score")', function() {
        // TODO: update the code to test the property postScore
        expect(instance).to.have.property('postScore');
        // expect(instance.postScore).to.be(expectedValueLiteral);
      });

    });
  });

}));
