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
import io.swagger.client.model.CreatePortfolioTransactionResponse;
import java.io.IOException;
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * SpecificPortfolioTransactionResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class SpecificPortfolioTransactionResponse {
  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  @SerializedName("security_id")
  private UUID securityId = null;

  @SerializedName("transaction_code_id")
  private UUID transactionCodeId = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("is_read")
  private Boolean isRead = false;

  @SerializedName("price")
  private Double price = null;

  @SerializedName("quantity")
  private Double quantity = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private String updateDate = null;

  public SpecificPortfolioTransactionResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the portfolio transaction record
   * @return id
  **/
  @ApiModelProperty(value = "ID of the portfolio transaction record")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public SpecificPortfolioTransactionResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the portfolio transaction record was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the portfolio transaction record was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }

  public SpecificPortfolioTransactionResponse portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * The ID of the portfolio that the transaction record falls under
   * @return portfolioId
  **/
  @ApiModelProperty(required = true, value = "The ID of the portfolio that the transaction record falls under")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }

  public SpecificPortfolioTransactionResponse securityId(UUID securityId) {
    this.securityId = securityId;
    return this;
  }

   /**
   * The ID of the security that was bought or sold in the transaction
   * @return securityId
  **/
  @ApiModelProperty(required = true, value = "The ID of the security that was bought or sold in the transaction")
  public UUID getSecurityId() {
    return securityId;
  }

  public void setSecurityId(UUID securityId) {
    this.securityId = securityId;
  }

  public SpecificPortfolioTransactionResponse transactionCodeId(UUID transactionCodeId) {
    this.transactionCodeId = transactionCodeId;
    return this;
  }

   /**
   * The ID of the transaction code for the type of transaction
   * @return transactionCodeId
  **/
  @ApiModelProperty(required = true, value = "The ID of the transaction code for the type of transaction")
  public UUID getTransactionCodeId() {
    return transactionCodeId;
  }

  public void setTransactionCodeId(UUID transactionCodeId) {
    this.transactionCodeId = transactionCodeId;
  }

  public SpecificPortfolioTransactionResponse date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date for this transaction record
   * @return date
  **/
  @ApiModelProperty(required = true, value = "Date for this transaction record")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public SpecificPortfolioTransactionResponse isRead(Boolean isRead) {
    this.isRead = isRead;
    return this;
  }

   /**
   * Indicates if the transaction has been read. Defaults to false which indicates that it has not been read
   * @return isRead
  **/
  @ApiModelProperty(value = "Indicates if the transaction has been read. Defaults to false which indicates that it has not been read")
  public Boolean isIsRead() {
    return isRead;
  }

  public void setIsRead(Boolean isRead) {
    this.isRead = isRead;
  }

  public SpecificPortfolioTransactionResponse price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Price at which the security was bought or sold
   * @return price
  **/
  @ApiModelProperty(value = "Price at which the security was bought or sold")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public SpecificPortfolioTransactionResponse quantity(Double quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Quantity of units of a security that were bought or sold
   * @return quantity
  **/
  @ApiModelProperty(value = "Quantity of units of a security that were bought or sold")
  public Double getQuantity() {
    return quantity;
  }

  public void setQuantity(Double quantity) {
    this.quantity = quantity;
  }

  public SpecificPortfolioTransactionResponse secondaryId(String secondaryId) {
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

  public SpecificPortfolioTransactionResponse updateDate(String updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Datetime the portfolio transaction record was last updated
   * @return updateDate
  **/
  @ApiModelProperty(value = "Datetime the portfolio transaction record was last updated")
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
    SpecificPortfolioTransactionResponse specificPortfolioTransactionResponse = (SpecificPortfolioTransactionResponse) o;
    return Objects.equals(this.id, specificPortfolioTransactionResponse.id) &&
        Objects.equals(this.createDate, specificPortfolioTransactionResponse.createDate) &&
        Objects.equals(this.portfolioId, specificPortfolioTransactionResponse.portfolioId) &&
        Objects.equals(this.securityId, specificPortfolioTransactionResponse.securityId) &&
        Objects.equals(this.transactionCodeId, specificPortfolioTransactionResponse.transactionCodeId) &&
        Objects.equals(this.date, specificPortfolioTransactionResponse.date) &&
        Objects.equals(this.isRead, specificPortfolioTransactionResponse.isRead) &&
        Objects.equals(this.price, specificPortfolioTransactionResponse.price) &&
        Objects.equals(this.quantity, specificPortfolioTransactionResponse.quantity) &&
        Objects.equals(this.secondaryId, specificPortfolioTransactionResponse.secondaryId) &&
        Objects.equals(this.updateDate, specificPortfolioTransactionResponse.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, createDate, portfolioId, securityId, transactionCodeId, date, isRead, price, quantity, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SpecificPortfolioTransactionResponse {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
    sb.append("    securityId: ").append(toIndentedString(securityId)).append("\n");
    sb.append("    transactionCodeId: ").append(toIndentedString(transactionCodeId)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    isRead: ").append(toIndentedString(isRead)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
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

