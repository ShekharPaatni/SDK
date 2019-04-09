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
import java.util.ArrayList;
import java.util.List;

/**
 * RiskAllocationResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class RiskAllocationResponse {
  @SerializedName("securities")
  private List<String> securities = new ArrayList<String>();

  @SerializedName("weights")
  private List<BigDecimal> weights = new ArrayList<BigDecimal>();

  @SerializedName("ret")
  private BigDecimal ret = null;

  @SerializedName("risk")
  private BigDecimal risk = null;

  public RiskAllocationResponse securities(List<String> securities) {
    this.securities = securities;
    return this;
  }

  public RiskAllocationResponse addSecuritiesItem(String securitiesItem) {
    this.securities.add(securitiesItem);
    return this;
  }

   /**
   * If allocation_method &#x3D; create, the tickers of the securities that should be included in the allocation created.
   * @return securities
  **/
  @ApiModelProperty(required = true, value = "If allocation_method = create, the tickers of the securities that should be included in the allocation created.")
  public List<String> getSecurities() {
    return securities;
  }

  public void setSecurities(List<String> securities) {
    this.securities = securities;
  }

  public RiskAllocationResponse weights(List<BigDecimal> weights) {
    this.weights = weights;
    return this;
  }

  public RiskAllocationResponse addWeightsItem(BigDecimal weightsItem) {
    this.weights.add(weightsItem);
    return this;
  }

   /**
   * If allocation_method &#x3D; create, the weights of each security that should be included in the allocation created.
   * @return weights
  **/
  @ApiModelProperty(required = true, value = "If allocation_method = create, the weights of each security that should be included in the allocation created.")
  public List<BigDecimal> getWeights() {
    return weights;
  }

  public void setWeights(List<BigDecimal> weights) {
    this.weights = weights;
  }

  public RiskAllocationResponse ret(BigDecimal ret) {
    this.ret = ret;
    return this;
  }

   /**
   * The annualized return of the portfolio.
   * @return ret
  **/
  @ApiModelProperty(required = true, value = "The annualized return of the portfolio.")
  public BigDecimal getRet() {
    return ret;
  }

  public void setRet(BigDecimal ret) {
    this.ret = ret;
  }

  public RiskAllocationResponse risk(BigDecimal risk) {
    this.risk = risk;
    return this;
  }

   /**
   * The annualized standard deviation of the portfolio.
   * minimum: 0
   * @return risk
  **/
  @ApiModelProperty(required = true, value = "The annualized standard deviation of the portfolio.")
  public BigDecimal getRisk() {
    return risk;
  }

  public void setRisk(BigDecimal risk) {
    this.risk = risk;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RiskAllocationResponse riskAllocationResponse = (RiskAllocationResponse) o;
    return Objects.equals(this.securities, riskAllocationResponse.securities) &&
        Objects.equals(this.weights, riskAllocationResponse.weights) &&
        Objects.equals(this.ret, riskAllocationResponse.ret) &&
        Objects.equals(this.risk, riskAllocationResponse.risk);
  }

  @Override
  public int hashCode() {
    return Objects.hash(securities, weights, ret, risk);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RiskAllocationResponse {\n");
    
    sb.append("    securities: ").append(toIndentedString(securities)).append("\n");
    sb.append("    weights: ").append(toIndentedString(weights)).append("\n");
    sb.append("    ret: ").append(toIndentedString(ret)).append("\n");
    sb.append("    risk: ").append(toIndentedString(risk)).append("\n");
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

