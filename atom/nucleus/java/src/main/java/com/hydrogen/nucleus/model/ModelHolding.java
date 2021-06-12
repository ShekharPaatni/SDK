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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * ModelHolding
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class ModelHolding {
  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("current_weight")
  private Double currentWeight = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("drift_factor")
  private Float driftFactor = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("is_cash")
  private Boolean isCash = null;

  @SerializedName("is_initial_holding")
  private Boolean isInitialHolding = null;

  @SerializedName("is_safe_security")
  private Boolean isSafeSecurity = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("model_description")
  private String modelDescription = null;

  @SerializedName("model_id")
  private UUID modelId = null;

  @SerializedName("model_name")
  private String modelName = null;

  @SerializedName("model_weight")
  private Double modelWeight = null;

  @SerializedName("sec_price")
  private Double secPrice = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("security_id")
  private UUID securityId = null;

  @SerializedName("strategic_weight")
  private Double strategicWeight = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public ModelHolding createDate(OffsetDateTime createDate) {
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

  public ModelHolding currentWeight(Double currentWeight) {
    this.currentWeight = currentWeight;
    return this;
  }

   /**
   * Model Holding current weight
   * @return currentWeight
  **/
  @ApiModelProperty(example = "0.88", required = true, value = "Model Holding current weight")
  public Double getCurrentWeight() {
    return currentWeight;
  }

  public void setCurrentWeight(Double currentWeight) {
    this.currentWeight = currentWeight;
  }

  public ModelHolding date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Model Holding date
   * @return date
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", required = true, value = "Model Holding date")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public ModelHolding driftFactor(Float driftFactor) {
    this.driftFactor = driftFactor;
    return this;
  }

   /**
   * driftFactor
   * @return driftFactor
  **/
  @ApiModelProperty(example = "0.9", value = "driftFactor")
  public Float getDriftFactor() {
    return driftFactor;
  }

  public void setDriftFactor(Float driftFactor) {
    this.driftFactor = driftFactor;
  }

  public ModelHolding id(UUID id) {
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

  public ModelHolding isCash(Boolean isCash) {
    this.isCash = isCash;
    return this;
  }

   /**
   * isCash
   * @return isCash
  **/
  @ApiModelProperty(example = "true", value = "isCash")
  public Boolean isIsCash() {
    return isCash;
  }

  public void setIsCash(Boolean isCash) {
    this.isCash = isCash;
  }

  public ModelHolding isInitialHolding(Boolean isInitialHolding) {
    this.isInitialHolding = isInitialHolding;
    return this;
  }

   /**
   * isInitialHolding
   * @return isInitialHolding
  **/
  @ApiModelProperty(example = "true", value = "isInitialHolding")
  public Boolean isIsInitialHolding() {
    return isInitialHolding;
  }

  public void setIsInitialHolding(Boolean isInitialHolding) {
    this.isInitialHolding = isInitialHolding;
  }

  public ModelHolding isSafeSecurity(Boolean isSafeSecurity) {
    this.isSafeSecurity = isSafeSecurity;
    return this;
  }

   /**
   * isSafeSecurity
   * @return isSafeSecurity
  **/
  @ApiModelProperty(example = "true", value = "isSafeSecurity")
  public Boolean isIsSafeSecurity() {
    return isSafeSecurity;
  }

  public void setIsSafeSecurity(Boolean isSafeSecurity) {
    this.isSafeSecurity = isSafeSecurity;
  }

  public ModelHolding metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public ModelHolding putMetadataItem(String key, String metadataItem) {
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
  @ApiModelProperty(example = "{}", value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }

  public ModelHolding modelDescription(String modelDescription) {
    this.modelDescription = modelDescription;
    return this;
  }

   /**
   * Get modelDescription
   * @return modelDescription
  **/
  @ApiModelProperty(value = "")
  public String getModelDescription() {
    return modelDescription;
  }

  public void setModelDescription(String modelDescription) {
    this.modelDescription = modelDescription;
  }

  public ModelHolding modelId(UUID modelId) {
    this.modelId = modelId;
    return this;
  }

   /**
   * modelId
   * @return modelId
  **/
  @ApiModelProperty(example = "62fd0a9f-4bac-4b1d-94d2-2c5ea2adca3d", required = true, value = "modelId")
  public UUID getModelId() {
    return modelId;
  }

  public void setModelId(UUID modelId) {
    this.modelId = modelId;
  }

  public ModelHolding modelName(String modelName) {
    this.modelName = modelName;
    return this;
  }

   /**
   * Get modelName
   * @return modelName
  **/
  @ApiModelProperty(value = "")
  public String getModelName() {
    return modelName;
  }

  public void setModelName(String modelName) {
    this.modelName = modelName;
  }

  public ModelHolding modelWeight(Double modelWeight) {
    this.modelWeight = modelWeight;
    return this;
  }

   /**
   * Get modelWeight
   * @return modelWeight
  **/
  @ApiModelProperty(value = "")
  public Double getModelWeight() {
    return modelWeight;
  }

  public void setModelWeight(Double modelWeight) {
    this.modelWeight = modelWeight;
  }

  public ModelHolding secPrice(Double secPrice) {
    this.secPrice = secPrice;
    return this;
  }

   /**
   * Get secPrice
   * @return secPrice
  **/
  @ApiModelProperty(value = "")
  public Double getSecPrice() {
    return secPrice;
  }

  public void setSecPrice(Double secPrice) {
    this.secPrice = secPrice;
  }

  public ModelHolding secondaryId(String secondaryId) {
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

  public ModelHolding securityId(UUID securityId) {
    this.securityId = securityId;
    return this;
  }

   /**
   * securityId
   * @return securityId
  **/
  @ApiModelProperty(example = "29c3f995-bd45-4346-aea2-fd4476568d4c", required = true, value = "securityId")
  public UUID getSecurityId() {
    return securityId;
  }

  public void setSecurityId(UUID securityId) {
    this.securityId = securityId;
  }

  public ModelHolding strategicWeight(Double strategicWeight) {
    this.strategicWeight = strategicWeight;
    return this;
  }

   /**
   * Model Holding strategicWeight
   * @return strategicWeight
  **/
  @ApiModelProperty(example = "0.89", required = true, value = "Model Holding strategicWeight")
  public Double getStrategicWeight() {
    return strategicWeight;
  }

  public void setStrategicWeight(Double strategicWeight) {
    this.strategicWeight = strategicWeight;
  }

  public ModelHolding updateDate(OffsetDateTime updateDate) {
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
    ModelHolding modelHolding = (ModelHolding) o;
    return Objects.equals(this.createDate, modelHolding.createDate) &&
        Objects.equals(this.currentWeight, modelHolding.currentWeight) &&
        Objects.equals(this.date, modelHolding.date) &&
        Objects.equals(this.driftFactor, modelHolding.driftFactor) &&
        Objects.equals(this.id, modelHolding.id) &&
        Objects.equals(this.isCash, modelHolding.isCash) &&
        Objects.equals(this.isInitialHolding, modelHolding.isInitialHolding) &&
        Objects.equals(this.isSafeSecurity, modelHolding.isSafeSecurity) &&
        Objects.equals(this.metadata, modelHolding.metadata) &&
        Objects.equals(this.modelDescription, modelHolding.modelDescription) &&
        Objects.equals(this.modelId, modelHolding.modelId) &&
        Objects.equals(this.modelName, modelHolding.modelName) &&
        Objects.equals(this.modelWeight, modelHolding.modelWeight) &&
        Objects.equals(this.secPrice, modelHolding.secPrice) &&
        Objects.equals(this.secondaryId, modelHolding.secondaryId) &&
        Objects.equals(this.securityId, modelHolding.securityId) &&
        Objects.equals(this.strategicWeight, modelHolding.strategicWeight) &&
        Objects.equals(this.updateDate, modelHolding.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(createDate, currentWeight, date, driftFactor, id, isCash, isInitialHolding, isSafeSecurity, metadata, modelDescription, modelId, modelName, modelWeight, secPrice, secondaryId, securityId, strategicWeight, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ModelHolding {\n");
    
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currentWeight: ").append(toIndentedString(currentWeight)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    driftFactor: ").append(toIndentedString(driftFactor)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isCash: ").append(toIndentedString(isCash)).append("\n");
    sb.append("    isInitialHolding: ").append(toIndentedString(isInitialHolding)).append("\n");
    sb.append("    isSafeSecurity: ").append(toIndentedString(isSafeSecurity)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    modelDescription: ").append(toIndentedString(modelDescription)).append("\n");
    sb.append("    modelId: ").append(toIndentedString(modelId)).append("\n");
    sb.append("    modelName: ").append(toIndentedString(modelName)).append("\n");
    sb.append("    modelWeight: ").append(toIndentedString(modelWeight)).append("\n");
    sb.append("    secPrice: ").append(toIndentedString(secPrice)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    securityId: ").append(toIndentedString(securityId)).append("\n");
    sb.append("    strategicWeight: ").append(toIndentedString(strategicWeight)).append("\n");
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

