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
import io.swagger.annotations.ApiModelProperty;

/**
 * State
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class State {
  @SerializedName("abbreviation")
  private String abbreviation = null;

  @SerializedName("country_code")
  private String countryCode = null;

  @SerializedName("state")
  private String state = null;

  public State abbreviation(String abbreviation) {
    this.abbreviation = abbreviation;
    return this;
  }

   /**
   * abbreviation
   * @return abbreviation
  **/
  @ApiModelProperty(example = "AL", value = "abbreviation")
  public String getAbbreviation() {
    return abbreviation;
  }

  public void setAbbreviation(String abbreviation) {
    this.abbreviation = abbreviation;
  }

  public State countryCode(String countryCode) {
    this.countryCode = countryCode;
    return this;
  }

   /**
   * countryCode
   * @return countryCode
  **/
  @ApiModelProperty(example = "US", value = "countryCode")
  public String getCountryCode() {
    return countryCode;
  }

  public void setCountryCode(String countryCode) {
    this.countryCode = countryCode;
  }

  public State state(String state) {
    this.state = state;
    return this;
  }

   /**
   * state
   * @return state
  **/
  @ApiModelProperty(example = "Alabama", value = "state")
  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    State state = (State) o;
    return Objects.equals(this.abbreviation, state.abbreviation) &&
        Objects.equals(this.countryCode, state.countryCode) &&
        Objects.equals(this.state, state.state);
  }

  @Override
  public int hashCode() {
    return Objects.hash(abbreviation, countryCode, state);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class State {\n");
    
    sb.append("    abbreviation: ").append(toIndentedString(abbreviation)).append("\n");
    sb.append("    countryCode: ").append(toIndentedString(countryCode)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
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

