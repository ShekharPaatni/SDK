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
import java.util.UUID;

/**
 * CardAutoReloadResponseVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class CardAutoReloadResponseVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("reload_amount")
  private Double reloadAmount = null;

  @SerializedName("threshold_amount")
  private Double thresholdAmount = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public CardAutoReloadResponseVO message(String message) {
    this.message = message;
    return this;
  }

   /**
   * Get message
   * @return message
  **/
  @ApiModelProperty(value = "")
  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }

  public CardAutoReloadResponseVO nucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
    return this;
  }

   /**
   * Get nucleusClientId
   * @return nucleusClientId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusClientId() {
    return nucleusClientId;
  }

  public void setNucleusClientId(UUID nucleusClientId) {
    this.nucleusClientId = nucleusClientId;
  }

  public CardAutoReloadResponseVO reloadAmount(Double reloadAmount) {
    this.reloadAmount = reloadAmount;
    return this;
  }

   /**
   * Get reloadAmount
   * @return reloadAmount
  **/
  @ApiModelProperty(value = "")
  public Double getReloadAmount() {
    return reloadAmount;
  }

  public void setReloadAmount(Double reloadAmount) {
    this.reloadAmount = reloadAmount;
  }

  public CardAutoReloadResponseVO thresholdAmount(Double thresholdAmount) {
    this.thresholdAmount = thresholdAmount;
    return this;
  }

   /**
   * Get thresholdAmount
   * @return thresholdAmount
  **/
  @ApiModelProperty(value = "")
  public Double getThresholdAmount() {
    return thresholdAmount;
  }

  public void setThresholdAmount(Double thresholdAmount) {
    this.thresholdAmount = thresholdAmount;
  }

  public CardAutoReloadResponseVO vendorName(String vendorName) {
    this.vendorName = vendorName;
    return this;
  }

   /**
   * Get vendorName
   * @return vendorName
  **/
  @ApiModelProperty(value = "")
  public String getVendorName() {
    return vendorName;
  }

  public void setVendorName(String vendorName) {
    this.vendorName = vendorName;
  }

  public CardAutoReloadResponseVO vendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
    return this;
  }

   /**
   * Get vendorResponse
   * @return vendorResponse
  **/
  @ApiModelProperty(value = "")
  public Object getVendorResponse() {
    return vendorResponse;
  }

  public void setVendorResponse(Object vendorResponse) {
    this.vendorResponse = vendorResponse;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CardAutoReloadResponseVO cardAutoReloadResponseVO = (CardAutoReloadResponseVO) o;
    return Objects.equals(this.message, cardAutoReloadResponseVO.message) &&
        Objects.equals(this.nucleusClientId, cardAutoReloadResponseVO.nucleusClientId) &&
        Objects.equals(this.reloadAmount, cardAutoReloadResponseVO.reloadAmount) &&
        Objects.equals(this.thresholdAmount, cardAutoReloadResponseVO.thresholdAmount) &&
        Objects.equals(this.vendorName, cardAutoReloadResponseVO.vendorName) &&
        Objects.equals(this.vendorResponse, cardAutoReloadResponseVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusClientId, reloadAmount, thresholdAmount, vendorName, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CardAutoReloadResponseVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
    sb.append("    reloadAmount: ").append(toIndentedString(reloadAmount)).append("\n");
    sb.append("    thresholdAmount: ").append(toIndentedString(thresholdAmount)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorResponse: ").append(toIndentedString(vendorResponse)).append("\n");
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

