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
import com.hydrogen.nucleus.model.FundingRequestMap;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * Roundup Object
 */
@ApiModel(description = "Roundup Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class Roundup {
  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("funding_requests")
  private List<FundingRequestMap> fundingRequests = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("roundup_setting_id")
  private UUID roundupSettingId = null;

  @SerializedName("total_roundup_amount")
  private Double totalRoundupAmount = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public Roundup accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * account_id
   * @return accountId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "account_id")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public Roundup clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * client_id
   * @return clientId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "client_id")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public Roundup createDate(OffsetDateTime createDate) {
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

  public Roundup fundingRequests(List<FundingRequestMap> fundingRequests) {
    this.fundingRequests = fundingRequests;
    return this;
  }

  public Roundup addFundingRequestsItem(FundingRequestMap fundingRequestsItem) {
    if (this.fundingRequests == null) {
      this.fundingRequests = new ArrayList<FundingRequestMap>();
    }
    this.fundingRequests.add(fundingRequestsItem);
    return this;
  }

   /**
   * Get fundingRequests
   * @return fundingRequests
  **/
  @ApiModelProperty(example = "{}", value = "")
  public List<FundingRequestMap> getFundingRequests() {
    return fundingRequests;
  }

  public void setFundingRequests(List<FundingRequestMap> fundingRequests) {
    this.fundingRequests = fundingRequests;
  }

  public Roundup id(UUID id) {
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

  public Roundup roundupSettingId(UUID roundupSettingId) {
    this.roundupSettingId = roundupSettingId;
    return this;
  }

   /**
   * roundup_setting_id
   * @return roundupSettingId
  **/
  @ApiModelProperty(example = "099961da-7f41-4309-950f-2b51689a0033", required = true, value = "roundup_setting_id")
  public UUID getRoundupSettingId() {
    return roundupSettingId;
  }

  public void setRoundupSettingId(UUID roundupSettingId) {
    this.roundupSettingId = roundupSettingId;
  }

  public Roundup totalRoundupAmount(Double totalRoundupAmount) {
    this.totalRoundupAmount = totalRoundupAmount;
    return this;
  }

   /**
   * totalRoundupAmount
   * @return totalRoundupAmount
  **/
  @ApiModelProperty(example = "12.0", value = "totalRoundupAmount")
  public Double getTotalRoundupAmount() {
    return totalRoundupAmount;
  }

  public void setTotalRoundupAmount(Double totalRoundupAmount) {
    this.totalRoundupAmount = totalRoundupAmount;
  }

  public Roundup updateDate(OffsetDateTime updateDate) {
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
    Roundup roundup = (Roundup) o;
    return Objects.equals(this.accountId, roundup.accountId) &&
        Objects.equals(this.clientId, roundup.clientId) &&
        Objects.equals(this.createDate, roundup.createDate) &&
        Objects.equals(this.fundingRequests, roundup.fundingRequests) &&
        Objects.equals(this.id, roundup.id) &&
        Objects.equals(this.roundupSettingId, roundup.roundupSettingId) &&
        Objects.equals(this.totalRoundupAmount, roundup.totalRoundupAmount) &&
        Objects.equals(this.updateDate, roundup.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, clientId, createDate, fundingRequests, id, roundupSettingId, totalRoundupAmount, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Roundup {\n");
    
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    fundingRequests: ").append(toIndentedString(fundingRequests)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    roundupSettingId: ").append(toIndentedString(roundupSettingId)).append("\n");
    sb.append("    totalRoundupAmount: ").append(toIndentedString(totalRoundupAmount)).append("\n");
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

