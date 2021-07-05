/*
 * Hydrogen Proton API
 * Financial engineering module of Hydrogen Atom
 *
 * OpenAPI spec version: 1.9.1
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.proton.model;

import java.util.Objects;

import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.UUID;

/**
 * OrderRebalanceRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2021-04-28T09:20:08.129Z")
public class OrderRebalanceRequest {
  @SerializedName("non_fractional")
  private Boolean nonFractional = false;

  /**
   * Gets or Sets orderScope
   */
  @JsonAdapter(OrderScopeEnum.Adapter.class)
  public enum OrderScopeEnum {
    ALL("all"),
    
    BUY_ONLY("buy_only"),
    
    SELL_ONLY("sell_only");

    private String value;

    OrderScopeEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static OrderScopeEnum fromValue(String text) {
      for (OrderScopeEnum b : OrderScopeEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<OrderScopeEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final OrderScopeEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public OrderScopeEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return OrderScopeEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("order_scope")
  private OrderScopeEnum orderScope = null;

  @SerializedName("buy_threshold")
  private Float buyThreshold = 0.0f;

  @SerializedName("commit_orders")
  private Boolean commitOrders = true;

  @SerializedName("account_id")
  private UUID accountId = null;

  @SerializedName("port_threshold")
  private Float portThreshold = 0.0f;

  @SerializedName("use_cash_available")
  private Boolean useCashAvailable = false;

  @SerializedName("use_strategic")
  private Boolean useStrategic = false;

  @SerializedName("sell_transaction_code_id")
  private UUID sellTransactionCodeId = null;

  @SerializedName("buy_transaction_code_id")
  private UUID buyTransactionCodeId = null;

  @SerializedName("cash_portfolio_id")
  private UUID cashPortfolioId = null;

  @SerializedName("restrictions_on")
  private Boolean restrictionsOn = false;

  @SerializedName("sell_threshold")
  private Float sellThreshold = 0.0f;

  @SerializedName("portfolio_id")
  private UUID portfolioId = null;

  public OrderRebalanceRequest nonFractional(Boolean nonFractional) {
    this.nonFractional = nonFractional;
    return this;
  }

   /**
   * Get nonFractional
   * @return nonFractional
  **/
  @ApiModelProperty(value = "")
  public Boolean isNonFractional() {
    return nonFractional;
  }

  public void setNonFractional(Boolean nonFractional) {
    this.nonFractional = nonFractional;
  }

  public OrderRebalanceRequest orderScope(OrderScopeEnum orderScope) {
    this.orderScope = orderScope;
    return this;
  }

   /**
   * Get orderScope
   * @return orderScope
  **/
  @ApiModelProperty(required = true, value = "")
  public OrderScopeEnum getOrderScope() {
    return orderScope;
  }

  public void setOrderScope(OrderScopeEnum orderScope) {
    this.orderScope = orderScope;
  }

  public OrderRebalanceRequest buyThreshold(Float buyThreshold) {
    this.buyThreshold = buyThreshold;
    return this;
  }

   /**
   * Get buyThreshold
   * minimum: 0
   * @return buyThreshold
  **/
  @ApiModelProperty(value = "")
  public Float getBuyThreshold() {
    return buyThreshold;
  }

  public void setBuyThreshold(Float buyThreshold) {
    this.buyThreshold = buyThreshold;
  }

  public OrderRebalanceRequest commitOrders(Boolean commitOrders) {
    this.commitOrders = commitOrders;
    return this;
  }

   /**
   * Get commitOrders
   * @return commitOrders
  **/
  @ApiModelProperty(value = "")
  public Boolean isCommitOrders() {
    return commitOrders;
  }

  public void setCommitOrders(Boolean commitOrders) {
    this.commitOrders = commitOrders;
  }

  public OrderRebalanceRequest accountId(UUID accountId) {
    this.accountId = accountId;
    return this;
  }

   /**
   * Get accountId
   * @return accountId
  **/
  @ApiModelProperty(value = "")
  public UUID getAccountId() {
    return accountId;
  }

  public void setAccountId(UUID accountId) {
    this.accountId = accountId;
  }

  public OrderRebalanceRequest portThreshold(Float portThreshold) {
    this.portThreshold = portThreshold;
    return this;
  }

   /**
   * Get portThreshold
   * minimum: 0
   * @return portThreshold
  **/
  @ApiModelProperty(value = "")
  public Float getPortThreshold() {
    return portThreshold;
  }

  public void setPortThreshold(Float portThreshold) {
    this.portThreshold = portThreshold;
  }

  public OrderRebalanceRequest useCashAvailable(Boolean useCashAvailable) {
    this.useCashAvailable = useCashAvailable;
    return this;
  }

   /**
   * Get useCashAvailable
   * @return useCashAvailable
  **/
  @ApiModelProperty(value = "")
  public Boolean isUseCashAvailable() {
    return useCashAvailable;
  }

  public void setUseCashAvailable(Boolean useCashAvailable) {
    this.useCashAvailable = useCashAvailable;
  }

  public OrderRebalanceRequest useStrategic(Boolean useStrategic) {
    this.useStrategic = useStrategic;
    return this;
  }

   /**
   * Get useStrategic
   * @return useStrategic
  **/
  @ApiModelProperty(value = "")
  public Boolean isUseStrategic() {
    return useStrategic;
  }

  public void setUseStrategic(Boolean useStrategic) {
    this.useStrategic = useStrategic;
  }

  public OrderRebalanceRequest sellTransactionCodeId(UUID sellTransactionCodeId) {
    this.sellTransactionCodeId = sellTransactionCodeId;
    return this;
  }

   /**
   * Get sellTransactionCodeId
   * @return sellTransactionCodeId
  **/
  @ApiModelProperty(value = "")
  public UUID getSellTransactionCodeId() {
    return sellTransactionCodeId;
  }

  public void setSellTransactionCodeId(UUID sellTransactionCodeId) {
    this.sellTransactionCodeId = sellTransactionCodeId;
  }

  public OrderRebalanceRequest buyTransactionCodeId(UUID buyTransactionCodeId) {
    this.buyTransactionCodeId = buyTransactionCodeId;
    return this;
  }

   /**
   * Get buyTransactionCodeId
   * @return buyTransactionCodeId
  **/
  @ApiModelProperty(value = "")
  public UUID getBuyTransactionCodeId() {
    return buyTransactionCodeId;
  }

  public void setBuyTransactionCodeId(UUID buyTransactionCodeId) {
    this.buyTransactionCodeId = buyTransactionCodeId;
  }

  public OrderRebalanceRequest cashPortfolioId(UUID cashPortfolioId) {
    this.cashPortfolioId = cashPortfolioId;
    return this;
  }

   /**
   * Get cashPortfolioId
   * @return cashPortfolioId
  **/
  @ApiModelProperty(value = "")
  public UUID getCashPortfolioId() {
    return cashPortfolioId;
  }

  public void setCashPortfolioId(UUID cashPortfolioId) {
    this.cashPortfolioId = cashPortfolioId;
  }

  public OrderRebalanceRequest restrictionsOn(Boolean restrictionsOn) {
    this.restrictionsOn = restrictionsOn;
    return this;
  }

   /**
   * Get restrictionsOn
   * @return restrictionsOn
  **/
  @ApiModelProperty(value = "")
  public Boolean isRestrictionsOn() {
    return restrictionsOn;
  }

  public void setRestrictionsOn(Boolean restrictionsOn) {
    this.restrictionsOn = restrictionsOn;
  }

  public OrderRebalanceRequest sellThreshold(Float sellThreshold) {
    this.sellThreshold = sellThreshold;
    return this;
  }

   /**
   * Get sellThreshold
   * minimum: 1
   * @return sellThreshold
  **/
  @ApiModelProperty(value = "")
  public Float getSellThreshold() {
    return sellThreshold;
  }

  public void setSellThreshold(Float sellThreshold) {
    this.sellThreshold = sellThreshold;
  }

  public OrderRebalanceRequest portfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
    return this;
  }

   /**
   * Get portfolioId
   * @return portfolioId
  **/
  @ApiModelProperty(value = "")
  public UUID getPortfolioId() {
    return portfolioId;
  }

  public void setPortfolioId(UUID portfolioId) {
    this.portfolioId = portfolioId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    OrderRebalanceRequest orderRebalanceRequest = (OrderRebalanceRequest) o;
    return Objects.equals(this.nonFractional, orderRebalanceRequest.nonFractional) &&
        Objects.equals(this.orderScope, orderRebalanceRequest.orderScope) &&
        Objects.equals(this.buyThreshold, orderRebalanceRequest.buyThreshold) &&
        Objects.equals(this.commitOrders, orderRebalanceRequest.commitOrders) &&
        Objects.equals(this.accountId, orderRebalanceRequest.accountId) &&
        Objects.equals(this.portThreshold, orderRebalanceRequest.portThreshold) &&
        Objects.equals(this.useCashAvailable, orderRebalanceRequest.useCashAvailable) &&
        Objects.equals(this.useStrategic, orderRebalanceRequest.useStrategic) &&
        Objects.equals(this.sellTransactionCodeId, orderRebalanceRequest.sellTransactionCodeId) &&
        Objects.equals(this.buyTransactionCodeId, orderRebalanceRequest.buyTransactionCodeId) &&
        Objects.equals(this.cashPortfolioId, orderRebalanceRequest.cashPortfolioId) &&
        Objects.equals(this.restrictionsOn, orderRebalanceRequest.restrictionsOn) &&
        Objects.equals(this.sellThreshold, orderRebalanceRequest.sellThreshold) &&
        Objects.equals(this.portfolioId, orderRebalanceRequest.portfolioId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(nonFractional, orderScope, buyThreshold, commitOrders, accountId, portThreshold, useCashAvailable, useStrategic, sellTransactionCodeId, buyTransactionCodeId, cashPortfolioId, restrictionsOn, sellThreshold, portfolioId);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class OrderRebalanceRequest {\n");
    
    sb.append("    nonFractional: ").append(toIndentedString(nonFractional)).append("\n");
    sb.append("    orderScope: ").append(toIndentedString(orderScope)).append("\n");
    sb.append("    buyThreshold: ").append(toIndentedString(buyThreshold)).append("\n");
    sb.append("    commitOrders: ").append(toIndentedString(commitOrders)).append("\n");
    sb.append("    accountId: ").append(toIndentedString(accountId)).append("\n");
    sb.append("    portThreshold: ").append(toIndentedString(portThreshold)).append("\n");
    sb.append("    useCashAvailable: ").append(toIndentedString(useCashAvailable)).append("\n");
    sb.append("    useStrategic: ").append(toIndentedString(useStrategic)).append("\n");
    sb.append("    sellTransactionCodeId: ").append(toIndentedString(sellTransactionCodeId)).append("\n");
    sb.append("    buyTransactionCodeId: ").append(toIndentedString(buyTransactionCodeId)).append("\n");
    sb.append("    cashPortfolioId: ").append(toIndentedString(cashPortfolioId)).append("\n");
    sb.append("    restrictionsOn: ").append(toIndentedString(restrictionsOn)).append("\n");
    sb.append("    sellThreshold: ").append(toIndentedString(sellThreshold)).append("\n");
    sb.append("    portfolioId: ").append(toIndentedString(portfolioId)).append("\n");
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

