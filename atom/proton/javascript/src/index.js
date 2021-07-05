/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AccumulationGoalDepositConfig', 'model/AnnuityCalculatorAccumulationHorizonRequest', 'model/AnnuityCalculatorAnnuityAmountRequest', 'model/AnnuityCalculatorDecumulationHorizonRequest', 'model/AnnuityCalculatorDepositAmountRequest', 'model/AnnuityCalculatorInitialBalanceRequest', 'model/AnnuityDepositSchedule', 'model/Answer', 'model/BacktestRequest', 'model/BeneficiaryBequestConfig', 'model/BudgetAggregationAccount', 'model/BudgetCalculatorRequest', 'model/BudgetComponent', 'model/BudgetDetails', 'model/BusinessFinancialHealthCheckRequest', 'model/BusinessInvoiceAnalysisRequest', 'model/CalculatorDepositSchedule', 'model/CalculatorDepositSchedule1', 'model/CardAnalysisRequest', 'model/CardLimitCheckRequest', 'model/CardTransactionAuthorizationRequest', 'model/CashAnalysisRequest', 'model/CashFlowAnalysisRequest', 'model/ChildrenEducationConfig', 'model/CustomerAnalysisRequest', 'model/DecisionTreeResultRequest', 'model/DecumulationGoalDepositConfig', 'model/DimensionalRiskScoreRequest', 'model/DiversificationScoreRequest', 'model/EducationCalculatorAnnualCostRequest', 'model/EducationCalculatorDepositAmountRequest', 'model/EducationCalculatorPercentCoveredRequest', 'model/EducationConfig', 'model/EmergencyFundCalculatorRequest', 'model/EventStudyRequest', 'model/FeeAnalysisRequest', 'model/FinancialHealthCheckRequest', 'model/FinancialPictureRequest', 'model/FinancialStatementAnalysisRequest', 'model/GoalAccumulationAllocationRequest', 'model/GoalAccumulationRecommendationRequest', 'model/GoalAccumulationStatusRequest', 'model/GoalConfig', 'model/GoalDecumulationAllocationRequest', 'model/GoalDecumulationRecommendationRequest', 'model/GoalDecumulationStatusRequest', 'model/GoalWithdrawalConfig', 'model/GuaranteedRateBenefit', 'model/IncomeConfig', 'model/LifeInsuranceNeedsCalculatorRequest', 'model/Location', 'model/MonteCarloRequest', 'model/MortgageCalculatorDownPaymentRequest', 'model/MortgageCalculatorHomePriceRequest', 'model/MortgageCalculatorPeriodicPaymentRequest', 'model/MvoRequest', 'model/OptConfig', 'model/OptConfig1', 'model/OrderRebalanceRequest', 'model/PerformanceCalculatorRequest', 'model/Periods', 'model/PortfolioOptimizationScoreRequest', 'model/PortfolioWhatIfRequest', 'model/PurchaseCalculatorAmountRequest', 'model/PurchaseCalculatorDepositAmountRequest', 'model/PurchaseCalculatorHorizonRequest', 'model/RatioTargets', 'model/RatioTargets1', 'model/RebalancingSignalRequest', 'model/RecommendationConfig', 'model/RecommendationConfig1', 'model/RecurringTransactionAnalysisRequest', 'model/RetirementCalculatorDepositAmountRequest', 'model/RetirementCalculatorExpensesRequest', 'model/RetirementCalculatorPercentCoveredRequest', 'model/RiskAllocationRequest', 'model/RiskScoreRequest', 'model/SavingsCalculatorRequest', 'model/SavingsDepositSchedule', 'model/ScenarioAnalysisRequest', 'model/SensitivityAnalysisRequest', 'model/SensitivityFactor', 'model/Settings', 'model/SpendingAnalysisRequest', 'model/VariableAnnuityRequest', 'model/WConfig', 'model/WConfig1', 'api/AnnuitiesApi', 'api/BusinessFinancialManagementApi', 'api/CardsApi', 'api/FinancialHealthApi', 'api/FinancialPlanningApi', 'api/GoalsApi', 'api/LifeInsuranceApi', 'api/PersonalFinancialManagementApi', 'api/PortfolioConstructionApi', 'api/PortfolioManagementApi', 'api/RiskScoringApi', 'api/SimulationsApi', 'api/UtilApi', 'api/AuthApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AccumulationGoalDepositConfig'), require('./model/AnnuityCalculatorAccumulationHorizonRequest'), require('./model/AnnuityCalculatorAnnuityAmountRequest'), require('./model/AnnuityCalculatorDecumulationHorizonRequest'), require('./model/AnnuityCalculatorDepositAmountRequest'), require('./model/AnnuityCalculatorInitialBalanceRequest'), require('./model/AnnuityDepositSchedule'), require('./model/Answer'), require('./model/BacktestRequest'), require('./model/BeneficiaryBequestConfig'), require('./model/BudgetAggregationAccount'), require('./model/BudgetCalculatorRequest'), require('./model/BudgetComponent'), require('./model/BudgetDetails'), require('./model/BusinessFinancialHealthCheckRequest'), require('./model/BusinessInvoiceAnalysisRequest'), require('./model/CalculatorDepositSchedule'), require('./model/CalculatorDepositSchedule1'), require('./model/CardAnalysisRequest'), require('./model/CardLimitCheckRequest'), require('./model/CardTransactionAuthorizationRequest'), require('./model/CashAnalysisRequest'), require('./model/CashFlowAnalysisRequest'), require('./model/ChildrenEducationConfig'), require('./model/CustomerAnalysisRequest'), require('./model/DecisionTreeResultRequest'), require('./model/DecumulationGoalDepositConfig'), require('./model/DimensionalRiskScoreRequest'), require('./model/DiversificationScoreRequest'), require('./model/EducationCalculatorAnnualCostRequest'), require('./model/EducationCalculatorDepositAmountRequest'), require('./model/EducationCalculatorPercentCoveredRequest'), require('./model/EducationConfig'), require('./model/EmergencyFundCalculatorRequest'), require('./model/EventStudyRequest'), require('./model/FeeAnalysisRequest'), require('./model/FinancialHealthCheckRequest'), require('./model/FinancialPictureRequest'), require('./model/FinancialStatementAnalysisRequest'), require('./model/GoalAccumulationAllocationRequest'), require('./model/GoalAccumulationRecommendationRequest'), require('./model/GoalAccumulationStatusRequest'), require('./model/GoalConfig'), require('./model/GoalDecumulationAllocationRequest'), require('./model/GoalDecumulationRecommendationRequest'), require('./model/GoalDecumulationStatusRequest'), require('./model/GoalWithdrawalConfig'), require('./model/GuaranteedRateBenefit'), require('./model/IncomeConfig'), require('./model/LifeInsuranceNeedsCalculatorRequest'), require('./model/Location'), require('./model/MonteCarloRequest'), require('./model/MortgageCalculatorDownPaymentRequest'), require('./model/MortgageCalculatorHomePriceRequest'), require('./model/MortgageCalculatorPeriodicPaymentRequest'), require('./model/MvoRequest'), require('./model/OptConfig'), require('./model/OptConfig1'), require('./model/OrderRebalanceRequest'), require('./model/PerformanceCalculatorRequest'), require('./model/Periods'), require('./model/PortfolioOptimizationScoreRequest'), require('./model/PortfolioWhatIfRequest'), require('./model/PurchaseCalculatorAmountRequest'), require('./model/PurchaseCalculatorDepositAmountRequest'), require('./model/PurchaseCalculatorHorizonRequest'), require('./model/RatioTargets'), require('./model/RatioTargets1'), require('./model/RebalancingSignalRequest'), require('./model/RecommendationConfig'), require('./model/RecommendationConfig1'), require('./model/RecurringTransactionAnalysisRequest'), require('./model/RetirementCalculatorDepositAmountRequest'), require('./model/RetirementCalculatorExpensesRequest'), require('./model/RetirementCalculatorPercentCoveredRequest'), require('./model/RiskAllocationRequest'), require('./model/RiskScoreRequest'), require('./model/SavingsCalculatorRequest'), require('./model/SavingsDepositSchedule'), require('./model/ScenarioAnalysisRequest'), require('./model/SensitivityAnalysisRequest'), require('./model/SensitivityFactor'), require('./model/Settings'), require('./model/SpendingAnalysisRequest'), require('./model/VariableAnnuityRequest'), require('./model/WConfig'), require('./model/WConfig1'), require('./api/AnnuitiesApi'), require('./api/BusinessFinancialManagementApi'), require('./api/CardsApi'), require('./api/FinancialHealthApi'), require('./api/FinancialPlanningApi'), require('./api/GoalsApi'), require('./api/LifeInsuranceApi'), require('./api/PersonalFinancialManagementApi'), require('./api/PortfolioConstructionApi'), require('./api/PortfolioManagementApi'), require('./api/RiskScoringApi'), require('./api/SimulationsApi'), require('./api/UtilApi'), require('./api/AuthApi'));
  }
}(function(ApiClient, AccumulationGoalDepositConfig, AnnuityCalculatorAccumulationHorizonRequest, AnnuityCalculatorAnnuityAmountRequest, AnnuityCalculatorDecumulationHorizonRequest, AnnuityCalculatorDepositAmountRequest, AnnuityCalculatorInitialBalanceRequest, AnnuityDepositSchedule, Answer, BacktestRequest, BeneficiaryBequestConfig, BudgetAggregationAccount, BudgetCalculatorRequest, BudgetComponent, BudgetDetails, BusinessFinancialHealthCheckRequest, BusinessInvoiceAnalysisRequest, CalculatorDepositSchedule, CalculatorDepositSchedule1, CardAnalysisRequest, CardLimitCheckRequest, CardTransactionAuthorizationRequest, CashAnalysisRequest, CashFlowAnalysisRequest, ChildrenEducationConfig, CustomerAnalysisRequest, DecisionTreeResultRequest, DecumulationGoalDepositConfig, DimensionalRiskScoreRequest, DiversificationScoreRequest, EducationCalculatorAnnualCostRequest, EducationCalculatorDepositAmountRequest, EducationCalculatorPercentCoveredRequest, EducationConfig, EmergencyFundCalculatorRequest, EventStudyRequest, FeeAnalysisRequest, FinancialHealthCheckRequest, FinancialPictureRequest, FinancialStatementAnalysisRequest, GoalAccumulationAllocationRequest, GoalAccumulationRecommendationRequest, GoalAccumulationStatusRequest, GoalConfig, GoalDecumulationAllocationRequest, GoalDecumulationRecommendationRequest, GoalDecumulationStatusRequest, GoalWithdrawalConfig, GuaranteedRateBenefit, IncomeConfig, LifeInsuranceNeedsCalculatorRequest, Location, MonteCarloRequest, MortgageCalculatorDownPaymentRequest, MortgageCalculatorHomePriceRequest, MortgageCalculatorPeriodicPaymentRequest, MvoRequest, OptConfig, OptConfig1, OrderRebalanceRequest, PerformanceCalculatorRequest, Periods, PortfolioOptimizationScoreRequest, PortfolioWhatIfRequest, PurchaseCalculatorAmountRequest, PurchaseCalculatorDepositAmountRequest, PurchaseCalculatorHorizonRequest, RatioTargets, RatioTargets1, RebalancingSignalRequest, RecommendationConfig, RecommendationConfig1, RecurringTransactionAnalysisRequest, RetirementCalculatorDepositAmountRequest, RetirementCalculatorExpensesRequest, RetirementCalculatorPercentCoveredRequest, RiskAllocationRequest, RiskScoreRequest, SavingsCalculatorRequest, SavingsDepositSchedule, ScenarioAnalysisRequest, SensitivityAnalysisRequest, SensitivityFactor, Settings, SpendingAnalysisRequest, VariableAnnuityRequest, WConfig, WConfig1, AnnuitiesApi, BusinessFinancialManagementApi, CardsApi, FinancialHealthApi, FinancialPlanningApi, GoalsApi, LifeInsuranceApi, PersonalFinancialManagementApi, PortfolioConstructionApi, PortfolioManagementApi, RiskScoringApi, SimulationsApi, UtilApi, AuthApi) {
  'use strict';

  /**
   * Financial_engineering_module_of_Hydrogen_Atom.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var HydrogenProtonApi = require('index'); // See note below*.
   * var xxxSvc = new HydrogenProtonApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new HydrogenProtonApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new HydrogenProtonApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new HydrogenProtonApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.9.1
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AccumulationGoalDepositConfig model constructor.
     * @property {module:model/AccumulationGoalDepositConfig}
     */
    AccumulationGoalDepositConfig: AccumulationGoalDepositConfig,
    /**
     * The AnnuityCalculatorAccumulationHorizonRequest model constructor.
     * @property {module:model/AnnuityCalculatorAccumulationHorizonRequest}
     */
    AnnuityCalculatorAccumulationHorizonRequest: AnnuityCalculatorAccumulationHorizonRequest,
    /**
     * The AnnuityCalculatorAnnuityAmountRequest model constructor.
     * @property {module:model/AnnuityCalculatorAnnuityAmountRequest}
     */
    AnnuityCalculatorAnnuityAmountRequest: AnnuityCalculatorAnnuityAmountRequest,
    /**
     * The AnnuityCalculatorDecumulationHorizonRequest model constructor.
     * @property {module:model/AnnuityCalculatorDecumulationHorizonRequest}
     */
    AnnuityCalculatorDecumulationHorizonRequest: AnnuityCalculatorDecumulationHorizonRequest,
    /**
     * The AnnuityCalculatorDepositAmountRequest model constructor.
     * @property {module:model/AnnuityCalculatorDepositAmountRequest}
     */
    AnnuityCalculatorDepositAmountRequest: AnnuityCalculatorDepositAmountRequest,
    /**
     * The AnnuityCalculatorInitialBalanceRequest model constructor.
     * @property {module:model/AnnuityCalculatorInitialBalanceRequest}
     */
    AnnuityCalculatorInitialBalanceRequest: AnnuityCalculatorInitialBalanceRequest,
    /**
     * The AnnuityDepositSchedule model constructor.
     * @property {module:model/AnnuityDepositSchedule}
     */
    AnnuityDepositSchedule: AnnuityDepositSchedule,
    /**
     * The Answer model constructor.
     * @property {module:model/Answer}
     */
    Answer: Answer,
    /**
     * The BacktestRequest model constructor.
     * @property {module:model/BacktestRequest}
     */
    BacktestRequest: BacktestRequest,
    /**
     * The BeneficiaryBequestConfig model constructor.
     * @property {module:model/BeneficiaryBequestConfig}
     */
    BeneficiaryBequestConfig: BeneficiaryBequestConfig,
    /**
     * The BudgetAggregationAccount model constructor.
     * @property {module:model/BudgetAggregationAccount}
     */
    BudgetAggregationAccount: BudgetAggregationAccount,
    /**
     * The BudgetCalculatorRequest model constructor.
     * @property {module:model/BudgetCalculatorRequest}
     */
    BudgetCalculatorRequest: BudgetCalculatorRequest,
    /**
     * The BudgetComponent model constructor.
     * @property {module:model/BudgetComponent}
     */
    BudgetComponent: BudgetComponent,
    /**
     * The BudgetDetails model constructor.
     * @property {module:model/BudgetDetails}
     */
    BudgetDetails: BudgetDetails,
    /**
     * The BusinessFinancialHealthCheckRequest model constructor.
     * @property {module:model/BusinessFinancialHealthCheckRequest}
     */
    BusinessFinancialHealthCheckRequest: BusinessFinancialHealthCheckRequest,
    /**
     * The BusinessInvoiceAnalysisRequest model constructor.
     * @property {module:model/BusinessInvoiceAnalysisRequest}
     */
    BusinessInvoiceAnalysisRequest: BusinessInvoiceAnalysisRequest,
    /**
     * The CalculatorDepositSchedule model constructor.
     * @property {module:model/CalculatorDepositSchedule}
     */
    CalculatorDepositSchedule: CalculatorDepositSchedule,
    /**
     * The CalculatorDepositSchedule1 model constructor.
     * @property {module:model/CalculatorDepositSchedule1}
     */
    CalculatorDepositSchedule1: CalculatorDepositSchedule1,
    /**
     * The CardAnalysisRequest model constructor.
     * @property {module:model/CardAnalysisRequest}
     */
    CardAnalysisRequest: CardAnalysisRequest,
    /**
     * The CardLimitCheckRequest model constructor.
     * @property {module:model/CardLimitCheckRequest}
     */
    CardLimitCheckRequest: CardLimitCheckRequest,
    /**
     * The CardTransactionAuthorizationRequest model constructor.
     * @property {module:model/CardTransactionAuthorizationRequest}
     */
    CardTransactionAuthorizationRequest: CardTransactionAuthorizationRequest,
    /**
     * The CashAnalysisRequest model constructor.
     * @property {module:model/CashAnalysisRequest}
     */
    CashAnalysisRequest: CashAnalysisRequest,
    /**
     * The CashFlowAnalysisRequest model constructor.
     * @property {module:model/CashFlowAnalysisRequest}
     */
    CashFlowAnalysisRequest: CashFlowAnalysisRequest,
    /**
     * The ChildrenEducationConfig model constructor.
     * @property {module:model/ChildrenEducationConfig}
     */
    ChildrenEducationConfig: ChildrenEducationConfig,
    /**
     * The CustomerAnalysisRequest model constructor.
     * @property {module:model/CustomerAnalysisRequest}
     */
    CustomerAnalysisRequest: CustomerAnalysisRequest,
    /**
     * The DecisionTreeResultRequest model constructor.
     * @property {module:model/DecisionTreeResultRequest}
     */
    DecisionTreeResultRequest: DecisionTreeResultRequest,
    /**
     * The DecumulationGoalDepositConfig model constructor.
     * @property {module:model/DecumulationGoalDepositConfig}
     */
    DecumulationGoalDepositConfig: DecumulationGoalDepositConfig,
    /**
     * The DimensionalRiskScoreRequest model constructor.
     * @property {module:model/DimensionalRiskScoreRequest}
     */
    DimensionalRiskScoreRequest: DimensionalRiskScoreRequest,
    /**
     * The DiversificationScoreRequest model constructor.
     * @property {module:model/DiversificationScoreRequest}
     */
    DiversificationScoreRequest: DiversificationScoreRequest,
    /**
     * The EducationCalculatorAnnualCostRequest model constructor.
     * @property {module:model/EducationCalculatorAnnualCostRequest}
     */
    EducationCalculatorAnnualCostRequest: EducationCalculatorAnnualCostRequest,
    /**
     * The EducationCalculatorDepositAmountRequest model constructor.
     * @property {module:model/EducationCalculatorDepositAmountRequest}
     */
    EducationCalculatorDepositAmountRequest: EducationCalculatorDepositAmountRequest,
    /**
     * The EducationCalculatorPercentCoveredRequest model constructor.
     * @property {module:model/EducationCalculatorPercentCoveredRequest}
     */
    EducationCalculatorPercentCoveredRequest: EducationCalculatorPercentCoveredRequest,
    /**
     * The EducationConfig model constructor.
     * @property {module:model/EducationConfig}
     */
    EducationConfig: EducationConfig,
    /**
     * The EmergencyFundCalculatorRequest model constructor.
     * @property {module:model/EmergencyFundCalculatorRequest}
     */
    EmergencyFundCalculatorRequest: EmergencyFundCalculatorRequest,
    /**
     * The EventStudyRequest model constructor.
     * @property {module:model/EventStudyRequest}
     */
    EventStudyRequest: EventStudyRequest,
    /**
     * The FeeAnalysisRequest model constructor.
     * @property {module:model/FeeAnalysisRequest}
     */
    FeeAnalysisRequest: FeeAnalysisRequest,
    /**
     * The FinancialHealthCheckRequest model constructor.
     * @property {module:model/FinancialHealthCheckRequest}
     */
    FinancialHealthCheckRequest: FinancialHealthCheckRequest,
    /**
     * The FinancialPictureRequest model constructor.
     * @property {module:model/FinancialPictureRequest}
     */
    FinancialPictureRequest: FinancialPictureRequest,
    /**
     * The FinancialStatementAnalysisRequest model constructor.
     * @property {module:model/FinancialStatementAnalysisRequest}
     */
    FinancialStatementAnalysisRequest: FinancialStatementAnalysisRequest,
    /**
     * The GoalAccumulationAllocationRequest model constructor.
     * @property {module:model/GoalAccumulationAllocationRequest}
     */
    GoalAccumulationAllocationRequest: GoalAccumulationAllocationRequest,
    /**
     * The GoalAccumulationRecommendationRequest model constructor.
     * @property {module:model/GoalAccumulationRecommendationRequest}
     */
    GoalAccumulationRecommendationRequest: GoalAccumulationRecommendationRequest,
    /**
     * The GoalAccumulationStatusRequest model constructor.
     * @property {module:model/GoalAccumulationStatusRequest}
     */
    GoalAccumulationStatusRequest: GoalAccumulationStatusRequest,
    /**
     * The GoalConfig model constructor.
     * @property {module:model/GoalConfig}
     */
    GoalConfig: GoalConfig,
    /**
     * The GoalDecumulationAllocationRequest model constructor.
     * @property {module:model/GoalDecumulationAllocationRequest}
     */
    GoalDecumulationAllocationRequest: GoalDecumulationAllocationRequest,
    /**
     * The GoalDecumulationRecommendationRequest model constructor.
     * @property {module:model/GoalDecumulationRecommendationRequest}
     */
    GoalDecumulationRecommendationRequest: GoalDecumulationRecommendationRequest,
    /**
     * The GoalDecumulationStatusRequest model constructor.
     * @property {module:model/GoalDecumulationStatusRequest}
     */
    GoalDecumulationStatusRequest: GoalDecumulationStatusRequest,
    /**
     * The GoalWithdrawalConfig model constructor.
     * @property {module:model/GoalWithdrawalConfig}
     */
    GoalWithdrawalConfig: GoalWithdrawalConfig,
    /**
     * The GuaranteedRateBenefit model constructor.
     * @property {module:model/GuaranteedRateBenefit}
     */
    GuaranteedRateBenefit: GuaranteedRateBenefit,
    /**
     * The IncomeConfig model constructor.
     * @property {module:model/IncomeConfig}
     */
    IncomeConfig: IncomeConfig,
    /**
     * The LifeInsuranceNeedsCalculatorRequest model constructor.
     * @property {module:model/LifeInsuranceNeedsCalculatorRequest}
     */
    LifeInsuranceNeedsCalculatorRequest: LifeInsuranceNeedsCalculatorRequest,
    /**
     * The Location model constructor.
     * @property {module:model/Location}
     */
    Location: Location,
    /**
     * The MonteCarloRequest model constructor.
     * @property {module:model/MonteCarloRequest}
     */
    MonteCarloRequest: MonteCarloRequest,
    /**
     * The MortgageCalculatorDownPaymentRequest model constructor.
     * @property {module:model/MortgageCalculatorDownPaymentRequest}
     */
    MortgageCalculatorDownPaymentRequest: MortgageCalculatorDownPaymentRequest,
    /**
     * The MortgageCalculatorHomePriceRequest model constructor.
     * @property {module:model/MortgageCalculatorHomePriceRequest}
     */
    MortgageCalculatorHomePriceRequest: MortgageCalculatorHomePriceRequest,
    /**
     * The MortgageCalculatorPeriodicPaymentRequest model constructor.
     * @property {module:model/MortgageCalculatorPeriodicPaymentRequest}
     */
    MortgageCalculatorPeriodicPaymentRequest: MortgageCalculatorPeriodicPaymentRequest,
    /**
     * The MvoRequest model constructor.
     * @property {module:model/MvoRequest}
     */
    MvoRequest: MvoRequest,
    /**
     * The OptConfig model constructor.
     * @property {module:model/OptConfig}
     */
    OptConfig: OptConfig,
    /**
     * The OptConfig1 model constructor.
     * @property {module:model/OptConfig1}
     */
    OptConfig1: OptConfig1,
    /**
     * The OrderRebalanceRequest model constructor.
     * @property {module:model/OrderRebalanceRequest}
     */
    OrderRebalanceRequest: OrderRebalanceRequest,
    /**
     * The PerformanceCalculatorRequest model constructor.
     * @property {module:model/PerformanceCalculatorRequest}
     */
    PerformanceCalculatorRequest: PerformanceCalculatorRequest,
    /**
     * The Periods model constructor.
     * @property {module:model/Periods}
     */
    Periods: Periods,
    /**
     * The PortfolioOptimizationScoreRequest model constructor.
     * @property {module:model/PortfolioOptimizationScoreRequest}
     */
    PortfolioOptimizationScoreRequest: PortfolioOptimizationScoreRequest,
    /**
     * The PortfolioWhatIfRequest model constructor.
     * @property {module:model/PortfolioWhatIfRequest}
     */
    PortfolioWhatIfRequest: PortfolioWhatIfRequest,
    /**
     * The PurchaseCalculatorAmountRequest model constructor.
     * @property {module:model/PurchaseCalculatorAmountRequest}
     */
    PurchaseCalculatorAmountRequest: PurchaseCalculatorAmountRequest,
    /**
     * The PurchaseCalculatorDepositAmountRequest model constructor.
     * @property {module:model/PurchaseCalculatorDepositAmountRequest}
     */
    PurchaseCalculatorDepositAmountRequest: PurchaseCalculatorDepositAmountRequest,
    /**
     * The PurchaseCalculatorHorizonRequest model constructor.
     * @property {module:model/PurchaseCalculatorHorizonRequest}
     */
    PurchaseCalculatorHorizonRequest: PurchaseCalculatorHorizonRequest,
    /**
     * The RatioTargets model constructor.
     * @property {module:model/RatioTargets}
     */
    RatioTargets: RatioTargets,
    /**
     * The RatioTargets1 model constructor.
     * @property {module:model/RatioTargets1}
     */
    RatioTargets1: RatioTargets1,
    /**
     * The RebalancingSignalRequest model constructor.
     * @property {module:model/RebalancingSignalRequest}
     */
    RebalancingSignalRequest: RebalancingSignalRequest,
    /**
     * The RecommendationConfig model constructor.
     * @property {module:model/RecommendationConfig}
     */
    RecommendationConfig: RecommendationConfig,
    /**
     * The RecommendationConfig1 model constructor.
     * @property {module:model/RecommendationConfig1}
     */
    RecommendationConfig1: RecommendationConfig1,
    /**
     * The RecurringTransactionAnalysisRequest model constructor.
     * @property {module:model/RecurringTransactionAnalysisRequest}
     */
    RecurringTransactionAnalysisRequest: RecurringTransactionAnalysisRequest,
    /**
     * The RetirementCalculatorDepositAmountRequest model constructor.
     * @property {module:model/RetirementCalculatorDepositAmountRequest}
     */
    RetirementCalculatorDepositAmountRequest: RetirementCalculatorDepositAmountRequest,
    /**
     * The RetirementCalculatorExpensesRequest model constructor.
     * @property {module:model/RetirementCalculatorExpensesRequest}
     */
    RetirementCalculatorExpensesRequest: RetirementCalculatorExpensesRequest,
    /**
     * The RetirementCalculatorPercentCoveredRequest model constructor.
     * @property {module:model/RetirementCalculatorPercentCoveredRequest}
     */
    RetirementCalculatorPercentCoveredRequest: RetirementCalculatorPercentCoveredRequest,
    /**
     * The RiskAllocationRequest model constructor.
     * @property {module:model/RiskAllocationRequest}
     */
    RiskAllocationRequest: RiskAllocationRequest,
    /**
     * The RiskScoreRequest model constructor.
     * @property {module:model/RiskScoreRequest}
     */
    RiskScoreRequest: RiskScoreRequest,
    /**
     * The SavingsCalculatorRequest model constructor.
     * @property {module:model/SavingsCalculatorRequest}
     */
    SavingsCalculatorRequest: SavingsCalculatorRequest,
    /**
     * The SavingsDepositSchedule model constructor.
     * @property {module:model/SavingsDepositSchedule}
     */
    SavingsDepositSchedule: SavingsDepositSchedule,
    /**
     * The ScenarioAnalysisRequest model constructor.
     * @property {module:model/ScenarioAnalysisRequest}
     */
    ScenarioAnalysisRequest: ScenarioAnalysisRequest,
    /**
     * The SensitivityAnalysisRequest model constructor.
     * @property {module:model/SensitivityAnalysisRequest}
     */
    SensitivityAnalysisRequest: SensitivityAnalysisRequest,
    /**
     * The SensitivityFactor model constructor.
     * @property {module:model/SensitivityFactor}
     */
    SensitivityFactor: SensitivityFactor,
    /**
     * The Settings model constructor.
     * @property {module:model/Settings}
     */
    Settings: Settings,
    /**
     * The SpendingAnalysisRequest model constructor.
     * @property {module:model/SpendingAnalysisRequest}
     */
    SpendingAnalysisRequest: SpendingAnalysisRequest,
    /**
     * The VariableAnnuityRequest model constructor.
     * @property {module:model/VariableAnnuityRequest}
     */
    VariableAnnuityRequest: VariableAnnuityRequest,
    /**
     * The WConfig model constructor.
     * @property {module:model/WConfig}
     */
    WConfig: WConfig,
    /**
     * The WConfig1 model constructor.
     * @property {module:model/WConfig1}
     */
    WConfig1: WConfig1,
    /**
     * The AnnuitiesApi service constructor.
     * @property {module:api/AnnuitiesApi}
     */
    AnnuitiesApi: AnnuitiesApi,
    /**
     * The BusinessFinancialManagementApi service constructor.
     * @property {module:api/BusinessFinancialManagementApi}
     */
    BusinessFinancialManagementApi: BusinessFinancialManagementApi,
    /**
     * The CardsApi service constructor.
     * @property {module:api/CardsApi}
     */
    CardsApi: CardsApi,
    /**
     * The FinancialHealthApi service constructor.
     * @property {module:api/FinancialHealthApi}
     */
    FinancialHealthApi: FinancialHealthApi,
    /**
     * The FinancialPlanningApi service constructor.
     * @property {module:api/FinancialPlanningApi}
     */
    FinancialPlanningApi: FinancialPlanningApi,
    /**
     * The GoalsApi service constructor.
     * @property {module:api/GoalsApi}
     */
    GoalsApi: GoalsApi,
    /**
     * The LifeInsuranceApi service constructor.
     * @property {module:api/LifeInsuranceApi}
     */
    LifeInsuranceApi: LifeInsuranceApi,
    /**
     * The PersonalFinancialManagementApi service constructor.
     * @property {module:api/PersonalFinancialManagementApi}
     */
    PersonalFinancialManagementApi: PersonalFinancialManagementApi,
    /**
     * The PortfolioConstructionApi service constructor.
     * @property {module:api/PortfolioConstructionApi}
     */
    PortfolioConstructionApi: PortfolioConstructionApi,
    /**
     * The PortfolioManagementApi service constructor.
     * @property {module:api/PortfolioManagementApi}
     */
    PortfolioManagementApi: PortfolioManagementApi,
    /**
     * The RiskScoringApi service constructor.
     * @property {module:api/RiskScoringApi}
     */
    RiskScoringApi: RiskScoringApi,
    /**
     * The SimulationsApi service constructor.
     * @property {module:api/SimulationsApi}
     */
    SimulationsApi: SimulationsApi,
    /**
     * The UtilApi service constructor.
     * @property {module:api/UtilApi}
     */
    UtilApi: UtilApi,
    /**
     * The AuthApi service constructor
     * @property {module:api/AuthApi}
     */
    AuthApi : AuthApi
  };

  return exports;
}));
