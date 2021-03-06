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
import com.hydrogen.integration.model.ClientVendorRequestDataVO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BaasClientVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class BaasClientVO {
  @SerializedName("message")
  private String message = null;

  @SerializedName("nucleus_client_id")
  private UUID nucleusClientId = null;

  @SerializedName("nucleus_document_id")
  private List<UUID> nucleusDocumentId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("vendor_name")
  private String vendorName = null;

  @SerializedName("vendor_request_data")
  private ClientVendorRequestDataVO vendorRequestData = null;

  @SerializedName("vendor_response")
  private Object vendorResponse = null;

  public BaasClientVO message(String message) {
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

  public BaasClientVO nucleusClientId(UUID nucleusClientId) {
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

  public BaasClientVO nucleusDocumentId(List<UUID> nucleusDocumentId) {
    this.nucleusDocumentId = nucleusDocumentId;
    return this;
  }

  public BaasClientVO addNucleusDocumentIdItem(UUID nucleusDocumentIdItem) {
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

  public BaasClientVO status(String status) {
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

  public BaasClientVO vendorName(String vendorName) {
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

  public BaasClientVO vendorRequestData(ClientVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
    return this;
  }

   /**
   * Get vendorRequestData
   * @return vendorRequestData
  **/
  @ApiModelProperty(value = "")
  public ClientVendorRequestDataVO getVendorRequestData() {
    return vendorRequestData;
  }

  public void setVendorRequestData(ClientVendorRequestDataVO vendorRequestData) {
    this.vendorRequestData = vendorRequestData;
  }

  public BaasClientVO vendorResponse(Object vendorResponse) {
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
    BaasClientVO baasClientVO = (BaasClientVO) o;
    return Objects.equals(this.message, baasClientVO.message) &&
        Objects.equals(this.nucleusClientId, baasClientVO.nucleusClientId) &&
        Objects.equals(this.nucleusDocumentId, baasClientVO.nucleusDocumentId) &&
        Objects.equals(this.status, baasClientVO.status) &&
        Objects.equals(this.vendorName, baasClientVO.vendorName) &&
        Objects.equals(this.vendorRequestData, baasClientVO.vendorRequestData) &&
        Objects.equals(this.vendorResponse, baasClientVO.vendorResponse);
  }

  @Override
  public int hashCode() {
    return Objects.hash(message, nucleusClientId, nucleusDocumentId, status, vendorName, vendorRequestData, vendorResponse);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BaasClientVO {\n");
    
    sb.append("    message: ").append(toIndentedString(message)).append("\n");
    sb.append("    nucleusClientId: ").append(toIndentedString(nucleusClientId)).append("\n");
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

