// import { headerMenuData } from "../data/headerMenuData.js";

export function header(isMainPage = false) {
    const path = isMainPage ? './' : '../';

   const headerMenuData = [
        { href: `${path}`, text: 'Home'},
        { href: `${path}`,
          text: `Pages`,
            sub1Menu: [
            { href: `${path}aboutUs/`, text: 'About Us'},
            { href: `${path}pricing/`, text: 'Pricing'},
            { href: `${path}service/`,
              text: `Service`,
              sub2Menu: [
                    { href: `${path}service/`, text: 'Service'},
                    { href: `${path}service-details/`, text: 'Service Details'},
                   ]},
            { href: ``, text: 'Team'},
            { href: ``, text: 'Utility'},
            { href: ``, text: 'Shop'},
             ]},
        { href: ``, text: 'Portfolio'},
        { href: ``, text: 'Blog'},
        { href: ``, text: 'Contact'},
    ];

   let navHTML = '';

   for (const link of headerMenuData) {
    
    if (link.sub1Menu) {
        let sub1HTML = '';

        for (const sub1 of link.sub1Menu) {
            if (sub1.sub2Menu) {
                let sub2HTML = '';
                
                    for (const sub2 of sub1.sub2Menu) {
                    sub2HTML += `<a class="link sub2" href="${sub2.href}">${sub2.text}</a>`;
                }

                sub1HTML += `
                    <div class="sub1-with-sub2">
                        <a class="link sub1" href="${sub1.href}">${sub1.text}</a>
                        <div class="submenu sub2menu">${sub2HTML}</div>
                    </div>
                `;
            } else {
                sub1HTML += `<a class="link sub1" href="${sub1.href}">${sub1.text}</a>`;
            }
        }

        navHTML += `
            <div class="has-submenu">
                <a class="link main" href="${link.href}">${link.text}<i class="fa fa-caret-down"></i></a>
                <div class="submenu sub1menu">${sub1HTML}</div>
            </div>
        `;
    } else {
        navHTML += `<a class="link main" href="${link.href}">${link.text}</a>`;
    }
}
 

    const HTML = `
    <div class="container1 header-row header-white">
         <div class="row1">
            <div class="top-header">
                <div class="left-row-topheader">
                        <p class="fa fa-map-marker "> 2774 Oak Drive, Plattsburgh, New York</p>
                </div>
                <div class="right-row-topheader">
                      <a href="#" class="fa fa-phone "> 518-564-3200</a>
                      <a href="#" class="fa fa-envelope-o " > tecbolt@example.com</a>
                </div>
            </div>
         </div>
    </div>
    <div class="container1 main-header header-white-btm">
        <div class="row1">
          <div class="botm-part">
            <div class="left-row-header">
                <img src="${path}img/Logo-main.webp" alt="logo">
                <nav class="submeniu" >${navHTML}</nav>
            </div>
            <div class="right-row-header">
                <a href="#" class="fa fa-search"></a>
                <a href="${path}">Get in Touch</a>
                <div class="burger fa fa-bars"></div>
                </div>
          </div>
        </div>
    </div>
    <div class="mobile-main-header">
        <img src="${path}img/Logo-main.webp" alt="logo">
        <i class="fa fa-times close"></i>
        <nav>${navHTML}</nav>
    </div>`

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);

    const hamburgerDOM = document.querySelector('.burger');
    const mobileHeaderDOM = document.querySelector('.mobile-main-header')
    const closeDOM = document.querySelector('.close')


    hamburgerDOM.addEventListener('click',() =>{
    mobileHeaderDOM.classList.add('show');
    });

    closeDOM.addEventListener('click',() =>{
    mobileHeaderDOM.classList.remove('show');
    });

    window.addEventListener('keydown',event => {
        if(event.key === 'Escape')
    mobileHeaderDOM.classList.remove('show')    
    })
}
