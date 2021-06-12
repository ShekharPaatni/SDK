/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.1
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
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * SecurityPrice
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class SecurityPrice {
  @SerializedName("adjusted_price")
  private Double adjustedPrice = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("date")
  private OffsetDateTime date = null;

  @SerializedName("high")
  private Double high = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("low")
  private Double low = null;

  @SerializedName("open")
  private Double open = null;

  @SerializedName("price")
  private Double price = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("security_id")
  private UUID securityId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  @SerializedName("volume")
  private Double volume = null;

  public SecurityPrice adjustedPrice(Double adjustedPrice) {
    this.adjustedPrice = adjustedPrice;
    return this;
  }

   /**
   * Security adjusted price
   * @return adjustedPrice
  **/
  @ApiModelProperty(example = "0.08", value = "Security adjusted price")
  public Double getAdjustedPrice() {
    return adjustedPrice;
  }

  public void setAdjustedPrice(Double adjustedPrice) {
    this.adjustedPrice = adjustedPrice;
  }

  public SecurityPrice createDate(OffsetDateTime createDate) {
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

  public SecurityPrice currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currency_code
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", value = "currency_code")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public SecurityPrice date(OffsetDateTime date) {
    this.date = date;
    return this;
  }

   /**
   * Security date
   * @return date
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", required = true, value = "Security date")
  public OffsetDateTime getDate() {
    return date;
  }

  public void setDate(OffsetDateTime date) {
    this.date = date;
  }

  public SecurityPrice high(Double high) {
    this.high = high;
    return this;
  }

   /**
   * high
   * @return high
  **/
  @ApiModelProperty(example = "0.08", value = "high")
  public Double getHigh() {
    return high;
  }

  public void setHigh(Double high) {
    this.high = high;
  }

  public SecurityPrice id(UUID id) {
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

  public SecurityPrice low(Double low) {
    this.low = low;
    return this;
  }

   /**
   * low
   * @return low
  **/
  @ApiModelProperty(example = "0.08", value = "low")
  public Double getLow() {
    return low;
  }

  public void setLow(Double low) {
    this.low = low;
  }

  public SecurityPrice open(Double open) {
    this.open = open;
    return this;
  }

   /**
   * open
   * @return open
  **/
  @ApiModelProperty(example = "0.08", value = "open")
  public Double getOpen() {
    return open;
  }

  public void setOpen(Double open) {
    this.open = open;
  }

  public SecurityPrice price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Security price
   * @return price
  **/
  @ApiModelProperty(example = "0.18", required = true, value = "Security price")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public SecurityPrice secondaryId(String secondaryId) {
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

  public SecurityPrice securityId(UUID securityId) {
    this.securityId = securityId;
    return this;
  }

   /**
   * Security id
   * @return securityId
  **/
  @ApiModelProperty(example = "29c3f995-bd45-4346-aea2-fd4476568d4c", required = true, value = "Security id")
  public UUID getSecurityId() {
    return securityId;
  }

  public void setSecurityId(UUID securityId) {
    this.securityId = securityId;
  }

  public SecurityPrice updateDate(OffsetDateTime updateDate) {
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

  public SecurityPrice volume(Double volume) {
    this.volume = volume;
    return this;
  }

   /**
   * volume
   * @return volume
  **/
  @ApiModelProperty(example = "0.08", value = "volume")
  public Double getVolume() {
    return volume;
  }

  public void setVolume(Double volume) {
    this.volume = volume;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SecurityPrice securityPrice = (SecurityPrice) o;
    return Objects.equals(this.adjustedPrice, securityPrice.adjustedPrice) &&
        Objects.equals(this.createDate, securityPrice.createDate) &&
        Objects.equals(this.currencyCode, securityPrice.currencyCode) &&
        Objects.equals(this.date, securityPrice.date) &&
        Objects.equals(this.high, securityPrice.high) &&
        Objects.equals(this.id, securityPrice.id) &&
        Objects.equals(this.low, securityPrice.low) &&
        Objects.equals(this.open, securityPrice.open) &&
        Objects.equals(this.price, securityPrice.price) &&
        Objects.equals(this.secondaryId, securityPrice.secondaryId) &&
        Objects.equals(this.securityId, securityPrice.securityId) &&
        Objects.equals(this.updateDate, securityPrice.updateDate) &&
        Objects.equals(this.volume, securityPrice.volume);
  }

  @Override
  public int hashCode() {
    return Objects.hash(adjustedPrice, createDate, currencyCode, date, high, id, low, open, price, secondaryId, securityId, updateDate, volume);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SecurityPrice {\n");
    
    sb.append("    adjustedPrice: ").append(toIndentedString(adjustedPrice)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    high: ").append(toIndentedString(high)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    low: ").append(toIndentedString(low)).append("\n");
    sb.append("    open: ").append(toIndentedString(open)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    securityId: ").append(toIndentedString(securityId)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
    sb.append("    volume: ").append(toIndentedString(volume)).append("\n");
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

