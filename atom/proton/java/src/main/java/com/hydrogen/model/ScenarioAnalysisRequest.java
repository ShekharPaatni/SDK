/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * ScenarioAnalysisRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-05-29T05:03:35.524Z")
public class ScenarioAnalysisRequest {
  @SerializedName("use_proxy_data")
  private Boolean useProxyData = false;

  @SerializedName("start_date")
  private LocalDate startDate = null;

  @SerializedName("portfolio_tickers")
  private List<String> portfolioTickers = null;

  @SerializedName("trading_days_per_year")
  private Integer tradingDaysPerYear = 252;

  @SerializedName("end_date")
  private LocalDate endDate = null;

  @SerializedName("model_id")
  private UUID modelId = null;

  @SerializedName("allocation_id")
  private UUID allocationId = null;

  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  @SerializedName("portfolio_weights")
  private List<Float> portfolioWeights = null;

  /**
   * Gets or Sets frequencyInterval
   */
  @JsonAdapter(FrequencyIntervalEnum.Adapter.class)
  public enum FrequencyIntervalEnum {
    YEAR("year"),
    
    QUARTER("quarter"),
    
    MONTH("month"),
    
    WEEK("week"),
    
    DAY("day");

    private String value;

    FrequencyIntervalEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static FrequencyIntervalEnum fromValue(String text) {
      for (FrequencyIntervalEnum b : FrequencyIntervalEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<FrequencyIntervalEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final FrequencyIntervalEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public FrequencyIntervalEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return FrequencyIntervalEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("frequency_interval")
  private FrequencyIntervalEnum frequencyInterval = null;

  @SerializedName("scenario")
  private List<SensitivityFactor> scenario = new ArrayList<SensitivityFactor>();

  @SerializedName("aggregation_account_id")
  private UUID aggregationAccountId = null;

  /**
   * Gets or Sets marketDataSource
   */
  @JsonAdapter(MarketDataSourceEnum.Adapter.class)
  public enum MarketDataSourceEnum {
    NUCLEUS("nucleus"),
    
    INTEGRATION("integration");

    private String value;

    MarketDataSourceEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static MarketDataSourceEnum fromValue(String text) {
      for (MarketDataSourceEnum b : MarketDataSourceEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<MarketDataSourceEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final MarketDataSourceEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public MarketDataSourceEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return MarketDataSourceEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("market_data_source")
  private MarketDataSourceEnum marketDataSource = MarketDataSourceEnum.NUCLEUS;

  public ScenarioAnalysisRequest useProxyData(Boolean useProxyData) {
    this.useProxyData = useProxyData;
    return this;
  }

   /**
   * Get useProxyData
   * @return useProxyData
  **/
  @ApiModelProperty(value = "")
  public Boolean isUseProxyData() {
    return useProxyData;
  }

  public void setUseProxyData(Boolean useProxyData) {
    this.useProxyData = useProxyData;
  }

  public ScenarioAnalysisRequest startDate(LocalDate startDate) {
    this.startDate = startDate;
    return this;
  }

   /**
   * Get startDate
   * @return startDate
  **/
  @ApiModelProperty(value = "")
  public LocalDate getStartDate() {
    return startDate;
  }

  public void setStartDate(LocalDate startDate) {
    this.startDate = startDate;
  }

  public ScenarioAnalysisRequest portfolioTickers(List<String> portfolioTickers) {
    this.portfolioTickers = portfolioTickers;
    return this;
  }

  public ScenarioAnalysisRequest addPortfolioTickersItem(String portfolioTickersItem) {
    if (this.portfolioTickers == null) {
      this.portfolioTickers = new ArrayList<String>();
    }
    this.portfolioTickers.add(portfolioTickersItem);
    return this;
  }

   /**
   * Get portfolioTickers
   * @return portfolioTickers
  **/
  @ApiModelProperty(value = "")
  public List<String> getPortfolioTickers() {
    return portfolioTickers;
  }

  public void setPortfolioTickers(List<String> portfolioTickers) {
    this.portfolioTickers = portfolioTickers;
  }

  public ScenarioAnalysisRequest tradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
    return this;
  }

   /**
   * Get tradingDaysPerYear
   * minimum: 1
   * maximum: 365
   * @return tradingDaysPerYear
  **/
  @ApiModelProperty(value = "")
  public Integer getTradingDaysPerYear() {
    return tradingDaysPerYear;
  }

  public void setTradingDaysPerYear(Integer tradingDaysPerYear) {
    this.tradingDaysPerYear = tradingDaysPerYear;
  }

  public ScenarioAnalysisRequest endDate(LocalDate endDate) {
    this.endDate = endDate;
    return this;
  }

   /**
   * Get endDate
   * @return endDate
  **/
  @ApiModelProperty(value = "")
  public LocalDate getEndDate() {
    return endDate;
  }

  public void setEndDate(LocalDate endDate) {
    this.endDate = endDate;
  }

  public ScenarioAnalysisRequest modelId(UUID modelId) {
    this.modelId = modelId;
    return this;
  }

   /**
   * Get modelId
   * @return modelId
  **/
  @ApiModelProperty(value = "")
  public UUID getModelId() {
    return modelId;
  }

  public void setModelId(UUID modelId) {
    this.modelId = modelId;
  }

  public ScenarioAnalysisRequest allocationId(UUID allocationId) {
    this.allocationId = allocationId;
    return this;
  }

   /**
   * Get allocationId
   * @return allocationId
  **/
  @ApiModelProperty(value = "")
  public UUID getAllocationId() {
    return allocationId;
  }

  public void setAllocationId(UUID allocationId) {
    this.allocationId = allocationId;
  }

  public ScenarioAnalysisRequest accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * Get accountId
   * @return accountId
  **/
  @ApiModelProperty(value = "")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public ScenarioAnalysisRequest portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * Get portfolioId
   * @return portfolioId
  **/
  @ApiModelProperty(value = "")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }

  public ScenarioAnalysisRequest portfolioWeights(List<Float> portfolioWeights) {
    this.portfolioWeights = portfolioWeights;
    return this;
  }

  public ScenarioAnalysisRequest addPortfolioWeightsItem(Float portfolioWeightsItem) {
    if (this.portfolioWeights == null) {
      this.portfolioWeights = new ArrayList<Float>();
    }
    this.portfolioWeights.add(portfolioWeightsItem);
    return this;
  }

   /**
   * Get portfolioWeights
   * @return portfolioWeights
  **/
  @ApiModelProperty(value = "")
  public List<Float> getPortfolioWeights() {
    return portfolioWeights;
  }

  public void setPortfolioWeights(List<Float> portfolioWeights) {
    this.portfolioWeights = portfolioWeights;
  }

  public ScenarioAnalysisRequest frequencyInterval(FrequencyIntervalEnum frequencyInterval) {
    this.frequencyInterval = frequencyInterval;
    return this;
  }

   /**
   * Get frequencyInterval
   * @return frequencyInterval
  **/
  @ApiModelProperty(required = true, value = "")
  public FrequencyIntervalEnum getFrequencyInterval() {
    return frequencyInterval;
  }

  public void setFrequencyInterval(FrequencyIntervalEnum frequencyInterval) {
    this.frequencyInterval = frequencyInterval;
  }

  public ScenarioAnalysisRequest scenario(List<SensitivityFactor> scenario) {
    this.scenario = scenario;
    return this;
  }

  public ScenarioAnalysisRequest addScenarioItem(SensitivityFactor scenarioItem) {
    this.scenario.add(scenarioItem);
    return this;
  }

   /**
   * Get scenario
   * @return scenario
  **/
  @ApiModelProperty(required = true, value = "")
  public List<SensitivityFactor> getScenario() {
    return scenario;
  }

  public void setScenario(List<SensitivityFactor> scenario) {
    this.scenario = scenario;
  }

  public ScenarioAnalysisRequest aggregationAccountId(UUID aggregationAccountId) {
    this.aggregationAccountId = aggregationAccountId;
    return this;
  }

   /**
   * Get aggregationAccountId
   * @return aggregationAccountId
  **/
  @ApiModelProperty(value = "")
  public UUID getAggregationAccountId() {
    return aggregationAccountId;
  }

  public void setAggregationAccountId(UUID aggregationAccountId) {
    this.aggregationAccountId = aggregationAccountId;
  }

  public ScenarioAnalysisRequest marketDataSource(MarketDataSourceEnum marketDataSource) {
    this.marketDataSource = marketDataSource;
    return this;
  }

   /**
   * Get marketDataSource
   * @return marketDataSource
  **/
  @ApiModelProperty(value = "")
  public MarketDataSourceEnum getMarketDataSource() {
    return marketDataSource;
  }

  public void setMarketDataSource(MarketDataSourceEnum marketDataSource) {
    this.marketDataSource = marketDataSource;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ScenarioAnalysisRequest scenarioAnalysisRequest = (ScenarioAnalysisRequest) o;
    return Objects.equals(this.useProxyData, scenarioAnalysisRequest.useProxyData) &&
        Objects.equals(this.startDate, scenarioAnalysisRequest.startDate) &&
        Objects.equals(this.portfolioTickers, scenarioAnalysisRequest.portfolioTickers) &&
        Objects.equals(this.tradingDaysPerYear, scenarioAnalysisRequest.tradingDaysPerYear) &&
        Objects.equals(this.endDate, scenarioAnalysisRequest.endDate) &&
        Objects.equals(this.modelId, scenarioAnalysisRequest.modelId) &&
        Objects.equals(this.allocationId, scenarioAnalysisRequest.allocationId) &&
        Objects.equals(this.accountId, scenarioAnalysisRequest.accountId) &&
        Objects.equals(this.portfolioId, scenarioAnalysisRequest.portfolioId) &&
        Objects.equals(this.portfolioWeights, scenarioAnalysisRequest.portfolioWeights) &&
        Objects.equals(this.frequencyInterval, scenarioAnalysisRequest.frequencyInterval) &&
        Objects.equals(this.scenario, scenarioAnalysisRequest.scenario) &&
        Objects.equals(this.aggregationAccountId, scenarioAnalysisRequest.aggregationAccountId) &&
        Objects.equals(this.marketDataSource, scenarioAnalysisRequest.marketDataSource);
  }

  @Override
  public int hashCode() {
    return Objects.hash(useProxyData, startDate, portfolioTickers, tradingDaysPerYear, endDate, modelId, allocationId, accountId, portfolioId, portfolioWeights, frequencyInterval, scenario, aggregationAccountId, marketDataSource);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ScenarioAnalysisRequest {\n");
    
    sb.append("    useProxyData: ").append(toIndentedString(useProxyData)).append("\n");
    sb.append("    startDate: ").append(toIndentedString(startDate)).append("\n");
    sb.append("    portfolioTickers: ").append(toIndentedString(portfolioTickers)).append("\n");
    sb.append("    tradingDaysPerYear: ").append(toIndentedString(tradingDaysPerYear)).append("\n");
    sb.append("    endDate: ").append(toIndentedString(endDate)).append("\n");
    sb.append("    modelId: ").append(toIndentedString(modelId)).append("\n");
    sb.append("    allocationId: ").append(toIndentedString(allocationId)).append("\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
    sb.append("    portfolioWeights: ").append(toIndentedString(portfolioWeights)).append("\n");
    sb.append("    frequencyInterval: ").append(toIndentedString(frequencyInterval)).append("\n");
    sb.append("    scenario: ").append(toIndentedString(scenario)).append("\n");
    sb.append("    aggregationAccountId: ").append(toIndentedString(aggregationAccountId)).append("\n");
    sb.append("    marketDataSource: ").append(toIndentedString(marketDataSource)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

