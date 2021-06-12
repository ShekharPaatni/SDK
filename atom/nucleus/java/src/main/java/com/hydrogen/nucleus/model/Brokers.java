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

/**
 * Brokers Object
 */
@ApiModel(description = "Brokers Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class Brokers {
  @SerializedName("broker_name")
  private String brokerName = null;

  @SerializedName("status")
  private String status = null;

  public Brokers brokerName(String brokerName) {
    this.brokerName = brokerName;
    return this;
  }

   /**
   * broker_name
   * @return brokerName
  **/
  @ApiModelProperty(example = "xyz", required = true, value = "broker_name")
  public String getBrokerName() {
    return brokerName;
  }

  public void setBrokerName(String brokerName) {
    this.brokerName = brokerName;
  }

  public Brokers status(String status) {
    this.status = status;
    return this;
  }

   /**
   * status
   * @return status
  **/
  @ApiModelProperty(example = "xyz", required = true, value = "status")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Brokers brokers = (Brokers) o;
    return Objects.equals(this.brokerName, brokers.brokerName) &&
        Objects.equals(this.status, brokers.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(brokerName, status);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Brokers {\n");
    
    sb.append("    brokerName: ").append(toIndentedString(brokerName)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

