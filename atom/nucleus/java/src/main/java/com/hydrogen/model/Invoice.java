/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * Invoice Object
 */
@ApiModel(description = "Invoice Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class Invoice {
  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("customer_id")
  private UUID customerId = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("division")
  private String division = null;

  @SerializedName("document_id")
  private UUID documentId = null;

  @SerializedName("due_date")
  private OffsetDateTime dueDate = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("invoice_amount")
  private Double invoiceAmount = null;

  @SerializedName("invoice_date")
  private OffsetDateTime invoiceDate = null;

  @SerializedName("invoice_name")
  private String invoiceName = null;

  @SerializedName("invoice_number")
  private String invoiceNumber = null;

  @SerializedName("is_active")
  private Boolean isActive = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("payment_details")
  private String paymentDetails = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public Invoice clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * client_id
   * @return clientId
  **/
  @ApiModelProperty(example = "5cc48294-5f28-41f2-8eb4-898e83932327", value = "client_id")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public Invoice currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currency_code
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", required = true, value = "currency_code")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public Invoice customerId(UUID customerId) {
    this.customerId = customerId;
    return this;
  }

   /**
   * invoice_number
   * @return customerId
  **/
  @ApiModelProperty(example = "14566616-6846-4090-beae-5b1568b82370", required = true, value = "invoice_number")
  public UUID getCustomerId() {
    return customerId;
  }

  public void setCustomerId(UUID customerId) {
    this.customerId = customerId;
  }

  public Invoice description(String description) {
    this.description = description;
    return this;
  }

   /**
   * description
   * @return description
  **/
  @ApiModelProperty(example = "invoice description", value = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Invoice division(String division) {
    this.division = division;
    return this;
  }

   /**
   * division
   * @return division
  **/
  @ApiModelProperty(example = "division", value = "division")
  public String getDivision() {
    return division;
  }

  public void setDivision(String division) {
    this.division = division;
  }

  public Invoice documentId(UUID documentId) {
    this.documentId = documentId;
    return this;
  }

   /**
   * document_id
   * @return documentId
  **/
  @ApiModelProperty(example = "ffec4069-f3bd-46f0-bf62-c7c77b400e37", value = "document_id")
  public UUID getDocumentId() {
    return documentId;
  }

  public void setDocumentId(UUID documentId) {
    this.documentId = documentId;
  }

  public Invoice dueDate(OffsetDateTime dueDate) {
    this.dueDate = dueDate;
    return this;
  }

   /**
   * due_date
   * @return dueDate
  **/
  @ApiModelProperty(example = "2020-03-18T18:17:23.579+0000", required = true, value = "due_date")
  public OffsetDateTime getDueDate() {
    return dueDate;
  }

  public void setDueDate(OffsetDateTime dueDate) {
    this.dueDate = dueDate;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Invoice invoiceAmount(Double invoiceAmount) {
    this.invoiceAmount = invoiceAmount;
    return this;
  }

   /**
   * Get invoiceAmount
   * @return invoiceAmount
  **/
  @ApiModelProperty(value = "")
  public Double getInvoiceAmount() {
    return invoiceAmount;
  }

  public void setInvoiceAmount(Double invoiceAmount) {
    this.invoiceAmount = invoiceAmount;
  }

  public Invoice invoiceDate(OffsetDateTime invoiceDate) {
    this.invoiceDate = invoiceDate;
    return this;
  }

   /**
   * invoice_date
   * @return invoiceDate
  **/
  @ApiModelProperty(example = "2020-03-18", required = true, value = "invoice_date")
  public OffsetDateTime getInvoiceDate() {
    return invoiceDate;
  }

  public void setInvoiceDate(OffsetDateTime invoiceDate) {
    this.invoiceDate = invoiceDate;
  }

  public Invoice invoiceName(String invoiceName) {
    this.invoiceName = invoiceName;
    return this;
  }

   /**
   * invoice_name
   * @return invoiceName
  **/
  @ApiModelProperty(example = "Uber invoice", required = true, value = "invoice_name")
  public String getInvoiceName() {
    return invoiceName;
  }

  public void setInvoiceName(String invoiceName) {
    this.invoiceName = invoiceName;
  }

  public Invoice invoiceNumber(String invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
    return this;
  }

   /**
   * invoice_number
   * @return invoiceNumber
  **/
  @ApiModelProperty(example = "2334889", required = true, value = "invoice_number")
  public String getInvoiceNumber() {
    return invoiceNumber;
  }

  public void setInvoiceNumber(String invoiceNumber) {
    this.invoiceNumber = invoiceNumber;
  }

  public Invoice isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * is_active
   * @return isActive
  **/
  @ApiModelProperty(example = "true", value = "is_active")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(example = "{}", value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public Invoice paymentDetails(String paymentDetails) {
    this.paymentDetails = paymentDetails;
    return this;
  }

   /**
   * payment_details
   * @return paymentDetails
  **/
  @ApiModelProperty(example = "payment_details", required = true, value = "payment_details")
  public String getPaymentDetails() {
    return paymentDetails;
  }

  public void setPaymentDetails(String paymentDetails) {
    this.paymentDetails = paymentDetails;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public Invoice status(String status) {
    this.status = status;
    return this;
  }

   /**
   * status
   * @return status
  **/
  @ApiModelProperty(example = "2020-03-18T18:17:23.579+0000", value = "status")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Invoice invoice = (Invoice) o;
    return Objects.equals(this.clientId, invoice.clientId) &&
        Objects.equals(this.createDate, invoice.createDate) &&
        Objects.equals(this.currencyCode, invoice.currencyCode) &&
        Objects.equals(this.customerId, invoice.customerId) &&
        Objects.equals(this.description, invoice.description) &&
        Objects.equals(this.division, invoice.division) &&
        Objects.equals(this.documentId, invoice.documentId) &&
        Objects.equals(this.dueDate, invoice.dueDate) &&
        Objects.equals(this.id, invoice.id) &&
        Objects.equals(this.invoiceAmount, invoice.invoiceAmount) &&
        Objects.equals(this.invoiceDate, invoice.invoiceDate) &&
        Objects.equals(this.invoiceName, invoice.invoiceName) &&
        Objects.equals(this.invoiceNumber, invoice.invoiceNumber) &&
        Objects.equals(this.isActive, invoice.isActive) &&
        Objects.equals(this.metadata, invoice.metadata) &&
        Objects.equals(this.paymentDetails, invoice.paymentDetails) &&
        Objects.equals(this.secondaryId, invoice.secondaryId) &&
        Objects.equals(this.status, invoice.status) &&
        Objects.equals(this.updateDate, invoice.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientId, createDate, currencyCode, customerId, description, division, documentId, dueDate, id, invoiceAmount, invoiceDate, invoiceName, invoiceNumber, isActive, metadata, paymentDetails, secondaryId, status, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Invoice {\n");
    
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    customerId: ").append(toIndentedString(customerId)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    division: ").append(toIndentedString(division)).append("\n");
    sb.append("    documentId: ").append(toIndentedString(documentId)).append("\n");
    sb.append("    dueDate: ").append(toIndentedString(dueDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    invoiceAmount: ").append(toIndentedString(invoiceAmount)).append("\n");
    sb.append("    invoiceDate: ").append(toIndentedString(invoiceDate)).append("\n");
    sb.append("    invoiceName: ").append(toIndentedString(invoiceName)).append("\n");
    sb.append("    invoiceNumber: ").append(toIndentedString(invoiceNumber)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    paymentDetails: ").append(toIndentedString(paymentDetails)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

