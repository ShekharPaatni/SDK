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

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * EducationCalculatorAnnualCostRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-05-29T05:03:35.524Z")
public class EducationCalculatorAnnualCostRequest {
  @SerializedName("decumulation_horizon")
  private Integer decumulationHorizon = null;

  @SerializedName("deposit_schedule")
  private Object depositSchedule = null;

  @SerializedName("initial_balance")
  private Float initialBalance = 0.0f;

  @SerializedName("portfolio_return")
  private Float portfolioReturn = null;

  @SerializedName("education_inflation_rate")
  private Float educationInflationRate = 0.05f;

  @SerializedName("tax_rate")
  private Float taxRate = 0.0f;

  @SerializedName("percent_of_costs_covered")
  private Float percentOfCostsCovered = 1.0f;

  @SerializedName("aggregation_account_ids")
  private List<UUID> aggregationAccountIds = null;

  @SerializedName("account_ids")
  private List<UUID> accountIds = null;

  @SerializedName("accumulation_horizon")
  private Integer accumulationHorizon = null;

  @SerializedName("general_inflation_rate")
  private Float generalInflationRate = 0.0f;

  public EducationCalculatorAnnualCostRequest decumulationHorizon(Integer decumulationHorizon) {
    this.decumulationHorizon = decumulationHorizon;
    return this;
  }

   /**
   * Get decumulationHorizon
   * minimum: 0
   * @return decumulationHorizon
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getDecumulationHorizon() {
    return decumulationHorizon;
  }

  public void setDecumulationHorizon(Integer decumulationHorizon) {
    this.decumulationHorizon = decumulationHorizon;
  }

  public EducationCalculatorAnnualCostRequest depositSchedule(Object depositSchedule) {
    this.depositSchedule = depositSchedule;
    return this;
  }

   /**
   * Get depositSchedule
   * @return depositSchedule
  **/
  @ApiModelProperty(value = "")
  public Object getDepositSchedule() {
    return depositSchedule;
  }

  public void setDepositSchedule(Object depositSchedule) {
    this.depositSchedule = depositSchedule;
  }

  public EducationCalculatorAnnualCostRequest initialBalance(Float initialBalance) {
    this.initialBalance = initialBalance;
    return this;
  }

   /**
   * Get initialBalance
   * minimum: 0
   * @return initialBalance
  **/
  @ApiModelProperty(value = "")
  public Float getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(Float initialBalance) {
    this.initialBalance = initialBalance;
  }

  public EducationCalculatorAnnualCostRequest portfolioReturn(Float portfolioReturn) {
    this.portfolioReturn = portfolioReturn;
    return this;
  }

   /**
   * Get portfolioReturn
   * minimum: -1
   * @return portfolioReturn
  **/
  @ApiModelProperty(required = true, value = "")
  public Float getPortfolioReturn() {
    return portfolioReturn;
  }

  public void setPortfolioReturn(Float portfolioReturn) {
    this.portfolioReturn = portfolioReturn;
  }

  public EducationCalculatorAnnualCostRequest educationInflationRate(Float educationInflationRate) {
    this.educationInflationRate = educationInflationRate;
    return this;
  }

   /**
   * Get educationInflationRate
   * minimum: -1
   * @return educationInflationRate
  **/
  @ApiModelProperty(value = "")
  public Float getEducationInflationRate() {
    return educationInflationRate;
  }

  public void setEducationInflationRate(Float educationInflationRate) {
    this.educationInflationRate = educationInflationRate;
  }

  public EducationCalculatorAnnualCostRequest taxRate(Float taxRate) {
    this.taxRate = taxRate;
    return this;
  }

   /**
   * Get taxRate
   * minimum: 0
   * maximum: 1
   * @return taxRate
  **/
  @ApiModelProperty(value = "")
  public Float getTaxRate() {
    return taxRate;
  }

  public void setTaxRate(Float taxRate) {
    this.taxRate = taxRate;
  }

  public EducationCalculatorAnnualCostRequest percentOfCostsCovered(Float percentOfCostsCovered) {
    this.percentOfCostsCovered = percentOfCostsCovered;
    return this;
  }

   /**
   * Get percentOfCostsCovered
   * minimum: 0
   * maximum: 1
   * @return percentOfCostsCovered
  **/
  @ApiModelProperty(value = "")
  public Float getPercentOfCostsCovered() {
    return percentOfCostsCovered;
  }

  public void setPercentOfCostsCovered(Float percentOfCostsCovered) {
    this.percentOfCostsCovered = percentOfCostsCovered;
  }

  public EducationCalculatorAnnualCostRequest aggregationAccountIds(List<UUID> aggregationAccountIds) {
    this.aggregationAccountIds = aggregationAccountIds;
    return this;
  }

  public EducationCalculatorAnnualCostRequest addAggregationAccountIdsItem(UUID aggregationAccountIdsItem) {
    if (this.aggregationAccountIds == null) {
      this.aggregationAccountIds = new ArrayList<UUID>();
    }
    this.aggregationAccountIds.add(aggregationAccountIdsItem);
    return this;
  }

   /**
   * Get aggregationAccountIds
   * @return aggregationAccountIds
  **/
  @ApiModelProperty(value = "")
  public List<UUID> getAggregationAccountIds() {
    return aggregationAccountIds;
  }

  public void setAggregationAccountIds(List<UUID> aggregationAccountIds) {
    this.aggregationAccountIds = aggregationAccountIds;
  }

  public EducationCalculatorAnnualCostRequest accountIds(List<UUID> accountIds) {
    this.accountIds = accountIds;
    return this;
  }

  public EducationCalculatorAnnualCostRequest addAccountIdsItem(UUID accountIdsItem) {
    if (this.accountIds == null) {
      this.accountIds = new ArrayList<UUID>();
    }
    this.accountIds.add(accountIdsItem);
    return this;
  }

   /**
   * Get accountIds
   * @return accountIds
  **/
  @ApiModelProperty(value = "")
  public List<UUID> getAccountIds() {
    return accountIds;
  }

  public void setAccountIds(List<UUID> accountIds) {
    this.accountIds = accountIds;
  }

  public EducationCalculatorAnnualCostRequest accumulationHorizon(Integer accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
    return this;
  }

   /**
   * Get accumulationHorizon
   * minimum: 0
   * @return accumulationHorizon
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getAccumulationHorizon() {
    return accumulationHorizon;
  }

  public void setAccumulationHorizon(Integer accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
  }

  public EducationCalculatorAnnualCostRequest generalInflationRate(Float generalInflationRate) {
    this.generalInflationRate = generalInflationRate;
    return this;
  }

   /**
   * Get generalInflationRate
   * minimum: -1
   * @return generalInflationRate
  **/
  @ApiModelProperty(value = "")
  public Float getGeneralInflationRate() {
    return generalInflationRate;
  }

  public void setGeneralInflationRate(Float generalInflationRate) {
    this.generalInflationRate = generalInflationRate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EducationCalculatorAnnualCostRequest educationCalculatorAnnualCostRequest = (EducationCalculatorAnnualCostRequest) o;
    return Objects.equals(this.decumulationHorizon, educationCalculatorAnnualCostRequest.decumulationHorizon) &&
        Objects.equals(this.depositSchedule, educationCalculatorAnnualCostRequest.depositSchedule) &&
        Objects.equals(this.initialBalance, educationCalculatorAnnualCostRequest.initialBalance) &&
        Objects.equals(this.portfolioReturn, educationCalculatorAnnualCostRequest.portfolioReturn) &&
        Objects.equals(this.educationInflationRate, educationCalculatorAnnualCostRequest.educationInflationRate) &&
        Objects.equals(this.taxRate, educationCalculatorAnnualCostRequest.taxRate) &&
        Objects.equals(this.percentOfCostsCovered, educationCalculatorAnnualCostRequest.percentOfCostsCovered) &&
        Objects.equals(this.aggregationAccountIds, educationCalculatorAnnualCostRequest.aggregationAccountIds) &&
        Objects.equals(this.accountIds, educationCalculatorAnnualCostRequest.accountIds) &&
        Objects.equals(this.accumulationHorizon, educationCalculatorAnnualCostRequest.accumulationHorizon) &&
        Objects.equals(this.generalInflationRate, educationCalculatorAnnualCostRequest.generalInflationRate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(decumulationHorizon, depositSchedule, initialBalance, portfolioReturn, educationInflationRate, taxRate, percentOfCostsCovered, aggregationAccountIds, accountIds, accumulationHorizon, generalInflationRate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EducationCalculatorAnnualCostRequest {\n");
    
    sb.append("    decumulationHorizon: ").append(toIndentedString(decumulationHorizon)).append("\n");
    sb.append("    depositSchedule: ").append(toIndentedString(depositSchedule)).append("\n");
    sb.append("    initialBalance: ").append(toIndentedString(initialBalance)).append("\n");
    sb.append("    portfolioReturn: ").append(toIndentedString(portfolioReturn)).append("\n");
    sb.append("    educationInflationRate: ").append(toIndentedString(educationInflationRate)).append("\n");
    sb.append("    taxRate: ").append(toIndentedString(taxRate)).append("\n");
    sb.append("    percentOfCostsCovered: ").append(toIndentedString(percentOfCostsCovered)).append("\n");
    sb.append("    aggregationAccountIds: ").append(toIndentedString(aggregationAccountIds)).append("\n");
    sb.append("    accountIds: ").append(toIndentedString(accountIds)).append("\n");
    sb.append("    accumulationHorizon: ").append(toIndentedString(accumulationHorizon)).append("\n");
    sb.append("    generalInflationRate: ").append(toIndentedString(generalInflationRate)).append("\n");
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

