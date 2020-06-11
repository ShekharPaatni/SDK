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

import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * Accounting Object
 */
@ApiModel(description = "Accounting Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class Accounting {
  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("period_type")
  private String periodType = null;

  @SerializedName("period_year")
  private Integer periodYear = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("stat_date")
  private LocalDate statDate = null;

  @SerializedName("stat_name")
  private String statName = null;

  @SerializedName("stat_value")
  private Double statValue = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public Accounting clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * clientId
   * @return clientId
  **/
  @ApiModelProperty(example = "2035f52d-2c5b-4e07-8904-cb037bad7aff", value = "clientId")
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

  public Accounting currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", required = true, value = "currencyCode")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(example = "{}", value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public Accounting periodType(String periodType) {
    this.periodType = periodType;
    return this;
  }

   /**
   * periodType
   * @return periodType
  **/
  @ApiModelProperty(example = "annual", value = "periodType")
  public String getPeriodType() {
    return periodType;
  }

  public void setPeriodType(String periodType) {
    this.periodType = periodType;
  }

  public Accounting periodYear(Integer periodYear) {
    this.periodYear = periodYear;
    return this;
  }

   /**
   * periodYear
   * @return periodYear
  **/
  @ApiModelProperty(example = "2020", value = "periodYear")
  public Integer getPeriodYear() {
    return periodYear;
  }

  public void setPeriodYear(Integer periodYear) {
    this.periodYear = periodYear;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public Accounting statDate(LocalDate statDate) {
    this.statDate = statDate;
    return this;
  }

   /**
   * statDate
   * @return statDate
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", required = true, value = "statDate")
  public LocalDate getStatDate() {
    return statDate;
  }

  public void setStatDate(LocalDate statDate) {
    this.statDate = statDate;
  }

  public Accounting statName(String statName) {
    this.statName = statName;
    return this;
  }

   /**
   * statName
   * @return statName
  **/
  @ApiModelProperty(example = "revenue", required = true, value = "statName")
  public String getStatName() {
    return statName;
  }

  public void setStatName(String statName) {
    this.statName = statName;
  }

  public Accounting statValue(Double statValue) {
    this.statValue = statValue;
    return this;
  }

   /**
   * statValue
   * @return statValue
  **/
  @ApiModelProperty(example = "12.0", required = true, value = "statValue")
  public Double getStatValue() {
    return statValue;
  }

  public void setStatValue(Double statValue) {
    this.statValue = statValue;
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
    Accounting accounting = (Accounting) o;
    return Objects.equals(this.clientId, accounting.clientId) &&
        Objects.equals(this.createDate, accounting.createDate) &&
        Objects.equals(this.currencyCode, accounting.currencyCode) &&
        Objects.equals(this.id, accounting.id) &&
        Objects.equals(this.metadata, accounting.metadata) &&
        Objects.equals(this.periodType, accounting.periodType) &&
        Objects.equals(this.periodYear, accounting.periodYear) &&
        Objects.equals(this.secondaryId, accounting.secondaryId) &&
        Objects.equals(this.statDate, accounting.statDate) &&
        Objects.equals(this.statName, accounting.statName) &&
        Objects.equals(this.statValue, accounting.statValue) &&
        Objects.equals(this.updateDate, accounting.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(clientId, createDate, currencyCode, id, metadata, periodType, periodYear, secondaryId, statDate, statName, statValue, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Accounting {\n");
    
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    periodType: ").append(toIndentedString(periodType)).append("\n");
    sb.append("    periodYear: ").append(toIndentedString(periodYear)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    statDate: ").append(toIndentedString(statDate)).append("\n");
    sb.append("    statName: ").append(toIndentedString(statName)).append("\n");
    sb.append("    statValue: ").append(toIndentedString(statValue)).append("\n");
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

