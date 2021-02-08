import React, { useEffect, useState } from "react";
import 'react-json-pretty/themes/monikai.css';
import JSONPretty from 'react-json-pretty';

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
        setPmDataVal(pmData)
        console.log(token);
        console.log(pmData)
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
                {/* <p className="t-text">For test accounts, use <span>4111111111111111</span> with any future dated expiry date and any three digit CVV. The tokenizer does not validate cards.</p> */}
                <p className="t-text">This is an example of the Billsby Card Tokenizer implemented in React, which you can use as the basis of your own projects</p>
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