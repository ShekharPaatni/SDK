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
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * AllocationTransactionResponseContent
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class AllocationTransactionResponseContent {
  @SerializedName("id")
  private UUID id = null;

  @SerializedName("shares")
  private Double shares = null;

  @SerializedName("price")
  private Double price = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("model_id")
  private UUID modelId = null;

  @SerializedName("security_id")
  private UUID securityId = null;

  @SerializedName("transaction_code_id")
  private String transactionCodeId = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("create_date")
  private LocalDate createDate = null;

  @SerializedName("update_date")
  private String updateDate = null;

  public AllocationTransactionResponseContent id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * The ID of the allocation transaction record
   * @return id
  **/
  @ApiModelProperty(value = "The ID of the allocation transaction record")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public AllocationTransactionResponseContent shares(Double shares) {
    this.shares = shares;
    return this;
  }

   /**
   * Number of shares of the security purchased as part of the transaction
   * @return shares
  **/
  @ApiModelProperty(value = "Number of shares of the security purchased as part of the transaction")
  public Double getShares() {
    return shares;
  }

  public void setShares(Double shares) {
    this.shares = shares;
  }

  public AllocationTransactionResponseContent price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Security price at which the shares were purchased as part of the transaction
   * @return price
  **/
  @ApiModelProperty(value = "Security price at which the shares were purchased as part of the transaction")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public AllocationTransactionResponseContent date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date of the allocation transaction
   * @return date
  **/
  @ApiModelProperty(value = "Date of the allocation transaction")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public AllocationTransactionResponseContent modelId(UUID modelId) {
    this.modelId = modelId;
    return this;
  }

   /**
   * Date of the allocation transaction
   * @return modelId
  **/
  @ApiModelProperty(value = "Date of the allocation transaction")
  public UUID getModelId() {
    return modelId;
  }

  public void setModelId(UUID modelId) {
    this.modelId = modelId;
  }

  public AllocationTransactionResponseContent securityId(UUID securityId) {
    this.securityId = securityId;
    return this;
  }

   /**
   * The ID of the security included in the allocation transaction
   * @return securityId
  **/
  @ApiModelProperty(value = "The ID of the security included in the allocation transaction")
  public UUID getSecurityId() {
    return securityId;
  }

  public void setSecurityId(UUID securityId) {
    this.securityId = securityId;
  }

  public AllocationTransactionResponseContent transactionCodeId(String transactionCodeId) {
    this.transactionCodeId = transactionCodeId;
    return this;
  }

   /**
   * The ID referring to the transaction codes defined by your firm
   * @return transactionCodeId
  **/
  @ApiModelProperty(value = "The ID referring to the transaction codes defined by your firm")
  public String getTransactionCodeId() {
    return transactionCodeId;
  }

  public void setTransactionCodeId(String transactionCodeId) {
    this.transactionCodeId = transactionCodeId;
  }

  public AllocationTransactionResponseContent secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Alternate ID that can be used to identify the object such as an internal id
   * @return secondaryId
  **/
  @ApiModelProperty(value = "Alternate ID that can be used to identify the object such as an internal id")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public AllocationTransactionResponseContent createDate(LocalDate createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Timestamp for the date and time that the record was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Timestamp for the date and time that the record was created")
  public LocalDate getCreateDate() {
    return createDate;
  }

  public void setCreateDate(LocalDate createDate) {
    this.createDate = createDate;
  }

  public AllocationTransactionResponseContent updateDate(String updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Timestamp for the date and time that the record was last updated
   * @return updateDate
  **/
  @ApiModelProperty(value = "Timestamp for the date and time that the record was last updated")
  public String getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(String updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AllocationTransactionResponseContent allocationTransactionResponseContent = (AllocationTransactionResponseContent) o;
    return Objects.equals(this.id, allocationTransactionResponseContent.id) &&
        Objects.equals(this.shares, allocationTransactionResponseContent.shares) &&
        Objects.equals(this.price, allocationTransactionResponseContent.price) &&
        Objects.equals(this.date, allocationTransactionResponseContent.date) &&
        Objects.equals(this.modelId, allocationTransactionResponseContent.modelId) &&
        Objects.equals(this.securityId, allocationTransactionResponseContent.securityId) &&
        Objects.equals(this.transactionCodeId, allocationTransactionResponseContent.transactionCodeId) &&
        Objects.equals(this.secondaryId, allocationTransactionResponseContent.secondaryId) &&
        Objects.equals(this.createDate, allocationTransactionResponseContent.createDate) &&
        Objects.equals(this.updateDate, allocationTransactionResponseContent.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, shares, price, date, modelId, securityId, transactionCodeId, secondaryId, createDate, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AllocationTransactionResponseContent {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    shares: ").append(toIndentedString(shares)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    modelId: ").append(toIndentedString(modelId)).append("\n");
    sb.append("    securityId: ").append(toIndentedString(securityId)).append("\n");
    sb.append("    transactionCodeId: ").append(toIndentedString(transactionCodeId)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

