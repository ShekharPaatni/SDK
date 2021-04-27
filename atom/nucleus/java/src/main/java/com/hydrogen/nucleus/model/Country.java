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

/**
 * Country Object
 */
@ApiModel(description = "Country Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class Country {
  @SerializedName("alpha2_code")
  private String alpha2Code = null;

  @SerializedName("alpha3_code")
  private String alpha3Code = null;

  @SerializedName("country")
  private String country = null;

  @SerializedName("latitude")
  private Double latitude = null;

  @SerializedName("longitude")
  private Double longitude = null;

  @SerializedName("numeric_code")
  private Integer numericCode = null;

  public Country alpha2Code(String alpha2Code) {
    this.alpha2Code = alpha2Code;
    return this;
  }

   /**
   * alpha_2_code
   * @return alpha2Code
  **/
  @ApiModelProperty(example = "AE", required = true, value = "alpha_2_code")
  public String getAlpha2Code() {
    return alpha2Code;
  }

  public void setAlpha2Code(String alpha2Code) {
    this.alpha2Code = alpha2Code;
  }

  public Country alpha3Code(String alpha3Code) {
    this.alpha3Code = alpha3Code;
    return this;
  }

   /**
   * alpha_3_code
   * @return alpha3Code
  **/
  @ApiModelProperty(example = "ARE", value = "alpha_3_code")
  public String getAlpha3Code() {
    return alpha3Code;
  }

  public void setAlpha3Code(String alpha3Code) {
    this.alpha3Code = alpha3Code;
  }

  public Country country(String country) {
    this.country = country;
    return this;
  }

   /**
   * country
   * @return country
  **/
  @ApiModelProperty(example = "United Arab Emirates", required = true, value = "country")
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }

  public Country latitude(Double latitude) {
    this.latitude = latitude;
    return this;
  }

   /**
   * latitude
   * @return latitude
  **/
  @ApiModelProperty(example = "23.424076", value = "latitude")
  public Double getLatitude() {
    return latitude;
  }

  public void setLatitude(Double latitude) {
    this.latitude = latitude;
  }

  public Country longitude(Double longitude) {
    this.longitude = longitude;
    return this;
  }

   /**
   * longitude
   * @return longitude
  **/
  @ApiModelProperty(example = "53.847818", value = "longitude")
  public Double getLongitude() {
    return longitude;
  }

  public void setLongitude(Double longitude) {
    this.longitude = longitude;
  }

  public Country numericCode(Integer numericCode) {
    this.numericCode = numericCode;
    return this;
  }

   /**
   * numericCode
   * @return numericCode
  **/
  @ApiModelProperty(example = "4", required = true, value = "numericCode")
  public Integer getNumericCode() {
    return numericCode;
  }

  public void setNumericCode(Integer numericCode) {
    this.numericCode = numericCode;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Country country = (Country) o;
    return Objects.equals(this.alpha2Code, country.alpha2Code) &&
        Objects.equals(this.alpha3Code, country.alpha3Code) &&
        Objects.equals(this.country, country.country) &&
        Objects.equals(this.latitude, country.latitude) &&
        Objects.equals(this.longitude, country.longitude) &&
        Objects.equals(this.numericCode, country.numericCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(alpha2Code, alpha3Code, country, latitude, longitude, numericCode);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Country {\n");
    
    sb.append("    alpha2Code: ").append(toIndentedString(alpha2Code)).append("\n");
    sb.append("    alpha3Code: ").append(toIndentedString(alpha3Code)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    latitude: ").append(toIndentedString(latitude)).append("\n");
    sb.append("    longitude: ").append(toIndentedString(longitude)).append("\n");
    sb.append("    numericCode: ").append(toIndentedString(numericCode)).append("\n");
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

