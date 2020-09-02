/*
 * Molecule API Documentation
 * The Hydrogen Molecule API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.molecule.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

import java.util.UUID;

/**
 * TokenParams
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-07-21T09:54:56.296Z")
public class TokenParams {
  @SerializedName("name")
  private String name = null;

  @SerializedName("symbol")
  private String symbol = null;

  @SerializedName("total_supply")
  private Double totalSupply = null;

  @SerializedName("nucleus_model_id")
  private UUID nucleusModelId = null;

  @SerializedName("owner_wallet_id")
  private UUID ownerWalletId = null;

  @SerializedName("is_mintable")
  private Boolean isMintable = null;

  @SerializedName("is_burnable")
  private Boolean isBurnable = null;

  @SerializedName("whitelist_address")
  private String whitelistAddress = null;

  @SerializedName("contract_address")
  private String contractAddress = null;

  @SerializedName("crowdsale_address")
  private String crowdsaleAddress = null;

  @SerializedName("is_active")
  private Boolean isActive = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("record_status")
  private String recordStatus = null;

  @SerializedName("offering_settings")
  private TokenParamsOfferingSettings offeringSettings = null;

  @SerializedName("metadata")
  private Object metadata = null;

  @SerializedName("restrictions")
  private Object restrictions = null;

  public TokenParams name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(required = true, value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public TokenParams symbol(String symbol) {
    this.symbol = symbol;
    return this;
  }

   /**
   * Get symbol
   * @return symbol
  **/
  @ApiModelProperty(required = true, value = "")
  public String getSymbol() {
    return symbol;
  }

  public void setSymbol(String symbol) {
    this.symbol = symbol;
  }

  public TokenParams nucleusModelId(UUID nucleusModelId) {
    this.nucleusModelId = nucleusModelId;
    return this;
  }

  public TokenParams totalSupply(Double totalSupply) {
    this.totalSupply = totalSupply;
    return this;
  }

  /**
   * Get totalSupply
   * @return totalSupply
   **/
  @ApiModelProperty(required = true, value = "")
  public Double getTotalSupply() {
    return totalSupply;
  }

  public void setTotalSupply(Double totalSupply) {
    this.totalSupply = totalSupply;
  }

   /**
   * Get nucleusModelId
   * @return nucleusModelId
  **/
  @ApiModelProperty(required = true, value = "")
  public UUID getNucleusModelId() {
    return nucleusModelId;
  }

  public void setNucleusModelId(UUID nucleusModelId) {
    this.nucleusModelId = nucleusModelId;
  }

  public TokenParams ownerWalletId(UUID ownerWalletId) {
    this.ownerWalletId = ownerWalletId;
    return this;
  }

   /**
   * Get ownerWalletId
   * @return ownerWalletId
  **/
  @ApiModelProperty(required = true, value = "")
  public UUID getOwnerWalletId() {
    return ownerWalletId;
  }

  public void setOwnerWalletId(UUID ownerWalletId) {
    this.ownerWalletId = ownerWalletId;
  }

  public TokenParams isMintable(Boolean isMintable) {
    this.isMintable = isMintable;
    return this;
  }

   /**
   * Get isMintable
   * @return isMintable
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsMintable() {
    return isMintable;
  }

  public void setIsMintable(Boolean isMintable) {
    this.isMintable = isMintable;
  }

  public TokenParams isBurnable(Boolean isBurnable) {
    this.isBurnable = isBurnable;
    return this;
  }

   /**
   * Get isBurnable
   * @return isBurnable
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsBurnable() {
    return isBurnable;
  }

  public void setIsBurnable(Boolean isBurnable) {
    this.isBurnable = isBurnable;
  }

  public TokenParams whitelistAddress(String whitelistAddress) {
    this.whitelistAddress = whitelistAddress;
    return this;
  }

   /**
   * Get whitelistAddress
   * @return whitelistAddress
  **/
  @ApiModelProperty(value = "")
  public String getWhitelistAddress() {
    return whitelistAddress;
  }

  public void setWhitelistAddress(String whitelistAddress) {
    this.whitelistAddress = whitelistAddress;
  }

  public TokenParams contractAddress(String contractAddress) {
    this.contractAddress = contractAddress;
    return this;
  }

   /**
   * Get contractAddress
   * @return contractAddress
  **/
  @ApiModelProperty(value = "")
  public String getContractAddress() {
    return contractAddress;
  }

  public void setContractAddress(String contractAddress) {
    this.contractAddress = contractAddress;
  }

  public TokenParams crowdsaleAddress(String crowdsaleAddress) {
    this.crowdsaleAddress = crowdsaleAddress;
    return this;
  }

   /**
   * Get crowdsaleAddress
   * @return crowdsaleAddress
  **/
  @ApiModelProperty(value = "")
  public String getCrowdsaleAddress() {
    return crowdsaleAddress;
  }

  public void setCrowdsaleAddress(String crowdsaleAddress) {
    this.crowdsaleAddress = crowdsaleAddress;
  }

  public TokenParams isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * Get isActive
   * @return isActive
  **/
  @ApiModelProperty(value = "")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public TokenParams secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public TokenParams recordStatus(String recordStatus) {
    this.recordStatus = recordStatus;
    return this;
  }

   /**
   * Get recordStatus
   * @return recordStatus
  **/
  @ApiModelProperty(value = "")
  public String getRecordStatus() {
    return recordStatus;
  }

  public void setRecordStatus(String recordStatus) {
    this.recordStatus = recordStatus;
  }

  public TokenParams offeringSettings(TokenParamsOfferingSettings offeringSettings) {
    this.offeringSettings = offeringSettings;
    return this;
  }

   /**
   * Get offeringSettings
   * @return offeringSettings
  **/
  @ApiModelProperty(required = true, value = "")
  public TokenParamsOfferingSettings getOfferingSettings() {
    return offeringSettings;
  }

  public void setOfferingSettings(TokenParamsOfferingSettings offeringSettings) {
    this.offeringSettings = offeringSettings;
  }

  public TokenParams metadata(Object metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(value = "")
  public Object getMetadata() {
    return metadata;
  }

  public void setMetadata(Object metadata) {
    this.metadata = metadata;
  }

  public TokenParams restrictions(Object restrictions) {
    this.restrictions = restrictions;
    return this;
  }

   /**
   * Get restrictions
   * @return restrictions
  **/
  @ApiModelProperty(value = "")
  public Object getRestrictions() {
    return restrictions;
  }

  public void setRestrictions(Object restrictions) {
    this.restrictions = restrictions;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TokenParams tokenParams = (TokenParams) o;
    return Objects.equals(this.name, tokenParams.name) &&
        Objects.equals(this.symbol, tokenParams.symbol) &&
        Objects.equals(this.totalSupply, tokenParams.totalSupply) &&
        Objects.equals(this.nucleusModelId, tokenParams.nucleusModelId) &&
        Objects.equals(this.ownerWalletId, tokenParams.ownerWalletId) &&
        Objects.equals(this.isMintable, tokenParams.isMintable) &&
        Objects.equals(this.isBurnable, tokenParams.isBurnable) &&
        Objects.equals(this.whitelistAddress, tokenParams.whitelistAddress) &&
        Objects.equals(this.contractAddress, tokenParams.contractAddress) &&
        Objects.equals(this.crowdsaleAddress, tokenParams.crowdsaleAddress) &&
        Objects.equals(this.isActive, tokenParams.isActive) &&
        Objects.equals(this.secondaryId, tokenParams.secondaryId) &&
        Objects.equals(this.recordStatus, tokenParams.recordStatus) &&
        Objects.equals(this.offeringSettings, tokenParams.offeringSettings) &&
        Objects.equals(this.metadata, tokenParams.metadata) &&
        Objects.equals(this.restrictions, tokenParams.restrictions);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, symbol, totalSupply, nucleusModelId, ownerWalletId, isMintable, isBurnable, whitelistAddress, contractAddress, crowdsaleAddress, isActive, secondaryId, recordStatus, offeringSettings, metadata, restrictions);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TokenParams {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    symbol: ").append(toIndentedString(symbol)).append("\n");
    sb.append("    totalSupply: ").append(toIndentedString(totalSupply)).append("\n");
    sb.append("    nucleusModelId: ").append(toIndentedString(nucleusModelId)).append("\n");
    sb.append("    ownerWalletId: ").append(toIndentedString(ownerWalletId)).append("\n");
    sb.append("    isMintable: ").append(toIndentedString(isMintable)).append("\n");
    sb.append("    isBurnable: ").append(toIndentedString(isBurnable)).append("\n");
    sb.append("    whitelistAddress: ").append(toIndentedString(whitelistAddress)).append("\n");
    sb.append("    contractAddress: ").append(toIndentedString(contractAddress)).append("\n");
    sb.append("    crowdsaleAddress: ").append(toIndentedString(crowdsaleAddress)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    recordStatus: ").append(toIndentedString(recordStatus)).append("\n");
    sb.append("    offeringSettings: ").append(toIndentedString(offeringSettings)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    restrictions: ").append(toIndentedString(restrictions)).append("\n");
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
