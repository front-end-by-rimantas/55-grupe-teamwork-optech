export function checkoutsection2() {

    let HTML =  `
        <div class="container">
        <div class="row top-check2">
            <p class="fa fa-info-circle"> Have a coupon?</p>
            <a href="../shop/index.html">Click here to enter your code</a>
        </div>
        <div class="row checksec2">
            <div class="faq-sec35 col-12 col-lg-6">
                <h2 class="section-title">Billing Details</h2>
                <form class="form faqsec2">
                    <div class="form-row">
                        <div class="form-group">
                            <p>Firs name</p>
                            <label for="first-name"></label>
                            <input type="text" id="first-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Last name</p>
                            <label for="last-name"></label>
                            <input type="text" id="last-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Company name (optional)</p>
                            <label for="company-name"></label>
                            <input type="text" id="company-name" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Country / Region</p>
                            <label for="country"></label>
                            <input type="text" id="country" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Street address</p>
                            <label for="house-number"></label>
                            <input type="text" id="house-number" name="name" placeholder="House number and street name" required>
                            <label for="apartament"></label>
                            <input type="text" id="apartament" name="name" placeholder="Apartament, suite, uniq, etc.(optional)" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Town / City</p>
                            <label for="town"></label>
                            <input type="text" id="town" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>State</p>
                            <label for="state"></label>
                            <input type="text" id="state" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>ZIP Code</p>
                            <label for="zip-code"></label>
                            <input type="text" id="zip-code" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Phone</p>
                            <label for="phone"></label>
                            <input type="text" id="phone" name="name" required>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <p>Email address</p>
                            <label for="Email"></label>
                            <input type="text" id="email" email="email" maxlength="50"required>
                        </div>
                     </div>
                    <div class="form-row">
                        <div class="form-group">
                            <h2>Additional Information</h2>
                            <p>Order notes (optional)</p>
                            <label for="message"></label>
                            <textarea id="message" name="message" maxlength="1000" minlength="20" placeholder="Notes about your order, e.g. special notes for delivery" required ></textarea>
                        </div>
                     </div>
                </form>
            </div>
            <div class="faq-sec36 col-12 col-lg-6">
                <h2 class="section-title">Your Order</h2>
                <div class="right-faqsec25">
                    <p>Product</p>
                    <p>Subtotal</p>
                </div>
                <div class="right-faqsec26">
                    <p>Total</p>
                    <p>$0.00</p>
                </div>
                <div class="right-faqsec26">
                   <a>Cash on delivery</a>
                </div>
                <h3>Pay with cash upon delivery.</h3>
                <p class="right-faqp">Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>   
                <form class="form">
                    <div class="form-row">
                        <button type="submit">Send message</button>
                    </div>
                </form>
            </div>
        </div>    
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}