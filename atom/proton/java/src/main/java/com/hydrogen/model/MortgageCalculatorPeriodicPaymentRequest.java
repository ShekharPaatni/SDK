/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.7.18
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

/**
 * MortgageCalculatorPeriodicPaymentRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-05-29T05:03:35.524Z")
public class MortgageCalculatorPeriodicPaymentRequest {
  @SerializedName("down_payment")
  private Float downPayment = null;

  @SerializedName("mortgage_term")
  private Integer mortgageTerm = 360;

  @SerializedName("home_price")
  private Float homePrice = null;

  @SerializedName("interest_rate")
  private Float interestRate = 0.04f;

  public MortgageCalculatorPeriodicPaymentRequest downPayment(Float downPayment) {
    this.downPayment = downPayment;
    return this;
  }

   /**
   * Get downPayment
   * minimum: 0
   * @return downPayment
  **/
  @ApiModelProperty(required = true, value = "")
  public Float getDownPayment() {
    return downPayment;
  }

  public void setDownPayment(Float downPayment) {
    this.downPayment = downPayment;
  }

  public MortgageCalculatorPeriodicPaymentRequest mortgageTerm(Integer mortgageTerm) {
    this.mortgageTerm = mortgageTerm;
    return this;
  }

   /**
   * Get mortgageTerm
   * minimum: 0
   * maximum: 600
   * @return mortgageTerm
  **/
  @ApiModelProperty(value = "")
  public Integer getMortgageTerm() {
    return mortgageTerm;
  }

  public void setMortgageTerm(Integer mortgageTerm) {
    this.mortgageTerm = mortgageTerm;
  }

  public MortgageCalculatorPeriodicPaymentRequest homePrice(Float homePrice) {
    this.homePrice = homePrice;
    return this;
  }

   /**
   * Get homePrice
   * minimum: 0
   * @return homePrice
  **/
  @ApiModelProperty(required = true, value = "")
  public Float getHomePrice() {
    return homePrice;
  }

  public void setHomePrice(Float homePrice) {
    this.homePrice = homePrice;
  }

  public MortgageCalculatorPeriodicPaymentRequest interestRate(Float interestRate) {
    this.interestRate = interestRate;
    return this;
  }

   /**
   * Get interestRate
   * minimum: -1
   * @return interestRate
  **/
  @ApiModelProperty(value = "")
  public Float getInterestRate() {
    return interestRate;
  }

  public void setInterestRate(Float interestRate) {
    this.interestRate = interestRate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    MortgageCalculatorPeriodicPaymentRequest mortgageCalculatorPeriodicPaymentRequest = (MortgageCalculatorPeriodicPaymentRequest) o;
    return Objects.equals(this.downPayment, mortgageCalculatorPeriodicPaymentRequest.downPayment) &&
        Objects.equals(this.mortgageTerm, mortgageCalculatorPeriodicPaymentRequest.mortgageTerm) &&
        Objects.equals(this.homePrice, mortgageCalculatorPeriodicPaymentRequest.homePrice) &&
        Objects.equals(this.interestRate, mortgageCalculatorPeriodicPaymentRequest.interestRate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(downPayment, mortgageTerm, homePrice, interestRate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class MortgageCalculatorPeriodicPaymentRequest {\n");
    
    sb.append("    downPayment: ").append(toIndentedString(downPayment)).append("\n");
    sb.append("    mortgageTerm: ").append(toIndentedString(mortgageTerm)).append("\n");
    sb.append("    homePrice: ").append(toIndentedString(homePrice)).append("\n");
    sb.append("    interestRate: ").append(toIndentedString(interestRate)).append("\n");
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

