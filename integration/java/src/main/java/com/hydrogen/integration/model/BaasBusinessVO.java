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
import com.hydrogen.integration.model.BusinessVendorRequestDataVO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BaasBusinessVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class BaasBusinessVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_business_id")
  private UUID nucleusBusinessId = null;

  @SerializedName("nucleus_document_id")
  private List<UUID> nucleusDocumentId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request_data")
  private BusinessVendorRequestDataVO vendorRequestData = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public BaasBusinessVO message(String message) {
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

  public BaasBusinessVO nucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
    return this;
  }

   /**
   * Get nucleusBusinessId
   * @return nucleusBusinessId
  **/
  @ApiModelProperty(value = "")
  public UUID getNucleusBusinessId() {
    return nucleusBusinessId;
  }

  public void setNucleusBusinessId(UUID nucleusBusinessId) {
    this.nucleusBusinessId = nucleusBusinessId;
  }

  public BaasBusinessVO nucleusDocumentId(List<UUID> nucleusDocumentId) {
    this.nucleusDocumentId = nucleusDocumentId;
    return this;
  }

  public BaasBusinessVO addNucleusDocumentIdItem(UUID nucleusDocumentIdItem) {
    if (this.nucleusDocumentId == null) {
      this.nucleusDocumentId = new ArrayList<UUID>();
    }
    this.nucleusDocumentId.add(nucleusDocumentIdItem);
    return this;
  }

   /**
   * Get nucleusDocumentId
   * @return nucleusDocumentId
  **/
  @ApiModelProperty(value = "")
  public List<UUID> getNucleusDocumentId() {
    return nucleusDocumentId;
  }

  public void setNucleusDocumentId(List<UUID> nucleusDocumentId) {
    this.nucleusDocumentId = nucleusDocumentId;
  }

  public BaasBusinessVO status(String status) {
    this.status = status;
    return this;
  }

   /**
   * Get status
   * @return status
  **/
  @ApiModelProperty(value = "")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public BaasBusinessVO vendorName(String vendorName) {
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

  public BaasBusinessVO vendorRequestData(BusinessVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
    return this;
  }

   /**
   * Get vendorRequestData
   * @return vendorRequestData
  **/
  @ApiModelProperty(value = "")
  public BusinessVendorRequestDataVO getVendorRequestData() {
    return vendorRequestData;
  }

  public void setVendorRequestData(BusinessVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
  }

  public BaasBusinessVO vendorResponse(Object vendorResponse) {
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
    BaasBusinessVO baasBusinessVO = (BaasBusinessVO) o;
    return Objects.equals(this.message, baasBusinessVO.message) &&
        Objects.equals(this.nucleusBusinessId, baasBusinessVO.nucleusBusinessId) &&
        Objects.equals(this.nucleusDocumentId, baasBusinessVO.nucleusDocumentId) &&
        Objects.equals(this.status, baasBusinessVO.status) &&
        Objects.equals(this.vendorName, baasBusinessVO.vendorName) &&
        Objects.equals(this.vendorRequestData, baasBusinessVO.vendorRequestData) &&
        Objects.equals(this.vendorResponse, baasBusinessVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusBusinessId, nucleusDocumentId, status, vendorName, vendorRequestData, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaasBusinessVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusBusinessId: ").append(toIndentedString(nucleusBusinessId)).append("\n");
    sb.append("    nucleusDocumentId: ").append(toIndentedString(nucleusDocumentId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("    vendorName: ").append(toIndentedString(vendorName)).append("\n");
    sb.append("    vendorRequestData: ").append(toIndentedString(vendorRequestData)).append("\n");
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

