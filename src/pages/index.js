import React, { useEffect, useRef, useState } from "react";
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';

const object = [
  {
    token: "JElCxYaL2M0K6HauQ9t57HnKhTF", 
    created_at: "2021-02-03T18:02:03Z", 
    updated_at: "2021-02-03T18:02:03Z", 
    email: null, 
    data: null,
  },
  {
    token: "JElCxYaL2M0K6HauQ9t57HnKhTF", 
    created_at: "2021-02-03T18:02:03Z", 
    updated_at: "2021-02-03T18:02:03Z",
    email: null,
    data: null,
    storage_state: "cached",
    test: true,
    metadata: null,
    callback_url: null,
    last_four_digits: "1111",
    first_six_digits: "411111",
    card_type: "visa",
    first_name: "Morgan",
    last_name: "Howson",
    month: 2,
    year: 2026,
    address1: null,
    address2: null,
    city: null,
    state: null,
    zip: null,
    country: null,
    phone_number: null,
    company: null,
    full_name: "Morgan Howson",
    eligible_for_card_updater: true,
    shipping_address1: null,
    shipping_address2: null,
    shipping_city: null,
    shipping_state: null,
    shipping_zip: null,
    shipping_country: null,
    shipping_phone_number: null,
    payment_method_type: "credit_card",
    errors: Array(0),
    fingerprint: "e3cef43464fc832f6e04f187df25af497994",
    verification_value: "XXX",
    number: "XXXX-XXXX-XXXX-1111"
  }
]

const Index = () => {
  const [pmDataVal, setPmDataVal] = useState()
  const billsbyTokens = window.billsbyTokens;
  
  useEffect(() => {
    if(billsbyTokens) {
      billsbyTokens.init("billsby-number", "billsby-cvv");
  
      billsbyTokens.on("ready", function () {
        const submitButton = document.getElementById("submit-button");
        submitButton.disabled = false;
      });
  
      billsbyTokens.on("errors", function (errors) {
        for (var i = 0; i < errors.length; i++) {
          var error = errors[i];
          console.log(error);
        }
      });
  
      billsbyTokens.on("paymentMethod", function (token, pmData) {
        // refVal.current.attr('data', pmData)
        // $('#json-pretty').attr('data', pmData)
        setPmDataVal(pmData)
        console.log(token);
        console.log(pmData)
        // pmDataVal = pmData
      });
    }
  }, []);

  const submitPaymentForm = (evt) => {
    evt.preventDefault();
    const requiredFields = {};
    // Get required, non-sensitive, values from host page
    requiredFields["full_name"] = document.getElementById("full_name").value;
    requiredFields["month"] = document.getElementById("month").value;
    requiredFields["year"] = document.getElementById("year").value;

    billsbyTokens.tokenizeCreditCard(requiredFields);
  };

  return (
    <main className="index">
      <div className="container">
        <div className="content">
          <div className="form-wrap">
            <form id="payment-form" onSubmit={submitPaymentForm}>
              <input
                type="hidden"
                name="payment_method_token"
                id="payment_method_token"
              />
              <div className="form-container">
                <label className="form-label t-title" htmlFor="full_name">Name</label>
                <div className="input-wrap">
                  <input id="full_name" className="form-input" name="full_name" type="text" placeholder="Full Name" />
                </div>
              </div>
              <div className="form-container">
                <label className="form-label t-title">Credit Card Number</label>
                <div className="input-wrap">
                  {/* <span className="custom-placeholder">XXXX XXXX XXXX XXXX</span> */}
                  <div id="billsby-number" className="form-input custom-input"></div>
                </div>
              </div>
              <div className="form-container">
                <label className="form-label t-title" htmlFor="month">Expiration Date</label>
                <div className="input-wrap dual-form">
                  <input id="month" className="form-input" name="month" type="text" maxLength={2} placeholder="XX" />
                  <input id="year" className="form-input" name="year" type="text" maxLength={4} placeholder="XXXX" />
                </div>
              </div>
              <div className="form-container">
                <label className="form-label t-title">CVV</label>
                <div className="input-wrap">
                  <div id="billsby-cvv" className="form-input custom-input"></div>
                </div>
              </div>
              <div className="reminder-wrap">
                <p className="t-text">For test accounts, use <span>4111111111111111</span> with any future dated expiry date and any three digit CVV. The tokenizer does not validate cards.</p>
              </div>
              <input id="submit-button" className="btn-orange w-100" type="submit" value="Submit and tokenize" disabled />
            </form>
          </div>
        </div>
      </div>
      <div className="console-wrap">
        <div className="console-header">
          <h6 className="t-title">Console</h6>
        </div>
        <div className="console-body">
          <JSONPretty id="json-pretty" data={pmDataVal}></JSONPretty>
        </div>
      </div>
    </main>
  );
}

export default Index