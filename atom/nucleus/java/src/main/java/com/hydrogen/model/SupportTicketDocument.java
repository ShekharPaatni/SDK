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
import io.swagger.annotations.ApiModelProperty;

/**
 * SupportTicketDocument
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2020-06-04T05:11:20.520Z")
public class SupportTicketDocument {
  @SerializedName("doc_file")
  private String docFile = null;

  @SerializedName("doc_name")
  private String docName = null;

  @SerializedName("doc_size")
  private Integer docSize = null;

  @SerializedName("doc_type")
  private String docType = null;

  @SerializedName("url_path")
  private String urlPath = null;

  public SupportTicketDocument docFile(String docFile) {
    this.docFile = docFile;
    return this;
  }

   /**
   * docFile
   * @return docFile
  **/
  @ApiModelProperty(example = "sample file", value = "docFile")
  public String getDocFile() {
    return docFile;
  }

  public void setDocFile(String docFile) {
    this.docFile = docFile;
  }

  public SupportTicketDocument docName(String docName) {
    this.docName = docName;
    return this;
  }

   /**
   * docName
   * @return docName
  **/
  @ApiModelProperty(example = "sample document", required = true, value = "docName")
  public String getDocName() {
    return docName;
  }

  public void setDocName(String docName) {
    this.docName = docName;
  }

  public SupportTicketDocument docSize(Integer docSize) {
    this.docSize = docSize;
    return this;
  }

   /**
   * docSize
   * @return docSize
  **/
  @ApiModelProperty(example = "1500", value = "docSize")
  public Integer getDocSize() {
    return docSize;
  }

  public void setDocSize(Integer docSize) {
    this.docSize = docSize;
  }

  public SupportTicketDocument docType(String docType) {
    this.docType = docType;
    return this;
  }

   /**
   * docType
   * @return docType
  **/
  @ApiModelProperty(example = "documentType", value = "docType")
  public String getDocType() {
    return docType;
  }

  public void setDocType(String docType) {
    this.docType = docType;
  }

  public SupportTicketDocument urlPath(String urlPath) {
    this.urlPath = urlPath;
    return this;
  }

   /**
   * urlPath
   * @return urlPath
  **/
  @ApiModelProperty(example = "http://www.xyz.com/sample.pdf", value = "urlPath")
  public String getUrlPath() {
    return urlPath;
  }

  public void setUrlPath(String urlPath) {
    this.urlPath = urlPath;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    SupportTicketDocument supportTicketDocument = (SupportTicketDocument) o;
    return Objects.equals(this.docFile, supportTicketDocument.docFile) &&
        Objects.equals(this.docName, supportTicketDocument.docName) &&
        Objects.equals(this.docSize, supportTicketDocument.docSize) &&
        Objects.equals(this.docType, supportTicketDocument.docType) &&
        Objects.equals(this.urlPath, supportTicketDocument.urlPath);
  }

  @Override
  public int hashCode() {
    return Objects.hash(docFile, docName, docSize, docType, urlPath);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class SupportTicketDocument {\n");
    
    sb.append("    docFile: ").append(toIndentedString(docFile)).append("\n");
    sb.append("    docName: ").append(toIndentedString(docName)).append("\n");
    sb.append("    docSize: ").append(toIndentedString(docSize)).append("\n");
    sb.append("    docType: ").append(toIndentedString(docType)).append("\n");
    sb.append("    urlPath: ").append(toIndentedString(urlPath)).append("\n");
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

