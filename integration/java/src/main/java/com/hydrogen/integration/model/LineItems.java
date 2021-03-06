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

/**
 * LineItems Object
 */
@ApiModel(description = "LineItems Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class LineItems {
  @SerializedName("amount")
  private Double amount = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("line_item_id")
  private String lineItemId = null;

  @SerializedName("quantity")
  private Double quantity = null;

  @SerializedName("rate")
  private Double rate = null;

  @SerializedName("subtotal")
  private Double subtotal = null;

  @SerializedName("tax")
  private Double tax = null;

  public LineItems amount(Double amount) {
    this.amount = amount;
    return this;
  }

   /**
   * amount
   * @return amount
  **/
  @ApiModelProperty(example = "23.9", required = true, value = "amount")
  public Double getAmount() {
    return amount;
  }

  public void setAmount(Double amount) {
    this.amount = amount;
  }

  public LineItems currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currency_code
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", required = true, value = "currency_code")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public LineItems description(String description) {
    this.description = description;
    return this;
  }

   /**
   * description
   * @return description
  **/
  @ApiModelProperty(example = "description", required = true, value = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public LineItems lineItemId(String lineItemId) {
    this.lineItemId = lineItemId;
    return this;
  }

   /**
   * lineItemId
   * @return lineItemId
  **/
  @ApiModelProperty(value = "lineItemId")
  public String getLineItemId() {
    return lineItemId;
  }

  public void setLineItemId(String lineItemId) {
    this.lineItemId = lineItemId;
  }

  public LineItems quantity(Double quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * quantity
   * @return quantity
  **/
  @ApiModelProperty(example = "23.9", required = true, value = "quantity")
  public Double getQuantity() {
    return quantity;
  }

  public void setQuantity(Double quantity) {
    this.quantity = quantity;
  }

  public LineItems rate(Double rate) {
    this.rate = rate;
    return this;
  }

   /**
   * rate
   * @return rate
  **/
  @ApiModelProperty(example = "23.9", required = true, value = "rate")
  public Double getRate() {
    return rate;
  }

  public void setRate(Double rate) {
    this.rate = rate;
  }

  public LineItems subtotal(Double subtotal) {
    this.subtotal = subtotal;
    return this;
  }

   /**
   * subtotal
   * @return subtotal
  **/
  @ApiModelProperty(example = "2345.0", value = "subtotal")
  public Double getSubtotal() {
    return subtotal;
  }

  public void setSubtotal(Double subtotal) {
    this.subtotal = subtotal;
  }

  public LineItems tax(Double tax) {
    this.tax = tax;
    return this;
  }

   /**
   * tax
   * @return tax
  **/
  @ApiModelProperty(example = "2345.0", value = "tax")
  public Double getTax() {
    return tax;
  }

  public void setTax(Double tax) {
    this.tax = tax;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LineItems lineItems = (LineItems) o;
    return Objects.equals(this.amount, lineItems.amount) &&
        Objects.equals(this.currencyCode, lineItems.currencyCode) &&
        Objects.equals(this.description, lineItems.description) &&
        Objects.equals(this.lineItemId, lineItems.lineItemId) &&
        Objects.equals(this.quantity, lineItems.quantity) &&
        Objects.equals(this.rate, lineItems.rate) &&
        Objects.equals(this.subtotal, lineItems.subtotal) &&
        Objects.equals(this.tax, lineItems.tax);
  }

  @Override
  public int hashCode() {
    return Objects.hash(amount, currencyCode, description, lineItemId, quantity, rate, subtotal, tax);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LineItems {\n");
    
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    lineItemId: ").append(toIndentedString(lineItemId)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    rate: ").append(toIndentedString(rate)).append("\n");
    sb.append("    subtotal: ").append(toIndentedString(subtotal)).append("\n");
    sb.append("    tax: ").append(toIndentedString(tax)).append("\n");
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

