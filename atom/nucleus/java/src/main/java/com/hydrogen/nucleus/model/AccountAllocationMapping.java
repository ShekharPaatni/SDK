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
import java.util.UUID;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * AccountAllocationMapping Object
 */
@ApiModel(description = "AccountAllocationMapping Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-24T10:39:20.203Z")
public class AccountAllocationMapping {
  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("allocation_id")
  private UUID allocationId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("current_weight")
  private Double currentWeight = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("goal_id")
  private UUID goalId = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("strategic_weight")
  private Double strategicWeight = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public AccountAllocationMapping accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * accountId
   * @return accountId
  **/
  @ApiModelProperty(example = "1c28dade-8679-4df5-9b9d-c508d04fcb0c", required = true, value = "accountId")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public AccountAllocationMapping allocationId(UUID allocationId) {
    this.allocationId = allocationId;
    return this;
  }

   /**
   * allocationId
   * @return allocationId
  **/
  @ApiModelProperty(example = "f29d942a-7509-41be-8016-46743be0bcc8", required = true, value = "allocationId")
  public UUID getAllocationId() {
    return allocationId;
  }

  public void setAllocationId(UUID allocationId) {
    this.allocationId = allocationId;
  }

  public AccountAllocationMapping createDate(OffsetDateTime createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public void setCreateDate(OffsetDateTime createDate) {
    this.createDate = createDate;
  }

  public AccountAllocationMapping currentWeight(Double currentWeight) {
    this.currentWeight = currentWeight;
    return this;
  }

   /**
   * currentWeight
   * @return currentWeight
  **/
  @ApiModelProperty(example = "0.88", required = true, value = "currentWeight")
  public Double getCurrentWeight() {
    return currentWeight;
  }

  public void setCurrentWeight(Double currentWeight) {
    this.currentWeight = currentWeight;
  }

  public AccountAllocationMapping date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * date
   * @return date
  **/
  @ApiModelProperty(example = "2018-01-09", required = true, value = "date")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public AccountAllocationMapping goalId(UUID goalId) {
    this.goalId = goalId;
    return this;
  }

   /**
   * goalId
   * @return goalId
  **/
  @ApiModelProperty(example = "9a1c0a9f-c699-46a2-9710-8b2abe10526c", value = "goalId")
  public UUID getGoalId() {
    return goalId;
  }

  public void setGoalId(UUID goalId) {
    this.goalId = goalId;
  }

  public AccountAllocationMapping id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public AccountAllocationMapping secondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
    return this;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public void setSecondaryId(String secondaryId) {
    this.secondaryId = secondaryId;
  }

  public AccountAllocationMapping strategicWeight(Double strategicWeight) {
    this.strategicWeight = strategicWeight;
    return this;
  }

   /**
   * strategicWeight
   * @return strategicWeight
  **/
  @ApiModelProperty(example = "0.89", required = true, value = "strategicWeight")
  public Double getStrategicWeight() {
    return strategicWeight;
  }

  public void setStrategicWeight(Double strategicWeight) {
    this.strategicWeight = strategicWeight;
  }

  public AccountAllocationMapping updateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
    return this;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }

  public void setUpdateDate(OffsetDateTime updateDate) {
    this.updateDate = updateDate;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AccountAllocationMapping accountAllocationMapping = (AccountAllocationMapping) o;
    return Objects.equals(this.accountId, accountAllocationMapping.accountId) &&
        Objects.equals(this.allocationId, accountAllocationMapping.allocationId) &&
        Objects.equals(this.createDate, accountAllocationMapping.createDate) &&
        Objects.equals(this.currentWeight, accountAllocationMapping.currentWeight) &&
        Objects.equals(this.date, accountAllocationMapping.date) &&
        Objects.equals(this.goalId, accountAllocationMapping.goalId) &&
        Objects.equals(this.id, accountAllocationMapping.id) &&
        Objects.equals(this.secondaryId, accountAllocationMapping.secondaryId) &&
        Objects.equals(this.strategicWeight, accountAllocationMapping.strategicWeight) &&
        Objects.equals(this.updateDate, accountAllocationMapping.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountId, allocationId, createDate, currentWeight, date, goalId, id, secondaryId, strategicWeight, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AccountAllocationMapping {\n");
    
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    allocationId: ").append(toIndentedString(allocationId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    currentWeight: ").append(toIndentedString(currentWeight)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    goalId: ").append(toIndentedString(goalId)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    strategicWeight: ").append(toIndentedString(strategicWeight)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

