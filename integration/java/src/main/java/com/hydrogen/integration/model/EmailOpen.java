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
import com.hydrogen.integration.model.Email;
import java.io.IOException;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * EmailOpen
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class EmailOpen {
  @SerializedName("email")
  private Email email = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("open_timestamp")
  private OffsetDateTime openTimestamp = null;

  public EmailOpen email(Email email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public Email getEmail() {
    return email;
  }

  public void setEmail(Email email) {
    this.email = email;
  }

  public EmailOpen id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(value = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public EmailOpen openTimestamp(OffsetDateTime openTimestamp) {
    this.openTimestamp = openTimestamp;
    return this;
  }

   /**
   * open_timestamp
   * @return openTimestamp
  **/
  @ApiModelProperty(example = "2018-11-29T14:48:38.000+0000", required = true, value = "open_timestamp")
  public OffsetDateTime getOpenTimestamp() {
    return openTimestamp;
  }

  public void setOpenTimestamp(OffsetDateTime openTimestamp) {
    this.openTimestamp = openTimestamp;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EmailOpen emailOpen = (EmailOpen) o;
    return Objects.equals(this.email, emailOpen.email) &&
        Objects.equals(this.id, emailOpen.id) &&
        Objects.equals(this.openTimestamp, emailOpen.openTimestamp);
  }

  @Override
  public int hashCode() {
    return Objects.hash(email, id, openTimestamp);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EmailOpen {\n");
    
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    openTimestamp: ").append(toIndentedString(openTimestamp)).append("\n");
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

