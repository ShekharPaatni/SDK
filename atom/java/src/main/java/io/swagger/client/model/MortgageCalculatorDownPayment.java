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
 * MortgageCalculatorDownPayment
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class MortgageCalculatorDownPayment {
  @SerializedName("home_price")
  private BigDecimal homePrice = null;

  @SerializedName("periodic_payment")
  private BigDecimal periodicPayment = null;

  @SerializedName("interest_rate")
  private BigDecimal interestRate = null;

  @SerializedName("mortgage_term")
  private Integer mortgageTerm = null;

  public MortgageCalculatorDownPayment homePrice(BigDecimal homePrice) {
    this.homePrice = homePrice;
    return this;
  }

   /**
   * The home price
   * minimum: 0
   * @return homePrice
  **/
  @ApiModelProperty(required = true, value = "The home price")
  public BigDecimal getHomePrice() {
    return homePrice;
  }

  public void setHomePrice(BigDecimal homePrice) {
    this.homePrice = homePrice;
  }

  public MortgageCalculatorDownPayment periodicPayment(BigDecimal periodicPayment) {
    this.periodicPayment = periodicPayment;
    return this;
  }

   /**
   * The monthly mortgage payment
   * minimum: 0
   * @return periodicPayment
  **/
  @ApiModelProperty(required = true, value = "The monthly mortgage payment")
  public BigDecimal getPeriodicPayment() {
    return periodicPayment;
  }

  public void setPeriodicPayment(BigDecimal periodicPayment) {
    this.periodicPayment = periodicPayment;
  }

  public MortgageCalculatorDownPayment interestRate(BigDecimal interestRate) {
    this.interestRate = interestRate;
    return this;
  }

   /**
   * The annualized interest rate
   * minimum: 0
   * maximum: 1
   * @return interestRate
  **/
  @ApiModelProperty(value = "The annualized interest rate")
  public BigDecimal getInterestRate() {
    return interestRate;
  }

  public void setInterestRate(BigDecimal interestRate) {
    this.interestRate = interestRate;
  }

  public MortgageCalculatorDownPayment mortgageTerm(Integer mortgageTerm) {
    this.mortgageTerm = mortgageTerm;
    return this;
  }

   /**
   * The mortgage term, in months
   * minimum: 0
   * maximum: 600
   * @return mortgageTerm
  **/
  @ApiModelProperty(value = "The mortgage term, in months")
  public Integer getMortgageTerm() {
    return mortgageTerm;
  }

  public void setMortgageTerm(Integer mortgageTerm) {
    this.mortgageTerm = mortgageTerm;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MortgageCalculatorDownPayment mortgageCalculatorDownPayment = (MortgageCalculatorDownPayment) o;
    return Objects.equals(this.homePrice, mortgageCalculatorDownPayment.homePrice) &&
        Objects.equals(this.periodicPayment, mortgageCalculatorDownPayment.periodicPayment) &&
        Objects.equals(this.interestRate, mortgageCalculatorDownPayment.interestRate) &&
        Objects.equals(this.mortgageTerm, mortgageCalculatorDownPayment.mortgageTerm);
  }

  @Override
  public int hashCode() {
    return Objects.hash(homePrice, periodicPayment, interestRate, mortgageTerm);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MortgageCalculatorDownPayment {\n");
    
    sb.append("    homePrice: ").append(toIndentedString(homePrice)).append("\n");
    sb.append("    periodicPayment: ").append(toIndentedString(periodicPayment)).append("\n");
    sb.append("    interestRate: ").append(toIndentedString(interestRate)).append("\n");
    sb.append("    mortgageTerm: ").append(toIndentedString(mortgageTerm)).append("\n");
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

