/*
 * Hydrogen Integration API
 * The Hydrogen Integration API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.integration.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import com.hydrogen.integration.model.Address;
import com.hydrogen.integration.model.Identification;
import com.hydrogen.integration.model.PoliticallyExposedPersonDTO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.threeten.bp.LocalDate;

/**
 * ClientVendorRequestDataVO
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-05-18T13:00:49.675Z")
public class ClientVendorRequestDataVO {
  @SerializedName("addresses")
  private List<Address> addresses = null;

  @SerializedName("business_name")
  private String businessName = null;

  @SerializedName("country_of_citizenship")
  private String countryOfCitizenship = null;

  @SerializedName("date_of_birth")
  private LocalDate dateOfBirth = null;

  @SerializedName("email")
  private String email = null;

  @SerializedName("first_name")
  private String firstName = null;

  @SerializedName("gender")
  private String gender = null;

  @SerializedName("identification_number")
  private String identificationNumber = null;

  @SerializedName("identification_number_type")
  private String identificationNumberType = null;

  @SerializedName("identifications")
  private List<Identification> identifications = null;

  @SerializedName("last_name")
  private String lastName = null;

  @SerializedName("metadata")
  private Map<String, String> metadata = null;

  @SerializedName("middle_name")
  private String middleName = null;

  @SerializedName("phone_number")
  private String phoneNumber = null;

  @SerializedName("politically_exposed_person")
  private PoliticallyExposedPersonDTO politicallyExposedPerson = null;

  @SerializedName("prefix")
  private String prefix = null;

  @SerializedName("suffix")
  private String suffix = null;

  @SerializedName("title")
  private String title = null;

  public ClientVendorRequestDataVO addresses(List<Address> addresses) {
    this.addresses = addresses;
    return this;
  }

  public ClientVendorRequestDataVO addAddressesItem(Address addressesItem) {
    if (this.addresses == null) {
      this.addresses = new ArrayList<Address>();
    }
    this.addresses.add(addressesItem);
    return this;
  }

   /**
   * Get addresses
   * @return addresses
  **/
  @ApiModelProperty(value = "")
  public List<Address> getAddresses() {
    return addresses;
  }

  public void setAddresses(List<Address> addresses) {
    this.addresses = addresses;
  }

  public ClientVendorRequestDataVO businessName(String businessName) {
    this.businessName = businessName;
    return this;
  }

   /**
   * Get businessName
   * @return businessName
  **/
  @ApiModelProperty(value = "")
  public String getBusinessName() {
    return businessName;
  }

  public void setBusinessName(String businessName) {
    this.businessName = businessName;
  }

  public ClientVendorRequestDataVO countryOfCitizenship(String countryOfCitizenship) {
    this.countryOfCitizenship = countryOfCitizenship;
    return this;
  }

   /**
   * Get countryOfCitizenship
   * @return countryOfCitizenship
  **/
  @ApiModelProperty(value = "")
  public String getCountryOfCitizenship() {
    return countryOfCitizenship;
  }

  public void setCountryOfCitizenship(String countryOfCitizenship) {
    this.countryOfCitizenship = countryOfCitizenship;
  }

  public ClientVendorRequestDataVO dateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
    return this;
  }

   /**
   * Get dateOfBirth
   * @return dateOfBirth
  **/
  @ApiModelProperty(value = "")
  public LocalDate getDateOfBirth() {
    return dateOfBirth;
  }

  public void setDateOfBirth(LocalDate dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  public ClientVendorRequestDataVO email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @ApiModelProperty(value = "")
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public ClientVendorRequestDataVO firstName(String firstName) {
    this.firstName = firstName;
    return this;
  }

   /**
   * Get firstName
   * @return firstName
  **/
  @ApiModelProperty(value = "")
  public String getFirstName() {
    return firstName;
  }

  public void setFirstName(String firstName) {
    this.firstName = firstName;
  }

  public ClientVendorRequestDataVO gender(String gender) {
    this.gender = gender;
    return this;
  }

   /**
   * Get gender
   * @return gender
  **/
  @ApiModelProperty(value = "")
  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public ClientVendorRequestDataVO identificationNumber(String identificationNumber) {
    this.identificationNumber = identificationNumber;
    return this;
  }

   /**
   * Get identificationNumber
   * @return identificationNumber
  **/
  @ApiModelProperty(value = "")
  public String getIdentificationNumber() {
    return identificationNumber;
  }

  public void setIdentificationNumber(String identificationNumber) {
    this.identificationNumber = identificationNumber;
  }

  public ClientVendorRequestDataVO identificationNumberType(String identificationNumberType) {
    this.identificationNumberType = identificationNumberType;
    return this;
  }

   /**
   * Get identificationNumberType
   * @return identificationNumberType
  **/
  @ApiModelProperty(value = "")
  public String getIdentificationNumberType() {
    return identificationNumberType;
  }

  public void setIdentificationNumberType(String identificationNumberType) {
    this.identificationNumberType = identificationNumberType;
  }

  public ClientVendorRequestDataVO identifications(List<Identification> identifications) {
    this.identifications = identifications;
    return this;
  }

  public ClientVendorRequestDataVO addIdentificationsItem(Identification identificationsItem) {
    if (this.identifications == null) {
      this.identifications = new ArrayList<Identification>();
    }
    this.identifications.add(identificationsItem);
    return this;
  }

   /**
   * Get identifications
   * @return identifications
  **/
  @ApiModelProperty(value = "")
  public List<Identification> getIdentifications() {
    return identifications;
  }

  public void setIdentifications(List<Identification> identifications) {
    this.identifications = identifications;
  }

  public ClientVendorRequestDataVO lastName(String lastName) {
    this.lastName = lastName;
    return this;
  }

   /**
   * Get lastName
   * @return lastName
  **/
  @ApiModelProperty(value = "")
  public String getLastName() {
    return lastName;
  }

  public void setLastName(String lastName) {
    this.lastName = lastName;
  }

  public ClientVendorRequestDataVO metadata(Map<String, String> metadata) {
    this.metadata = metadata;
    return this;
  }

  public ClientVendorRequestDataVO putMetadataItem(String key, String metadataItem) {
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

  public ClientVendorRequestDataVO middleName(String middleName) {
    this.middleName = middleName;
    return this;
  }

   /**
   * Get middleName
   * @return middleName
  **/
  @ApiModelProperty(value = "")
  public String getMiddleName() {
    return middleName;
  }

  public void setMiddleName(String middleName) {
    this.middleName = middleName;
  }

  public ClientVendorRequestDataVO phoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
    return this;
  }

   /**
   * Get phoneNumber
   * @return phoneNumber
  **/
  @ApiModelProperty(value = "")
  public String getPhoneNumber() {
    return phoneNumber;
  }

  public void setPhoneNumber(String phoneNumber) {
    this.phoneNumber = phoneNumber;
  }

  public ClientVendorRequestDataVO politicallyExposedPerson(PoliticallyExposedPersonDTO politicallyExposedPerson) {
    this.politicallyExposedPerson = politicallyExposedPerson;
    return this;
  }

   /**
   * Get politicallyExposedPerson
   * @return politicallyExposedPerson
  **/
  @ApiModelProperty(value = "")
  public PoliticallyExposedPersonDTO getPoliticallyExposedPerson() {
    return politicallyExposedPerson;
  }

  public void setPoliticallyExposedPerson(PoliticallyExposedPersonDTO politicallyExposedPerson) {
    this.politicallyExposedPerson = politicallyExposedPerson;
  }

  public ClientVendorRequestDataVO prefix(String prefix) {
    this.prefix = prefix;
    return this;
  }

   /**
   * Get prefix
   * @return prefix
  **/
  @ApiModelProperty(value = "")
  public String getPrefix() {
    return prefix;
  }

  public void setPrefix(String prefix) {
    this.prefix = prefix;
  }

  public ClientVendorRequestDataVO suffix(String suffix) {
    this.suffix = suffix;
    return this;
  }

   /**
   * Get suffix
   * @return suffix
  **/
  @ApiModelProperty(value = "")
  public String getSuffix() {
    return suffix;
  }

  public void setSuffix(String suffix) {
    this.suffix = suffix;
  }

  public ClientVendorRequestDataVO title(String title) {
    this.title = title;
    return this;
  }

   /**
   * Get title
   * @return title
  **/
  @ApiModelProperty(value = "")
  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }


  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ClientVendorRequestDataVO clientVendorRequestDataVO = (ClientVendorRequestDataVO) o;
    return Objects.equals(this.addresses, clientVendorRequestDataVO.addresses) &&
        Objects.equals(this.businessName, clientVendorRequestDataVO.businessName) &&
        Objects.equals(this.countryOfCitizenship, clientVendorRequestDataVO.countryOfCitizenship) &&
        Objects.equals(this.dateOfBirth, clientVendorRequestDataVO.dateOfBirth) &&
        Objects.equals(this.email, clientVendorRequestDataVO.email) &&
        Objects.equals(this.firstName, clientVendorRequestDataVO.firstName) &&
        Objects.equals(this.gender, clientVendorRequestDataVO.gender) &&
        Objects.equals(this.identificationNumber, clientVendorRequestDataVO.identificationNumber) &&
        Objects.equals(this.identificationNumberType, clientVendorRequestDataVO.identificationNumberType) &&
        Objects.equals(this.identifications, clientVendorRequestDataVO.identifications) &&
        Objects.equals(this.lastName, clientVendorRequestDataVO.lastName) &&
        Objects.equals(this.metadata, clientVendorRequestDataVO.metadata) &&
        Objects.equals(this.middleName, clientVendorRequestDataVO.middleName) &&
        Objects.equals(this.phoneNumber, clientVendorRequestDataVO.phoneNumber) &&
        Objects.equals(this.politicallyExposedPerson, clientVendorRequestDataVO.politicallyExposedPerson) &&
        Objects.equals(this.prefix, clientVendorRequestDataVO.prefix) &&
        Objects.equals(this.suffix, clientVendorRequestDataVO.suffix) &&
        Objects.equals(this.title, clientVendorRequestDataVO.title);
  }

  @Override
  public int hashCode() {
    return Objects.hash(addresses, businessName, countryOfCitizenship, dateOfBirth, email, firstName, gender, identificationNumber, identificationNumberType, identifications, lastName, metadata, middleName, phoneNumber, politicallyExposedPerson, prefix, suffix, title);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ClientVendorRequestDataVO {\n");
    
    sb.append("    addresses: ").append(toIndentedString(addresses)).append("\n");
    sb.append("    businessName: ").append(toIndentedString(businessName)).append("\n");
    sb.append("    countryOfCitizenship: ").append(toIndentedString(countryOfCitizenship)).append("\n");
    sb.append("    dateOfBirth: ").append(toIndentedString(dateOfBirth)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    firstName: ").append(toIndentedString(firstName)).append("\n");
    sb.append("    gender: ").append(toIndentedString(gender)).append("\n");
    sb.append("    identificationNumber: ").append(toIndentedString(identificationNumber)).append("\n");
    sb.append("    identificationNumberType: ").append(toIndentedString(identificationNumberType)).append("\n");
    sb.append("    identifications: ").append(toIndentedString(identifications)).append("\n");
    sb.append("    lastName: ").append(toIndentedString(lastName)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    middleName: ").append(toIndentedString(middleName)).append("\n");
    sb.append("    phoneNumber: ").append(toIndentedString(phoneNumber)).append("\n");
    sb.append("    politicallyExposedPerson: ").append(toIndentedString(politicallyExposedPerson)).append("\n");
    sb.append("    prefix: ").append(toIndentedString(prefix)).append("\n");
    sb.append("    suffix: ").append(toIndentedString(suffix)).append("\n");
    sb.append("    title: ").append(toIndentedString(title)).append("\n");
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

