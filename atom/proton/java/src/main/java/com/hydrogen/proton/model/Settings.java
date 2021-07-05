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
 * Settings
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-28T09:20:08.129Z")
public class Settings {
  @SerializedName("default_drift_factor")
  private Float defaultDriftFactor = null;

  @SerializedName("drift_rebal")
  private Boolean driftRebal = null;

  @SerializedName("downside")
  private Boolean downside = null;

  /**
   * Gets or Sets taxEfficiencyId
   */
  @JsonAdapter(TaxEfficiencyIdEnum.Adapter.class)
  public enum TaxEfficiencyIdEnum {
    NUMBER_0(0),
    
    NUMBER_1(1),
    
    NUMBER_2(2),
    
    NUMBER_3(3),
    
    NUMBER_4(4);

    private Integer value;

    TaxEfficiencyIdEnum(Integer value) {
      this.value = value;
    }

    public Integer getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static TaxEfficiencyIdEnum fromValue(String text) {
      for (TaxEfficiencyIdEnum b : TaxEfficiencyIdEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<TaxEfficiencyIdEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final TaxEfficiencyIdEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public TaxEfficiencyIdEnum read(final JsonReader jsonReader) throws IOException {
        int value = jsonReader.nextInt();
        return TaxEfficiencyIdEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("tax_efficiency_id")
  private TaxEfficiencyIdEnum taxEfficiencyId = null;

  @SerializedName("period_rebal")
  private Boolean periodRebal = null;

  /**
   * Gets or Sets rebalancePeriod
   */
  @JsonAdapter(RebalancePeriodEnum.Adapter.class)
  public enum RebalancePeriodEnum {
    NUMBER_0(0),
    
    NUMBER_1(1),
    
    NUMBER_2(2),
    
    NUMBER_3(3),
    
    NUMBER_4(4);

    private Integer value;

    RebalancePeriodEnum(Integer value) {
      this.value = value;
    }

    public Integer getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static RebalancePeriodEnum fromValue(String text) {
      for (RebalancePeriodEnum b : RebalancePeriodEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<RebalancePeriodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final RebalancePeriodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public RebalancePeriodEnum read(final JsonReader jsonReader) throws IOException {
        int value = jsonReader.nextInt();
        return RebalancePeriodEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("rebalance_period")
  private RebalancePeriodEnum rebalancePeriod = null;

  public Settings defaultDriftFactor(Float defaultDriftFactor) {
    this.defaultDriftFactor = defaultDriftFactor;
    return this;
  }

   /**
   * Get defaultDriftFactor
   * minimum: 0
   * @return defaultDriftFactor
  **/
  @ApiModelProperty(value = "")
  public Float getDefaultDriftFactor() {
    return defaultDriftFactor;
  }

  public void setDefaultDriftFactor(Float defaultDriftFactor) {
    this.defaultDriftFactor = defaultDriftFactor;
  }

  public Settings driftRebal(Boolean driftRebal) {
    this.driftRebal = driftRebal;
    return this;
  }

   /**
   * Get driftRebal
   * @return driftRebal
  **/
  @ApiModelProperty(value = "")
  public Boolean isDriftRebal() {
    return driftRebal;
  }

  public void setDriftRebal(Boolean driftRebal) {
    this.driftRebal = driftRebal;
  }

  public Settings downside(Boolean downside) {
    this.downside = downside;
    return this;
  }

   /**
   * Get downside
   * @return downside
  **/
  @ApiModelProperty(value = "")
  public Boolean isDownside() {
    return downside;
  }

  public void setDownside(Boolean downside) {
    this.downside = downside;
  }

  public Settings taxEfficiencyId(TaxEfficiencyIdEnum taxEfficiencyId) {
    this.taxEfficiencyId = taxEfficiencyId;
    return this;
  }

   /**
   * Get taxEfficiencyId
   * @return taxEfficiencyId
  **/
  @ApiModelProperty(value = "")
  public TaxEfficiencyIdEnum getTaxEfficiencyId() {
    return taxEfficiencyId;
  }

  public void setTaxEfficiencyId(TaxEfficiencyIdEnum taxEfficiencyId) {
    this.taxEfficiencyId = taxEfficiencyId;
  }

  public Settings periodRebal(Boolean periodRebal) {
    this.periodRebal = periodRebal;
    return this;
  }

   /**
   * Get periodRebal
   * @return periodRebal
  **/
  @ApiModelProperty(value = "")
  public Boolean isPeriodRebal() {
    return periodRebal;
  }

  public void setPeriodRebal(Boolean periodRebal) {
    this.periodRebal = periodRebal;
  }

  public Settings rebalancePeriod(RebalancePeriodEnum rebalancePeriod) {
    this.rebalancePeriod = rebalancePeriod;
    return this;
  }

   /**
   * Get rebalancePeriod
   * @return rebalancePeriod
  **/
  @ApiModelProperty(value = "")
  public RebalancePeriodEnum getRebalancePeriod() {
    return rebalancePeriod;
  }

  public void setRebalancePeriod(RebalancePeriodEnum rebalancePeriod) {
    this.rebalancePeriod = rebalancePeriod;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Settings settings = (Settings) o;
    return Objects.equals(this.defaultDriftFactor, settings.defaultDriftFactor) &&
        Objects.equals(this.driftRebal, settings.driftRebal) &&
        Objects.equals(this.downside, settings.downside) &&
        Objects.equals(this.taxEfficiencyId, settings.taxEfficiencyId) &&
        Objects.equals(this.periodRebal, settings.periodRebal) &&
        Objects.equals(this.rebalancePeriod, settings.rebalancePeriod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(defaultDriftFactor, driftRebal, downside, taxEfficiencyId, periodRebal, rebalancePeriod);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Settings {\n");
    
    sb.append("    defaultDriftFactor: ").append(toIndentedString(defaultDriftFactor)).append("\n");
    sb.append("    driftRebal: ").append(toIndentedString(driftRebal)).append("\n");
    sb.append("    downside: ").append(toIndentedString(downside)).append("\n");
    sb.append("    taxEfficiencyId: ").append(toIndentedString(taxEfficiencyId)).append("\n");
    sb.append("    periodRebal: ").append(toIndentedString(periodRebal)).append("\n");
    sb.append("    rebalancePeriod: ").append(toIndentedString(rebalancePeriod)).append("\n");
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

