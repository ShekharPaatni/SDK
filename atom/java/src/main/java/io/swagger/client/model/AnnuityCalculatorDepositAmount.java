/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.math.BigDecimal;

/**
 * AnnuityCalculatorDepositAmount
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class AnnuityCalculatorDepositAmount {
  @SerializedName("portfolio_return")
  private BigDecimal portfolioReturn = null;

  @SerializedName("initial_balance")
  private BigDecimal initialBalance = null;

  @SerializedName("accumulation_horizon")
  private Integer accumulationHorizon = null;

  @SerializedName("decumulation_horizon")
  private Integer decumulationHorizon = null;

  @SerializedName("annuity_amount")
  private BigDecimal annuityAmount = null;

  /**
   * The frequency interval of the annuity
   */
  @JsonAdapter(AnnuityFrequencyIntervalEnum.Adapter.class)
  public enum AnnuityFrequencyIntervalEnum {
    YEAR("year"),
    
    QUARTER("quarter"),
    
    MONTH("month"),
    
    WEEK("week");

    private String value;

    AnnuityFrequencyIntervalEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AnnuityFrequencyIntervalEnum fromValue(String text) {
      for (AnnuityFrequencyIntervalEnum b : AnnuityFrequencyIntervalEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<AnnuityFrequencyIntervalEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AnnuityFrequencyIntervalEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AnnuityFrequencyIntervalEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return AnnuityFrequencyIntervalEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("annuity_frequency_interval")
  private AnnuityFrequencyIntervalEnum annuityFrequencyInterval = AnnuityFrequencyIntervalEnum.YEAR;

  @SerializedName("inflation_rate")
  private BigDecimal inflationRate = null;

  @SerializedName("tax_rate")
  private BigDecimal taxRate = null;

  @SerializedName("deposit_schedule")
  private Object depositSchedule = null;

  public AnnuityCalculatorDepositAmount portfolioReturn(BigDecimal portfolioReturn) {
    this.portfolioReturn = portfolioReturn;
    return this;
  }

   /**
   * The annualized portfolio return
   * minimum: -1
   * @return portfolioReturn
  **/
  @ApiModelProperty(required = true, value = "The annualized portfolio return")
  public BigDecimal getPortfolioReturn() {
    return portfolioReturn;
  }

  public void setPortfolioReturn(BigDecimal portfolioReturn) {
    this.portfolioReturn = portfolioReturn;
  }

  public AnnuityCalculatorDepositAmount initialBalance(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
    return this;
  }

   /**
   * The initial balance of the account
   * minimum: 0
   * @return initialBalance
  **/
  @ApiModelProperty(required = true, value = "The initial balance of the account")
  public BigDecimal getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(BigDecimal initialBalance) {
    this.initialBalance = initialBalance;
  }

  public AnnuityCalculatorDepositAmount accumulationHorizon(Integer accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
    return this;
  }

   /**
   * The number of years in the accumulation period
   * minimum: 0
   * @return accumulationHorizon
  **/
  @ApiModelProperty(required = true, value = "The number of years in the accumulation period")
  public Integer getAccumulationHorizon() {
    return accumulationHorizon;
  }

  public void setAccumulationHorizon(Integer accumulationHorizon) {
    this.accumulationHorizon = accumulationHorizon;
  }

  public AnnuityCalculatorDepositAmount decumulationHorizon(Integer decumulationHorizon) {
    this.decumulationHorizon = decumulationHorizon;
    return this;
  }

   /**
   * The number of years in the accumulation period
   * minimum: 0
   * @return decumulationHorizon
  **/
  @ApiModelProperty(required = true, value = "The number of years in the accumulation period")
  public Integer getDecumulationHorizon() {
    return decumulationHorizon;
  }

  public void setDecumulationHorizon(Integer decumulationHorizon) {
    this.decumulationHorizon = decumulationHorizon;
  }

  public AnnuityCalculatorDepositAmount annuityAmount(BigDecimal annuityAmount) {
    this.annuityAmount = annuityAmount;
    return this;
  }

   /**
   * The amount of the annuity payments
   * minimum: 0
   * @return annuityAmount
  **/
  @ApiModelProperty(required = true, value = "The amount of the annuity payments")
  public BigDecimal getAnnuityAmount() {
    return annuityAmount;
  }

  public void setAnnuityAmount(BigDecimal annuityAmount) {
    this.annuityAmount = annuityAmount;
  }

  public AnnuityCalculatorDepositAmount annuityFrequencyInterval(AnnuityFrequencyIntervalEnum annuityFrequencyInterval) {
    this.annuityFrequencyInterval = annuityFrequencyInterval;
    return this;
  }

   /**
   * The frequency interval of the annuity
   * @return annuityFrequencyInterval
  **/
  @ApiModelProperty(value = "The frequency interval of the annuity")
  public AnnuityFrequencyIntervalEnum getAnnuityFrequencyInterval() {
    return annuityFrequencyInterval;
  }

  public void setAnnuityFrequencyInterval(AnnuityFrequencyIntervalEnum annuityFrequencyInterval) {
    this.annuityFrequencyInterval = annuityFrequencyInterval;
  }

  public AnnuityCalculatorDepositAmount inflationRate(BigDecimal inflationRate) {
    this.inflationRate = inflationRate;
    return this;
  }

   /**
   * The annualized inflation rate
   * minimum: -1
   * maximum: 20
   * @return inflationRate
  **/
  @ApiModelProperty(value = "The annualized inflation rate")
  public BigDecimal getInflationRate() {
    return inflationRate;
  }

  public void setInflationRate(BigDecimal inflationRate) {
    this.inflationRate = inflationRate;
  }

  public AnnuityCalculatorDepositAmount taxRate(BigDecimal taxRate) {
    this.taxRate = taxRate;
    return this;
  }

   /**
   * The tax rate on withdrawals
   * minimum: 0
   * maximum: 1
   * @return taxRate
  **/
  @ApiModelProperty(value = "The tax rate on withdrawals")
  public BigDecimal getTaxRate() {
    return taxRate;
  }

  public void setTaxRate(BigDecimal taxRate) {
    this.taxRate = taxRate;
  }

  public AnnuityCalculatorDepositAmount depositSchedule(Object depositSchedule) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnnuityCalculatorDepositAmount annuityCalculatorDepositAmount = (AnnuityCalculatorDepositAmount) o;
    return Objects.equals(this.portfolioReturn, annuityCalculatorDepositAmount.portfolioReturn) &&
        Objects.equals(this.initialBalance, annuityCalculatorDepositAmount.initialBalance) &&
        Objects.equals(this.accumulationHorizon, annuityCalculatorDepositAmount.accumulationHorizon) &&
        Objects.equals(this.decumulationHorizon, annuityCalculatorDepositAmount.decumulationHorizon) &&
        Objects.equals(this.annuityAmount, annuityCalculatorDepositAmount.annuityAmount) &&
        Objects.equals(this.annuityFrequencyInterval, annuityCalculatorDepositAmount.annuityFrequencyInterval) &&
        Objects.equals(this.inflationRate, annuityCalculatorDepositAmount.inflationRate) &&
        Objects.equals(this.taxRate, annuityCalculatorDepositAmount.taxRate) &&
        Objects.equals(this.depositSchedule, annuityCalculatorDepositAmount.depositSchedule);
  }

  @Override
  public int hashCode() {
    return Objects.hash(portfolioReturn, initialBalance, accumulationHorizon, decumulationHorizon, annuityAmount, annuityFrequencyInterval, inflationRate, taxRate, depositSchedule);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AnnuityCalculatorDepositAmount {\n");
    
    sb.append("    portfolioReturn: ").append(toIndentedString(portfolioReturn)).append("\n");
    sb.append("    initialBalance: ").append(toIndentedString(initialBalance)).append("\n");
    sb.append("    accumulationHorizon: ").append(toIndentedString(accumulationHorizon)).append("\n");
    sb.append("    decumulationHorizon: ").append(toIndentedString(decumulationHorizon)).append("\n");
    sb.append("    annuityAmount: ").append(toIndentedString(annuityAmount)).append("\n");
    sb.append("    annuityFrequencyInterval: ").append(toIndentedString(annuityFrequencyInterval)).append("\n");
    sb.append("    inflationRate: ").append(toIndentedString(inflationRate)).append("\n");
    sb.append("    taxRate: ").append(toIndentedString(taxRate)).append("\n");
    sb.append("    depositSchedule: ").append(toIndentedString(depositSchedule)).append("\n");
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

