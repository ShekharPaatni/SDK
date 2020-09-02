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


package com.hydrogen.nucleus.model;

import java.util.Objects;

import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModelProperty;
import org.threeten.bp.OffsetDateTime;

/**
 * ClientAccountAdvisorVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class ClientAccountAdvisorVO {
  @SerializedName("account_assets")
  private Double accountAssets = null;

  @SerializedName("account_name")
  private String accountName = null;

  @SerializedName("account_type")
  private String accountType = null;

  @SerializedName("as_of_date")
  private OffsetDateTime asOfDate = null;

  public ClientAccountAdvisorVO accountAssets(Double accountAssets) {
    this.accountAssets = accountAssets;
    return this;
  }

   /**
   * Get accountAssets
   * @return accountAssets
  **/
  @ApiModelProperty(value = "")
  public Double getAccountAssets() {
    return accountAssets;
  }

  public void setAccountAssets(Double accountAssets) {
    this.accountAssets = accountAssets;
  }

  public ClientAccountAdvisorVO accountName(String accountName) {
    this.accountName = accountName;
    return this;
  }

   /**
   * Get accountName
   * @return accountName
  **/
  @ApiModelProperty(value = "")
  public String getAccountName() {
    return accountName;
  }

  public void setAccountName(String accountName) {
    this.accountName = accountName;
  }

  public ClientAccountAdvisorVO accountType(String accountType) {
    this.accountType = accountType;
    return this;
  }

   /**
   * Get accountType
   * @return accountType
  **/
  @ApiModelProperty(value = "")
  public String getAccountType() {
    return accountType;
  }

  public void setAccountType(String accountType) {
    this.accountType = accountType;
  }

  public ClientAccountAdvisorVO asOfDate(OffsetDateTime asOfDate) {
    this.asOfDate = asOfDate;
    return this;
  }

   /**
   * Get asOfDate
   * @return asOfDate
  **/
  @ApiModelProperty(value = "")
  public OffsetDateTime getAsOfDate() {
    return asOfDate;
  }

  public void setAsOfDate(OffsetDateTime asOfDate) {
    this.asOfDate = asOfDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientAccountAdvisorVO clientAccountAdvisorVO = (ClientAccountAdvisorVO) o;
    return Objects.equals(this.accountAssets, clientAccountAdvisorVO.accountAssets) &&
        Objects.equals(this.accountName, clientAccountAdvisorVO.accountName) &&
        Objects.equals(this.accountType, clientAccountAdvisorVO.accountType) &&
        Objects.equals(this.asOfDate, clientAccountAdvisorVO.asOfDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accountAssets, accountName, accountType, asOfDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientAccountAdvisorVO {\n");
    
    sb.append("    accountAssets: ").append(toIndentedString(accountAssets)).append("\n");
    sb.append("    accountName: ").append(toIndentedString(accountName)).append("\n");
    sb.append("    accountType: ").append(toIndentedString(accountType)).append("\n");
    sb.append("    asOfDate: ").append(toIndentedString(asOfDate)).append("\n");
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
