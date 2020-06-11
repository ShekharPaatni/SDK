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

  beforeEach(function() {
    instance = new HydrogenProtonApi.SimulationsApi();
  });

  describe('(package)', function() {
    describe('SimulationsApi', function() {
      describe('backtest', function() {
        it('should call backtest successfully', function(done) {
          // TODO: uncomment, update parameter values for backtest call and complete the assertions
          /*
          var backtestRequest = new HydrogenProtonApi.BacktestRequest();
          backtestRequest.startDate = new Date();
          backtestRequest.endDate = new Date();
          backtestRequest.modelId = """00000000-0000-0000-0000-000000000000";
          backtestRequest.assetSize = ;
          backtestRequest.initialWeights = ;
          backtestRequest.settings = ;
          backtestRequest.trades = false;
          backtestRequest.stats = false;
          backtestRequest.holdings = false;
          backtestRequest.assetSizes = false;

          instance.backtest(backtestRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventStudy', function() {
        it('should call eventStudy successfully', function(done) {
          // TODO: uncomment, update parameter values for eventStudy call and complete the assertions
          /*
          var eventStudyRequest = new HydrogenProtonApi.EventStudyRequest();
          eventStudyRequest.events = ["dot_com_bubble"]"dot_com_bubble";
          eventStudyRequest.useProxyData = false;
          eventStudyRequest.portfolioTickers = [""];
          eventStudyRequest.modelId = """00000000-0000-0000-0000-000000000000";
          eventStudyRequest.allocationId = """00000000-0000-0000-0000-000000000000";
          eventStudyRequest.accountId = """00000000-0000-0000-0000-000000000000";
          eventStudyRequest.portfolioId = """00000000-0000-0000-0000-000000000000";
          eventStudyRequest.portfolioWeights = [0.0];
          eventStudyRequest.aggregationAccountId = """00000000-0000-0000-0000-000000000000";
          eventStudyRequest.marketDataSource = "nucleus";

          instance.eventStudy(eventStudyRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('monteCarlo', function() {
        it('should call monteCarlo successfully', function(done) {
          // TODO: uncomment, update parameter values for monteCarlo call and complete the assertions
          /*
          var monteCarloRequest = new HydrogenProtonApi.MonteCarloRequest();
          monteCarloRequest.sigma = [0.0];
          monteCarloRequest.maxBal = [];
          monteCarloRequest.allocationId = """00000000-0000-0000-0000-000000000000";
          monteCarloRequest.accountId = """00000000-0000-0000-0000-000000000000";
          monteCarloRequest.resultType = "raw";
          monteCarloRequest.aggregationAccountId = """00000000-0000-0000-0000-000000000000";
          monteCarloRequest.marketDataSource = "nucleus";
          monteCarloRequest.maxSample = [0.0];
          monteCarloRequest.portfolioId = """00000000-0000-0000-0000-000000000000";
          monteCarloRequest.mu = [0.0];
          monteCarloRequest.frequencyInterval = "year";
          monteCarloRequest.retMod = [0.0];
          monteCarloRequest.minSample = [0.0];
          monteCarloRequest.n = 0;
          monteCarloRequest.cf = [[]];
          monteCarloRequest.modelId = """00000000-0000-0000-0000-000000000000";
          monteCarloRequest.useProxyData = false;
          monteCarloRequest.initBal = ;
          monteCarloRequest.removeOutliers = false;
          monteCarloRequest.minBal = [];
          monteCarloRequest.p = [];

          instance.monteCarlo(monteCarloRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('portfolioWhatIf', function() {
        it('should call portfolioWhatIf successfully', function(done) {
          // TODO: uncomment, update parameter values for portfolioWhatIf call and complete the assertions
          /*
          var portfolioWhatIfRequest = new HydrogenProtonApi.PortfolioWhatIfRequest();
          portfolioWhatIfRequest.useProxyData = false;
          portfolioWhatIfRequest.alteredPortfolioTickers = [""];
          portfolioWhatIfRequest.currentPortfolioTickers = [""];
          portfolioWhatIfRequest.startDate = "";
          portfolioWhatIfRequest.endDate = "";
          portfolioWhatIfRequest.modelId = """00000000-0000-0000-0000-000000000000";
          portfolioWhatIfRequest.allocationId = """00000000-0000-0000-0000-000000000000";
          portfolioWhatIfRequest.accountId = """00000000-0000-0000-0000-000000000000";
          portfolioWhatIfRequest.portfolioId = """00000000-0000-0000-0000-000000000000";
          portfolioWhatIfRequest.aggregationAccountId = """00000000-0000-0000-0000-000000000000";
          portfolioWhatIfRequest.alteredPortfolioWeights = [0.0];
          portfolioWhatIfRequest.marketDataSource = "nucleus";
          portfolioWhatIfRequest.currentPortfolioWeights = [0.0];

          instance.portfolioWhatIf(portfolioWhatIfRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('savingsCalculator', function() {
        it('should call savingsCalculator successfully', function(done) {
          // TODO: uncomment, update parameter values for savingsCalculator call and complete the assertions
          /*
          var savingsCalculatorRequest = new HydrogenProtonApi.SavingsCalculatorRequest();
          savingsCalculatorRequest.depositSchedule = [new HydrogenProtonApi.SavingsDepositSchedule()];
          savingsCalculatorRequest.depositSchedule[0].depositAmount = ;
          savingsCalculatorRequest.depositSchedule[0].depositFrequencyInterval = "year";
          savingsCalculatorRequest.depositSchedule[0].adjustDepositForInflation = false;
          savingsCalculatorRequest.depositSchedule[0].depositDuration = 0;
          savingsCalculatorRequest.horizonFrequencyInterval = "year";
          savingsCalculatorRequest.initialBalance = ;
          savingsCalculatorRequest.returnSchedule = [0.0];
          savingsCalculatorRequest.taxRate = 0.0;
          savingsCalculatorRequest.inflationRate = 0.0;
          savingsCalculatorRequest.aggregationAccountIds = ["""00000000-0000-0000-0000-000000000000"];
          savingsCalculatorRequest.accountIds = ["""00000000-0000-0000-0000-000000000000"];
          savingsCalculatorRequest.horizon = 0;

          instance.savingsCalculator(savingsCalculatorRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('scenarioAnalysis', function() {
        it('should call scenarioAnalysis successfully', function(done) {
          // TODO: uncomment, update parameter values for scenarioAnalysis call and complete the assertions
          /*
          var scnearioAnalysisRequest = new HydrogenProtonApi.ScenarioAnalysisRequest();
          scnearioAnalysisRequest.useProxyData = false;
          scnearioAnalysisRequest.startDate = new Date();
          scnearioAnalysisRequest.portfolioTickers = [""];
          scnearioAnalysisRequest.tradingDaysPerYear = 0;
          scnearioAnalysisRequest.endDate = new Date();
          scnearioAnalysisRequest.modelId = """00000000-0000-0000-0000-000000000000";
          scnearioAnalysisRequest.allocationId = """00000000-0000-0000-0000-000000000000";
          scnearioAnalysisRequest.accountId = """00000000-0000-0000-0000-000000000000";
          scnearioAnalysisRequest.portfolioId = """00000000-0000-0000-0000-000000000000";
          scnearioAnalysisRequest.portfolioWeights = [0.0];
          scnearioAnalysisRequest.frequencyInterval = "year";
          scnearioAnalysisRequest.scenario = [new HydrogenProtonApi.SensitivityFactor()];
          scnearioAnalysisRequest.scenario[0].changeAmount = 0.0;
          scnearioAnalysisRequest.scenario[0].changeDuration = 0;
          scnearioAnalysisRequest.scenario[0].ticker = "";
          scnearioAnalysisRequest.scenario[0].lag = 0;
          scnearioAnalysisRequest.aggregationAccountId = """00000000-0000-0000-0000-000000000000";
          scnearioAnalysisRequest.marketDataSource = "nucleus";

          instance.scenarioAnalysis(scnearioAnalysisRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('sensitivityAnalysis', function() {
        it('should call sensitivityAnalysis successfully', function(done) {
          // TODO: uncomment, update parameter values for sensitivityAnalysis call and complete the assertions
          /*
          var sensitivityAnalysisRequest = new HydrogenProtonApi.SensitivityAnalysisRequest();
          sensitivityAnalysisRequest.useProxyData = false;
          sensitivityAnalysisRequest.startDate = new Date();
          sensitivityAnalysisRequest.portfolioTickers = [""];
          sensitivityAnalysisRequest.tradingDaysPerYear = 0;
          sensitivityAnalysisRequest.endDate = new Date();
          sensitivityAnalysisRequest.modelId = """00000000-0000-0000-0000-000000000000";
          sensitivityAnalysisRequest.allocationId = """00000000-0000-0000-0000-000000000000";
          sensitivityAnalysisRequest.accountId = """00000000-0000-0000-0000-000000000000";
          sensitivityAnalysisRequest.portfolioId = """00000000-0000-0000-0000-000000000000";
          sensitivityAnalysisRequest.sensitivityFactor = new HydrogenProtonApi.SensitivityFactor();
          sensitivityAnalysisRequest.sensitivityFactor.changeAmount = 0.0;
          sensitivityAnalysisRequest.sensitivityFactor.changeDuration = 0;
          sensitivityAnalysisRequest.sensitivityFactor.ticker = "";
          sensitivityAnalysisRequest.sensitivityFactor.lag = 0;
          sensitivityAnalysisRequest.portfolioWeights = [0.0];
          sensitivityAnalysisRequest.frequencyInterval = "year";
          sensitivityAnalysisRequest.aggregationAccountId = """00000000-0000-0000-0000-000000000000";
          sensitivityAnalysisRequest.marketDataSource = "nucleus";

          instance.sensitivityAnalysis(sensitivityAnalysisRequest, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Object);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Object);
              // expect(data).to.be(null);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
