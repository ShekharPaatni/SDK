/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.proton.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;

/**
 * AnnuityDepositSchedule
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-28T09:20:08.129Z")
public class AnnuityDepositSchedule {
  @SerializedName("deposit_amount")
  private Float depositAmount = 0.0f;

  /**
   * Gets or Sets depositFrequencyInterval
   */
  @JsonAdapter(DepositFrequencyIntervalEnum.Adapter.class)
  public enum DepositFrequencyIntervalEnum {
    YEAR("year"),
    
    QUARTER("quarter"),
    
    MONTH("month"),
    
    WEEK("week"),
    
    DAY("day");

    private String value;

    DepositFrequencyIntervalEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static DepositFrequencyIntervalEnum fromValue(String text) {
      for (DepositFrequencyIntervalEnum b : DepositFrequencyIntervalEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<DepositFrequencyIntervalEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final DepositFrequencyIntervalEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public DepositFrequencyIntervalEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return DepositFrequencyIntervalEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("deposit_frequency_interval")
  private DepositFrequencyIntervalEnum depositFrequencyInterval = DepositFrequencyIntervalEnum.YEAR;

  @SerializedName("adjust_deposit_for_inflation")
  private Boolean adjustDepositForInflation = true;

  public AnnuityDepositSchedule depositAmount(Float depositAmount) {
    this.depositAmount = depositAmount;
    return this;
  }

   /**
   * Get depositAmount
   * minimum: 0
   * @return depositAmount
  **/
  @ApiModelProperty(value = "")
  public Float getDepositAmount() {
    return depositAmount;
  }

  public void setDepositAmount(Float depositAmount) {
    this.depositAmount = depositAmount;
  }

  public AnnuityDepositSchedule depositFrequencyInterval(DepositFrequencyIntervalEnum depositFrequencyInterval) {
    this.depositFrequencyInterval = depositFrequencyInterval;
    return this;
  }

   /**
   * Get depositFrequencyInterval
   * @return depositFrequencyInterval
  **/
  @ApiModelProperty(value = "")
  public DepositFrequencyIntervalEnum getDepositFrequencyInterval() {
    return depositFrequencyInterval;
  }

  public void setDepositFrequencyInterval(DepositFrequencyIntervalEnum depositFrequencyInterval) {
    this.depositFrequencyInterval = depositFrequencyInterval;
  }

  public AnnuityDepositSchedule adjustDepositForInflation(Boolean adjustDepositForInflation) {
    this.adjustDepositForInflation = adjustDepositForInflation;
    return this;
  }

   /**
   * Get adjustDepositForInflation
   * @return adjustDepositForInflation
  **/
  @ApiModelProperty(value = "")
  public Boolean isAdjustDepositForInflation() {
    return adjustDepositForInflation;
  }

  public void setAdjustDepositForInflation(Boolean adjustDepositForInflation) {
    this.adjustDepositForInflation = adjustDepositForInflation;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AnnuityDepositSchedule annuityDepositSchedule = (AnnuityDepositSchedule) o;
    return Objects.equals(this.depositAmount, annuityDepositSchedule.depositAmount) &&
        Objects.equals(this.depositFrequencyInterval, annuityDepositSchedule.depositFrequencyInterval) &&
        Objects.equals(this.adjustDepositForInflation, annuityDepositSchedule.adjustDepositForInflation);
  }

  @Override
  public int hashCode() {
    return Objects.hash(depositAmount, depositFrequencyInterval, adjustDepositForInflation);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AnnuityDepositSchedule {\n");
    
    sb.append("    depositAmount: ").append(toIndentedString(depositAmount)).append("\n");
    sb.append("    depositFrequencyInterval: ").append(toIndentedString(depositFrequencyInterval)).append("\n");
    sb.append("    adjustDepositForInflation: ").append(toIndentedString(adjustDepositForInflation)).append("\n");
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

