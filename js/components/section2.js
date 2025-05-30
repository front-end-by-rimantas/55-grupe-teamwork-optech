export function section2() {

    let HTML =  `
    <div class="container back">
                <div class="row">
                    <div class="col-4 trio">
                       <img class="icon" src="./img/icon-1.png" alt="icon1">
                          <div class="trio-text">
                            <h3 class="trio-title">Highly Expert Team</h3>
                            <p>We provide the most responsive and functional IT design</p>
                          </div>
                    </div>
                    <div class="col-4 trio">
                       <img class="icon" src="./img/icon-2.png" alt="icon2">
                          <div class="trio-text">
                            <h3 class="trio-title">24/7 Customer Service</h3>
                            <p>We provide the most responsive and functional IT design</p>
                          </div>
                    </div>
                    <div class="col-4 trio">
                       <img class="icon" src="./img/icon-3.png" alt="icon3">
                          <div class="trio-text">
                            <h3 class="trio-title">Competitive Pricing</h3>
                            <p>We provide the most responsive and functional IT design</p>
                          </div>
                    </div>
                </div>
                <div class="row section2">
                    <div class="col-7">
                      <img class="col-10" src="./img/thumb1.webp" alt="thumb1">
                        <div>
                           <img class="col-6 foto1" src="./img/thumb2.webp" alt="thumb2">
                           <div>
                              <img class="col-3 foto2" src="./img/shape1.png" alt="taskeliai">
                           </div>
                           <div>
                              <img class="foto3" src="./img/shape2.png" alt="taskeliai">
                           </div>
                        </div>
                    </div>
                    <div class="col-6 right-section">
                        <h1 class="title">More than 25+ years we provide IT solutions</h1>
                        <h3 class="subtitle">During this time, we’ve built a reputation for excellent clients satisfaction as evidenced by our</h3>
                        <p class="text">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only a few clicks. Each demo built with Teba will look different.</p>
                        <div>
                            <button class="btn">More About Us</button>
                        </div>
                    </div>
                </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}