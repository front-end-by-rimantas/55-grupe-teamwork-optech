import { pricingsection3Data } from "../../data/prising-Data/pricing-section3Data.js";

export function pricingsection3() {
       let cardspricingsection3HTML = '';
    
       for (let i = 0; i < 4; i++) {
          const pricingsection3 = pricingsection3Data[i];
          cardspricingsection3HTML  += `
                    <div class="pricingsec3">
                        <div class="prcsec3-inside">
                            <h5>${pricingsection3.h5}</h5>
                            <button class="fa fa-plus"></button>
                        </div>
                        <p>${pricingsection3.p}</p>
                    </div> `
       }

    let HTML =  `
        <div class="container back">
            <div class="row aboutus-sec5">
                <div class="col-12 sm-col-6 left-column-prcsec3">
                    <h1 class="title">Have any questions? here some answers</h1>
                    <p class="aboutus-section5-p">Each demo built with Teba will look different. You can customize almost anything in the appearance of your website with only</p>
                    <a href="#" class="btn">Ask Any Question</a>                  
                </div>
                <div class="col-12 sm-col-6 right-column-prcsec3">${cardspricingsection3HTML}</div>
            </div>
        </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}