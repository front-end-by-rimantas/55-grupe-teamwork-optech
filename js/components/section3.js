export function section3() {
    
let HTML = `
<div class="container bg-container">
        <div class="row">
            <h1 class="title col-12 col-lg-6 m-md-1 m-lg-3">Our awesome services to give you success</h1>
        </div>
        <div class="row row-cards">
            <div class="column">
                <div class="icons">
                    <img src="./img/section-3/cyber-security.png" alt="">
                </div>
                <h2 class="clm-title">Cyber Security Solutions</h2>
                <p class="clm-p">Developing a comprehensive IT strategy that aligns.</p>
                <!-- reikia atskiro divo fontawesome rodyklei -->
                <div class="clm-a">Learn More</div>
                <!-- <a class="clm-a" href="#">Learn More</a> -->
            </div>

            <div class="column">
                <div class="icons">
                    <img src="./img/section-3/data-tracking.png" alt="">
                </div>
                <h2 class="clm-title">Data Tracking Security</h2>
                <p class="clm-p">Developing a comprehensive IT strategy that aligns.</p>
                <div class="clm-a">Learn More</div>
            </div>

            <div class="column">
                <div class="icons">
                    <img src="./img/section-3/wrench.png" alt="">
                </div>
                <h2 class="clm-title">IT Management Services</h2>
                <p class="clm-p">Developing a comprehensive IT strategy that aligns.</p>
                <div class="clm-a">Learn More</div>
            </div>

            <div class="column">
                <div class="icons">
                    <img src="./img/section-3/UI-UX.png" alt="">
                </div>
                <!-- &amp -->
                <h2 class="clm-title">UI/UX &amp Branding Identity</h2>
                <p class="clm-p">Developing a comprehensive IT strategy that aligns.</p>
                <div class="clm-a">Learn More</div>
            </div>

            <div class="column">
                <div class="icons">
                    <img src="./img/section-3/Web.png" alt="">
                </div>
                <h2 class="clm-title">Web & Mobile App Development</h2>
                <p class="clm-p">Developing a comprehensive IT strategy that aligns.</p>
                <div class="clm-a">Learn More</div>
            </div>
            `;

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
};