/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.2.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.threeten.bp.LocalDate;

/**
 * BusinessVendorRequestDataVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-01-12T07:38:36.822Z")
public class BusinessVendorRequestDataVO {
  @SerializedName("business_addresses")
  private List<BusinessAddress> businessAddresses = null;

  @SerializedName("dba_name")
  private String dbaName = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("identification_number")
  private String identificationNumber = null;

  @SerializedName("identification_number_type")
  private String identificationNumberType = null;

  @SerializedName("incorporation_date")
  private LocalDate incorporationDate = null;

  @SerializedName("incorporation_state")
  private String incorporationState = null;

  @SerializedName("is_public")
  private Boolean isPublic = null;

  @SerializedName("legal_name")
  private String legalName = null;

  @SerializedName("legal_structure")
  private String legalStructure = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("owners")
  private List<Ownership> owners = null;

  @SerializedName("phone_number")
  private String phoneNumber = null;

  @SerializedName("ticker")
  private String ticker = null;

  @SerializedName("website")
  private String website = null;

  public BusinessVendorRequestDataVO businessAddresses(List<BusinessAddress> businessAddresses) {
    this.businessAddresses = businessAddresses;
    return this;
  }

  public BusinessVendorRequestDataVO addBusinessAddressesItem(BusinessAddress businessAddressesItem) {
    if (this.businessAddresses == null) {
      this.businessAddresses = new ArrayList<BusinessAddress>();
    }
    this.businessAddresses.add(businessAddressesItem);
    return this;
  }

   /**
   * Get businessAddresses
   * @return businessAddresses
  **/
  @ApiModelProperty(value = "")
  public List<BusinessAddress> getBusinessAddresses() {
    return businessAddresses;
  }

  public void setBusinessAddresses(List<BusinessAddress> businessAddresses) {
    this.businessAddresses = businessAddresses;
  }

  public BusinessVendorRequestDataVO dbaName(String dbaName) {
    this.dbaName = dbaName;
    return this;
  }

   /**
   * Get dbaName
   * @return dbaName
  **/
  @ApiModelProperty(value = "")
  public String getDbaName() {
    return dbaName;
  }

  public void setDbaName(String dbaName) {
    this.dbaName = dbaName;
  }

  public BusinessVendorRequestDataVO email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public BusinessVendorRequestDataVO identificationNumber(String identificationNumber) {
    this.identificationNumber = identificationNumber;
    return this;
  }

   /**
   * Get identificationNumber
   * @return identificationNumber
  **/
  @ApiModelProperty(value = "")
  public String getIdentificationNumber() {
    return identificationNumber;
  }

  public void setIdentificationNumber(String identificationNumber) {
    this.identificationNumber = identificationNumber;
  }

  public BusinessVendorRequestDataVO identificationNumberType(String identificationNumberType) {
    this.identificationNumberType = identificationNumberType;
    return this;
  }

   /**
   * Get identificationNumberType
   * @return identificationNumberType
  **/
  @ApiModelProperty(value = "")
  public String getIdentificationNumberType() {
    return identificationNumberType;
  }

  public void setIdentificationNumberType(String identificationNumberType) {
    this.identificationNumberType = identificationNumberType;
  }

  public BusinessVendorRequestDataVO incorporationDate(LocalDate incorporationDate) {
    this.incorporationDate = incorporationDate;
    return this;
  }

   /**
   * Get incorporationDate
   * @return incorporationDate
  **/
  @ApiModelProperty(value = "")
  public LocalDate getIncorporationDate() {
    return incorporationDate;
  }

  public void setIncorporationDate(LocalDate incorporationDate) {
    this.incorporationDate = incorporationDate;
  }

  public BusinessVendorRequestDataVO incorporationState(String incorporationState) {
    this.incorporationState = incorporationState;
    return this;
  }

   /**
   * Get incorporationState
   * @return incorporationState
  **/
  @ApiModelProperty(value = "")
  public String getIncorporationState() {
    return incorporationState;
  }

  public void setIncorporationState(String incorporationState) {
    this.incorporationState = incorporationState;
  }

  public BusinessVendorRequestDataVO isPublic(Boolean isPublic) {
    this.isPublic = isPublic;
    return this;
  }

   /**
   * Get isPublic
   * @return isPublic
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsPublic() {
    return isPublic;
  }

  public void setIsPublic(Boolean isPublic) {
    this.isPublic = isPublic;
  }

  public BusinessVendorRequestDataVO legalName(String legalName) {
    this.legalName = legalName;
    return this;
  }

   /**
   * Get legalName
   * @return legalName
  **/
  @ApiModelProperty(value = "")
  public String getLegalName() {
    return legalName;
  }

  public void setLegalName(String legalName) {
    this.legalName = legalName;
  }

  public BusinessVendorRequestDataVO legalStructure(String legalStructure) {
    this.legalStructure = legalStructure;
    return this;
  }

   /**
   * Get legalStructure
   * @return legalStructure
  **/
  @ApiModelProperty(value = "")
  public String getLegalStructure() {
    return legalStructure;
  }

  public void setLegalStructure(String legalStructure) {
    this.legalStructure = legalStructure;
  }

  public BusinessVendorRequestDataVO metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public BusinessVendorRequestDataVO putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<String, String>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }

  public BusinessVendorRequestDataVO owners(List<Ownership> owners) {
    this.owners = owners;
    return this;
  }

  public BusinessVendorRequestDataVO addOwnersItem(Ownership ownersItem) {
    if (this.owners == null) {
      this.owners = new ArrayList<Ownership>();
    }
    this.owners.add(ownersItem);
    return this;
  }

   /**
   * Get owners
   * @return owners
  **/
  @ApiModelProperty(value = "")
  public List<Ownership> getOwners() {
    return owners;
  }

  public void setOwners(List<Ownership> owners) {
    this.owners = owners;
  }

  public BusinessVendorRequestDataVO phoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

   /**
   * Get phoneNumber
   * @return phoneNumber
  **/
  @ApiModelProperty(value = "")
  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public BusinessVendorRequestDataVO ticker(String ticker) {
    this.ticker = ticker;
    return this;
  }

   /**
   * Get ticker
   * @return ticker
  **/
  @ApiModelProperty(value = "")
  public String getTicker() {
    return ticker;
  }

  public void setTicker(String ticker) {
    this.ticker = ticker;
  }

  public BusinessVendorRequestDataVO website(String website) {
    this.website = website;
    return this;
  }

   /**
   * Get website
   * @return website
  **/
  @ApiModelProperty(value = "")
  public String getWebsite() {
    return website;
  }

  public void setWebsite(String website) {
    this.website = website;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BusinessVendorRequestDataVO businessVendorRequestDataVO = (BusinessVendorRequestDataVO) o;
    return Objects.equals(this.businessAddresses, businessVendorRequestDataVO.businessAddresses) &&
        Objects.equals(this.dbaName, businessVendorRequestDataVO.dbaName) &&
        Objects.equals(this.email, businessVendorRequestDataVO.email) &&
        Objects.equals(this.identificationNumber, businessVendorRequestDataVO.identificationNumber) &&
        Objects.equals(this.identificationNumberType, businessVendorRequestDataVO.identificationNumberType) &&
        Objects.equals(this.incorporationDate, businessVendorRequestDataVO.incorporationDate) &&
        Objects.equals(this.incorporationState, businessVendorRequestDataVO.incorporationState) &&
        Objects.equals(this.isPublic, businessVendorRequestDataVO.isPublic) &&
        Objects.equals(this.legalName, businessVendorRequestDataVO.legalName) &&
        Objects.equals(this.legalStructure, businessVendorRequestDataVO.legalStructure) &&
        Objects.equals(this.metadata, businessVendorRequestDataVO.metadata) &&
        Objects.equals(this.owners, businessVendorRequestDataVO.owners) &&
        Objects.equals(this.phoneNumber, businessVendorRequestDataVO.phoneNumber) &&
        Objects.equals(this.ticker, businessVendorRequestDataVO.ticker) &&
        Objects.equals(this.website, businessVendorRequestDataVO.website);
  }

  @Override
  public int hashCode() {
    return Objects.hash(businessAddresses, dbaName, email, identificationNumber, identificationNumberType, incorporationDate, incorporationState, isPublic, legalName, legalStructure, metadata, owners, phoneNumber, ticker, website);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BusinessVendorRequestDataVO {\n");
    
    sb.append("    businessAddresses: ").append(toIndentedString(businessAddresses)).append("\n");
    sb.append("    dbaName: ").append(toIndentedString(dbaName)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    identificationNumber: ").append(toIndentedString(identificationNumber)).append("\n");
    sb.append("    identificationNumberType: ").append(toIndentedString(identificationNumberType)).append("\n");
    sb.append("    incorporationDate: ").append(toIndentedString(incorporationDate)).append("\n");
    sb.append("    incorporationState: ").append(toIndentedString(incorporationState)).append("\n");
    sb.append("    isPublic: ").append(toIndentedString(isPublic)).append("\n");
    sb.append("    legalName: ").append(toIndentedString(legalName)).append("\n");
    sb.append("    legalStructure: ").append(toIndentedString(legalStructure)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    owners: ").append(toIndentedString(owners)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    ticker: ").append(toIndentedString(ticker)).append("\n");
    sb.append("    website: ").append(toIndentedString(website)).append("\n");
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
