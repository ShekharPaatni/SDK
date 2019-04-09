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
 * MortgageCalculatorPeriodicPayment
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class MortgageCalculatorPeriodicPayment {
  @SerializedName("home_price")
  private BigDecimal homePrice = null;

  @SerializedName("down_payment")
  private BigDecimal downPayment = null;

  @SerializedName("interest_rate")
  private BigDecimal interestRate = null;

  @SerializedName("mortgage_term")
  private Integer mortgageTerm = null;

  public MortgageCalculatorPeriodicPayment homePrice(BigDecimal homePrice) {
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

  public MortgageCalculatorPeriodicPayment downPayment(BigDecimal downPayment) {
    this.downPayment = downPayment;
    return this;
  }

   /**
   * The mortgage down payment
   * minimum: 0
   * @return downPayment
  **/
  @ApiModelProperty(required = true, value = "The mortgage down payment")
  public BigDecimal getDownPayment() {
    return downPayment;
  }

  public void setDownPayment(BigDecimal downPayment) {
    this.downPayment = downPayment;
  }

  public MortgageCalculatorPeriodicPayment interestRate(BigDecimal interestRate) {
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

  public MortgageCalculatorPeriodicPayment mortgageTerm(Integer mortgageTerm) {
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
    MortgageCalculatorPeriodicPayment mortgageCalculatorPeriodicPayment = (MortgageCalculatorPeriodicPayment) o;
    return Objects.equals(this.homePrice, mortgageCalculatorPeriodicPayment.homePrice) &&
        Objects.equals(this.downPayment, mortgageCalculatorPeriodicPayment.downPayment) &&
        Objects.equals(this.interestRate, mortgageCalculatorPeriodicPayment.interestRate) &&
        Objects.equals(this.mortgageTerm, mortgageCalculatorPeriodicPayment.mortgageTerm);
  }

  @Override
  public int hashCode() {
    return Objects.hash(homePrice, downPayment, interestRate, mortgageTerm);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MortgageCalculatorPeriodicPayment {\n");
    
    sb.append("    homePrice: ").append(toIndentedString(homePrice)).append("\n");
    sb.append("    downPayment: ").append(toIndentedString(downPayment)).append("\n");
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

