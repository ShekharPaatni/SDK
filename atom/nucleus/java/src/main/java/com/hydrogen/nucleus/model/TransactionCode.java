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
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * TransactionCode
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-06-02T10:56:36.473Z")
public class TransactionCode {
  @SerializedName("category")
  private String category = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("is_buy")
  private Boolean isBuy = null;

  @SerializedName("is_deposit")
  private Boolean isDeposit = null;

  @SerializedName("is_fee")
  private Boolean isFee = null;

  @SerializedName("is_transfer")
  private Boolean isTransfer = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("subcategory")
  private String subcategory = null;

  @SerializedName("transaction_code")
  private String transactionCode = null;

  @SerializedName("transaction_code_description")
  private String transactionCodeDescription = null;

  @SerializedName("transaction_type")
  private String transactionType = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public TransactionCode category(String category) {
    this.category = category;
    return this;
  }

   /**
   * category
   * @return category
  **/
  @ApiModelProperty(example = "Deposit", value = "category")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public TransactionCode createDate(OffsetDateTime createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public void setCreateDate(OffsetDateTime createDate) {
    this.createDate = createDate;
  }

  public TransactionCode id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public TransactionCode isBuy(Boolean isBuy) {
    this.isBuy = isBuy;
    return this;
  }

   /**
   * Get isBuy
   * @return isBuy
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean isIsBuy() {
    return isBuy;
  }

  public void setIsBuy(Boolean isBuy) {
    this.isBuy = isBuy;
  }

  public TransactionCode isDeposit(Boolean isDeposit) {
    this.isDeposit = isDeposit;
    return this;
  }

   /**
   * Get isDeposit
   * @return isDeposit
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean isIsDeposit() {
    return isDeposit;
  }

  public void setIsDeposit(Boolean isDeposit) {
    this.isDeposit = isDeposit;
  }

  public TransactionCode isFee(Boolean isFee) {
    this.isFee = isFee;
    return this;
  }

   /**
   * Get isFee
   * @return isFee
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean isIsFee() {
    return isFee;
  }

  public void setIsFee(Boolean isFee) {
    this.isFee = isFee;
  }

  public TransactionCode isTransfer(Boolean isTransfer) {
    this.isTransfer = isTransfer;
    return this;
  }

   /**
   * Get isTransfer
   * @return isTransfer
  **/
  @ApiModelProperty(example = "false", value = "")
  public Boolean isIsTransfer() {
    return isTransfer;
  }

  public void setIsTransfer(Boolean isTransfer) {
    this.isTransfer = isTransfer;
  }

  public TransactionCode metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public TransactionCode putMetadataItem(String key, String metadataItem) {
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

  public TransactionCode secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public TransactionCode subcategory(String subcategory) {
    this.subcategory = subcategory;
    return this;
  }

   /**
   * subcategory
   * @return subcategory
  **/
  @ApiModelProperty(example = "Bank Deposit", value = "subcategory")
  public String getSubcategory() {
    return subcategory;
  }

  public void setSubcategory(String subcategory) {
    this.subcategory = subcategory;
  }

  public TransactionCode transactionCode(String transactionCode) {
    this.transactionCode = transactionCode;
    return this;
  }

   /**
   * transactionCode
   * @return transactionCode
  **/
  @ApiModelProperty(example = "codeSell1543998799676", required = true, value = "transactionCode")
  public String getTransactionCode() {
    return transactionCode;
  }

  public void setTransactionCode(String transactionCode) {
    this.transactionCode = transactionCode;
  }

  public TransactionCode transactionCodeDescription(String transactionCodeDescription) {
    this.transactionCodeDescription = transactionCodeDescription;
    return this;
  }

   /**
   * transactionCodeDescription
   * @return transactionCodeDescription
  **/
  @ApiModelProperty(example = "Bank deposit ACH", value = "transactionCodeDescription")
  public String getTransactionCodeDescription() {
    return transactionCodeDescription;
  }

  public void setTransactionCodeDescription(String transactionCodeDescription) {
    this.transactionCodeDescription = transactionCodeDescription;
  }

  public TransactionCode transactionType(String transactionType) {
    this.transactionType = transactionType;
    return this;
  }

   /**
   * transactionType
   * @return transactionType
  **/
  @ApiModelProperty(example = "ACH", value = "transactionType")
  public String getTransactionType() {
    return transactionType;
  }

  public void setTransactionType(String transactionType) {
    this.transactionType = transactionType;
  }

  public TransactionCode updateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    TransactionCode transactionCode = (TransactionCode) o;
    return Objects.equals(this.category, transactionCode.category) &&
        Objects.equals(this.createDate, transactionCode.createDate) &&
        Objects.equals(this.id, transactionCode.id) &&
        Objects.equals(this.isBuy, transactionCode.isBuy) &&
        Objects.equals(this.isDeposit, transactionCode.isDeposit) &&
        Objects.equals(this.isFee, transactionCode.isFee) &&
        Objects.equals(this.isTransfer, transactionCode.isTransfer) &&
        Objects.equals(this.metadata, transactionCode.metadata) &&
        Objects.equals(this.secondaryId, transactionCode.secondaryId) &&
        Objects.equals(this.subcategory, transactionCode.subcategory) &&
        Objects.equals(this.transactionCode, transactionCode.transactionCode) &&
        Objects.equals(this.transactionCodeDescription, transactionCode.transactionCodeDescription) &&
        Objects.equals(this.transactionType, transactionCode.transactionType) &&
        Objects.equals(this.updateDate, transactionCode.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, createDate, id, isBuy, isDeposit, isFee, isTransfer, metadata, secondaryId, subcategory, transactionCode, transactionCodeDescription, transactionType, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class TransactionCode {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isBuy: ").append(toIndentedString(isBuy)).append("\n");
    sb.append("    isDeposit: ").append(toIndentedString(isDeposit)).append("\n");
    sb.append("    isFee: ").append(toIndentedString(isFee)).append("\n");
    sb.append("    isTransfer: ").append(toIndentedString(isTransfer)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    subcategory: ").append(toIndentedString(subcategory)).append("\n");
    sb.append("    transactionCode: ").append(toIndentedString(transactionCode)).append("\n");
    sb.append("    transactionCodeDescription: ").append(toIndentedString(transactionCodeDescription)).append("\n");
    sb.append("    transactionType: ").append(toIndentedString(transactionType)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

