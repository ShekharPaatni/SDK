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
import io.swagger.client.model.OrderTrackPayload;
import java.io.IOException;
import java.util.UUID;
import org.threeten.bp.LocalDate;

/**
 * CreateOrderTrackResponse
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-08T13:59:38.361-04:00")
public class CreateOrderTrackResponse {
  @SerializedName("order_id")
  private UUID orderId = null;

  @SerializedName("order_status_id")
  private UUID orderStatusId = null;

  @SerializedName("date")
  private LocalDate date = null;

  @SerializedName("commission")
  private Double commission = null;

  @SerializedName("external_track_id")
  private UUID externalTrackId = null;

  @SerializedName("fee")
  private Double fee = null;

  @SerializedName("price")
  private Double price = null;

  @SerializedName("quantity")
  private Double quantity = null;

  @SerializedName("metadata")
  private Object metadata = null;

  @SerializedName("id")
  private UUID id = null;

  @SerializedName("create_date")
  private String createDate = null;

  public CreateOrderTrackResponse orderId(UUID orderId) {
    this.orderId = orderId;
    return this;
  }

   /**
   * The ID of the order that the to which order track record belongs
   * @return orderId
  **/
  @ApiModelProperty(required = true, value = "The ID of the order that the to which order track record belongs")
  public UUID getOrderId() {
    return orderId;
  }

  public void setOrderId(UUID orderId) {
    this.orderId = orderId;
  }

  public CreateOrderTrackResponse orderStatusId(UUID orderStatusId) {
    this.orderStatusId = orderStatusId;
    return this;
  }

   /**
   * The ID of the order status currently assigned to the order track record
   * @return orderStatusId
  **/
  @ApiModelProperty(required = true, value = "The ID of the order status currently assigned to the order track record")
  public UUID getOrderStatusId() {
    return orderStatusId;
  }

  public void setOrderStatusId(UUID orderStatusId) {
    this.orderStatusId = orderStatusId;
  }

  public CreateOrderTrackResponse date(LocalDate date) {
    this.date = date;
    return this;
  }

   /**
   * Date of the order track record
   * @return date
  **/
  @ApiModelProperty(required = true, value = "Date of the order track record")
  public LocalDate getDate() {
    return date;
  }

  public void setDate(LocalDate date) {
    this.date = date;
  }

  public CreateOrderTrackResponse commission(Double commission) {
    this.commission = commission;
    return this;
  }

   /**
   * Commission earned by the agent on the order
   * @return commission
  **/
  @ApiModelProperty(value = "Commission earned by the agent on the order")
  public Double getCommission() {
    return commission;
  }

  public void setCommission(Double commission) {
    this.commission = commission;
  }

  public CreateOrderTrackResponse externalTrackId(UUID externalTrackId) {
    this.externalTrackId = externalTrackId;
    return this;
  }

   /**
   * The external ID used by the agent or other party executing the order to track the order ticket (if provided)
   * @return externalTrackId
  **/
  @ApiModelProperty(value = "The external ID used by the agent or other party executing the order to track the order ticket (if provided)")
  public UUID getExternalTrackId() {
    return externalTrackId;
  }

  public void setExternalTrackId(UUID externalTrackId) {
    this.externalTrackId = externalTrackId;
  }

  public CreateOrderTrackResponse fee(Double fee) {
    this.fee = fee;
    return this;
  }

   /**
   * Total fees associated with the order
   * @return fee
  **/
  @ApiModelProperty(value = "Total fees associated with the order")
  public Double getFee() {
    return fee;
  }

  public void setFee(Double fee) {
    this.fee = fee;
  }

  public CreateOrderTrackResponse price(Double price) {
    this.price = price;
    return this;
  }

   /**
   * Execution price at which the securities in the order were bought or sold
   * @return price
  **/
  @ApiModelProperty(value = "Execution price at which the securities in the order were bought or sold")
  public Double getPrice() {
    return price;
  }

  public void setPrice(Double price) {
    this.price = price;
  }

  public CreateOrderTrackResponse quantity(Double quantity) {
    this.quantity = quantity;
    return this;
  }

   /**
   * Quantity of securities that were bought or sold
   * @return quantity
  **/
  @ApiModelProperty(value = "Quantity of securities that were bought or sold")
  public Double getQuantity() {
    return quantity;
  }

  public void setQuantity(Double quantity) {
    this.quantity = quantity;
  }

  public CreateOrderTrackResponse metadata(Object metadata) {
    this.metadata = metadata;
    return this;
  }

   /**
   * Custom information associated with the order tracking record in the format key:value
   * @return metadata
  **/
  @ApiModelProperty(value = "Custom information associated with the order tracking record in the format key:value")
  public Object getMetadata() {
    return metadata;
  }

  public void setMetadata(Object metadata) {
    this.metadata = metadata;
  }

  public CreateOrderTrackResponse id(UUID id) {
    this.id = id;
    return this;
  }

   /**
   * ID of the order tracking record
   * @return id
  **/
  @ApiModelProperty(value = "ID of the order tracking record")
  public UUID getId() {
    return id;
  }

  public void setId(UUID id) {
    this.id = id;
  }

  public CreateOrderTrackResponse createDate(String createDate) {
    this.createDate = createDate;
    return this;
  }

   /**
   * Datetime the order tracking record was created
   * @return createDate
  **/
  @ApiModelProperty(value = "Datetime the order tracking record was created")
  public String getCreateDate() {
    return createDate;
  }

  public void setCreateDate(String createDate) {
    this.createDate = createDate;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    CreateOrderTrackResponse createOrderTrackResponse = (CreateOrderTrackResponse) o;
    return Objects.equals(this.orderId, createOrderTrackResponse.orderId) &&
        Objects.equals(this.orderStatusId, createOrderTrackResponse.orderStatusId) &&
        Objects.equals(this.date, createOrderTrackResponse.date) &&
        Objects.equals(this.commission, createOrderTrackResponse.commission) &&
        Objects.equals(this.externalTrackId, createOrderTrackResponse.externalTrackId) &&
        Objects.equals(this.fee, createOrderTrackResponse.fee) &&
        Objects.equals(this.price, createOrderTrackResponse.price) &&
        Objects.equals(this.quantity, createOrderTrackResponse.quantity) &&
        Objects.equals(this.metadata, createOrderTrackResponse.metadata) &&
        Objects.equals(this.id, createOrderTrackResponse.id) &&
        Objects.equals(this.createDate, createOrderTrackResponse.createDate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderId, orderStatusId, date, commission, externalTrackId, fee, price, quantity, metadata, id, createDate);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class CreateOrderTrackResponse {\n");
    
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    orderStatusId: ").append(toIndentedString(orderStatusId)).append("\n");
    sb.append("    date: ").append(toIndentedString(date)).append("\n");
    sb.append("    commission: ").append(toIndentedString(commission)).append("\n");
    sb.append("    externalTrackId: ").append(toIndentedString(externalTrackId)).append("\n");
    sb.append("    fee: ").append(toIndentedString(fee)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    quantity: ").append(toIndentedString(quantity)).append("\n");
    sb.append("    metadata: ").append(toIndentedString(metadata)).append("\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    createDate: ").append(toIndentedString(createDate)).append("\n");
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

