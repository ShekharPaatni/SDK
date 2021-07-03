/*
 * Hydrogen Nucleus API
 * The Hydrogen Nucleus API
 *
 * OpenAPI spec version: 1.9.2
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

/**
 * ClientAddress Object
 */
@ApiModel(description = "ClientAddress Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class ClientAddress {
  @SerializedName("address_line1")
  private String addressLine1 = null;

  @SerializedName("address_line2")
  private String addressLine2 = null;

  @SerializedName("city")
  private String city = null;

  @SerializedName("country")
  private String country = null;

  @SerializedName("is_primary")
  private Boolean isPrimary = null;

  @SerializedName("postalcode")
  private String postalcode = null;

  @SerializedName("state")
  private String state = null;

  @SerializedName("type")
  private String type = null;

  public ClientAddress addressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
    return this;
  }

   /**
   * addressLine1
   * @return addressLine1
  **/
  @ApiModelProperty(example = "Apt 404B", required = true, value = "addressLine1")
  public String getAddressLine1() {
    return addressLine1;
  }

  public void setAddressLine1(String addressLine1) {
    this.addressLine1 = addressLine1;
  }

  public ClientAddress addressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
    return this;
  }

   /**
   * addressLine2
   * @return addressLine2
  **/
  @ApiModelProperty(example = "Example Street", value = "addressLine2")
  public String getAddressLine2() {
    return addressLine2;
  }

  public void setAddressLine2(String addressLine2) {
    this.addressLine2 = addressLine2;
  }

  public ClientAddress city(String city) {
    this.city = city;
    return this;
  }

   /**
   * city
   * @return city
  **/
  @ApiModelProperty(example = "New York", required = true, value = "city")
  public String getCity() {
    return city;
  }

  public void setCity(String city) {
    this.city = city;
  }

  public ClientAddress country(String country) {
    this.country = country;
    return this;
  }

   /**
   * country
   * @return country
  **/
  @ApiModelProperty(example = "US", required = true, value = "country")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public ClientAddress isPrimary(Boolean isPrimary) {
    this.isPrimary = isPrimary;
    return this;
  }

   /**
   *  is_primary
   * @return isPrimary
  **/
  @ApiModelProperty(example = "false", value = " is_primary")
  public Boolean isIsPrimary() {
    return isPrimary;
  }

  public void setIsPrimary(Boolean isPrimary) {
    this.isPrimary = isPrimary;
  }

  public ClientAddress postalcode(String postalcode) {
    this.postalcode = postalcode;
    return this;
  }

   /**
   * postalcode
   * @return postalcode
  **/
  @ApiModelProperty(example = "10001", value = "postalcode")
  public String getPostalcode() {
    return postalcode;
  }

  public void setPostalcode(String postalcode) {
    this.postalcode = postalcode;
  }

  public ClientAddress state(String state) {
    this.state = state;
    return this;
  }

   /**
   * state
   * @return state
  **/
  @ApiModelProperty(example = "CA", required = true, value = "state")
  public String getState() {
    return state;
  }

  public void setState(String state) {
    this.state = state;
  }

  public ClientAddress type(String type) {
    this.type = type;
    return this;
  }

   /**
   * type
   * @return type
  **/
  @ApiModelProperty(example = "Home", required = true, value = "type")
  public String getType() {
    return type;
  }

  public void setType(String type) {
    this.type = type;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientAddress clientAddress = (ClientAddress) o;
    return Objects.equals(this.addressLine1, clientAddress.addressLine1) &&
        Objects.equals(this.addressLine2, clientAddress.addressLine2) &&
        Objects.equals(this.city, clientAddress.city) &&
        Objects.equals(this.country, clientAddress.country) &&
        Objects.equals(this.isPrimary, clientAddress.isPrimary) &&
        Objects.equals(this.postalcode, clientAddress.postalcode) &&
        Objects.equals(this.state, clientAddress.state) &&
        Objects.equals(this.type, clientAddress.type);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addressLine1, addressLine2, city, country, isPrimary, postalcode, state, type);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientAddress {\n");
    
    sb.append("    addressLine1: ").append(toIndentedString(addressLine1)).append("\n");
    sb.append("    addressLine2: ").append(toIndentedString(addressLine2)).append("\n");
    sb.append("    city: ").append(toIndentedString(city)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    isPrimary: ").append(toIndentedString(isPrimary)).append("\n");
    sb.append("    postalcode: ").append(toIndentedString(postalcode)).append("\n");
    sb.append("    state: ").append(toIndentedString(state)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
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

