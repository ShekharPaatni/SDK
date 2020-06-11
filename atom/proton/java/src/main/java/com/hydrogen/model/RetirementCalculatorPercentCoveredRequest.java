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
 * RetirementCalculatorPercentCoveredRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-05-29T05:03:35.524Z")
public class RetirementCalculatorPercentCoveredRequest {
  @SerializedName("retirement_income")
  private Float retirementIncome = 0.0f;

  @SerializedName("deposit_schedule")
  private Object depositSchedule = null;

  @SerializedName("retirement_age")
  private Integer retirementAge = 65;

  @SerializedName("portfolio_return")
  private Float portfolioReturn = null;

  @SerializedName("retirement_expenses")
  private Float retirementExpenses = null;

  @SerializedName("inflation_rate")
  private Float inflationRate = 0.0f;

  @SerializedName("aggregation_account_ids")
  private List<UUID> aggregationAccountIds = null;

  @SerializedName("current_age")
  private Integer currentAge = null;

  @SerializedName("account_ids")
  private List<UUID> accountIds = null;

  @SerializedName("retirement_savings")
  private Float retirementSavings = 0.0f;

  @SerializedName("retirement_tax")
  private Float retirementTax = 0.0f;

  @SerializedName("death_age")
  private Integer deathAge = null;

  public RetirementCalculatorPercentCoveredRequest retirementIncome(Float retirementIncome) {
    this.retirementIncome = retirementIncome;
    return this;
  }

   /**
   * Get retirementIncome
   * minimum: 0
   * @return retirementIncome
  **/
  @ApiModelProperty(value = "")
  public Float getRetirementIncome() {
    return retirementIncome;
  }

  public void setRetirementIncome(Float retirementIncome) {
    this.retirementIncome = retirementIncome;
  }

  public RetirementCalculatorPercentCoveredRequest depositSchedule(Object depositSchedule) {
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

  public RetirementCalculatorPercentCoveredRequest retirementAge(Integer retirementAge) {
    this.retirementAge = retirementAge;
    return this;
  }

   /**
   * Get retirementAge
   * minimum: 0
   * @return retirementAge
  **/
  @ApiModelProperty(value = "")
  public Integer getRetirementAge() {
    return retirementAge;
  }

  public void setRetirementAge(Integer retirementAge) {
    this.retirementAge = retirementAge;
  }

  public RetirementCalculatorPercentCoveredRequest portfolioReturn(Float portfolioReturn) {
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

  public RetirementCalculatorPercentCoveredRequest retirementExpenses(Float retirementExpenses) {
    this.retirementExpenses = retirementExpenses;
    return this;
  }

   /**
   * Get retirementExpenses
   * minimum: 0
   * @return retirementExpenses
  **/
  @ApiModelProperty(required = true, value = "")
  public Float getRetirementExpenses() {
    return retirementExpenses;
  }

  public void setRetirementExpenses(Float retirementExpenses) {
    this.retirementExpenses = retirementExpenses;
  }

  public RetirementCalculatorPercentCoveredRequest inflationRate(Float inflationRate) {
    this.inflationRate = inflationRate;
    return this;
  }

   /**
   * Get inflationRate
   * minimum: -1
   * @return inflationRate
  **/
  @ApiModelProperty(value = "")
  public Float getInflationRate() {
    return inflationRate;
  }

  public void setInflationRate(Float inflationRate) {
    this.inflationRate = inflationRate;
  }

  public RetirementCalculatorPercentCoveredRequest aggregationAccountIds(List<UUID> aggregationAccountIds) {
    this.aggregationAccountIds = aggregationAccountIds;
    return this;
  }

  public RetirementCalculatorPercentCoveredRequest addAggregationAccountIdsItem(UUID aggregationAccountIdsItem) {
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

  public RetirementCalculatorPercentCoveredRequest currentAge(Integer currentAge) {
    this.currentAge = currentAge;
    return this;
  }

   /**
   * Get currentAge
   * minimum: 0
   * @return currentAge
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getCurrentAge() {
    return currentAge;
  }

  public void setCurrentAge(Integer currentAge) {
    this.currentAge = currentAge;
  }

  public RetirementCalculatorPercentCoveredRequest accountIds(List<UUID> accountIds) {
    this.accountIds = accountIds;
    return this;
  }

  public RetirementCalculatorPercentCoveredRequest addAccountIdsItem(UUID accountIdsItem) {
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

  public RetirementCalculatorPercentCoveredRequest retirementSavings(Float retirementSavings) {
    this.retirementSavings = retirementSavings;
    return this;
  }

   /**
   * Get retirementSavings
   * minimum: 0
   * @return retirementSavings
  **/
  @ApiModelProperty(value = "")
  public Float getRetirementSavings() {
    return retirementSavings;
  }

  public void setRetirementSavings(Float retirementSavings) {
    this.retirementSavings = retirementSavings;
  }

  public RetirementCalculatorPercentCoveredRequest retirementTax(Float retirementTax) {
    this.retirementTax = retirementTax;
    return this;
  }

   /**
   * Get retirementTax
   * minimum: 0
   * maximum: 1
   * @return retirementTax
  **/
  @ApiModelProperty(value = "")
  public Float getRetirementTax() {
    return retirementTax;
  }

  public void setRetirementTax(Float retirementTax) {
    this.retirementTax = retirementTax;
  }

  public RetirementCalculatorPercentCoveredRequest deathAge(Integer deathAge) {
    this.deathAge = deathAge;
    return this;
  }

   /**
   * Get deathAge
   * minimum: 0
   * @return deathAge
  **/
  @ApiModelProperty(required = true, value = "")
  public Integer getDeathAge() {
    return deathAge;
  }

  public void setDeathAge(Integer deathAge) {
    this.deathAge = deathAge;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RetirementCalculatorPercentCoveredRequest retirementCalculatorPercentCoveredRequest = (RetirementCalculatorPercentCoveredRequest) o;
    return Objects.equals(this.retirementIncome, retirementCalculatorPercentCoveredRequest.retirementIncome) &&
        Objects.equals(this.depositSchedule, retirementCalculatorPercentCoveredRequest.depositSchedule) &&
        Objects.equals(this.retirementAge, retirementCalculatorPercentCoveredRequest.retirementAge) &&
        Objects.equals(this.portfolioReturn, retirementCalculatorPercentCoveredRequest.portfolioReturn) &&
        Objects.equals(this.retirementExpenses, retirementCalculatorPercentCoveredRequest.retirementExpenses) &&
        Objects.equals(this.inflationRate, retirementCalculatorPercentCoveredRequest.inflationRate) &&
        Objects.equals(this.aggregationAccountIds, retirementCalculatorPercentCoveredRequest.aggregationAccountIds) &&
        Objects.equals(this.currentAge, retirementCalculatorPercentCoveredRequest.currentAge) &&
        Objects.equals(this.accountIds, retirementCalculatorPercentCoveredRequest.accountIds) &&
        Objects.equals(this.retirementSavings, retirementCalculatorPercentCoveredRequest.retirementSavings) &&
        Objects.equals(this.retirementTax, retirementCalculatorPercentCoveredRequest.retirementTax) &&
        Objects.equals(this.deathAge, retirementCalculatorPercentCoveredRequest.deathAge);
  }

  @Override
  public int hashCode() {
    return Objects.hash(retirementIncome, depositSchedule, retirementAge, portfolioReturn, retirementExpenses, inflationRate, aggregationAccountIds, currentAge, accountIds, retirementSavings, retirementTax, deathAge);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RetirementCalculatorPercentCoveredRequest {\n");
    
    sb.append("    retirementIncome: ").append(toIndentedString(retirementIncome)).append("\n");
    sb.append("    depositSchedule: ").append(toIndentedString(depositSchedule)).append("\n");
    sb.append("    retirementAge: ").append(toIndentedString(retirementAge)).append("\n");
    sb.append("    portfolioReturn: ").append(toIndentedString(portfolioReturn)).append("\n");
    sb.append("    retirementExpenses: ").append(toIndentedString(retirementExpenses)).append("\n");
    sb.append("    inflationRate: ").append(toIndentedString(inflationRate)).append("\n");
    sb.append("    aggregationAccountIds: ").append(toIndentedString(aggregationAccountIds)).append("\n");
    sb.append("    currentAge: ").append(toIndentedString(currentAge)).append("\n");
    sb.append("    accountIds: ").append(toIndentedString(accountIds)).append("\n");
    sb.append("    retirementSavings: ").append(toIndentedString(retirementSavings)).append("\n");
    sb.append("    retirementTax: ").append(toIndentedString(retirementTax)).append("\n");
    sb.append("    deathAge: ").append(toIndentedString(deathAge)).append("\n");
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

