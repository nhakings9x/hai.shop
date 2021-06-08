import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";

export default class PaypalButton extends React.Component {
  render() {
    const onSuccess = (payment) => {
      this.props.tranSuccess(payment);
    };

    const onCancel = (data) => {
      console.log("The payment was cancelled!", data);
    };

    const onError = (err) => {
      console.log("Error!", err);
    };

    let env = "sandbox";
    let currency = "USD";
    let total = this.props.total;
    const client = {
      sandbox:
        "AfQZTDJru_beFjhuS4jB7QYS1rV1F6Qx8IYsPEmg15Z_WpvQXKrooOUFthUiiPjzWg_-By5-_nm2F7Ss",
      production: "YOUR-PRODUCTION-APP-ID",
    };
    let style = {
      size: "medium",
      color: "gold",
      shape: "rect",
      label: "checkout",
      tagline: false,
    };

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={total}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        style={style}
      />
    );
  }
}
