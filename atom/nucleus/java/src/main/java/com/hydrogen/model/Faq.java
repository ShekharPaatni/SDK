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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.OffsetDateTime;

/**
 * Faq Object
 */
@ApiModel(description = "Faq Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class Faq {
  @SerializedName("answer")
  private String answer = null;

  @SerializedName("category")
  private String category = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("faq_keywords")
  private List<FAQKeyword> faqKeywords = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("is_active")
  private Boolean isActive = null;

  @SerializedName("is_featured")
  private Boolean isFeatured = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("number")
  private Integer number = null;

  @SerializedName("question")
  private String question = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("seo_name")
  private String seoName = null;

  @SerializedName("subcategory")
  private String subcategory = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

  public Faq answer(String answer) {
    this.answer = answer;
    return this;
  }

   /**
   * answer
   * @return answer
  **/
  @ApiModelProperty(example = "Sample", required = true, value = "answer")
  public String getAnswer() {
    return answer;
  }

  public void setAnswer(String answer) {
    this.answer = answer;
  }

  public Faq category(String category) {
    this.category = category;
    return this;
  }

   /**
   * category
   * @return category
  **/
  @ApiModelProperty(example = "Account Opening", value = "category")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public Faq faqKeywords(List<FAQKeyword> faqKeywords) {
    this.faqKeywords = faqKeywords;
    return this;
  }

  public Faq addFaqKeywordsItem(FAQKeyword faqKeywordsItem) {
    if (this.faqKeywords == null) {
      this.faqKeywords = new ArrayList<FAQKeyword>();
    }
    this.faqKeywords.add(faqKeywordsItem);
    return this;
  }

   /**
   * Get faqKeywords
   * @return faqKeywords
  **/
  @ApiModelProperty(value = "")
  public List<FAQKeyword> getFaqKeywords() {
    return faqKeywords;
  }

  public void setFaqKeywords(List<FAQKeyword> faqKeywords) {
    this.faqKeywords = faqKeywords;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Faq isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * isActive
   * @return isActive
  **/
  @ApiModelProperty(example = "true", value = "isActive")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public Faq isFeatured(Boolean isFeatured) {
    this.isFeatured = isFeatured;
    return this;
  }

   /**
   * isFeatured
   * @return isFeatured
  **/
  @ApiModelProperty(example = "true", value = "isFeatured")
  public Boolean isIsFeatured() {
    return isFeatured;
  }

  public void setIsFeatured(Boolean isFeatured) {
    this.isFeatured = isFeatured;
  }

  public Faq metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public Faq putMetadataItem(String key, String metadataItem) {
    if (this.metadata == null) {
      this.metadata = new HashMap<String, String>();
    }
    this.metadata.put(key, metadataItem);
    return this;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public void setMetadata(Map<String, String> metadata) {
    this.metadata = metadata;
  }

  public Faq number(Integer number) {
    this.number = number;
    return this;
  }

   /**
   * number
   * @return number
  **/
  @ApiModelProperty(example = "1", value = "number")
  public Integer getNumber() {
    return number;
  }

  public void setNumber(Integer number) {
    this.number = number;
  }

  public Faq question(String question) {
    this.question = question;
    return this;
  }

   /**
   * question
   * @return question
  **/
  @ApiModelProperty(example = "What types of accounts can I open and transfer?", required = true, value = "question")
  public String getQuestion() {
    return question;
  }

  public void setQuestion(String question) {
    this.question = question;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public Faq seoName(String seoName) {
    this.seoName = seoName;
    return this;
  }

   /**
   * seoName
   * @return seoName
  **/
  @ApiModelProperty(example = "Taxable", value = "seoName")
  public String getSeoName() {
    return seoName;
  }

  public void setSeoName(String seoName) {
    this.seoName = seoName;
  }

  public Faq subcategory(String subcategory) {
    this.subcategory = subcategory;
    return this;
  }

   /**
   * subcategory
   * @return subcategory
  **/
  @ApiModelProperty(example = "Taxable", value = "subcategory")
  public String getSubcategory() {
    return subcategory;
  }

  public void setSubcategory(String subcategory) {
    this.subcategory = subcategory;
  }

   /**
   * Get updateDate
   * @return updateDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getUpdateDate() {
    return updateDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Faq faq = (Faq) o;
    return Objects.equals(this.answer, faq.answer) &&
        Objects.equals(this.category, faq.category) &&
        Objects.equals(this.createDate, faq.createDate) &&
        Objects.equals(this.faqKeywords, faq.faqKeywords) &&
        Objects.equals(this.id, faq.id) &&
        Objects.equals(this.isActive, faq.isActive) &&
        Objects.equals(this.isFeatured, faq.isFeatured) &&
        Objects.equals(this.metadata, faq.metadata) &&
        Objects.equals(this.number, faq.number) &&
        Objects.equals(this.question, faq.question) &&
        Objects.equals(this.secondaryId, faq.secondaryId) &&
        Objects.equals(this.seoName, faq.seoName) &&
        Objects.equals(this.subcategory, faq.subcategory) &&
        Objects.equals(this.updateDate, faq.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(answer, category, createDate, faqKeywords, id, isActive, isFeatured, metadata, number, question, secondaryId, seoName, subcategory, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Faq {\n");
    
    sb.append("    answer: ").append(toIndentedString(answer)).append("\n");
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    faqKeywords: ").append(toIndentedString(faqKeywords)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    isFeatured: ").append(toIndentedString(isFeatured)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    number: ").append(toIndentedString(number)).append("\n");
    sb.append("    question: ").append(toIndentedString(question)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    seoName: ").append(toIndentedString(seoName)).append("\n");
    sb.append("    subcategory: ").append(toIndentedString(subcategory)).append("\n");
    sb.append("    updateDate: ").append(toIndentedString(updateDate)).append("\n");
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

