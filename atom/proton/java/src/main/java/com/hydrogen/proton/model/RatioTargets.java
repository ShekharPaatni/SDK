/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.proton.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

/**
 * RatioTargets
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-28T09:20:08.129Z")
public class RatioTargets {
  @SerializedName("liquidity_ratio_liabilities")
  private Float liquidityRatioLiabilities = 0.1f;

  @SerializedName("current_ratio")
  private Float currentRatio = 0.5f;

  @SerializedName("asset_allocation_ratio")
  private Float assetAllocationRatio = 1.5f;

  @SerializedName("savings_ratio_net")
  private Float savingsRatioNet = 0.1f;

  @SerializedName("savings_ratio_gross")
  private Float savingsRatioGross = 0.1f;

  @SerializedName("liquidity_ratio_expenses")
  private Float liquidityRatioExpenses = 2.5f;

  public RatioTargets liquidityRatioLiabilities(Float liquidityRatioLiabilities) {
    this.liquidityRatioLiabilities = liquidityRatioLiabilities;
    return this;
  }

   /**
   * Get liquidityRatioLiabilities
   * minimum: 0
   * @return liquidityRatioLiabilities
  **/
  @ApiModelProperty(value = "")
  public Float getLiquidityRatioLiabilities() {
    return liquidityRatioLiabilities;
  }

  public void setLiquidityRatioLiabilities(Float liquidityRatioLiabilities) {
    this.liquidityRatioLiabilities = liquidityRatioLiabilities;
  }

  public RatioTargets currentRatio(Float currentRatio) {
    this.currentRatio = currentRatio;
    return this;
  }

   /**
   * Get currentRatio
   * minimum: 0
   * @return currentRatio
  **/
  @ApiModelProperty(value = "")
  public Float getCurrentRatio() {
    return currentRatio;
  }

  public void setCurrentRatio(Float currentRatio) {
    this.currentRatio = currentRatio;
  }

  public RatioTargets assetAllocationRatio(Float assetAllocationRatio) {
    this.assetAllocationRatio = assetAllocationRatio;
    return this;
  }

   /**
   * Get assetAllocationRatio
   * minimum: 0
   * @return assetAllocationRatio
  **/
  @ApiModelProperty(value = "")
  public Float getAssetAllocationRatio() {
    return assetAllocationRatio;
  }

  public void setAssetAllocationRatio(Float assetAllocationRatio) {
    this.assetAllocationRatio = assetAllocationRatio;
  }

  public RatioTargets savingsRatioNet(Float savingsRatioNet) {
    this.savingsRatioNet = savingsRatioNet;
    return this;
  }

   /**
   * Get savingsRatioNet
   * minimum: 0
   * @return savingsRatioNet
  **/
  @ApiModelProperty(value = "")
  public Float getSavingsRatioNet() {
    return savingsRatioNet;
  }

  public void setSavingsRatioNet(Float savingsRatioNet) {
    this.savingsRatioNet = savingsRatioNet;
  }

  public RatioTargets savingsRatioGross(Float savingsRatioGross) {
    this.savingsRatioGross = savingsRatioGross;
    return this;
  }

   /**
   * Get savingsRatioGross
   * minimum: 0
   * @return savingsRatioGross
  **/
  @ApiModelProperty(value = "")
  public Float getSavingsRatioGross() {
    return savingsRatioGross;
  }

  public void setSavingsRatioGross(Float savingsRatioGross) {
    this.savingsRatioGross = savingsRatioGross;
  }

  public RatioTargets liquidityRatioExpenses(Float liquidityRatioExpenses) {
    this.liquidityRatioExpenses = liquidityRatioExpenses;
    return this;
  }

   /**
   * Get liquidityRatioExpenses
   * minimum: 0
   * @return liquidityRatioExpenses
  **/
  @ApiModelProperty(value = "")
  public Float getLiquidityRatioExpenses() {
    return liquidityRatioExpenses;
  }

  public void setLiquidityRatioExpenses(Float liquidityRatioExpenses) {
    this.liquidityRatioExpenses = liquidityRatioExpenses;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    RatioTargets ratioTargets = (RatioTargets) o;
    return Objects.equals(this.liquidityRatioLiabilities, ratioTargets.liquidityRatioLiabilities) &&
        Objects.equals(this.currentRatio, ratioTargets.currentRatio) &&
        Objects.equals(this.assetAllocationRatio, ratioTargets.assetAllocationRatio) &&
        Objects.equals(this.savingsRatioNet, ratioTargets.savingsRatioNet) &&
        Objects.equals(this.savingsRatioGross, ratioTargets.savingsRatioGross) &&
        Objects.equals(this.liquidityRatioExpenses, ratioTargets.liquidityRatioExpenses);
  }

  @Override
  public int hashCode() {
    return Objects.hash(liquidityRatioLiabilities, currentRatio, assetAllocationRatio, savingsRatioNet, savingsRatioGross, liquidityRatioExpenses);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class RatioTargets {\n");
    
    sb.append("    liquidityRatioLiabilities: ").append(toIndentedString(liquidityRatioLiabilities)).append("\n");
    sb.append("    currentRatio: ").append(toIndentedString(currentRatio)).append("\n");
    sb.append("    assetAllocationRatio: ").append(toIndentedString(assetAllocationRatio)).append("\n");
    sb.append("    savingsRatioNet: ").append(toIndentedString(savingsRatioNet)).append("\n");
    sb.append("    savingsRatioGross: ").append(toIndentedString(savingsRatioGross)).append("\n");
    sb.append("    liquidityRatioExpenses: ").append(toIndentedString(liquidityRatioExpenses)).append("\n");
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

