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
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;

/**
 * Card Object
 */
@ApiModel(description = "Card Object")
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-12T05:33:30.744Z")
public class Card {
  @SerializedName("address")
  private List<CardAddress> address = null;

  @SerializedName("card_holder_name")
  private String cardHolderName = null;

  @SerializedName("card_image")
  private String cardImage = null;

  @SerializedName("card_issuance")
  private String cardIssuance = null;

  @SerializedName("card_name")
  private String cardName = null;

  @SerializedName("card_network")
  private String cardNetwork = null;

  @SerializedName("card_program_id")
  private UUID cardProgramId = null;

  @SerializedName("card_type")
  private String cardType = null;

  @SerializedName("client_id")
  private UUID clientId = null;

  @SerializedName("create_date")
  private OffsetDateTime createDate = null;

  @SerializedName("credit_limit")
  private Double creditLimit = null;

  @SerializedName("currency_code")
  private String currencyCode = null;

  @SerializedName("expiry_date")
  private LocalDate expiryDate = null;

  @SerializedName("fulfillment")
  private String fulfillment = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("institution_id")
  private UUID institutionId = null;

  @SerializedName("institution_name")
  private String institutionName = null;

  @SerializedName("is_active")
  private Boolean isActive = null;

  @SerializedName("is_pin_set")
  private Boolean isPinSet = null;

  @SerializedName("is_primary")
  private Boolean isPrimary = null;

  @SerializedName("is_reloadable")
  private Boolean isReloadable = null;

  @SerializedName("mask")
  private String mask = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("phone_number")
  private String phoneNumber = null;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  @SerializedName("prepaid_amount")
  private Float prepaidAmount = null;

  @SerializedName("secondary_id")
  private String secondaryId = null;

  @SerializedName("status")
  private String status = null;

  @SerializedName("update_date")
  private OffsetDateTime updateDate = null;

   /**
   * Get address
   * @return address
  **/
  @ApiModelProperty(example = "[]", value = "")
  public List<CardAddress> getAddress() {
    return address;
  }

  public Card cardHolderName(String cardHolderName) {
    this.cardHolderName = cardHolderName;
    return this;
  }

   /**
   * cardHolderName
   * @return cardHolderName
  **/
  @ApiModelProperty(example = "XYZ", required = true, value = "cardHolderName")
  public String getCardHolderName() {
    return cardHolderName;
  }

  public void setCardHolderName(String cardHolderName) {
    this.cardHolderName = cardHolderName;
  }

  public Card cardImage(String cardImage) {
    this.cardImage = cardImage;
    return this;
  }

   /**
   * card_image
   * @return cardImage
  **/
  @ApiModelProperty(example = "/sample.png", value = "card_image")
  public String getCardImage() {
    return cardImage;
  }

  public void setCardImage(String cardImage) {
    this.cardImage = cardImage;
  }

  public Card cardIssuance(String cardIssuance) {
    this.cardIssuance = cardIssuance;
    return this;
  }

   /**
   * cardIssuance
   * @return cardIssuance
  **/
  @ApiModelProperty(example = "virtual", required = true, value = "cardIssuance")
  public String getCardIssuance() {
    return cardIssuance;
  }

  public void setCardIssuance(String cardIssuance) {
    this.cardIssuance = cardIssuance;
  }

  public Card cardName(String cardName) {
    this.cardName = cardName;
    return this;
  }

   /**
   * cardName
   * @return cardName
  **/
  @ApiModelProperty(example = "Visa", required = true, value = "cardName")
  public String getCardName() {
    return cardName;
  }

  public void setCardName(String cardName) {
    this.cardName = cardName;
  }

  public Card cardNetwork(String cardNetwork) {
    this.cardNetwork = cardNetwork;
    return this;
  }

   /**
   * cardNetwork
   * @return cardNetwork
  **/
  @ApiModelProperty(example = "Discover", value = "cardNetwork")
  public String getCardNetwork() {
    return cardNetwork;
  }

  public void setCardNetwork(String cardNetwork) {
    this.cardNetwork = cardNetwork;
  }

  public Card cardProgramId(UUID cardProgramId) {
    this.cardProgramId = cardProgramId;
    return this;
  }

   /**
   * cardProgramId
   * @return cardProgramId
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "cardProgramId")
  public UUID getCardProgramId() {
    return cardProgramId;
  }

  public void setCardProgramId(UUID cardProgramId) {
    this.cardProgramId = cardProgramId;
  }

  public Card cardType(String cardType) {
    this.cardType = cardType;
    return this;
  }

   /**
   * cardType
   * @return cardType
  **/
  @ApiModelProperty(example = "credit", required = true, value = "cardType")
  public String getCardType() {
    return cardType;
  }

  public void setCardType(String cardType) {
    this.cardType = cardType;
  }

  public Card clientId(UUID clientId) {
    this.clientId = clientId;
    return this;
  }

   /**
   * clientId
   * @return clientId
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", required = true, value = "clientId")
  public UUID getClientId() {
    return clientId;
  }

  public void setClientId(UUID clientId) {
    this.clientId = clientId;
  }

   /**
   * Get createDate
   * @return createDate
  **/
  @ApiModelProperty(example = "2018-06-28T18:17:23.579+0000", value = "")
  public OffsetDateTime getCreateDate() {
    return createDate;
  }

  public Card creditLimit(Double creditLimit) {
    this.creditLimit = creditLimit;
    return this;
  }

   /**
   * creditLimit
   * @return creditLimit
  **/
  @ApiModelProperty(example = "1.0E7", value = "creditLimit")
  public Double getCreditLimit() {
    return creditLimit;
  }

  public void setCreditLimit(Double creditLimit) {
    this.creditLimit = creditLimit;
  }

  public Card currencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
    return this;
  }

   /**
   * currencyCode
   * @return currencyCode
  **/
  @ApiModelProperty(example = "USD", value = "currencyCode")
  public String getCurrencyCode() {
    return currencyCode;
  }

  public void setCurrencyCode(String currencyCode) {
    this.currencyCode = currencyCode;
  }

  public Card expiryDate(LocalDate expiryDate) {
    this.expiryDate = expiryDate;
    return this;
  }

   /**
   * expiryDate
   * @return expiryDate
  **/
  @ApiModelProperty(example = "06/28/2018", value = "expiryDate")
  public LocalDate getExpiryDate() {
    return expiryDate;
  }

  public void setExpiryDate(LocalDate expiryDate) {
    this.expiryDate = expiryDate;
  }

  public Card fulfillment(String fulfillment) {
    this.fulfillment = fulfillment;
    return this;
  }

   /**
   * fulfillment
   * @return fulfillment
  **/
  @ApiModelProperty(example = "secure mailing", value = "fulfillment")
  public String getFulfillment() {
    return fulfillment;
  }

  public void setFulfillment(String fulfillment) {
    this.fulfillment = fulfillment;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "")
  public UUID getId() {
    return id;
  }

  public Card institutionId(UUID institutionId) {
    this.institutionId = institutionId;
    return this;
  }

   /**
   * institutionId
   * @return institutionId
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", value = "institutionId")
  public UUID getInstitutionId() {
    return institutionId;
  }

  public void setInstitutionId(UUID institutionId) {
    this.institutionId = institutionId;
  }

  public Card institutionName(String institutionName) {
    this.institutionName = institutionName;
    return this;
  }

   /**
   * institutionName
   * @return institutionName
  **/
  @ApiModelProperty(example = "XYZ", value = "institutionName")
  public String getInstitutionName() {
    return institutionName;
  }

  public void setInstitutionName(String institutionName) {
    this.institutionName = institutionName;
  }

  public Card isActive(Boolean isActive) {
    this.isActive = isActive;
    return this;
  }

   /**
   * is_active
   * @return isActive
  **/
  @ApiModelProperty(example = "true", value = "is_active")
  public Boolean isIsActive() {
    return isActive;
  }

  public void setIsActive(Boolean isActive) {
    this.isActive = isActive;
  }

  public Card isPinSet(Boolean isPinSet) {
    this.isPinSet = isPinSet;
    return this;
  }

   /**
   * is_pin_set
   * @return isPinSet
  **/
  @ApiModelProperty(example = "false", value = "is_pin_set")
  public Boolean isIsPinSet() {
    return isPinSet;
  }

  public void setIsPinSet(Boolean isPinSet) {
    this.isPinSet = isPinSet;
  }

  public Card isPrimary(Boolean isPrimary) {
    this.isPrimary = isPrimary;
    return this;
  }

   /**
   * is_primary
   * @return isPrimary
  **/
  @ApiModelProperty(example = "false", value = "is_primary")
  public Boolean isIsPrimary() {
    return isPrimary;
  }

  public void setIsPrimary(Boolean isPrimary) {
    this.isPrimary = isPrimary;
  }

  public Card isReloadable(Boolean isReloadable) {
    this.isReloadable = isReloadable;
    return this;
  }

   /**
   * is_reloadable
   * @return isReloadable
  **/
  @ApiModelProperty(example = "false", value = "is_reloadable")
  public Boolean isIsReloadable() {
    return isReloadable;
  }

  public void setIsReloadable(Boolean isReloadable) {
    this.isReloadable = isReloadable;
  }

  public Card mask(String mask) {
    this.mask = mask;
    return this;
  }

   /**
   * mask
   * @return mask
  **/
  @ApiModelProperty(example = "xyz", value = "mask")
  public String getMask() {
    return mask;
  }

  public void setMask(String mask) {
    this.mask = mask;
  }

   /**
   * Get metadata
   * @return metadata
  **/
  @ApiModelProperty(example = "{}", value = "")
  public Map<String, String> getMetadata() {
    return metadata;
  }

  public Card phoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

   /**
   * phoneNumber
   * @return phoneNumber
  **/
  @ApiModelProperty(example = "222-222-2222", value = "phoneNumber")
  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public Card portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * portfolioId
   * @return portfolioId
  **/
  @ApiModelProperty(example = "000183ac-2288-4564-a76b-119f4694be98", required = true, value = "portfolioId")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }

  public Card prepaidAmount(Float prepaidAmount) {
    this.prepaidAmount = prepaidAmount;
    return this;
  }

   /**
   * prepaidAmount
   * @return prepaidAmount
  **/
  @ApiModelProperty(example = "100.0", value = "prepaidAmount")
  public Float getPrepaidAmount() {
    return prepaidAmount;
  }

  public void setPrepaidAmount(Float prepaidAmount) {
    this.prepaidAmount = prepaidAmount;
  }

   /**
   * Get secondaryId
   * @return secondaryId
  **/
  @ApiModelProperty(example = "7289243787238", value = "")
  public String getSecondaryId() {
    return secondaryId;
  }

  public Card status(String status) {
    this.status = status;
    return this;
  }

   /**
   * status
   * @return status
  **/
  @ApiModelProperty(value = "status")
  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
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
    Card card = (Card) o;
    return Objects.equals(this.address, card.address) &&
        Objects.equals(this.cardHolderName, card.cardHolderName) &&
        Objects.equals(this.cardImage, card.cardImage) &&
        Objects.equals(this.cardIssuance, card.cardIssuance) &&
        Objects.equals(this.cardName, card.cardName) &&
        Objects.equals(this.cardNetwork, card.cardNetwork) &&
        Objects.equals(this.cardProgramId, card.cardProgramId) &&
        Objects.equals(this.cardType, card.cardType) &&
        Objects.equals(this.clientId, card.clientId) &&
        Objects.equals(this.createDate, card.createDate) &&
        Objects.equals(this.creditLimit, card.creditLimit) &&
        Objects.equals(this.currencyCode, card.currencyCode) &&
        Objects.equals(this.expiryDate, card.expiryDate) &&
        Objects.equals(this.fulfillment, card.fulfillment) &&
        Objects.equals(this.id, card.id) &&
        Objects.equals(this.institutionId, card.institutionId) &&
        Objects.equals(this.institutionName, card.institutionName) &&
        Objects.equals(this.isActive, card.isActive) &&
        Objects.equals(this.isPinSet, card.isPinSet) &&
        Objects.equals(this.isPrimary, card.isPrimary) &&
        Objects.equals(this.isReloadable, card.isReloadable) &&
        Objects.equals(this.mask, card.mask) &&
        Objects.equals(this.metadata, card.metadata) &&
        Objects.equals(this.phoneNumber, card.phoneNumber) &&
        Objects.equals(this.portfolioId, card.portfolioId) &&
        Objects.equals(this.prepaidAmount, card.prepaidAmount) &&
        Objects.equals(this.secondaryId, card.secondaryId) &&
        Objects.equals(this.status, card.status) &&
        Objects.equals(this.updateDate, card.updateDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(address, cardHolderName, cardImage, cardIssuance, cardName, cardNetwork, cardProgramId, cardType, clientId, createDate, creditLimit, currencyCode, expiryDate, fulfillment, id, institutionId, institutionName, isActive, isPinSet, isPrimary, isReloadable, mask, metadata, phoneNumber, portfolioId, prepaidAmount, secondaryId, status, updateDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Card {\n");
    
    sb.append("    address: ").append(toIndentedString(address)).append("\n");
    sb.append("    cardHolderName: ").append(toIndentedString(cardHolderName)).append("\n");
    sb.append("    cardImage: ").append(toIndentedString(cardImage)).append("\n");
    sb.append("    cardIssuance: ").append(toIndentedString(cardIssuance)).append("\n");
    sb.append("    cardName: ").append(toIndentedString(cardName)).append("\n");
    sb.append("    cardNetwork: ").append(toIndentedString(cardNetwork)).append("\n");
    sb.append("    cardProgramId: ").append(toIndentedString(cardProgramId)).append("\n");
    sb.append("    cardType: ").append(toIndentedString(cardType)).append("\n");
    sb.append("    clientId: ").append(toIndentedString(clientId)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
    sb.append("    creditLimit: ").append(toIndentedString(creditLimit)).append("\n");
    sb.append("    currencyCode: ").append(toIndentedString(currencyCode)).append("\n");
    sb.append("    expiryDate: ").append(toIndentedString(expiryDate)).append("\n");
    sb.append("    fulfillment: ").append(toIndentedString(fulfillment)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    institutionId: ").append(toIndentedString(institutionId)).append("\n");
    sb.append("    institutionName: ").append(toIndentedString(institutionName)).append("\n");
    sb.append("    isActive: ").append(toIndentedString(isActive)).append("\n");
    sb.append("    isPinSet: ").append(toIndentedString(isPinSet)).append("\n");
    sb.append("    isPrimary: ").append(toIndentedString(isPrimary)).append("\n");
    sb.append("    isReloadable: ").append(toIndentedString(isReloadable)).append("\n");
    sb.append("    mask: ").append(toIndentedString(mask)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
    sb.append("    prepaidAmount: ").append(toIndentedString(prepaidAmount)).append("\n");
    sb.append("    secondaryId: ").append(toIndentedString(secondaryId)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
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

