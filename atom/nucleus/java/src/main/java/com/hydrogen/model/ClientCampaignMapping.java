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

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * ClientCampaignMapping Object
 */
@ApiModel(description = "ClientCampaignMapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class ClientCampaignMapping {
  @SerializedName("campaign_id")
  private UUID campaignId = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("ip")
  private String ip = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public ClientCampaignMapping campaignId(UUID campaignId) {
    this.campaignId = campaignId;
    return this;
  }

   /**
   * campaignId
   * @return campaignId
  **/
  @ApiModelProperty(example = "f572eedd-deab-4efd-9b30-9e74787cad44", required = true, value = "campaignId")
  public UUID getCampaignId() {
    return campaignId;
  }

  public void setCampaignId(UUID campaignId) {
    this.campaignId = campaignId;
  }

  public ClientCampaignMapping clientId(UUID clientId) {
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

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public ClientCampaignMapping ip(String ip) {
    this.ip = ip;
    return this;
  }

   /**
   * ip
   * @return ip
  **/
  @ApiModelProperty(example = "127.000.000", value = "ip")
  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }

  public ClientCampaignMapping metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public ClientCampaignMapping putMetadataItem(String key, String metadataItem) {
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

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
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
    ClientCampaignMapping clientCampaignMapping = (ClientCampaignMapping) o;
    return Objects.equals(this.campaignId, clientCampaignMapping.campaignId) &&
        Objects.equals(this.clientId, clientCampaignMapping.clientId) &&
        Objects.equals(this.createDate, clientCampaignMapping.createDate) &&
        Objects.equals(this.id, clientCampaignMapping.id) &&
        Objects.equals(this.ip, clientCampaignMapping.ip) &&
        Objects.equals(this.metadata, clientCampaignMapping.metadata) &&
        Objects.equals(this.secondaryId, clientCampaignMapping.secondaryId) &&
        Objects.equals(this.updateDate, clientCampaignMapping.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(campaignId, clientId, createDate, id, ip, metadata, secondaryId, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientCampaignMapping {\n");
    
    sb.append("    campaignId: ").append(toIndentedString(campaignId)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    ip: ").append(toIndentedString(ip)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
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

