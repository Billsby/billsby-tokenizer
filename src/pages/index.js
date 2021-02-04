import React from "react";

// const object = [
//   {
//     token: "JElCxYaL2M0K6HauQ9t57HnKhTF", 
//     created_at: "2021-02-03T18:02:03Z", 
//     updated_at: "2021-02-03T18:02:03Z", 
//     email: null, 
//     data: null,
//   },
//   {
//     token: "JElCxYaL2M0K6HauQ9t57HnKhTF", 
//     created_at: "2021-02-03T18:02:03Z", 
//     updated_at: "2021-02-03T18:02:03Z",
//     email: null,
//     data: null,
//     storage_state: "cached",
//     test: true,
//     metadata: null,
//     callback_url: null,
//     last_four_digits: "1111",
//     first_six_digits: "411111",
//     card_type: "visa",
//     first_name: "Morgan",
//     last_name: "Howson",
//     month: 2,
//     year: 2026,
//     address1: null,
//     address2: null,
//     city: null,
//     state: null,
//     zip: null,
//     country: null,
//     phone_number: null,
//     company: null,
//     full_name: "Morgan Howson",
//     eligible_for_card_updater: true,
//     shipping_address1: null,
//     shipping_address2: null,
//     shipping_city: null,
//     shipping_state: null,
//     shipping_zip: null,
//     shipping_country: null,
//     shipping_phone_number: null,
//     payment_method_type: "credit_card",
//     errors: Array(0),
//     fingerprint: "e3cef43464fc832f6e04f187df25af497994",
//     verification_value: "XXX",
//     number: "XXXX-XXXX-XXXX-1111"
//   }
// ]

const Index = () => (
  <main className="index">
    <div className="container">
      <div className="content">
        <div className="form-wrap">
          <form>
            <div className="form-container">
              <label className="form-label t-title" for="fullName">Name</label>
              <div className="input-wrap">
                <input id="fullName" class="form-input" type="text" placeholder="Full Name" />
              </div>
            </div>
            <div className="form-container">
              <label className="form-label t-title" for="cardNumber">Credit Card Number</label>
              <div className="input-wrap">
                <input id="cardNumber" class="form-input" type="number" placeholder="XXXX XXXX XXXX XXXX" />
              </div>
            </div>
            <div className="form-container">
              <label className="form-label t-title" for="expires">Expires</label>
              <div className="input-wrap dual-form">
                <input id="expires" class="form-input" type="number" placeholder="XX" />
                <input id="expires1" class="form-input" type="number" placeholder="XX" />
              </div>
            </div>
            <div className="form-container">
              <label className="form-label t-title" for="cvv">CVV</label>
              <div className="input-wrap">
                <input id="cvv" class="form-input" type="number" placeholder="XXX" />
              </div>
            </div>
            <div className="reminder-wrap">
              <p className="t-text">For test accounts, use <span>4111111111111111</span> with any future dated expiry date and any three digit CVV. The tokenizer does not validate cards.</p>
            </div>
            <button className="btn-orange w-100">Submit and tokenize</button>
          </form>
        </div>
      </div>
    </div>
    <div className="console-wrap">
      <div className="console-header">
        <h6 className="t-title">Console</h6>
      </div>
      <div className="console-body">
        {/* {
          object.map((item, i)=> (
            <p key={i}>
              token: "{item.token}",
              <br/>
              created_at: "{item.created_at}",
              <br/>
              updated_at: "{item.updated_at}",
              <br/>
              email: {item.email === 'null' ? 'null' : ''},
              <br/>
              data: {item.data === 'null' ? 'null': ''}
            </p>
          ))
        } */}
        <p>
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </p>
      </div>
    </div>
  </main>
)

export default Index