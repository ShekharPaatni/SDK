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
import io.swagger.client.model.BenchmarkPayloadComposition;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * BenchmarkPayload
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class BenchmarkPayload {
  @SerializedName("name")
  private String name = null;

  @SerializedName("composition")
  private List<BenchmarkPayloadComposition> composition = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("is_active")
  private Boolean isActive = true;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  public BenchmarkPayload name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the benchmark
   * @return name
  **/
  @ApiModelProperty(required = true, value = "Name of the benchmark")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public BenchmarkPayload composition(List<BenchmarkPayloadComposition> composition) {
    this.composition = composition;
    return this;
  }

  public BenchmarkPayload addCompositionItem(BenchmarkPayloadComposition compositionItem) {
    if (this.composition == null) {
      this.composition = new ArrayList<BenchmarkPayloadComposition>();
    }
    this.composition.add(compositionItem);
    return this;
  }

   /**
   * Get composition
   * @return composition
  **/
  @ApiModelProperty(value = "")
  public List<BenchmarkPayloadComposition> getComposition() {
    return composition;
  }

  public void setComposition(List<BenchmarkPayloadComposition> composition) {
    this.composition = composition;
  }

  public BenchmarkPayload description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description of the benchmark such as the market segment that it represents
   * @return description
  **/
  @ApiModelProperty(value = "Description of the benchmark such as the market segment that it represents")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public BenchmarkPayload clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * The ID of the client to which the benchmark belongs, if any
   * @return clientId
  **/
  @ApiModelProperty(value = "The ID of the client to which the benchmark belongs, if any")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

  public BenchmarkPayload isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * Indicates if the benchmark is active. Defaults to true which means it is active
   * @return isActive
  **/
  @ApiModelProperty(value = "Indicates if the benchmark is active. Defaults to true which means it is active")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public BenchmarkPayload secondaryId(String secondaryId) {
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


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    BenchmarkPayload benchmarkPayload = (BenchmarkPayload) o;
    return Objects.equals(this.name, benchmarkPayload.name) &&
        Objects.equals(this.composition, benchmarkPayload.composition) &&
        Objects.equals(this.description, benchmarkPayload.description) &&
        Objects.equals(this.clientId, benchmarkPayload.clientId) &&
        Objects.equals(this.isActive, benchmarkPayload.isActive) &&
        Objects.equals(this.secondaryId, benchmarkPayload.secondaryId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(name, composition, description, clientId, isActive, secondaryId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class BenchmarkPayload {\n");
    
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    composition: ").append(toIndentedString(composition)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
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

