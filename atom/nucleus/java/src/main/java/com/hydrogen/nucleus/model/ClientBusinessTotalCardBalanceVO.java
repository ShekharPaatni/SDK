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

/**
 * Client/Business Total CardBalance Mapping Object
 */
@ApiModel(description = "Client/Business Total CardBalance Mapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class ClientBusinessTotalCardBalanceVO {
  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("total_balance")
  private Double totalBalance = null;

  @SerializedName("total_balance_available")
  private Double totalBalanceAvailable = null;

  public ClientBusinessTotalCardBalanceVO currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(example = "AED", value = "currencyCode")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public ClientBusinessTotalCardBalanceVO totalBalance(Double totalBalance) {
    this.totalBalance = totalBalance;
    return this;
  }

   /**
   * totalBalance
   * @return totalBalance
  **/
  @ApiModelProperty(example = "20000.0", value = "totalBalance")
  public Double getTotalBalance() {
    return totalBalance;
  }

  public void setTotalBalance(Double totalBalance) {
    this.totalBalance = totalBalance;
  }

  public ClientBusinessTotalCardBalanceVO totalBalanceAvailable(Double totalBalanceAvailable) {
    this.totalBalanceAvailable = totalBalanceAvailable;
    return this;
  }

   /**
   * totalBalanceAvailable
   * @return totalBalanceAvailable
  **/
  @ApiModelProperty(example = "20000.0", value = "totalBalanceAvailable")
  public Double getTotalBalanceAvailable() {
    return totalBalanceAvailable;
  }

  public void setTotalBalanceAvailable(Double totalBalanceAvailable) {
    this.totalBalanceAvailable = totalBalanceAvailable;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientBusinessTotalCardBalanceVO clientBusinessTotalCardBalanceVO = (ClientBusinessTotalCardBalanceVO) o;
    return Objects.equals(this.currencyCode, clientBusinessTotalCardBalanceVO.currencyCode) &&
        Objects.equals(this.totalBalance, clientBusinessTotalCardBalanceVO.totalBalance) &&
        Objects.equals(this.totalBalanceAvailable, clientBusinessTotalCardBalanceVO.totalBalanceAvailable);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currencyCode, totalBalance, totalBalanceAvailable);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientBusinessTotalCardBalanceVO {\n");
    
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    totalBalance: ").append(toIndentedString(totalBalance)).append("\n");
    sb.append("    totalBalanceAvailable: ").append(toIndentedString(totalBalanceAvailable)).append("\n");
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

