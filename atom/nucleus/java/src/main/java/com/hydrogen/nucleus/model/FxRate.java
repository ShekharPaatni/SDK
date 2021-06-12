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
import org.threeten.bp.OffsetDateTime;

/**
 * FxRate Object
 */
@ApiModel(description = "FxRate Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class FxRate {
  @SerializedName("currency_code_from")
  private String currencyCodeFrom = null;

  @SerializedName("currency_code_to")
  private String currencyCodeTo = null;

  @SerializedName("date")
  private OffsetDateTime date = null;

  @SerializedName("exchange_rate")
  private Double exchangeRate = null;

  public FxRate currencyCodeFrom(String currencyCodeFrom) {
    this.currencyCodeFrom = currencyCodeFrom;
    return this;
  }

   /**
   * currency_code_from
   * @return currencyCodeFrom
  **/
  @ApiModelProperty(example = "USD", required = true, value = "currency_code_from")
  public String getCurrencyCodeFrom() {
    return currencyCodeFrom;
  }

  public void setCurrencyCodeFrom(String currencyCodeFrom) {
    this.currencyCodeFrom = currencyCodeFrom;
  }

  public FxRate currencyCodeTo(String currencyCodeTo) {
    this.currencyCodeTo = currencyCodeTo;
    return this;
  }

   /**
   * currency_code_to
   * @return currencyCodeTo
  **/
  @ApiModelProperty(example = "USD", required = true, value = "currency_code_to")
  public String getCurrencyCodeTo() {
    return currencyCodeTo;
  }

  public void setCurrencyCodeTo(String currencyCodeTo) {
    this.currencyCodeTo = currencyCodeTo;
  }

  public FxRate date(OffsetDateTime date) {
    this.date = date;
    return this;
  }

   /**
   * date
   * @return date
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", required = true, value = "date")
  public OffsetDateTime getDate() {
    return date;
  }

  public void setDate(OffsetDateTime date) {
    this.date = date;
  }

  public FxRate exchangeRate(Double exchangeRate) {
    this.exchangeRate = exchangeRate;
    return this;
  }

   /**
   * exchangeRate
   * @return exchangeRate
  **/
  @ApiModelProperty(example = "12.0", required = true, value = "exchangeRate")
  public Double getExchangeRate() {
    return exchangeRate;
  }

  public void setExchangeRate(Double exchangeRate) {
    this.exchangeRate = exchangeRate;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FxRate fxRate = (FxRate) o;
    return Objects.equals(this.currencyCodeFrom, fxRate.currencyCodeFrom) &&
        Objects.equals(this.currencyCodeTo, fxRate.currencyCodeTo) &&
        Objects.equals(this.date, fxRate.date) &&
        Objects.equals(this.exchangeRate, fxRate.exchangeRate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currencyCodeFrom, currencyCodeTo, date, exchangeRate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FxRate {\n");
    
    sb.append("    currencyCodeFrom: ").append(toIndentedString(currencyCodeFrom)).append("\n");
    sb.append("    currencyCodeTo: ").append(toIndentedString(currencyCodeTo)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    exchangeRate: ").append(toIndentedString(exchangeRate)).append("\n");
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

