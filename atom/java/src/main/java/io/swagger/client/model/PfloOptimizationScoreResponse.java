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
import io.swagger.client.model.OptScorePortfolio;
import java.io.IOException;

/**
 * PfloOptimizationScoreResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class PfloOptimizationScoreResponse {
  @SerializedName("current_portfolio")
  private OptScorePortfolio currentPortfolio = null;

  @SerializedName("optimized_portfolio")
  private OptScorePortfolio optimizedPortfolio = null;

  @SerializedName("optimization_score")
  private Integer optimizationScore = null;

  public PfloOptimizationScoreResponse currentPortfolio(OptScorePortfolio currentPortfolio) {
    this.currentPortfolio = currentPortfolio;
    return this;
  }

   /**
   * Get currentPortfolio
   * @return currentPortfolio
  **/
  @ApiModelProperty(required = true, value = "")
  public OptScorePortfolio getCurrentPortfolio() {
    return currentPortfolio;
  }

  public void setCurrentPortfolio(OptScorePortfolio currentPortfolio) {
    this.currentPortfolio = currentPortfolio;
  }

  public PfloOptimizationScoreResponse optimizedPortfolio(OptScorePortfolio optimizedPortfolio) {
    this.optimizedPortfolio = optimizedPortfolio;
    return this;
  }

   /**
   * Get optimizedPortfolio
   * @return optimizedPortfolio
  **/
  @ApiModelProperty(required = true, value = "")
  public OptScorePortfolio getOptimizedPortfolio() {
    return optimizedPortfolio;
  }

  public void setOptimizedPortfolio(OptScorePortfolio optimizedPortfolio) {
    this.optimizedPortfolio = optimizedPortfolio;
  }

  public PfloOptimizationScoreResponse optimizationScore(Integer optimizationScore) {
    this.optimizationScore = optimizationScore;
    return this;
  }

   /**
   * A score from 0 to 100 indicating the relative health of the current portfolio, 100 being the most optimal.
   * minimum: 0
   * maximum: 100
   * @return optimizationScore
  **/
  @ApiModelProperty(required = true, value = "A score from 0 to 100 indicating the relative health of the current portfolio, 100 being the most optimal.")
  public Integer getOptimizationScore() {
    return optimizationScore;
  }

  public void setOptimizationScore(Integer optimizationScore) {
    this.optimizationScore = optimizationScore;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PfloOptimizationScoreResponse pfloOptimizationScoreResponse = (PfloOptimizationScoreResponse) o;
    return Objects.equals(this.currentPortfolio, pfloOptimizationScoreResponse.currentPortfolio) &&
        Objects.equals(this.optimizedPortfolio, pfloOptimizationScoreResponse.optimizedPortfolio) &&
        Objects.equals(this.optimizationScore, pfloOptimizationScoreResponse.optimizationScore);
  }

  @Override
  public int hashCode() {
    return Objects.hash(currentPortfolio, optimizedPortfolio, optimizationScore);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PfloOptimizationScoreResponse {\n");
    
    sb.append("    currentPortfolio: ").append(toIndentedString(currentPortfolio)).append("\n");
    sb.append("    optimizedPortfolio: ").append(toIndentedString(optimizedPortfolio)).append("\n");
    sb.append("    optimizationScore: ").append(toIndentedString(optimizationScore)).append("\n");
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

