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

import java.util.UUID;

/**
 * FundingRequestMap
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class FundingRequestMap {
  @SerializedName("funding_id")
  private UUID fundingId = null;

  public FundingRequestMap fundingId(UUID fundingId) {
    this.fundingId = fundingId;
    return this;
  }

   /**
   * funding_id
   * @return fundingId
  **/
  @ApiModelProperty(example = "6e14259a-9a68-4593-9e6d-8fcd0d05cf44", required = true, value = "funding_id")
  public UUID getFundingId() {
    return fundingId;
  }

  public void setFundingId(UUID fundingId) {
    this.fundingId = fundingId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    FundingRequestMap fundingRequestMap = (FundingRequestMap) o;
    return Objects.equals(this.fundingId, fundingRequestMap.fundingId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(fundingId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class FundingRequestMap {\n");
    
    sb.append("    fundingId: ").append(toIndentedString(fundingId)).append("\n");
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

