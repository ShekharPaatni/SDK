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

import java.util.ArrayList;
import java.util.List;

/**
 * DecisionTreeCO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class DecisionTreeCO {
  @SerializedName("answers")
  private List<AnswerMap> answers = new ArrayList<AnswerMap>();

  @SerializedName("entity_type")
  private String entityType = null;

  public DecisionTreeCO answers(List<AnswerMap> answers) {
    this.answers = answers;
    return this;
  }

  public DecisionTreeCO addAnswersItem(AnswerMap answersItem) {
    this.answers.add(answersItem);
    return this;
  }

   /**
   * Get answers
   * @return answers
  **/
  @ApiModelProperty(required = true, value = "")
  public List<AnswerMap> getAnswers() {
    return answers;
  }

  public void setAnswers(List<AnswerMap> answers) {
    this.answers = answers;
  }

  public DecisionTreeCO entityType(String entityType) {
    this.entityType = entityType;
    return this;
  }

   /**
   * Get entityType
   * @return entityType
  **/
  @ApiModelProperty(required = true, value = "")
  public String getEntityType() {
    return entityType;
  }

  public void setEntityType(String entityType) {
    this.entityType = entityType;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    DecisionTreeCO decisionTreeCO = (DecisionTreeCO) o;
    return Objects.equals(this.answers, decisionTreeCO.answers) &&
        Objects.equals(this.entityType, decisionTreeCO.entityType);
  }

  @Override
  public int hashCode() {
    return Objects.hash(answers, entityType);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class DecisionTreeCO {\n");
    
    sb.append("    answers: ").append(toIndentedString(answers)).append("\n");
    sb.append("    entityType: ").append(toIndentedString(entityType)).append("\n");
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

