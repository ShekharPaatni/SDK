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
import io.swagger.client.model.NodeRelationshipPayload;
import java.io.IOException;
import java.util.UUID;

/**
 * CreateNodeRelationshipResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class CreateNodeRelationshipResponse {
  @SerializedName("answer_id")
  private UUID answerId = null;

  @SerializedName("value")
  private String value = null;

  @SerializedName("decision_tree_id")
  private UUID decisionTreeId = null;

  @SerializedName("node_parent_id")
  private UUID nodeParentId = null;

  @SerializedName("node_child_id")
  private UUID nodeChildId = null;

  @SerializedName("is_leaf")
  private Boolean isLeaf = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  public CreateNodeRelationshipResponse answerId(UUID answerId) {
    this.answerId = answerId;
    return this;
  }

   /**
   * The ID of the answer to a question_id that corresponds to the node relationship
   * @return answerId
  **/
  @ApiModelProperty(required = true, value = "The ID of the answer to a question_id that corresponds to the node relationship")
  public UUID getAnswerId() {
    return answerId;
  }

  public void setAnswerId(UUID answerId) {
    this.answerId = answerId;
  }

  public CreateNodeRelationshipResponse value(String value) {
    this.value = value;
    return this;
  }

   /**
   * Value of the answer
   * @return value
  **/
  @ApiModelProperty(required = true, value = "Value of the answer")
  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public CreateNodeRelationshipResponse decisionTreeId(UUID decisionTreeId) {
    this.decisionTreeId = decisionTreeId;
    return this;
  }

   /**
   * The ID of the decision tree to which the node relationship belongs
   * @return decisionTreeId
  **/
  @ApiModelProperty(required = true, value = "The ID of the decision tree to which the node relationship belongs")
  public UUID getDecisionTreeId() {
    return decisionTreeId;
  }

  public void setDecisionTreeId(UUID decisionTreeId) {
    this.decisionTreeId = decisionTreeId;
  }

  public CreateNodeRelationshipResponse nodeParentId(UUID nodeParentId) {
    this.nodeParentId = nodeParentId;
    return this;
  }

   /**
   * The ID for the parent node.
   * @return nodeParentId
  **/
  @ApiModelProperty(required = true, value = "The ID for the parent node.")
  public UUID getNodeParentId() {
    return nodeParentId;
  }

  public void setNodeParentId(UUID nodeParentId) {
    this.nodeParentId = nodeParentId;
  }

  public CreateNodeRelationshipResponse nodeChildId(UUID nodeChildId) {
    this.nodeChildId = nodeChildId;
    return this;
  }

   /**
   * The ID for the child node.
   * @return nodeChildId
  **/
  @ApiModelProperty(value = "The ID for the child node.")
  public UUID getNodeChildId() {
    return nodeChildId;
  }

  public void setNodeChildId(UUID nodeChildId) {
    this.nodeChildId = nodeChildId;
  }

  public CreateNodeRelationshipResponse isLeaf(Boolean isLeaf) {
    this.isLeaf = isLeaf;
    return this;
  }

   /**
   * Indicator if the node relationship represents the last point in the decision tree branch. true indicates it is the last point and that is maps to an allocation or model
   * @return isLeaf
  **/
  @ApiModelProperty(value = "Indicator if the node relationship represents the last point in the decision tree branch. true indicates it is the last point and that is maps to an allocation or model")
  public Boolean isIsLeaf() {
    return isLeaf;
  }

  public void setIsLeaf(Boolean isLeaf) {
    this.isLeaf = isLeaf;
  }

  public CreateNodeRelationshipResponse secondaryId(String secondaryId) {
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

  public CreateNodeRelationshipResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the node relationship
   * @return id
  **/
  @ApiModelProperty(value = "ID of the node relationship")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public CreateNodeRelationshipResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the node relationship was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the node relationship was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateNodeRelationshipResponse createNodeRelationshipResponse = (CreateNodeRelationshipResponse) o;
    return Objects.equals(this.answerId, createNodeRelationshipResponse.answerId) &&
        Objects.equals(this.value, createNodeRelationshipResponse.value) &&
        Objects.equals(this.decisionTreeId, createNodeRelationshipResponse.decisionTreeId) &&
        Objects.equals(this.nodeParentId, createNodeRelationshipResponse.nodeParentId) &&
        Objects.equals(this.nodeChildId, createNodeRelationshipResponse.nodeChildId) &&
        Objects.equals(this.isLeaf, createNodeRelationshipResponse.isLeaf) &&
        Objects.equals(this.secondaryId, createNodeRelationshipResponse.secondaryId) &&
        Objects.equals(this.id, createNodeRelationshipResponse.id) &&
        Objects.equals(this.createDate, createNodeRelationshipResponse.createDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(answerId, value, decisionTreeId, nodeParentId, nodeChildId, isLeaf, secondaryId, id, createDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateNodeRelationshipResponse {\n");
    
    sb.append("    answerId: ").append(toIndentedString(answerId)).append("\n");
    sb.append("    value: ").append(toIndentedString(value)).append("\n");
    sb.append("    decisionTreeId: ").append(toIndentedString(decisionTreeId)).append("\n");
    sb.append("    nodeParentId: ").append(toIndentedString(nodeParentId)).append("\n");
    sb.append("    nodeChildId: ").append(toIndentedString(nodeChildId)).append("\n");
    sb.append("    isLeaf: ").append(toIndentedString(isLeaf)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
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

