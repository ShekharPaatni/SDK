/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

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

/**
 * PoliticallyExposedPersonDTO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class PoliticallyExposedPersonDTO {
  @SerializedName("association")
  private String association = null;

  @SerializedName("exposed")
  private Boolean exposed = null;

  @SerializedName("name")
  private String name = null;

  @SerializedName("position")
  private String position = null;

  public PoliticallyExposedPersonDTO association(String association) {
    this.association = association;
    return this;
  }

   /**
   * Get association
   * @return association
  **/
  @ApiModelProperty(value = "")
  public String getAssociation() {
    return association;
  }

  public void setAssociation(String association) {
    this.association = association;
  }

  public PoliticallyExposedPersonDTO exposed(Boolean exposed) {
    this.exposed = exposed;
    return this;
  }

   /**
   * Get exposed
   * @return exposed
  **/
  @ApiModelProperty(value = "")
  public Boolean isExposed() {
    return exposed;
  }

  public void setExposed(Boolean exposed) {
    this.exposed = exposed;
  }

  public PoliticallyExposedPersonDTO name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Get name
   * @return name
  **/
  @ApiModelProperty(value = "")
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public PoliticallyExposedPersonDTO position(String position) {
    this.position = position;
    return this;
  }

   /**
   * Get position
   * @return position
  **/
  @ApiModelProperty(value = "")
  public String getPosition() {
    return position;
  }

  public void setPosition(String position) {
    this.position = position;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PoliticallyExposedPersonDTO politicallyExposedPersonDTO = (PoliticallyExposedPersonDTO) o;
    return Objects.equals(this.association, politicallyExposedPersonDTO.association) &&
        Objects.equals(this.exposed, politicallyExposedPersonDTO.exposed) &&
        Objects.equals(this.name, politicallyExposedPersonDTO.name) &&
        Objects.equals(this.position, politicallyExposedPersonDTO.position);
  }

  @Override
  public int hashCode() {
    return Objects.hash(association, exposed, name, position);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PoliticallyExposedPersonDTO {\n");
    
    sb.append("    association: ").append(toIndentedString(association)).append("\n");
    sb.append("    exposed: ").append(toIndentedString(exposed)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    position: ").append(toIndentedString(position)).append("\n");
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

