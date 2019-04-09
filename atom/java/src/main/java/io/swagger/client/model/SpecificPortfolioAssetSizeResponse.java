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
import io.swagger.client.model.CreatePortfolioAssetSizeResponse;
import java.io.IOException;
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * SpecificPortfolioAssetSizeResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class SpecificPortfolioAssetSizeResponse {
  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("asset_size")
  private Double assetSize = null;

  @SerializedName("cash_flow")
  private Double cashFlow = null;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private String updateDate = null;

  public SpecificPortfolioAssetSizeResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the portfolio asset size record
   * @return id
  **/
  @ApiModelProperty(value = "ID of the portfolio asset size record")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public SpecificPortfolioAssetSizeResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the portfolio asset size record was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the portfolio asset size record was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }

  public SpecificPortfolioAssetSizeResponse date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date for this asset size record
   * @return date
  **/
  @ApiModelProperty(required = true, value = "Date for this asset size record")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public SpecificPortfolioAssetSizeResponse assetSize(Double assetSize) {
    this.assetSize = assetSize;
    return this;
  }

   /**
   * Monetary value of the portfolio on the particular date. Can be less than, greater than or equal to 0
   * @return assetSize
  **/
  @ApiModelProperty(required = true, value = "Monetary value of the portfolio on the particular date. Can be less than, greater than or equal to 0")
  public Double getAssetSize() {
    return assetSize;
  }

  public void setAssetSize(Double assetSize) {
    this.assetSize = assetSize;
  }

  public SpecificPortfolioAssetSizeResponse cashFlow(Double cashFlow) {
    this.cashFlow = cashFlow;
    return this;
  }

   /**
   * Net monetary value that has flowed in or out of the portfolio since the last asset size date, usually via deposits or withdrawals. Can be less than, greater than or equal to 0
   * @return cashFlow
  **/
  @ApiModelProperty(required = true, value = "Net monetary value that has flowed in or out of the portfolio since the last asset size date, usually via deposits or withdrawals. Can be less than, greater than or equal to 0")
  public Double getCashFlow() {
    return cashFlow;
  }

  public void setCashFlow(Double cashFlow) {
    this.cashFlow = cashFlow;
  }

  public SpecificPortfolioAssetSizeResponse portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * The ID of the portfolio that the asset size record falls under
   * @return portfolioId
  **/
  @ApiModelProperty(required = true, value = "The ID of the portfolio that the asset size record falls under")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }

  public SpecificPortfolioAssetSizeResponse secondaryId(String secondaryId) {
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

  public SpecificPortfolioAssetSizeResponse updateDate(String updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Datetime the portfolio asset size record was last updated
   * @return updateDate
  **/
  @ApiModelProperty(value = "Datetime the portfolio asset size record was last updated")
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
    SpecificPortfolioAssetSizeResponse specificPortfolioAssetSizeResponse = (SpecificPortfolioAssetSizeResponse) o;
    return Objects.equals(this.id, specificPortfolioAssetSizeResponse.id) &&
        Objects.equals(this.createDate, specificPortfolioAssetSizeResponse.createDate) &&
        Objects.equals(this.date, specificPortfolioAssetSizeResponse.date) &&
        Objects.equals(this.assetSize, specificPortfolioAssetSizeResponse.assetSize) &&
        Objects.equals(this.cashFlow, specificPortfolioAssetSizeResponse.cashFlow) &&
        Objects.equals(this.portfolioId, specificPortfolioAssetSizeResponse.portfolioId) &&
        Objects.equals(this.secondaryId, specificPortfolioAssetSizeResponse.secondaryId) &&
        Objects.equals(this.updateDate, specificPortfolioAssetSizeResponse.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, createDate, date, assetSize, cashFlow, portfolioId, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SpecificPortfolioAssetSizeResponse {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    assetSize: ").append(toIndentedString(assetSize)).append("\n");
    sb.append("    cashFlow: ").append(toIndentedString(cashFlow)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
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

