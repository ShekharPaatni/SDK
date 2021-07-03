/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

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
import java.util.UUID;

/**
 * OverflowBankLinkMap
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class OverflowBankLinkMap {
  @SerializedName("amount")
  private Double amount = null;

  @SerializedName("bank_link_id")
  private UUID bankLinkId = null;

  @SerializedName("max")
  private Double max = null;

  public OverflowBankLinkMap amount(Double amount) {
    this.amount = amount;
    return this;
  }

   /**
   * amount
   * @return amount
  **/
  @ApiModelProperty(example = "100.5", required = true, value = "amount")
  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public OverflowBankLinkMap bankLinkId(UUID bankLinkId) {
    this.bankLinkId = bankLinkId;
    return this;
  }

   /**
   * bankLinkId
   * @return bankLinkId
  **/
  @ApiModelProperty(example = "6e14259a-9a68-4593-9e6d-8fcd0d05cf44", required = true, value = "bankLinkId")
  public UUID getBankLinkId() {
    return bankLinkId;
  }

  public void setBankLinkId(UUID bankLinkId) {
    this.bankLinkId = bankLinkId;
  }

  public OverflowBankLinkMap max(Double max) {
    this.max = max;
    return this;
  }

   /**
   * max
   * @return max
  **/
  @ApiModelProperty(example = "100.0", value = "max")
  public Double getMax() {
    return max;
  }

  public void setMax(Double max) {
    this.max = max;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OverflowBankLinkMap overflowBankLinkMap = (OverflowBankLinkMap) o;
    return Objects.equals(this.amount, overflowBankLinkMap.amount) &&
        Objects.equals(this.bankLinkId, overflowBankLinkMap.bankLinkId) &&
        Objects.equals(this.max, overflowBankLinkMap.max);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, bankLinkId, max);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OverflowBankLinkMap {\n");
    
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    bankLinkId: ").append(toIndentedString(bankLinkId)).append("\n");
    sb.append("    max: ").append(toIndentedString(max)).append("\n");
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

