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
import io.swagger.client.model.BeneficiaryBequestConfig;
import io.swagger.client.model.ChildrenEducationConfig;
import io.swagger.client.model.IncomeConfig;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

/**
 * LifeInsuranceCalculator
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class LifeInsuranceCalculator {
  @SerializedName("mortgage_balance")
  private BigDecimal mortgageBalance = null;

  @SerializedName("other_debt")
  private BigDecimal otherDebt = null;

  @SerializedName("interest_rate")
  private BigDecimal interestRate = null;

  @SerializedName("end_of_life_expenses")
  private BigDecimal endOfLifeExpenses = null;

  @SerializedName("existing_life_insurance")
  private BigDecimal existingLifeInsurance = null;

  @SerializedName("liquid_assets")
  private BigDecimal liquidAssets = null;

  @SerializedName("general_inflation_rate")
  private BigDecimal generalInflationRate = null;

  @SerializedName("education_inflation_rate")
  private BigDecimal educationInflationRate = null;

  @SerializedName("tax_rate")
  private BigDecimal taxRate = null;

  @SerializedName("benefit_amount_rounding")
  private BigDecimal benefitAmountRounding = null;

  @SerializedName("margin_of_error")
  private BigDecimal marginOfError = null;

  @SerializedName("children_education_config")
  private List<ChildrenEducationConfig> childrenEducationConfig = null;

  @SerializedName("income_config")
  private List<IncomeConfig> incomeConfig = null;

  @SerializedName("beneficiary_bequest_config")
  private List<BeneficiaryBequestConfig> beneficiaryBequestConfig = null;

  public LifeInsuranceCalculator mortgageBalance(BigDecimal mortgageBalance) {
    this.mortgageBalance = mortgageBalance;
    return this;
  }

   /**
   * The outstanding mortgage balance
   * minimum: 0
   * @return mortgageBalance
  **/
  @ApiModelProperty(required = true, value = "The outstanding mortgage balance")
  public BigDecimal getMortgageBalance() {
    return mortgageBalance;
  }

  public void setMortgageBalance(BigDecimal mortgageBalance) {
    this.mortgageBalance = mortgageBalance;
  }

  public LifeInsuranceCalculator otherDebt(BigDecimal otherDebt) {
    this.otherDebt = otherDebt;
    return this;
  }

   /**
   * Other outstanding debt
   * minimum: 0
   * @return otherDebt
  **/
  @ApiModelProperty(required = true, value = "Other outstanding debt")
  public BigDecimal getOtherDebt() {
    return otherDebt;
  }

  public void setOtherDebt(BigDecimal otherDebt) {
    this.otherDebt = otherDebt;
  }

  public LifeInsuranceCalculator interestRate(BigDecimal interestRate) {
    this.interestRate = interestRate;
    return this;
  }

   /**
   * The interest rate earned once the benefit amount is received
   * minimum: -1
   * @return interestRate
  **/
  @ApiModelProperty(required = true, value = "The interest rate earned once the benefit amount is received")
  public BigDecimal getInterestRate() {
    return interestRate;
  }

  public void setInterestRate(BigDecimal interestRate) {
    this.interestRate = interestRate;
  }

  public LifeInsuranceCalculator endOfLifeExpenses(BigDecimal endOfLifeExpenses) {
    this.endOfLifeExpenses = endOfLifeExpenses;
    return this;
  }

   /**
   * End-of-life expenses
   * minimum: 0
   * @return endOfLifeExpenses
  **/
  @ApiModelProperty(value = "End-of-life expenses")
  public BigDecimal getEndOfLifeExpenses() {
    return endOfLifeExpenses;
  }

  public void setEndOfLifeExpenses(BigDecimal endOfLifeExpenses) {
    this.endOfLifeExpenses = endOfLifeExpenses;
  }

  public LifeInsuranceCalculator existingLifeInsurance(BigDecimal existingLifeInsurance) {
    this.existingLifeInsurance = existingLifeInsurance;
    return this;
  }

   /**
   * Life insurance already held
   * minimum: 0
   * @return existingLifeInsurance
  **/
  @ApiModelProperty(value = "Life insurance already held")
  public BigDecimal getExistingLifeInsurance() {
    return existingLifeInsurance;
  }

  public void setExistingLifeInsurance(BigDecimal existingLifeInsurance) {
    this.existingLifeInsurance = existingLifeInsurance;
  }

  public LifeInsuranceCalculator liquidAssets(BigDecimal liquidAssets) {
    this.liquidAssets = liquidAssets;
    return this;
  }

   /**
   * Liquid assets held
   * minimum: 0
   * @return liquidAssets
  **/
  @ApiModelProperty(value = "Liquid assets held")
  public BigDecimal getLiquidAssets() {
    return liquidAssets;
  }

  public void setLiquidAssets(BigDecimal liquidAssets) {
    this.liquidAssets = liquidAssets;
  }

  public LifeInsuranceCalculator generalInflationRate(BigDecimal generalInflationRate) {
    this.generalInflationRate = generalInflationRate;
    return this;
  }

   /**
   * The general inflation rate
   * minimum: -1
   * maximum: 20
   * @return generalInflationRate
  **/
  @ApiModelProperty(value = "The general inflation rate")
  public BigDecimal getGeneralInflationRate() {
    return generalInflationRate;
  }

  public void setGeneralInflationRate(BigDecimal generalInflationRate) {
    this.generalInflationRate = generalInflationRate;
  }

  public LifeInsuranceCalculator educationInflationRate(BigDecimal educationInflationRate) {
    this.educationInflationRate = educationInflationRate;
    return this;
  }

   /**
   * The inflation rate for education
   * minimum: -1
   * maximum: 20
   * @return educationInflationRate
  **/
  @ApiModelProperty(value = "The inflation rate for education")
  public BigDecimal getEducationInflationRate() {
    return educationInflationRate;
  }

  public void setEducationInflationRate(BigDecimal educationInflationRate) {
    this.educationInflationRate = educationInflationRate;
  }

  public LifeInsuranceCalculator taxRate(BigDecimal taxRate) {
    this.taxRate = taxRate;
    return this;
  }

   /**
   * The tax rate applied to earnings from the interest rate
   * minimum: 0
   * maximum: 1
   * @return taxRate
  **/
  @ApiModelProperty(value = "The tax rate applied to earnings from the interest rate")
  public BigDecimal getTaxRate() {
    return taxRate;
  }

  public void setTaxRate(BigDecimal taxRate) {
    this.taxRate = taxRate;
  }

  public LifeInsuranceCalculator benefitAmountRounding(BigDecimal benefitAmountRounding) {
    this.benefitAmountRounding = benefitAmountRounding;
    return this;
  }

   /**
   * A parameter to round the benefit amount up to a configurable number of digits
   * minimum: 0
   * maximum: 12
   * @return benefitAmountRounding
  **/
  @ApiModelProperty(value = "A parameter to round the benefit amount up to a configurable number of digits")
  public BigDecimal getBenefitAmountRounding() {
    return benefitAmountRounding;
  }

  public void setBenefitAmountRounding(BigDecimal benefitAmountRounding) {
    this.benefitAmountRounding = benefitAmountRounding;
  }

  public LifeInsuranceCalculator marginOfError(BigDecimal marginOfError) {
    this.marginOfError = marginOfError;
    return this;
  }

   /**
   * The margin of error to apply to the life insurance needed, before rounding
   * minimum: 0
   * @return marginOfError
  **/
  @ApiModelProperty(value = "The margin of error to apply to the life insurance needed, before rounding")
  public BigDecimal getMarginOfError() {
    return marginOfError;
  }

  public void setMarginOfError(BigDecimal marginOfError) {
    this.marginOfError = marginOfError;
  }

  public LifeInsuranceCalculator childrenEducationConfig(List<ChildrenEducationConfig> childrenEducationConfig) {
    this.childrenEducationConfig = childrenEducationConfig;
    return this;
  }

  public LifeInsuranceCalculator addChildrenEducationConfigItem(ChildrenEducationConfig childrenEducationConfigItem) {
    if (this.childrenEducationConfig == null) {
      this.childrenEducationConfig = new ArrayList<ChildrenEducationConfig>();
    }
    this.childrenEducationConfig.add(childrenEducationConfigItem);
    return this;
  }

   /**
   * Benefit information to provide for childrens&#39; primary, secondary, and tertiary schooling
   * @return childrenEducationConfig
  **/
  @ApiModelProperty(value = "Benefit information to provide for childrens' primary, secondary, and tertiary schooling")
  public List<ChildrenEducationConfig> getChildrenEducationConfig() {
    return childrenEducationConfig;
  }

  public void setChildrenEducationConfig(List<ChildrenEducationConfig> childrenEducationConfig) {
    this.childrenEducationConfig = childrenEducationConfig;
  }

  public LifeInsuranceCalculator incomeConfig(List<IncomeConfig> incomeConfig) {
    this.incomeConfig = incomeConfig;
    return this;
  }

  public LifeInsuranceCalculator addIncomeConfigItem(IncomeConfig incomeConfigItem) {
    if (this.incomeConfig == null) {
      this.incomeConfig = new ArrayList<IncomeConfig>();
    }
    this.incomeConfig.add(incomeConfigItem);
    return this;
  }

   /**
   * Information on replacement income for beneficiaries
   * @return incomeConfig
  **/
  @ApiModelProperty(value = "Information on replacement income for beneficiaries")
  public List<IncomeConfig> getIncomeConfig() {
    return incomeConfig;
  }

  public void setIncomeConfig(List<IncomeConfig> incomeConfig) {
    this.incomeConfig = incomeConfig;
  }

  public LifeInsuranceCalculator beneficiaryBequestConfig(List<BeneficiaryBequestConfig> beneficiaryBequestConfig) {
    this.beneficiaryBequestConfig = beneficiaryBequestConfig;
    return this;
  }

  public LifeInsuranceCalculator addBeneficiaryBequestConfigItem(BeneficiaryBequestConfig beneficiaryBequestConfigItem) {
    if (this.beneficiaryBequestConfig == null) {
      this.beneficiaryBequestConfig = new ArrayList<BeneficiaryBequestConfig>();
    }
    this.beneficiaryBequestConfig.add(beneficiaryBequestConfigItem);
    return this;
  }

   /**
   * Information on bequests for beneficiaries
   * @return beneficiaryBequestConfig
  **/
  @ApiModelProperty(value = "Information on bequests for beneficiaries")
  public List<BeneficiaryBequestConfig> getBeneficiaryBequestConfig() {
    return beneficiaryBequestConfig;
  }

  public void setBeneficiaryBequestConfig(List<BeneficiaryBequestConfig> beneficiaryBequestConfig) {
    this.beneficiaryBequestConfig = beneficiaryBequestConfig;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    LifeInsuranceCalculator lifeInsuranceCalculator = (LifeInsuranceCalculator) o;
    return Objects.equals(this.mortgageBalance, lifeInsuranceCalculator.mortgageBalance) &&
        Objects.equals(this.otherDebt, lifeInsuranceCalculator.otherDebt) &&
        Objects.equals(this.interestRate, lifeInsuranceCalculator.interestRate) &&
        Objects.equals(this.endOfLifeExpenses, lifeInsuranceCalculator.endOfLifeExpenses) &&
        Objects.equals(this.existingLifeInsurance, lifeInsuranceCalculator.existingLifeInsurance) &&
        Objects.equals(this.liquidAssets, lifeInsuranceCalculator.liquidAssets) &&
        Objects.equals(this.generalInflationRate, lifeInsuranceCalculator.generalInflationRate) &&
        Objects.equals(this.educationInflationRate, lifeInsuranceCalculator.educationInflationRate) &&
        Objects.equals(this.taxRate, lifeInsuranceCalculator.taxRate) &&
        Objects.equals(this.benefitAmountRounding, lifeInsuranceCalculator.benefitAmountRounding) &&
        Objects.equals(this.marginOfError, lifeInsuranceCalculator.marginOfError) &&
        Objects.equals(this.childrenEducationConfig, lifeInsuranceCalculator.childrenEducationConfig) &&
        Objects.equals(this.incomeConfig, lifeInsuranceCalculator.incomeConfig) &&
        Objects.equals(this.beneficiaryBequestConfig, lifeInsuranceCalculator.beneficiaryBequestConfig);
  }

  @Override
  public int hashCode() {
    return Objects.hash(mortgageBalance, otherDebt, interestRate, endOfLifeExpenses, existingLifeInsurance, liquidAssets, generalInflationRate, educationInflationRate, taxRate, benefitAmountRounding, marginOfError, childrenEducationConfig, incomeConfig, beneficiaryBequestConfig);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class LifeInsuranceCalculator {\n");
    
    sb.append("    mortgageBalance: ").append(toIndentedString(mortgageBalance)).append("\n");
    sb.append("    otherDebt: ").append(toIndentedString(otherDebt)).append("\n");
    sb.append("    interestRate: ").append(toIndentedString(interestRate)).append("\n");
    sb.append("    endOfLifeExpenses: ").append(toIndentedString(endOfLifeExpenses)).append("\n");
    sb.append("    existingLifeInsurance: ").append(toIndentedString(existingLifeInsurance)).append("\n");
    sb.append("    liquidAssets: ").append(toIndentedString(liquidAssets)).append("\n");
    sb.append("    generalInflationRate: ").append(toIndentedString(generalInflationRate)).append("\n");
    sb.append("    educationInflationRate: ").append(toIndentedString(educationInflationRate)).append("\n");
    sb.append("    taxRate: ").append(toIndentedString(taxRate)).append("\n");
    sb.append("    benefitAmountRounding: ").append(toIndentedString(benefitAmountRounding)).append("\n");
    sb.append("    marginOfError: ").append(toIndentedString(marginOfError)).append("\n");
    sb.append("    childrenEducationConfig: ").append(toIndentedString(childrenEducationConfig)).append("\n");
    sb.append("    incomeConfig: ").append(toIndentedString(incomeConfig)).append("\n");
    sb.append("    beneficiaryBequestConfig: ").append(toIndentedString(beneficiaryBequestConfig)).append("\n");
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

