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

/**
 * AggregationAccountsMap
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class AggregationAccountsMap {
  @SerializedName("aggregation_account_id")
  private UUID aggregationAccountId = null;

  @SerializedName("amount")
  private Integer amount = null;

  public AggregationAccountsMap aggregationAccountId(UUID aggregationAccountId) {
    this.aggregationAccountId = aggregationAccountId;
    return this;
  }

   /**
   * aggregationAccountId
   * @return aggregationAccountId
  **/
  @ApiModelProperty(example = "6e14259a-9a68-4593-9e6d-8fcd0d05cf44", required = true, value = "aggregationAccountId")
  public UUID getAggregationAccountId() {
    return aggregationAccountId;
  }

  public void setAggregationAccountId(UUID aggregationAccountId) {
    this.aggregationAccountId = aggregationAccountId;
  }

  public AggregationAccountsMap amount(Integer amount) {
    this.amount = amount;
    return this;
  }

   /**
   * amount
   * @return amount
  **/
  @ApiModelProperty(example = "1", required = true, value = "amount")
  public Integer getAmount() {
    return amount;
  }

  public void setAmount(Integer amount) {
    this.amount = amount;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AggregationAccountsMap aggregationAccountsMap = (AggregationAccountsMap) o;
    return Objects.equals(this.aggregationAccountId, aggregationAccountsMap.aggregationAccountId) &&
        Objects.equals(this.amount, aggregationAccountsMap.amount);
  }

  @Override
  public int hashCode() {
    return Objects.hash(aggregationAccountId, amount);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AggregationAccountsMap {\n");
    
    sb.append("    aggregationAccountId: ").append(toIndentedString(aggregationAccountId)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
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

