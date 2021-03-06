/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

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
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * GetCardStatementResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class GetCardStatementResponseVO {
  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("ending_balance")
  private Double endingBalance = null;

  @SerializedName("initial_balance")
  private Double initialBalance = null;

  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_card_id")
  private UUID nucleusCardId = null;

  @SerializedName("transactions")
  private List<Object> transactions = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public GetCardStatementResponseVO currencyCode(String currencyCode) {
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

  public GetCardStatementResponseVO endingBalance(Double endingBalance) {
    this.endingBalance = endingBalance;
    return this;
  }

   /**
   * Get endingBalance
   * @return endingBalance
  **/
  @ApiModelProperty(value = "")
  public Double getEndingBalance() {
    return endingBalance;
  }

  public void setEndingBalance(Double endingBalance) {
    this.endingBalance = endingBalance;
  }

  public GetCardStatementResponseVO initialBalance(Double initialBalance) {
    this.initialBalance = initialBalance;
    return this;
  }

   /**
   * Get initialBalance
   * @return initialBalance
  **/
  @ApiModelProperty(value = "")
  public Double getInitialBalance() {
    return initialBalance;
  }

  public void setInitialBalance(Double initialBalance) {
    this.initialBalance = initialBalance;
  }

  public GetCardStatementResponseVO message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public GetCardStatementResponseVO nucleusCardId(UUID nucleusCardId) {
    this.nucleusCardId = nucleusCardId;
    return this;
  }

   /**
   * Get nucleusCardId
   * @return nucleusCardId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusCardId() {
    return nucleusCardId;
  }

  public void setNucleusCardId(UUID nucleusCardId) {
    this.nucleusCardId = nucleusCardId;
  }

  public GetCardStatementResponseVO transactions(List<Object> transactions) {
    this.transactions = transactions;
    return this;
  }

  public GetCardStatementResponseVO addTransactionsItem(Object transactionsItem) {
    if (this.transactions == null) {
      this.transactions = new ArrayList<Object>();
    }
    this.transactions.add(transactionsItem);
    return this;
  }

   /**
   * Get transactions
   * @return transactions
  **/
  @ApiModelProperty(value = "")
  public List<Object> getTransactions() {
    return transactions;
  }

  public void setTransactions(List<Object> transactions) {
    this.transactions = transactions;
  }

  public GetCardStatementResponseVO vendorName(String vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * Get vendorName
   * @return vendorName
  **/
  @ApiModelProperty(value = "")
  public String getVendorName() {
    return vendorName;
  }

  public void setVendorName(String vendorName) {
    this.vendorName = vendorName;
  }

  public GetCardStatementResponseVO vendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
    return this;
  }

   /**
   * Get vendorResponse
   * @return vendorResponse
  **/
  @ApiModelProperty(value = "")
  public Object getVendorResponse() {
    return vendorResponse;
  }

  public void setVendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GetCardStatementResponseVO getCardStatementResponseVO = (GetCardStatementResponseVO) o;
    return Objects.equals(this.currencyCode, getCardStatementResponseVO.currencyCode) &&
        Objects.equals(this.endingBalance, getCardStatementResponseVO.endingBalance) &&
        Objects.equals(this.initialBalance, getCardStatementResponseVO.initialBalance) &&
        Objects.equals(this.message, getCardStatementResponseVO.message) &&
        Objects.equals(this.nucleusCardId, getCardStatementResponseVO.nucleusCardId) &&
        Objects.equals(this.transactions, getCardStatementResponseVO.transactions) &&
        Objects.equals(this.vendorName, getCardStatementResponseVO.vendorName) &&
        Objects.equals(this.vendorResponse, getCardStatementResponseVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currencyCode, endingBalance, initialBalance, message, nucleusCardId, transactions, vendorName, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GetCardStatementResponseVO {\n");
    
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    endingBalance: ").append(toIndentedString(endingBalance)).append("\n");
    sb.append("    initialBalance: ").append(toIndentedString(initialBalance)).append("\n");
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusCardId: ").append(toIndentedString(nucleusCardId)).append("\n");
    sb.append("    transactions: ").append(toIndentedString(transactions)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorResponse: ").append(toIndentedString(vendorResponse)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

