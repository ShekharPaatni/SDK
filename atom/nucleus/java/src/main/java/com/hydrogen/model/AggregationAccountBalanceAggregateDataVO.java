/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
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

import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * AggregationAccountBalanceAggregateDataVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class AggregationAccountBalanceAggregateDataVO {
  @SerializedName("aggregation_account_balance_id")
  private UUID aggregationAccountBalanceId = null;

  @SerializedName("available_balance")
  private Double availableBalance = null;

  @SerializedName("available_credit")
  private Double availableCredit = null;

  @SerializedName("balance")
  private Double balance = null;

  @SerializedName("balance_time_stamp")
  private OffsetDateTime balanceTimeStamp = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public AggregationAccountBalanceAggregateDataVO aggregationAccountBalanceId(UUID aggregationAccountBalanceId) {
    this.aggregationAccountBalanceId = aggregationAccountBalanceId;
    return this;
  }

   /**
   * Get aggregationAccountBalanceId
   * @return aggregationAccountBalanceId
  **/
  @ApiModelProperty(value = "")
  public UUID getAggregationAccountBalanceId() {
    return aggregationAccountBalanceId;
  }

  public void setAggregationAccountBalanceId(UUID aggregationAccountBalanceId) {
    this.aggregationAccountBalanceId = aggregationAccountBalanceId;
  }

  public AggregationAccountBalanceAggregateDataVO availableBalance(Double availableBalance) {
    this.availableBalance = availableBalance;
    return this;
  }

   /**
   * Get availableBalance
   * @return availableBalance
  **/
  @ApiModelProperty(value = "")
  public Double getAvailableBalance() {
    return availableBalance;
  }

  public void setAvailableBalance(Double availableBalance) {
    this.availableBalance = availableBalance;
  }

  public AggregationAccountBalanceAggregateDataVO availableCredit(Double availableCredit) {
    this.availableCredit = availableCredit;
    return this;
  }

   /**
   * Get availableCredit
   * @return availableCredit
  **/
  @ApiModelProperty(value = "")
  public Double getAvailableCredit() {
    return availableCredit;
  }

  public void setAvailableCredit(Double availableCredit) {
    this.availableCredit = availableCredit;
  }

  public AggregationAccountBalanceAggregateDataVO balance(Double balance) {
    this.balance = balance;
    return this;
  }

   /**
   * Get balance
   * @return balance
  **/
  @ApiModelProperty(value = "")
  public Double getBalance() {
    return balance;
  }

  public void setBalance(Double balance) {
    this.balance = balance;
  }

  public AggregationAccountBalanceAggregateDataVO balanceTimeStamp(OffsetDateTime balanceTimeStamp) {
    this.balanceTimeStamp = balanceTimeStamp;
    return this;
  }

   /**
   * Get balanceTimeStamp
   * @return balanceTimeStamp
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getBalanceTimeStamp() {
    return balanceTimeStamp;
  }

  public void setBalanceTimeStamp(OffsetDateTime balanceTimeStamp) {
    this.balanceTimeStamp = balanceTimeStamp;
  }

  public AggregationAccountBalanceAggregateDataVO createDate(OffsetDateTime createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public void setCreateDate(OffsetDateTime createDate) {
    this.createDate = createDate;
  }

  public AggregationAccountBalanceAggregateDataVO currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * Get currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(value = "")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public AggregationAccountBalanceAggregateDataVO secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public AggregationAccountBalanceAggregateDataVO updateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationAccountBalanceAggregateDataVO aggregationAccountBalanceAggregateDataVO = (AggregationAccountBalanceAggregateDataVO) o;
    return Objects.equals(this.aggregationAccountBalanceId, aggregationAccountBalanceAggregateDataVO.aggregationAccountBalanceId) &&
        Objects.equals(this.availableBalance, aggregationAccountBalanceAggregateDataVO.availableBalance) &&
        Objects.equals(this.availableCredit, aggregationAccountBalanceAggregateDataVO.availableCredit) &&
        Objects.equals(this.balance, aggregationAccountBalanceAggregateDataVO.balance) &&
        Objects.equals(this.balanceTimeStamp, aggregationAccountBalanceAggregateDataVO.balanceTimeStamp) &&
        Objects.equals(this.createDate, aggregationAccountBalanceAggregateDataVO.createDate) &&
        Objects.equals(this.currencyCode, aggregationAccountBalanceAggregateDataVO.currencyCode) &&
        Objects.equals(this.secondaryId, aggregationAccountBalanceAggregateDataVO.secondaryId) &&
        Objects.equals(this.updateDate, aggregationAccountBalanceAggregateDataVO.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(aggregationAccountBalanceId, availableBalance, availableCredit, balance, balanceTimeStamp, createDate, currencyCode, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationAccountBalanceAggregateDataVO {\n");
    
    sb.append("    aggregationAccountBalanceId: ").append(toIndentedString(aggregationAccountBalanceId)).append("\n");
    sb.append("    availableBalance: ").append(toIndentedString(availableBalance)).append("\n");
    sb.append("    availableCredit: ").append(toIndentedString(availableCredit)).append("\n");
    sb.append("    balance: ").append(toIndentedString(balance)).append("\n");
    sb.append("    balanceTimeStamp: ").append(toIndentedString(balanceTimeStamp)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

