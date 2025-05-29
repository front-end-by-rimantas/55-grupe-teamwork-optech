import { section8Data } from "../data/section8Data.js";

export function section8() {
   let cardsHTML = '';

   for (let i = 0; i < 3; i++) {
      const section = section8Data[i];
      cardsHTML += `
            <div class="cards">
                <img class="card-img" src="./img/section-8/${section.img}" alt="working people">
                <div class="card-text">
                    <p class="card-date">${section.date}</p>
                    <h5 class="card-title">${section.title}</h5>
                    <a href="#" class="card-btn">Learn more -></a>
                </div>
            </div>`
   }
let HTML =  `
    <div class="container">
        <div class="row">
            <div class="blog">
                <h2 class="blog-title">Recent blog &amp; articles about technology</h2>
                <div class="blog-btn">
                    <button type="submit">View all posts</button>
                </div>
            </div>
        </div>
        <div class="row">${cardsHTML}</div>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}

