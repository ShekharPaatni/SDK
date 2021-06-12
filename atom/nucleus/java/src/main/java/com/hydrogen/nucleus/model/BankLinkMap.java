/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
 * BankLinkMap
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class BankLinkMap {
  @SerializedName("bank_link_id")
  private UUID bankLinkId = null;

  @SerializedName("weight")
  private Float weight = null;

  public BankLinkMap bankLinkId(UUID bankLinkId) {
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

  public BankLinkMap weight(Float weight) {
    this.weight = weight;
    return this;
  }

   /**
   * weight
   * @return weight
  **/
  @ApiModelProperty(example = "1.0", required = true, value = "weight")
  public Float getWeight() {
    return weight;
  }

  public void setWeight(Float weight) {
    this.weight = weight;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BankLinkMap bankLinkMap = (BankLinkMap) o;
    return Objects.equals(this.bankLinkId, bankLinkMap.bankLinkId) &&
        Objects.equals(this.weight, bankLinkMap.weight);
  }

  @Override
  public int hashCode() {
    return Objects.hash(bankLinkId, weight);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BankLinkMap {\n");
    
    sb.append("    bankLinkId: ").append(toIndentedString(bankLinkId)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
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

