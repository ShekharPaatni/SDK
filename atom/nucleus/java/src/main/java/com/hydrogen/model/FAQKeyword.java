/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;

/**
 * FAQKeyword
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class FAQKeyword {
  @SerializedName("keyword")
  private String keyword = null;

  @SerializedName("priority")
  private Long priority = null;

  public FAQKeyword keyword(String keyword) {
    this.keyword = keyword;
    return this;
  }

   /**
   * keyword
   * @return keyword
  **/
  @ApiModelProperty(example = "goal", required = true, value = "keyword")
  public String getKeyword() {
    return keyword;
  }

  public void setKeyword(String keyword) {
    this.keyword = keyword;
  }

  public FAQKeyword priority(Long priority) {
    this.priority = priority;
    return this;
  }

   /**
   * priority
   * @return priority
  **/
  @ApiModelProperty(example = "1", required = true, value = "priority")
  public Long getPriority() {
    return priority;
  }

  public void setPriority(Long priority) {
    this.priority = priority;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FAQKeyword faQKeyword = (FAQKeyword) o;
    return Objects.equals(this.keyword, faQKeyword.keyword) &&
        Objects.equals(this.priority, faQKeyword.priority);
  }

  @Override
  public int hashCode() {
    return Objects.hash(keyword, priority);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FAQKeyword {\n");
    
    sb.append("    keyword: ").append(toIndentedString(keyword)).append("\n");
    sb.append("    priority: ").append(toIndentedString(priority)).append("\n");
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

