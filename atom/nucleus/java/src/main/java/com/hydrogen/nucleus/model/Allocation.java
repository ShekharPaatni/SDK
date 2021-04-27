/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.nucleus.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * Allocation Object
 */
@ApiModel(description = "Allocation Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class Allocation {
  @SerializedName("benchmark_id")
  private UUID benchmarkId = null;

  @SerializedName("category")
  private String category = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("inception_date")
  private LocalDate inceptionDate = null;

  @SerializedName("is_active")
  private Boolean isActive = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("node_map")
  private List<AllocationNodeMap> nodeMap = null;

  @SerializedName("performance")
  private Double performance = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  @SerializedName("volatility")
  private Double volatility = null;

  public Allocation benchmarkId(UUID benchmarkId) {
    this.benchmarkId = benchmarkId;
    return this;
  }

   /**
   * benchmarkId
   * @return benchmarkId
  **/
  @ApiModelProperty(example = "f3c384dd-5895-4da8-a356-61f266269082", value = "benchmarkId")
  public UUID getBenchmarkId() {
    return benchmarkId;
  }

  public void setBenchmarkId(UUID benchmarkId) {
    this.benchmarkId = benchmarkId;
  }

  public Allocation category(String category) {
    this.category = category;
    return this;
  }

   /**
   * Get category
   * @return category
  **/
  @ApiModelProperty(value = "")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public Allocation clientId(UUID clientId) {
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

  public Allocation description(String description) {
    this.description = description;
    return this;
  }

   /**
   * description
   * @return description
  **/
  @ApiModelProperty(example = "Tech ETFs", value = "description")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Allocation inceptionDate(LocalDate inceptionDate) {
    this.inceptionDate = inceptionDate;
    return this;
  }

   /**
   * inceptionDate
   * @return inceptionDate
  **/
  @ApiModelProperty(example = "2018-01-09'T'12:00:00", value = "inceptionDate")
  public LocalDate getInceptionDate() {
    return inceptionDate;
  }

  public void setInceptionDate(LocalDate inceptionDate) {
    this.inceptionDate = inceptionDate;
  }

  public Allocation isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * isActive
   * @return isActive
  **/
  @ApiModelProperty(example = "true", value = "isActive")
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

  public Allocation name(String name) {
    this.name = name;
    return this;
  }

   /**
   * name
   * @return name
  **/
  @ApiModelProperty(example = "Tech", required = true, value = "name")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

   /**
   * Get nodeMap
   * @return nodeMap
  **/
  @ApiModelProperty(example = "{}", value = "")
  public List<AllocationNodeMap> getNodeMap() {
    return nodeMap;
  }

  public Allocation performance(Double performance) {
    this.performance = performance;
    return this;
  }

   /**
   * performance
   * @return performance
  **/
  @ApiModelProperty(example = "0.9", value = "performance")
  public Double getPerformance() {
    return performance;
  }

  public void setPerformance(Double performance) {
    this.performance = performance;
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

  public Allocation volatility(Double volatility) {
    this.volatility = volatility;
    return this;
  }

   /**
   * volatility
   * @return volatility
  **/
  @ApiModelProperty(example = "0.9", value = "volatility")
  public Double getVolatility() {
    return volatility;
  }

  public void setVolatility(Double volatility) {
    this.volatility = volatility;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Allocation allocation = (Allocation) o;
    return Objects.equals(this.benchmarkId, allocation.benchmarkId) &&
        Objects.equals(this.category, allocation.category) &&
        Objects.equals(this.clientId, allocation.clientId) &&
        Objects.equals(this.createDate, allocation.createDate) &&
        Objects.equals(this.description, allocation.description) &&
        Objects.equals(this.id, allocation.id) &&
        Objects.equals(this.inceptionDate, allocation.inceptionDate) &&
        Objects.equals(this.isActive, allocation.isActive) &&
        Objects.equals(this.metadata, allocation.metadata) &&
        Objects.equals(this.name, allocation.name) &&
        Objects.equals(this.nodeMap, allocation.nodeMap) &&
        Objects.equals(this.performance, allocation.performance) &&
        Objects.equals(this.secondaryId, allocation.secondaryId) &&
        Objects.equals(this.updateDate, allocation.updateDate) &&
        Objects.equals(this.volatility, allocation.volatility);
  }

  @Override
  public int hashCode() {
    return Objects.hash(benchmarkId, category, clientId, createDate, description, id, inceptionDate, isActive, metadata, name, nodeMap, performance, secondaryId, updateDate, volatility);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Allocation {\n");
    
    sb.append("    benchmarkId: ").append(toIndentedString(benchmarkId)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    inceptionDate: ").append(toIndentedString(inceptionDate)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    nodeMap: ").append(toIndentedString(nodeMap)).append("\n");
    sb.append("    performance: ").append(toIndentedString(performance)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
    sb.append("    volatility: ").append(toIndentedString(volatility)).append("\n");
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

