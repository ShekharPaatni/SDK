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
 * Date-Double Mapping Object
 */
@ApiModel(description = "Date-Double Mapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class DateDoubleVO {
  @SerializedName("additions")
  private Double additions = null;

  @SerializedName("date")
  private String date = null;

  @SerializedName("value")
  private Double value = null;

  public DateDoubleVO additions(Double additions) {
    this.additions = additions;
    return this;
  }

   /**
   * additions
   * @return additions
  **/
  @ApiModelProperty(example = "0.0", value = "additions")
  public Double getAdditions() {
    return additions;
  }

  public void setAdditions(Double additions) {
    this.additions = additions;
  }

  public DateDoubleVO date(String date) {
    this.date = date;
    return this;
  }

   /**
   * date
   * @return date
  **/
  @ApiModelProperty(example = "2018-02-03", value = "date")
  public String getDate() {
    return date;
  }

  public void setDate(String date) {
    this.date = date;
  }

  public DateDoubleVO value(Double value) {
    this.value = value;
    return this;
  }

   /**
   * value
   * @return value
  **/
  @ApiModelProperty(example = "20000.0", value = "value")
  public Double getValue() {
    return value;
  }

  public void setValue(Double value) {
    this.value = value;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DateDoubleVO dateDoubleVO = (DateDoubleVO) o;
    return Objects.equals(this.additions, dateDoubleVO.additions) &&
        Objects.equals(this.date, dateDoubleVO.date) &&
        Objects.equals(this.value, dateDoubleVO.value);
  }

  @Override
  public int hashCode() {
    return Objects.hash(additions, date, value);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DateDoubleVO {\n");
    
    sb.append("    additions: ").append(toIndentedString(additions)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
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

