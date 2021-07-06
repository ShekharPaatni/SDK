/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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
import com.hydrogen.nucleus.model.BusinessAddress;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * Business Details Mapping Object
 */
@ApiModel(description = "Business Details Mapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class BusinessDetailsVO {
  @SerializedName("address")
  private List<BusinessAddress> address = null;

  @SerializedName("business_id")
  private UUID businessId = null;

  @SerializedName("dba_name")
  private String dbaName = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("legal_name")
  private String legalName = null;

  @SerializedName("website")
  private String website = null;

  public BusinessDetailsVO address(List<BusinessAddress> address) {
    this.address = address;
    return this;
  }

  public BusinessDetailsVO addAddressItem(BusinessAddress addressItem) {
    if (this.address == null) {
      this.address = new ArrayList<BusinessAddress>();
    }
    this.address.add(addressItem);
    return this;
  }

   /**
   * address
   * @return address
  **/
  @ApiModelProperty(example = "[]", value = "address")
  public List<BusinessAddress> getAddress() {
    return address;
  }

  public void setAddress(List<BusinessAddress> address) {
    this.address = address;
  }

  public BusinessDetailsVO businessId(UUID businessId) {
    this.businessId = businessId;
    return this;
  }

   /**
   * businessId
   * @return businessId
  **/
  @ApiModelProperty(example = "c34794e9-f927-468b-b47e-ea17c3d533c5", value = "businessId")
  public UUID getBusinessId() {
    return businessId;
  }

  public void setBusinessId(UUID businessId) {
    this.businessId = businessId;
  }

  public BusinessDetailsVO dbaName(String dbaName) {
    this.dbaName = dbaName;
    return this;
  }

   /**
   * dbaName
   * @return dbaName
  **/
  @ApiModelProperty(example = "dba name", value = "dbaName")
  public String getDbaName() {
    return dbaName;
  }

  public void setDbaName(String dbaName) {
    this.dbaName = dbaName;
  }

  public BusinessDetailsVO email(String email) {
    this.email = email;
    return this;
  }

   /**
   * email
   * @return email
  **/
  @ApiModelProperty(example = "xyz@gmail.com", value = "email")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public BusinessDetailsVO legalName(String legalName) {
    this.legalName = legalName;
    return this;
  }

   /**
   * legalName
   * @return legalName
  **/
  @ApiModelProperty(example = "business legal name", value = "legalName")
  public String getLegalName() {
    return legalName;
  }

  public void setLegalName(String legalName) {
    this.legalName = legalName;
  }

  public BusinessDetailsVO website(String website) {
    this.website = website;
    return this;
  }

   /**
   * website
   * @return website
  **/
  @ApiModelProperty(example = "business website", value = "website")
  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BusinessDetailsVO businessDetailsVO = (BusinessDetailsVO) o;
    return Objects.equals(this.address, businessDetailsVO.address) &&
        Objects.equals(this.businessId, businessDetailsVO.businessId) &&
        Objects.equals(this.dbaName, businessDetailsVO.dbaName) &&
        Objects.equals(this.email, businessDetailsVO.email) &&
        Objects.equals(this.legalName, businessDetailsVO.legalName) &&
        Objects.equals(this.website, businessDetailsVO.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, businessId, dbaName, email, legalName, website);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BusinessDetailsVO {\n");
    
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    businessId: ").append(toIndentedString(businessId)).append("\n");
    sb.append("    dbaName: ").append(toIndentedString(dbaName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    legalName: ").append(toIndentedString(legalName)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
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
