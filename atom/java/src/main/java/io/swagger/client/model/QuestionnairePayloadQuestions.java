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
import io.swagger.client.model.QuestionnairePayloadAnswers;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * QuestionnairePayloadQuestions
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class QuestionnairePayloadQuestions {
  @SerializedName("category")
  private String category = null;

  @SerializedName("subcategory")
  private String subcategory = null;

  @SerializedName("title")
  private String title = null;

  @SerializedName("description")
  private String description = null;

  @SerializedName("question_type")
  private String questionType = null;

  @SerializedName("order_index")
  private String orderIndex = null;

  @SerializedName("document")
  private String document = null;

  @SerializedName("image")
  private String image = null;

  @SerializedName("weight")
  private Double weight = null;

  @SerializedName("is_account")
  private Boolean isAccount = null;

  @SerializedName("metadata")
  private Object metadata = null;

  @SerializedName("answers")
  private List<QuestionnairePayloadAnswers> answers = null;

  public QuestionnairePayloadQuestions category(String category) {
    this.category = category;
    return this;
  }

   /**
   * A category for the question such as “Onboarding” or “Risk Profile”
   * @return category
  **/
  @ApiModelProperty(value = "A category for the question such as “Onboarding” or “Risk Profile”")
  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public QuestionnairePayloadQuestions subcategory(String subcategory) {
    this.subcategory = subcategory;
    return this;
  }

   /**
   * A subcategory for the question such as “Income-related”
   * @return subcategory
  **/
  @ApiModelProperty(value = "A subcategory for the question such as “Income-related”")
  public String getSubcategory() {
    return subcategory;
  }

  public void setSubcategory(String subcategory) {
    this.subcategory = subcategory;
  }

  public QuestionnairePayloadQuestions title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Title for the question such as the body of the question or a header. Pairs with the description field
   * @return title
  **/
  @ApiModelProperty(value = "Title for the question such as the body of the question or a header. Pairs with the description field")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public QuestionnairePayloadQuestions description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Description for the question such as additioonal question content. Pairs with the title field
   * @return description
  **/
  @ApiModelProperty(value = "Description for the question such as additioonal question content. Pairs with the title field")
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public QuestionnairePayloadQuestions questionType(String questionType) {
    this.questionType = questionType;
    return this;
  }

   /**
   * The type of question structure such as “multiple_choice” or “free_form”
   * @return questionType
  **/
  @ApiModelProperty(value = "The type of question structure such as “multiple_choice” or “free_form”")
  public String getQuestionType() {
    return questionType;
  }

  public void setQuestionType(String questionType) {
    this.questionType = questionType;
  }

  public QuestionnairePayloadQuestions orderIndex(String orderIndex) {
    this.orderIndex = orderIndex;
    return this;
  }

   /**
   * The order of the question within the questionnaire or category such as “1”, “2”, “3”
   * @return orderIndex
  **/
  @ApiModelProperty(value = "The order of the question within the questionnaire or category such as “1”, “2”, “3”")
  public String getOrderIndex() {
    return orderIndex;
  }

  public void setOrderIndex(String orderIndex) {
    this.orderIndex = orderIndex;
  }

  public QuestionnairePayloadQuestions document(String document) {
    this.document = document;
    return this;
  }

   /**
   * A reference link to a document related to the question
   * @return document
  **/
  @ApiModelProperty(value = "A reference link to a document related to the question")
  public String getDocument() {
    return document;
  }

  public void setDocument(String document) {
    this.document = document;
  }

  public QuestionnairePayloadQuestions image(String image) {
    this.image = image;
    return this;
  }

   /**
   * A reference link to an image associated with the question
   * @return image
  **/
  @ApiModelProperty(value = "A reference link to an image associated with the question")
  public String getImage() {
    return image;
  }

  public void setImage(String image) {
    this.image = image;
  }

  public QuestionnairePayloadQuestions weight(Double weight) {
    this.weight = weight;
    return this;
  }

   /**
   * The weight of the question as a percentage of the total questionnaire if each question does not contribute equally when calculating the final “score”; ex. 20 representing 20%. Weights of all the questions must add up to 100
   * @return weight
  **/
  @ApiModelProperty(value = "The weight of the question as a percentage of the total questionnaire if each question does not contribute equally when calculating the final “score”; ex. 20 representing 20%. Weights of all the questions must add up to 100")
  public Double getWeight() {
    return weight;
  }

  public void setWeight(Double weight) {
    this.weight = weight;
  }

  public QuestionnairePayloadQuestions isAccount(Boolean isAccount) {
    this.isAccount = isAccount;
    return this;
  }

   /**
   * Indicates if the question is answered at an account-level
   * @return isAccount
  **/
  @ApiModelProperty(value = "Indicates if the question is answered at an account-level")
  public Boolean isIsAccount() {
    return isAccount;
  }

  public void setIsAccount(Boolean isAccount) {
    this.isAccount = isAccount;
  }

  public QuestionnairePayloadQuestions metadata(Object metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Custom information associated with the question in the format key:value
   * @return metadata
  **/
  @ApiModelProperty(value = "Custom information associated with the question in the format key:value")
  public Object getMetadata() {
    return metadata;
  }

  public void setMetadata(Object metadata) {
    this.metadata = metadata;
  }

  public QuestionnairePayloadQuestions answers(List<QuestionnairePayloadAnswers> answers) {
    this.answers = answers;
    return this;
  }

  public QuestionnairePayloadQuestions addAnswersItem(QuestionnairePayloadAnswers answersItem) {
    if (this.answers == null) {
      this.answers = new ArrayList<QuestionnairePayloadAnswers>();
    }
    this.answers.add(answersItem);
    return this;
  }

   /**
   * Get answers
   * @return answers
  **/
  @ApiModelProperty(value = "")
  public List<QuestionnairePayloadAnswers> getAnswers() {
    return answers;
  }

  public void setAnswers(List<QuestionnairePayloadAnswers> answers) {
    this.answers = answers;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    QuestionnairePayloadQuestions questionnairePayloadQuestions = (QuestionnairePayloadQuestions) o;
    return Objects.equals(this.category, questionnairePayloadQuestions.category) &&
        Objects.equals(this.subcategory, questionnairePayloadQuestions.subcategory) &&
        Objects.equals(this.title, questionnairePayloadQuestions.title) &&
        Objects.equals(this.description, questionnairePayloadQuestions.description) &&
        Objects.equals(this.questionType, questionnairePayloadQuestions.questionType) &&
        Objects.equals(this.orderIndex, questionnairePayloadQuestions.orderIndex) &&
        Objects.equals(this.document, questionnairePayloadQuestions.document) &&
        Objects.equals(this.image, questionnairePayloadQuestions.image) &&
        Objects.equals(this.weight, questionnairePayloadQuestions.weight) &&
        Objects.equals(this.isAccount, questionnairePayloadQuestions.isAccount) &&
        Objects.equals(this.metadata, questionnairePayloadQuestions.metadata) &&
        Objects.equals(this.answers, questionnairePayloadQuestions.answers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(category, subcategory, title, description, questionType, orderIndex, document, image, weight, isAccount, metadata, answers);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class QuestionnairePayloadQuestions {\n");
    
    sb.append("    category: ").append(toIndentedString(category)).append("\n");
    sb.append("    subcategory: ").append(toIndentedString(subcategory)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    questionType: ").append(toIndentedString(questionType)).append("\n");
    sb.append("    orderIndex: ").append(toIndentedString(orderIndex)).append("\n");
    sb.append("    document: ").append(toIndentedString(document)).append("\n");
    sb.append("    image: ").append(toIndentedString(image)).append("\n");
    sb.append("    weight: ").append(toIndentedString(weight)).append("\n");
    sb.append("    isAccount: ").append(toIndentedString(isAccount)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    answers: ").append(toIndentedString(answers)).append("\n");
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

